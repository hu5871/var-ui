import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import genIconJson from "./createIconJson";
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    genIconJson(),
    viteCompression({
      verbose: true,    
      disable: false,
      threshold: 10240,  
      algorithm: 'gzip',
      ext: '.gz',
      }),
    uni(),

  ],
  server:{
    port: 3000,
  }
});

