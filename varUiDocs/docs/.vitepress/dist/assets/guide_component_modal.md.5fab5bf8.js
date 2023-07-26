import{_ as l,r as n,o as s,c as a,b as d,d as t,e as r,a as o}from"./app.44d9576a.js";const C=JSON.parse('{"title":"modal 模态框","description":"","frontmatter":{},"headers":[{"level":3,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"插槽","slug":"插槽","link":"#插槽","children":[]},{"level":3,"title":"ref方法","slug":"ref方法","link":"#ref方法","children":[]}],"relativePath":"guide/component/modal.md","lastUpdated":1689232209000}'),c={name:"guide/component/modal.md"},p=t("h1",{id:"modal-模态框",tabindex:"-1"},[r("modal 模态框 "),t("a",{class:"header-anchor",href:"#modal-模态框","aria-hidden":"true"},"#")],-1),i=t("p",null,"弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。",-1),y=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-root</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:show</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">show1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">标题1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">overflow-y-auto</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item in 100</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          {{ item }}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-modal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-hidden="true">#</a></h3><p>计划是所有组件全端兼容</p><div class="vp-table__container"><table><thead><tr><th>app-vue</th><th>微信小程序</th><th>h5</th></tr></thead><tbody><tr><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">描述</th><th>可选值</th></tr></thead><tbody><tr><td style="text-align:center;">show</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:left;">显示与隐藏</td><td></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">Number,String</td><td style="text-align:center;">600</td><td style="text-align:left;">宽度</td><td></td></tr><tr><td style="text-align:center;"><em>height</em></td><td style="text-align:center;">Number,String</td><td style="text-align:center;">400</td><td style="text-align:left;">高度</td><td></td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">Number</td><td style="text-align:center;">30</td><td style="text-align:left;">圆角</td><td></td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">顶部标题</td><td></td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;">Number</td><td style="text-align:center;">30</td><td style="text-align:left;">层级</td><td></td></tr><tr><td style="text-align:center;">asyncClose</td><td style="text-align:center;">Function,Promise</td><td style="text-align:center;">()=&gt;true</td><td style="text-align:left;">function和promise返回值决定关闭</td><td></td></tr><tr><td style="text-align:center;">overlayClickClose</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">点击遮罩层关闭</td><td></td></tr><tr><td style="text-align:center;">btnReverse</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:left;">翻转两个按钮的位置</td><td></td></tr><tr><td style="text-align:center;">showCancelButton</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">显示取消按钮</td><td></td></tr><tr><td style="text-align:center;">showConfirmButton</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">显示确认按钮</td><td></td></tr><tr><td style="text-align:center;">capsuleBtn</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:left;">胶囊按钮</td><td></td></tr><tr><td style="text-align:center;">confirmText</td><td style="text-align:center;">String</td><td style="text-align:center;">确定</td><td style="text-align:left;">确认按钮的文本</td><td></td></tr><tr><td style="text-align:center;">cancelText</td><td style="text-align:center;">String</td><td style="text-align:center;">取消</td><td style="text-align:left;">取消按钮的文本</td><td></td></tr><tr><td style="text-align:center;">confirmBgColor</td><td style="text-align:center;">String</td><td style="text-align:center;">#69aaf8</td><td style="text-align:left;">确认按钮的背景颜色</td><td></td></tr><tr><td style="text-align:center;">cancelBgColor</td><td style="text-align:center;">String</td><td style="text-align:center;">white</td><td style="text-align:left;">取消按钮的背景颜色</td><td></td></tr><tr><td style="text-align:center;">confirmColor</td><td style="text-align:center;">String</td><td style="text-align:center;">white</td><td style="text-align:left;">确认按钮的文本颜色</td><td></td></tr><tr><td style="text-align:center;">cancelColor</td><td style="text-align:center;">String</td><td style="text-align:center;">black</td><td style="text-align:left;">取消按钮的文本颜色</td><td></td></tr></tbody></table></div><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th>name</th><th>描述</th><th></th></tr></thead><tbody><tr><td>head</td><td>顶部title处的插槽</td><td></td></tr><tr><td>default</td><td>内容的插槽</td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table></div><h3 id="ref方法" tabindex="-1">ref方法 <a class="header-anchor" href="#ref方法" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th>方法名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>open</td><td>无</td><td>打开模态框</td></tr><tr><td>close</td><td>无</td><td>关闭模态框</td></tr><tr><td></td><td></td><td></td></tr></tbody></table></div>`,10);function g(D,h,x,F,f,u){const e=n("webview");return s(),a("div",null,[p,i,d(e,{url:"/pages/feedback/modal"}),y])}const _=l(c,[["render",g]]);export{C as __pageData,_ as default};
