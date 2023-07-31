import type { PluginOption } from 'vite';
import fs from 'fs'
import { resolve } from 'path'

type VarUiIcon = {
  name:string;
  unicode:string;
}
interface VarUIIconJson{
  common:VarUiIcon[];
  outline:VarUiIcon[];
  circle:VarUiIcon[];
}

// 此函数用于根据css 生成icon页面所需要的iconJson
export default function genIconJson(): PluginOption {
  return {
    enforce: 'pre',
    name: 'vite-plugin-varui',
    apply: 'serve',
    configureServer() {
      const cssFilePath = resolve(__dirname, './src/uni_modules/var-ui/lib/css/iconFont.css'); 
      const cssContent = fs.readFileSync(cssFilePath, 'utf-8');
      const outputDir = resolve(__dirname, './src/pages/common'); 
      function geoJson(str):VarUiIcon[]{
        let s = str.replace(/\n/g, '')
        s = s.split('.').slice(1,-1)
        const res = s
          .map(item => {
            if (!item) return
            const items = item.split(':')
            const code = items[2].replace(/"|;|}/g, '').trim()
            return (
              item && {
                name: items[0],
                unicode: `${String(code)}`,
              }
            )
          })
          .filter(item => item)
        return res
      }
      const classification:VarUIIconJson ={
        common:[],
        outline:[],
        circle:[]
      }
     const allJson=geoJson(cssContent)
     for (let i = 0; i < allJson.length; i++) {
      const item = allJson[i];
      if(item.name.endsWith('outline')) {
        classification.outline.push(item)
      }else if(item.name.endsWith('circle')){
        classification.circle.push(item)
      }else{
        classification.common.push(item)
      }
     }
      fs.writeFileSync(resolve(outputDir, 'iconJson.json'), JSON.stringify(classification, null, 4), 'utf8');
    },
  }
}
