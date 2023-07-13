import hooks from './lib/hooks/index'
import utils from './lib/utils/tools'
import { type App } from "vue"


export default {
  install: (app: App) => {
    uni.$var = {
      currentTheme:'',
      utils: utils,
      hooks: hooks,
    }
  }
}