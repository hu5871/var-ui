import { createSSRApp } from "vue";
import App from "./App.vue";
import varsUI from './uni_modules/var-ui/index'
import './uni_modules/var-ui/lib/css/index.css'


// import Vconsole from 'vconsole'
// const vConsole = new Vconsole()


export function createApp() {
  const app = createSSRApp(App);
  app.use(varsUI)

  return {
    app,
  };
}
