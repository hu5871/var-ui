import { Ref, ref } from "vue";
import getRect from './getRect';
import { CheckNetwork, TransfromDateObject, Utils } from "../../types";

export interface GetWindowSize {
	width: number;
	height: number;
	top: number | undefined;
	statusBarHeight: number | undefined;
}

export async function copyText(text: string, callback: (success: boolean, result?: any) => void) {
	// #ifndef H5
	uni.setClipboardData({
		data: text,//要被复制的内容
		success: () => {//复制成功的回调函数
			typeof callback === "function" ? callback(true) : ''
		},
		fail(result) {
			typeof callback === "function" ? callback(false, result) : ''
		},
	});
	// #endif
	// #ifdef H5 
	try {
		await navigator.clipboard.writeText(text);
		typeof callback === "function" ? callback(true) : ''
	} catch (error) {
		typeof callback === "function" ? callback(false, error) : ''
	}
	// #endif
}

let timeout: number | null = null
/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return 
 */
export function debounce(func:()=>any, wait = 500, immediate = false): void {
    // 清除定时器
    if (timeout !== null) clearTimeout(timeout)
    // 立即执行，此类情况一般用不到
    if (immediate) {
        const callNow = !timeout
        timeout = setTimeout(() => {
            timeout = null
        }, wait)
        if (callNow) typeof func === 'function' && func()
    } else {
        // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
        timeout = setTimeout(() => {
            typeof func === 'function' && func()
        }, wait)
    }
}


let timer:undefined |number
let flag:undefined|boolean
/**
 * 在一定时间内，只能触发一次
 *
 * @param {Function} func 要执行的回调函数
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
export function throttle(func:()=>{}, wait = 500, immediate = true) {
    if (immediate) {
        if (!flag) {
            flag = true
            // 如果是立即执行，则在wait毫秒内开始时执行
            typeof func === 'function' && func()
            timer = setTimeout(() => {
                flag = false
            }, wait)
        }
    } else if (!flag) {
        flag = true
        // 如果是非立即执行，则在wait毫秒内的结束处执行
        timer = setTimeout(() => {
            flag = false
            typeof func === 'function' && func()
        }, wait)
    }
}



export function getWindowSize(): Ref<GetWindowSize> {
	const sys = uni.getSystemInfoSync();
	return ref({
		width: sys.windowWidth,
		height: sys.windowHeight + sys.windowTop,
		top: sys?.safeArea?.top,
		statusBarHeight: sys?.safeAreaInsets?.top
	})
}
export function toPx(num: number | string) {
	if (typeof num === "string") {
		if (num.indexOf('px') !== -1) {
			if (num.indexOf('rpx') !== -1) { // "10rpx"
				num = num.replace('rpx', '');
			} else if (num.indexOf('upx') !== -1) { // "10upx"
				num = num.replace('upx', '');
			} else { // "10px"
				return Number(num.replace('px', ''))
			}
		} else if (num.indexOf('%') !== -1) {
			// 传百分比,则相对于windowHeight,传"10%"则等于windowHeight的10%
			let rate = Number(num.replace("%", "")) / 100
			const size = getWindowSize()
			return size.value.height * rate
		}
	}
	return num ? uni.upx2px(Number(num)) : 0
}

const cacheUid: number[] = []
export function genUid(length = 12) {
	let uid = Number(Number(Math.random().toString().substr(3, length) + Date.now()).toString(8));
	if (cacheUid.includes(uid)) {
		uid = genUid(length)
	}else{
		cacheUid.push(uid)
	}
	return uid
}
export function deepClone(obj: any) {
	if ([null, undefined, NaN, false].includes(obj)) return obj
	if (typeof obj !== 'object' && typeof obj !== 'function') {
		return obj
	}
	var o: any = Array.isArray(obj) ? [] : {}
	for (let i in obj) {
		if (obj.hasOwnProperty(i)) {
			o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
		}
	}
	return o
}

export function getBrowser() {
	function isSafari() {
		const res = uni.getSystemInfoSync();
		return res.model;
	}
	return {
		isSafari: isSafari(),
		isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(isSafari())
	};
}
export function getDevice() {
	const res = uni.getSystemInfoSync();
	return res.platform == "android" ? 'android' : 'ios';
}

export function isObject(value: any) {
	if (!value) return false
	return typeof value === "object" && value != null
}

export function isPromise(value: any) {
	return isObject(value) && typeof value.then === 'function' && typeof value.catch === 'function'
}

export function isUrl(value: string) {
	if (
		value == '.' ||
		value == '/' ||
		value.substring(0, 5) == 'data:' ||
		value.substring(0, 4) == 'http' ||
		value.substring(0, 5) == 'https' ||
		value.substring(0, 3) == 'ftp'
	) {
		return true;
	}
	return false;
}

export function error(str: string) {
	console.error(str)
}

// 判断时间戳是否是秒
export function isTimestampInSeconds(timestamp: number) {
	return timestamp.toString().length === 10;
}
// 判断时间戳是否是毫秒
export function isTimestampInMilliseconds(timestamp: number) {
	return timestamp.toString().length === 13;
}
/**
 * 
 * @param val  {string | number | Date} 
 * @returns year month day hours minutes seconds milliseconds
 */
export function transfromDate(val: string | number | Date): TransfromDateObject {
	const now = new Date(val)
	return {
		year: now.getFullYear(),// 获取年
		month: now.getMonth() + 1,// 获取月
		day: now.getDate(),//获取天
		hours: now.getHours(), // 获取小时
		minutes: now.getMinutes(), // 获取分钟
		seconds: now.getSeconds(), // 获取秒数
		milliseconds: now.getMilliseconds() // 获取毫秒数
	}
}

export function sleep(num: number): Promise<true> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true)
		}, num)
	})
}

export function setStorage(key: string, value:any):boolean{
	try {
		uni.setStorageSync(key, value);
		return true;
	} catch (e) {
		return false;
	}
}
export function getStorage(key: string):any{
  try {
		const value = uni.getStorageSync(key);
		try {
			let val = JSON.parse(value)
			return val;
		} catch (e) {
			return value;
		}
	} catch (e) {
		return undefined;
	}
}

export function deleteStorage(key: string):boolean{
	try {
		uni.removeStorageSync(key);
		return true;
	} catch (e) {
		return false;
	}
}

export function clearStorage():boolean{
	try {
		uni.clearStorageSync();
		return true
	} catch (e) {
		return false
	}
}
const utils: Utils = {
	setStorage,
	deleteStorage,
	getStorage,
	clearStorage,
	debounce,
	throttle,
	getWindowSize,
	toPx,
	genUid,
	deepClone,
	getBrowser,
	getDevice,
	isObject,
	isPromise,
	isUrl,
	error,
	isTimestampInSeconds,
	isTimestampInMilliseconds,
	transfromDate,
	getRect,
	copyText,
	sleep
}
export default utils
