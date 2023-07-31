
/**
 * 
 * 
 */

export function textUnitToPx(text:string){
  const dataType = Object.prototype.toString.call(text);
  if (dataType === '[object Number]') {
		return text;
	}
	let isRpx = false;
  let t:number|string=text
	if (t.indexOf('rpx') !== -1 || t.indexOf('upx') !== -1) {
		t = t.replace('rpx', '').replace('upx', '');
		isRpx = true;
	} else if (t.indexOf('px') !== -1) {
		t = t.replace('px', '');
	}
	if (!isNaN(t)) {
		if (isRpx) return Number(uni.upx2px(t));
		return Number(t);
	}
	return 0;
}

export function getTime(){
	return (new Date()).getTime();
}
//获取最终的touch位置
export function getTouch(e:any) {
	let touch = null;
	if (e.touches && e.touches.length) {
		touch = e.touches[0];
	} else if (e.changedTouches && e.changedTouches.length) {
		touch = e.changedTouches[0];
	} else if (e.datail && Object.keys(e.datail).length) {
		touch = e.datail;
	} else {
		return {
			touchX: 0,
			touchY: 0
		}
	}
	return {
		touchX: touch.clientX,
		touchY: touch.clientY
	};
}
export default {
	getTouch,
  textUnitToPx,
	getTime
}