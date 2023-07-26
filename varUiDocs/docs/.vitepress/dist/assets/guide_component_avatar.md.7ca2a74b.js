import{_ as a,r as e,o as l,c as n,b as o,d as t,e as p,a as r}from"./app.44d9576a.js";const C=JSON.parse('{"title":"avatar 头像","description":"","frontmatter":{},"headers":[{"level":3,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"插槽","slug":"插槽","link":"#插槽","children":[]}],"relativePath":"guide/component/avatar.md","lastUpdated":1689232209000}'),c={name:"guide/component/avatar.md"},d=t("h1",{id:"avatar-头像",tabindex:"-1"},[p("avatar 头像 "),t("a",{class:"header-anchor",href:"#avatar-头像","aria-hidden":"true"},"#")],-1),D=t("p",null,"本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。",-1),y=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-root</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon-person-circle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-avatar</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon-person-circle</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">120</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-avatar</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:round</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">9999</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://images.unsplash.com/photo-1685118148066-da2c5c61e291?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-avatar</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-avatar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">120</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#ccc</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-avatar</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-root</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-hidden="true">#</a></h3><p>计划是所有组件全端兼容</p><div class="vp-table__container"><table><thead><tr><th>app-vue</th><th>微信小程序</th><th>h5</th></tr></thead><tbody><tr><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">描述</th><th>可选值</th></tr></thead><tbody><tr><td style="text-align:center;">icon</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">icon名称</td><td></td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">按钮的样式类型</td><td>primary、warning、default、success</td></tr><tr><td style="text-align:center;"><em>size</em></td><td style="text-align:center;">Number</td><td style="text-align:center;">90</td><td style="text-align:left;">大小</td><td></td></tr><tr><td style="text-align:center;">imgMode</td><td style="text-align:center;">String</td><td style="text-align:center;">aspectFill</td><td style="text-align:left;">如果name是图片链接 可设置mode 参考 <a href="https://uniapp.dcloud.net.cn/component/image.html#mode" target="_blank" rel="noreferrer">uniapp image mode</a></td><td>判断name是否是url, [.,/,data:,http,https,ftp]等情况</td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;">String</td><td style="text-align:center;">#1F2937</td><td style="text-align:left;">icon颜色</td><td></td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">Number</td><td style="text-align:center;">10</td><td style="text-align:left;">圆角</td><td></td></tr><tr><td style="text-align:center;">bgColor</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">背景颜色</td><td></td></tr><tr><td style="text-align:center;">margin</td><td style="text-align:center;">Array</td><td style="text-align:center;">[0,0]</td><td style="text-align:left;">外边距</td><td>拟同css ,数组长度可为1、2、3、4</td></tr><tr><td style="text-align:center;">padding</td><td style="text-align:center;">Array</td><td style="text-align:center;">[0,0]</td><td style="text-align:left;">内边距</td><td>拟同css ,数组长度可为1、2、3、4</td></tr></tbody></table></div><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h3><p>无</p>`,8);function i(F,g,h,x,u,m){const s=e("webview");return l(),n("div",null,[d,D,o(s,{url:"/pages/common/avatar"}),y])}const f=a(c,[["render",i]]);export{C as __pageData,f as default};
