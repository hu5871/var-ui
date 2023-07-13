import { ThemeSetMap } from '../../types'
import { useVarStore } from '../store'


export function setTheme({color,name}:ThemeSetMap){
  const store = useVarStore()
  uni.$var.theme[name]=color
  store.saveTheme()
  store.changeTheme(name)
}
export function changeTheme(name: string){
  const store = useVarStore()
  store.changeTheme(name)
}
