(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=c(e);fetch(e.href,a)}})();const l=t=>(t=t.replace(/^#/,""),{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16)}),d=()=>{const t=document.getElementById("catImg"),n=document.createElement("a");n.href=t.src,n.download="cat_image.png",n.click()},p=()=>{const t=document.getElementById("catImg");t!=null&&t.src&&URL.revokeObjectURL(t.src),t==null||t.remove()},g="https://cataas.com/cat",m=t=>{const n=t.gifCheckbox.checked?"/gif":"",c=!t.gifCheckbox.checked&&t.tagSelect.value?`/${t.tagSelect.value}`:"",o=t.textInput.value?`/says/${t.textInput.value}`:"",e=l(t.colorInput.value),a=new URLSearchParams;return[{input:t.fontSizeInput,param:"fontSize"},{input:t.textColorInput,param:"fontColor"},{input:t.typeInput,param:"type"},{input:t.filterInput,param:"filter"},{input:t.brightnessInput,param:"brightness"},{input:t.lightnessInput,param:"lightness"},{input:t.saturationInput,param:"saturation"},{input:t.hueInput,param:"hue"},{input:{value:e.r},param:"r"},{input:{value:e.g},param:"g"},{input:{value:e.b},param:"b"},{input:t.widthInput,param:"width"},{input:t.heightInput,param:"height"}].forEach(({input:i,param:r})=>{i.value&&a.append(r,i.value)}),g+n+c+o+"?"+a.toString()},y=async t=>await(await fetch(t)).blob(),I=t=>{const n=document.getElementById("textBlock");t.value==="square"||t.value===""?n.style.display="block":n.style.display="none"},h=t=>{const n=document.getElementById("customParameters"),c=document.getElementById("labelType"),o=document.getElementById("type"),e=n.getElementsByTagName("input");if(t.value==="custom")n.style.display="block",c.style.display="none",o.value="";else{n.style.display="none",c.style.display="block";for(let a of e)a.value=""}},b=async t=>{const n=m(t);console.log(n);const c=await y(n),o=document.createElement("img");o.id="catImg",o.src=URL.createObjectURL(c),t.imageBlock.appendChild(o)},s={submitButton:document.getElementById("submit"),saveButton:document.getElementById("save"),tagSelect:document.getElementById("tag"),gifCheckbox:document.getElementById("gif"),textInput:document.getElementById("text"),fontSizeInput:document.getElementById("fontSize"),textColorInput:document.getElementById("textColor"),typeInput:document.getElementById("type"),filterInput:document.getElementById("filter"),brightnessInput:document.getElementById("brightness"),lightnessInput:document.getElementById("lightness"),saturationInput:document.getElementById("saturation"),hueInput:document.getElementById("hue"),colorInput:document.getElementById("RGB"),widthInput:document.getElementById("width"),heightInput:document.getElementById("height"),imageBlock:document.getElementById("imageBlock"),loader:document.getElementById("loader")};s.submitButton.addEventListener("click",async()=>{p(),s.submitButton.disabled=!0,s.loader.style.display="block",await b(s),s.submitButton.disabled=!1,s.loader.style.display="none",s.saveButton.disabled=!1});s.filterInput.addEventListener("change",function(){h(this)});s.typeInput.addEventListener("change",function(){I(this)});s.saveButton.addEventListener("click",()=>{d()});
