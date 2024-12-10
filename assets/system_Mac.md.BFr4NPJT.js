import{_ as a,c as s,o as i,a3 as e}from"./chunks/framework.BM2i9-bh.js";const u=JSON.parse('{"title":"MAC","description":"","frontmatter":{},"headers":[],"relativePath":"system/Mac.md","filePath":"system/Mac.md"}'),t={name:"system/Mac.md"},l=e(`<h1 id="mac" tabindex="-1">MAC <a class="header-anchor" href="#mac" aria-label="Permalink to &quot;MAC&quot;">​</a></h1><p><code>待更新...</code></p><h2 id="软件卸载后在后台运行列表有残留" tabindex="-1">软件卸载后在后台运行列表有残留 <a class="header-anchor" href="#软件卸载后在后台运行列表有残留" aria-label="Permalink to &quot;软件卸载后在后台运行列表有残留&quot;">​</a></h2><ol><li><p>打开访达</p></li><li><p>⌘ + G</p></li><li><p>前往一下目录</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/LaunchAgents</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Library/LaunchAgents</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Library/LaunchDaemons</span></span></code></pre></div></li><li><p>找到不需要的软件名称并删除</p></li></ol><h2 id="解除软件打开限制" tabindex="-1">解除软件打开限制 <a class="header-anchor" href="#解除软件打开限制" aria-label="Permalink to &quot;解除软件打开限制&quot;">​</a></h2><p>网上安装的应用打开时需要到设置里允许打开，隐私与安全性里没有允许任何来源选项。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> spctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --master-disable</span></span></code></pre></div>`,7),n=[l];function h(p,c,o,r,d,k){return i(),s("div",null,n)}const g=a(t,[["render",h]]);export{u as __pageData,g as default};