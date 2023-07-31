import { Ref, onMounted, ref } from "vue"
import { CheckNetwork } from "../../types"
/**
 * 检测网络情况
 *
 * @return {Promise} isConnected : true为网络已连接｜反之为未连接； networkType:为网络类型 ，none为未连接
 */

export default function useNetwork():Ref<CheckNetwork>{
  const config=ref<CheckNetwork>({
    isConnected:true,
    networkType:'',
  })
  onMounted(()=>{
    uni.onNetworkStatusChange((res) => {
      config.value.isConnected = res.isConnected
      config.value.networkType = res.networkType
    })
    uni.getNetworkType({
      success: (res) => {
        config.value.networkType = res.networkType
        if (res.networkType == 'none') {
          config.value.isConnected = false
        } else {
          config.value.isConnected = true
        }
      }
    })
  })
  return config
}
