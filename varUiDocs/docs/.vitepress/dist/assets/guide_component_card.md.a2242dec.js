import{_ as a,r as l,o as n,c as d,b as s,d as t,e as r,a as c}from"./app.44d9576a.js";const v=JSON.parse('{"title":"card 卡片","description":"","frontmatter":{},"headers":[{"level":3,"title":"兼容性","slug":"兼容性","link":"#兼容性","children":[]},{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"插槽","slug":"插槽","link":"#插槽","children":[]}],"relativePath":"guide/component/card.md","lastUpdated":1689232209000}'),i={name:"guide/component/card.md"},o=t("h1",{id:"card-卡片",tabindex:"-1"},[r("card 卡片 "),t("a",{class:"header-anchor",href:"#card-卡片","aria-hidden":"true"},"#")],-1),p=t("p",null,"卡片 作为容器，轻松配置边距、颜色、阴影、宽高、flex:row|col",-1),g=c(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">v-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">v-root</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="兼容性" tabindex="-1">兼容性 <a class="header-anchor" href="#兼容性" aria-hidden="true">#</a></h3><p>计划是所有组件全端兼容</p><div class="vp-table__container"><table><thead><tr><th>app-vue</th><th>微信小程序</th><th>h5</th></tr></thead><tbody><tr><td>支持</td><td>支持</td><td>支持</td></tr></tbody></table></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:left;">描述</th><th>可选值</th></tr></thead><tbody><tr><td style="text-align:center;">bgColor</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">背景颜色</td><td>合法的颜色值</td></tr><tr><td style="text-align:center;">margin</td><td style="text-align:center;">Array</td><td style="text-align:center;">[0,0]</td><td style="text-align:left;">外边距</td><td>拟同css ,数组长度可为1、2、3、4</td></tr><tr><td style="text-align:center;">padding</td><td style="text-align:center;">Array</td><td style="text-align:center;">[0,0]</td><td style="text-align:left;">内边距</td><td>拟同css ,数组长度可为1、2、3、4</td></tr><tr><td style="text-align:center;">_contentClass</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">插槽内容的父级class类名 多个空格隔开</td><td></td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;">String|Number</td><td style="text-align:center;">auto</td><td style="text-align:left;">高度</td><td>String类型支持带单位，Number类型根据unit拼接单位</td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;">String|Number</td><td style="text-align:center;">auto</td><td style="text-align:left;">宽度</td><td>同上</td></tr><tr><td style="text-align:center;">shadow</td><td style="text-align:center;">Number</td><td style="text-align:center;">0</td><td style="text-align:left;">阴影</td><td></td></tr><tr><td style="text-align:center;">shadowColor</td><td style="text-align:center;">String</td><td style="text-align:center;">rgba(0,0,0,0.07)</td><td style="text-align:left;">阴影颜色</td><td></td></tr><tr><td style="text-align:center;">_class</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:left;">最外层容器的class类名 多个空格隔开</td><td></td></tr><tr><td style="text-align:center;">_style</td><td style="text-align:center;">Object</td><td style="text-align:center;">{}</td><td style="text-align:left;">最外层容器的样式</td><td></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:left;"></td><td></td></tr></tbody></table></div><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-hidden="true">#</a></h3><div class="vp-table__container"><table><thead><tr><th>name</th></tr></thead><tbody><tr><td>default</td></tr></tbody></table></div>`,8);function y(h,x,_,b,u,f){const e=l("webview");return n(),d("div",null,[o,p,s(e,{url:"/pages/common/card"}),g])}const D=a(i,[["render",y]]);export{v as __pageData,D as default};