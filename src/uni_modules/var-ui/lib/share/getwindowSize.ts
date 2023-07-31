import {ref} from 'vue'
/**
 * @desc 获取宽口宽高
 */

export default function getWindowSize() {
  const sys = uni.getSystemInfoSync();
  return ref({
    width: sys.windowWidth,
    height: sys.windowHeight+sys.windowTop,
    top:sys.safeArea.top,
    statusBarHeight: sys.safeAreaInsets.top,
    windowBottom:sys.windowBottom,
    windowHeight: sys.windowHeight,
    windowTop:sys.windowTop,
    windowWidth:sys.windowWidth
  })
}