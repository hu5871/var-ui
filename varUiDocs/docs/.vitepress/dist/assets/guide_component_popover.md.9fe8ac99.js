import{_ as e,r as n,o as l,c as a,b as o,d as t,e as p,a as r}from"./app.44d9576a.js";const A=JSON.parse('{"title":"popover 气泡提示","description":"","frontmatter":{},"headers":[{"level":3,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"插槽","slug":"插槽","link":"#插槽","children":[]}],"relativePath":"guide/component/popover.md","lastUpdated":1689232209000}'),c={name:"guide/component/popover.md"},d=t("h1",{id:"popover-气泡提示",tabindex:"-1"},[p("popover 气泡提示 "),t("a",{class:"header-anchor",href:"#popover-气泡提示","aria-hidden":"true"},"#")],-1),y=t("p",null,"点击指定内容在周围弹出气泡提示，内容可自定义",-1),D=r(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-root</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-popover</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">bgColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#6e6e6e</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">small</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">下方显示</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-card</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:margin</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[0]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:isRow</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">bgColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#6e6e6e</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">   </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">350</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">_contentClass</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">justify-between</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#A6ACCD;">按钮1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#A6ACCD;">按钮2</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;"> &gt;</span><span style="color:#A6ACCD;">按钮3</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-popover</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-root</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-hidden="true">#</a></h3><p>计划是所有组件全端兼容</p><div class="vp-table__container"><table><thead><tr><th>app-vue</th><th>微信小程序</th><th>h5</th></tr></thead><tbody><tr><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">描述</th><th>可选值</th></tr></thead><tbody><tr><td style="text-align:center;">position</td><td style="text-align:center;">String</td><td style="text-align:center;">b</td><td style="text-align:left;">在哪弹出</td><td>b、t、l、r</td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;">String</td><td style="text-align:center;">1000</td><td style="text-align:left;">层级</td><td></td></tr><tr><td style="text-align:center;"><em>isMask</em></td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">是否需要遮罩层</td><td></td></tr><tr><td style="text-align:center;">spce</td><td style="text-align:center;">Number</td><td style="text-align:center;">5</td><td style="text-align:left;">如果气泡框跑出屏幕适口，设置返回的安全贴边距离</td><td></td></tr><tr><td style="text-align:center;">pointerColor</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">尖角的颜色，为空时跟随bgColor</td><td></td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;">Number</td><td style="text-align:center;">10</td><td style="text-align:left;">圆角</td><td></td></tr><tr><td style="text-align:center;">bgColor</td><td style="text-align:center;">String</td><td style="text-align:center;">#6e6e6e</td><td style="text-align:left;">背景颜色</td><td></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">String,Number</td><td style="text-align:center;">auto</td><td style="text-align:left;">宽度</td><td></td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">String,Number</td><td style="text-align:center;">auto</td><td style="text-align:left;">高度</td><td></td></tr><tr><td style="text-align:center;">stopShowClickEvent</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:left;">停止默认的点击事件展示 气泡框 ，（内容复杂 事件交互无法确定）,一般使用不到</td><td></td></tr></tbody></table></div><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th>name</th><th>描述</th><th></th></tr></thead><tbody><tr><td>default</td><td>被点击的插槽</td><td></td></tr><tr><td>content</td><td>点击后显示的内容插槽</td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table></div>`,8);function F(i,g,h,C,u,x){const s=n("webview");return l(),a("div",null,[d,y,o(s,{url:"/pages/feedback/popover"}),D])}const b=e(c,[["render",F]]);export{A as __pageData,b as default};