import{_ as l,r as s,o as n,c as a,b as o,d as t,e as r,a as p}from"./app.44d9576a.js";const A=JSON.parse('{"title":"cell 单元格","description":"","frontmatter":{},"headers":[{"level":3,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"插槽","slug":"插槽","link":"#插槽","children":[]},{"level":3,"title":"事件","slug":"事件","link":"#事件","children":[]}],"relativePath":"guide/component/cell.md","lastUpdated":1689232209000}'),d={name:"guide/component/cell.md"},c=t("h1",{id:"cell-单元格",tabindex:"-1"},[r("cell 单元格 "),t("a",{class:"header-anchor",href:"#cell-单元格","aria-hidden":"true"},"#")],-1),y=t("p",null,"cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。",-1),i=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-root</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">bgColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">rgb(245, 245, 245)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-cell</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">标题1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-cell</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-cell</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">标题2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">leftIcon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon-pencil</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rightIcon</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">icon-pricetag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">v-cell</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-cell</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">标题3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-input</span><span style="color:#89DDFF;"> &gt;&lt;/</span><span style="color:#F07178;">v-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-cell</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-cell</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">v-slot</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-input</span><span style="color:#89DDFF;"> &gt;&lt;/</span><span style="color:#F07178;">v-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-cell</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-root</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-hidden="true">#</a></h3><p>计划是所有组件全端兼容</p><div class="vp-table__container"><table><thead><tr><th>app-vue</th><th>微信小程序</th><th>h5</th></tr></thead><tbody><tr><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">描述</th><th>可选值</th></tr></thead><tbody><tr><td style="text-align:center;">title</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">标题</td><td></td></tr><tr><td style="text-align:center;"><em>titleColor</em></td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">标题颜色</td><td></td></tr><tr><td style="text-align:center;">titleSize</td><td style="text-align:center;">Number</td><td style="text-align:center;">28</td><td style="text-align:left;">标题字体大小</td><td></td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">右侧文本</td><td></td></tr><tr><td style="text-align:center;">valueColor</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">右侧文本颜色</td><td></td></tr><tr><td style="text-align:center;">valueSize</td><td style="text-align:center;">Number</td><td style="text-align:center;">28</td><td style="text-align:left;">右侧文本大小</td><td></td></tr><tr><td style="text-align:center;">leftIcon</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">左侧icon名称</td><td></td></tr><tr><td style="text-align:center;">leftSize</td><td style="text-align:center;">Number</td><td style="text-align:center;">42</td><td style="text-align:left;">左侧icon大小</td><td></td></tr><tr><td style="text-align:center;">leftColor</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">左侧icon颜色</td><td></td></tr><tr><td style="text-align:center;">rightIcon</td><td style="text-align:center;">String</td><td style="text-align:center;">icon-chevron-forward-outline</td><td style="text-align:left;">右侧icon名称</td><td></td></tr><tr><td style="text-align:center;">lrightSize</td><td style="text-align:center;">Number</td><td style="text-align:center;">42</td><td style="text-align:left;">右侧icon大小</td><td></td></tr><tr><td style="text-align:center;">rightColor</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">右侧icon颜色</td><td></td></tr><tr><td style="text-align:center;">valueAlign</td><td style="text-align:center;">String</td><td style="text-align:center;">end</td><td style="text-align:left;">value默认撑满剩余宽度，可设置对其方式</td><td>start、center、end</td></tr><tr><td style="text-align:center;">isTitle</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">是否显示title内容区</td><td></td></tr><tr><td style="text-align:center;">isBorder</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:left;">是否显示底部border</td><td></td></tr><tr><td style="text-align:center;">border</td><td style="text-align:center;">Number</td><td style="text-align:center;">1</td><td style="text-align:left;">border线粗</td><td></td></tr><tr><td style="text-align:center;">borderColor</td><td style="text-align:center;">String</td><td style="text-align:center;">#c1c1c1</td><td style="text-align:left;">border颜色</td><td></td></tr><tr><td style="text-align:center;">margin</td><td style="text-align:center;">Array</td><td style="text-align:center;">[0,0]</td><td style="text-align:left;">外边距</td><td>拟同css ,数组长度可为1、2、3、4</td></tr><tr><td style="text-align:center;">padding</td><td style="text-align:center;">Array</td><td style="text-align:center;">[0,0]</td><td style="text-align:left;">内边距</td><td>拟同css ,数组长度可为1、2、3、4</td></tr><tr><td style="text-align:center;">_class</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">最外层容器的class类名 多个空格隔开</td><td></td></tr><tr><td style="text-align:center;">_style</td><td style="text-align:center;">Object</td><td style="text-align:center;">{}</td><td style="text-align:left;">最外层容器的样式</td><td></td></tr></tbody></table></div><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>left</td><td>左侧icon插槽</td></tr><tr><td>title</td><td>title插槽</td></tr><tr><td>value</td><td>value插槽</td></tr><tr><td>right</td><td>右侧icon插槽</td></tr></tbody></table></div><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th>事件名</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td></td></tr></tbody></table></div>`,10);function D(F,g,x,h,u,C){const e=s("webview");return n(),a("div",null,[c,y,o(e,{url:"/pages/show/cell"}),i])}const b=l(d,[["render",D]]);export{A as __pageData,b as default};