import"chrome://new-tab-page/strings.m.js";import{html,PolymerElement,Polymer,dom,Base,useShadow,dashToCamelCase,mixinBehaviors,microTask}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{loadTimeData}from"chrome://resources/js/load_time_data.m.js";import"chrome://resources/mojo/mojo/public/js/mojo_bindings_lite.js";import"chrome://resources/mojo/mojo/public/mojom/base/big_buffer.mojom-lite.js";import"chrome://resources/mojo/mojo/public/mojom/base/string16.mojom-lite.js";import"chrome://resources/mojo/mojo/public/mojom/base/text_direction.mojom-lite.js";import"chrome://resources/mojo/mojo/public/mojom/base/time.mojom-lite.js";import"chrome://resources/mojo/skia/public/mojom/skcolor.mojom-lite.js";import"chrome://resources/mojo/url/mojom/url.mojom-lite.js";import"chrome://new-tab-page/omnibox.mojom-lite.js";import"chrome://new-tab-page/new_tab_page.mojom-lite.js";import{addSingletonGetter,isIOS,isWindows,isMac}from"chrome://resources/js/cr.m.js";import"chrome://new-tab-page/promo_browser_command.mojom-lite.js";import"chrome://resources/mojo/mojo/public/mojom/base/unguessable_token.mojom-lite.js";import"chrome://resources/mojo/url/mojom/origin.mojom-lite.js";import"chrome://new-tab-page/modules/shopping_tasks/shopping_tasks.mojom-lite.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template=html`<custom-style>
  <style is="custom-style" css-build="shadow">html {
  --google-red-100-rgb: 244, 199, 195;  
      --google-red-100: rgb(var(--google-red-100-rgb));
      --google-red-300-rgb: 230, 124, 115;  
      --google-red-300: rgb(var(--google-red-300-rgb));
      --google-red-500-rgb: 219, 68, 55;  
      --google-red-500: rgb(var(--google-red-500-rgb));
      --google-red-700-rgb: 197, 57, 41;  
      --google-red-700: rgb(var(--google-red-700-rgb));

      --google-blue-100-rgb: 198, 218, 252;  
      --google-blue-100: rgb(var(--google-blue-100-rgb));
      --google-blue-300-rgb: 123, 170, 247;  
      --google-blue-300: rgb(var(--google-blue-300-rgb));
      --google-blue-500-rgb: 66, 133, 244;  
      --google-blue-500: rgb(var(--google-blue-500-rgb));
      --google-blue-700-rgb: 51, 103, 214;  
      --google-blue-700: rgb(var(--google-blue-700-rgb));

      --google-green-100-rgb: 183, 225, 205;  
      --google-green-100: rgb(var(--google-green-100-rgb));
      --google-green-300-rgb: 87, 187, 138;  
      --google-green-300: rgb(var(--google-green-300-rgb));
      --google-green-500-rgb: 15, 157, 88;  
      --google-green-500: rgb(var(--google-green-500-rgb));
      --google-green-700-rgb: 11, 128, 67;  
      --google-green-700: rgb(var(--google-green-700-rgb));

      --google-yellow-100-rgb: 252, 232, 178;  
      --google-yellow-100: rgb(var(--google-yellow-100-rgb));
      --google-yellow-300-rgb: 247, 203, 77;  
      --google-yellow-300: rgb(var(--google-yellow-300-rgb));
      --google-yellow-500-rgb: 244, 180, 0;  
      --google-yellow-500: rgb(var(--google-yellow-500-rgb));
      --google-yellow-700-rgb: 240, 147, 0;  
      --google-yellow-700: rgb(var(--google-yellow-700-rgb));

      --google-grey-100-rgb: 245, 245, 245;  
      --google-grey-100: rgb(var(--google-grey-100-rgb));
      --google-grey-300-rgb: 224, 224, 224;  
      --google-grey-300: rgb(var(--google-grey-300-rgb));
      --google-grey-500-rgb: 158, 158, 158;  
      --google-grey-500: rgb(var(--google-grey-500-rgb));
      --google-grey-700-rgb: 97, 97, 97;  
      --google-grey-700: rgb(var(--google-grey-700-rgb));

      

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; 
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; 
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;
}

</style>
</custom-style>
`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<custom-style>\n<style is="custom-style" css-build="shadow">html {\n  --google-blue-50-rgb: 232, 240, 254;  \n    --google-blue-50: rgb(var(--google-blue-50-rgb));\n    --google-blue-200-rgb: 174, 203, 250;  \n    --google-blue-200: rgb(var(--google-blue-200-rgb));\n    --google-blue-600-rgb: 26, 115, 232;  \n    --google-blue-600: rgb(var(--google-blue-600-rgb));\n\n    --google-grey-50-rgb: 248, 249, 250;  \n    --google-grey-50: rgb(var(--google-grey-50-rgb));\n    --google-grey-200-rgb: 232, 234, 237;  \n    --google-grey-200: rgb(var(--google-grey-200-rgb));\n    --google-grey-400-rgb: 189, 193, 198;  \n    --google-grey-400: rgb(var(--google-grey-400-rgb));\n    --google-grey-600-rgb: 128, 134, 139;  \n    --google-grey-600: rgb(var(--google-grey-600-rgb));\n    --google-grey-800-rgb: 60, 64, 67;  \n    --google-grey-800: rgb(var(--google-grey-800-rgb));\n    --google-grey-900-rgb: 32, 33, 36;  \n    --google-grey-900: rgb(var(--google-grey-900-rgb));\n    \n    --google-grey-900-white-4-percent: #292a2d;\n\n    --google-red-600-rgb: 217, 48, 37;  \n    --google-red-600: rgb(var(--google-red-600-rgb));\n\n    --google-yellow-50-rgb: 254, 247, 224;  \n    --google-yellow-50: rgb(var(--google-yellow-50-rgb));\n\n    \n    --google-blue-refresh-100-rgb: 210, 227, 252;  \n    --google-blue-refresh-100: rgb(var(--google-blue-refresh-100-rgb));\n    --google-blue-refresh-300-rgb: 138, 180, 248;  \n    --google-blue-refresh-300: rgb(var(--google-blue-refresh-300-rgb));\n    --google-blue-refresh-500-rgb: 66, 133, 244;  \n    --google-blue-refresh-500: rgb(var(--google-blue-refresh-500-rgb));\n    --google-blue-refresh-700-rgb: 25, 103, 210;  \n    --google-blue-refresh-700: rgb(var(--google-blue-refresh-700-rgb));\n\n    --google-green-refresh-300-rgb: 129, 201, 149;  \n    --google-green-refresh-300: rgb(var(--google-green-refresh-300-rgb));\n    --google-green-refresh-700-rgb: 24, 128, 56;  \n    --google-green-refresh-700: rgb(var(--google-green-refresh-700-rgb));\n\n    --google-grey-refresh-100-rgb: 241, 243, 244;  \n    --google-grey-refresh-100: rgb(var(--google-grey-refresh-100-rgb));\n    --google-grey-refresh-300-rgb: 218, 220, 224;  \n    --google-grey-refresh-300: rgb(var(--google-grey-refresh-300-rgb));\n    --google-grey-refresh-500-rgb: 154, 160, 166;  \n    --google-grey-refresh-500: rgb(var(--google-grey-refresh-500-rgb));\n    --google-grey-refresh-700-rgb: 95, 99, 104;  \n    --google-grey-refresh-700: rgb(var(--google-grey-refresh-700-rgb));\n\n    --google-red-refresh-300-rgb: 242, 139, 130;  \n    --google-red-refresh-300: rgb(var(--google-red-refresh-300-rgb));\n    --google-red-refresh-500-rgb: 234, 67, 53;  \n    --google-red-refresh-500: rgb(var(--google-red-refresh-500-rgb));\n\n    --google-yellow-refresh-300-rgb: 253, 214, 51;  \n    --google-yellow-refresh-300: rgb(var(--google-yellow-refresh-300-rgb));\n\n    --cr-primary-text-color: var(--google-grey-900);\n    --cr-secondary-text-color: var(--google-grey-refresh-700);\n\n    --cr-card-background-color: white;\n    --cr-card-shadow-color-rgb: var(--google-grey-800-rgb);\n\n    --cr-elevation-1: rgba(var(--cr-card-shadow-color-rgb), .3) 0 1px 2px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 1px 3px 1px;\n    --cr-elevation-2: rgba(var(--cr-card-shadow-color-rgb), .3) 0 1px 2px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 2px 6px 2px;\n    --cr-elevation-3: rgba(var(--cr-card-shadow-color-rgb), .3) 0 1px 3px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 4px 8px 3px;\n    --cr-elevation-4: rgba(var(--cr-card-shadow-color-rgb), .3) 0 2px 3px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 6px 10px 4px;\n    --cr-elevation-5: rgba(var(--cr-card-shadow-color-rgb), .3) 0 4px 4px 0,\n                      rgba(var(--cr-card-shadow-color-rgb), .15) 0 8px 12px 6px;\n\n    --cr-card-shadow: var(--cr-elevation-1);\n\n    --cr-checked-color: var(--google-blue-600);\n    --cr-focused-item-color: var(--google-grey-300);\n    --cr-form-field-label-color: var(--google-grey-refresh-700);\n    --cr-hairline-rgb: 0, 0, 0;\n    --cr-link-color: var(--google-blue-700);\n    --cr-menu-background-color: white;\n    --cr-menu-background-focus-color: var(--google-grey-400);\n    --cr-menu-shadow: 0 2px 6px var(--paper-grey-500);\n    --cr-separator-color: rgba(0, 0, 0, .06);\n    --cr-title-text-color: rgb(90, 90, 90);\n    --cr-toggle-color: var(--google-blue-500);\n    --cr-toolbar-background-color: var(--google-blue-700);\n}\n\n@media (prefers-color-scheme: dark) {\nhtml {\n  --cr-primary-text-color: var(--google-grey-200);\n      --cr-secondary-text-color: var(--google-grey-refresh-500);\n\n      --cr-card-background-color: var(--google-grey-900-white-4-percent);\n      --cr-card-shadow-color-rgb: 0, 0, 0;\n\n      --cr-checked-color: var(--google-blue-refresh-300);\n      --cr-form-field-label-color: var(--dark-secondary-color);\n      --cr-hairline-rgb: 255, 255, 255;\n      --cr-link-color: var(--google-blue-refresh-300);\n      --cr-menu-background-color: var(--google-grey-900);\n      --cr-menu-background-focus-color: var(--google-grey-refresh-700);\n      --cr-menu-background-sheen: rgba(255, 255, 255, .06);  \n      --cr-menu-shadow: rgba(0, 0, 0, .3) 0 1px 2px 0,\n                        rgba(0, 0, 0, .15) 0 3px 6px 2px;\n      --cr-separator-color: rgba(255, 255, 255, .1);\n      \n      --cr-title-text-color: var(--cr-primary-text-color);\n      --cr-toolbar-background-color: var(--google-grey-900-white-4-percent);\n}\n\n}\n\nhtml {\n  --cr-button-edge-spacing: 12px;\n    --cr-button-height: 32px;\n\n    \n    --cr-controlled-by-spacing: 24px;\n\n    \n    --cr-default-input-max-width: 264px;\n\n    \n    --cr-icon-ripple-size: 36px;\n    --cr-icon-ripple-padding: 8px;\n\n    --cr-icon-size: 20px;\n\n    --cr-icon-button-margin-start: 16px;\n\n    \n    --cr-icon-ripple-margin: calc(var(--cr-icon-ripple-padding) * -1);\n\n    \n    \n    --cr-section-min-height: 48px;\n    --cr-section-two-line-min-height: 64px;\n    --cr-section-three-line-min-height: 84px;\n\n    --cr-section-padding: 20px;\n    --cr-section-vertical-padding: 12px;\n    --cr-section-indent-width: 40px;\n    --cr-section-indent-padding: calc(\n        var(--cr-section-padding) + var(--cr-section-indent-width));\n\n    --cr-section-vertical-margin: 21px;\n\n    --cr-centered-card-max-width: 680px;\n    --cr-centered-card-width-percentage: 0.96;\n\n    --cr-hairline: 1px solid rgba(var(--cr-hairline-rgb), .14);\n\n    --cr-separator-height: 1px;\n    --cr-separator-line: var(--cr-separator-height) solid\n        var(--cr-separator-color);\n\n    --cr-toolbar-overlay-animation-duration: 150ms;\n    --cr-toolbar-height: 56px;\n\n    --cr-container-shadow-height: 6px;\n    --cr-container-shadow-margin: calc(-1 * var(--cr-container-shadow-height));\n\n    --cr-container-shadow-max-opacity: 1;\n\n    \n    --cr-card-border-radius: 4px;\n    --cr-disabled-opacity: .38;\n    --cr-form-field-bottom-spacing: 16px;\n    --cr-form-field-label-font-size: .625rem;\n    --cr-form-field-label-height: 1em;\n    --cr-form-field-label-line-height: 1em;\n}\n\n</style>\n</custom-style>\n`;document.head.appendChild($_documentContainer.content);// Copyright 2019 The Chromium Authors. All rights reserved.
class BrowserProxy{constructor(){this.callbackRouter=new newTabPage.mojom.PageCallbackRouter;this.handler=new newTabPage.mojom.PageHandlerRemote;const factory=newTabPage.mojom.PageHandlerFactory.getRemote();factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(),this.handler.$.bindNewPipeAndPassReceiver())}navigate(href){window.location.href=href}open(url){window.open(url,"_blank")}setTimeout(callback,duration){return window.setTimeout(callback,duration)}clearTimeout(id){window.clearTimeout(id)}random(){return Math.random()}createIframeSrc(src){return src}matchMedia(query){return window.matchMedia(query)}now(){return Date.now()}waitForLazyRender(){return new Promise((resolve,reject)=>{setTimeout(resolve,50)})}postMessage(iframe,message,targetOrigin){iframe.contentWindow.postMessage(message,targetOrigin)}}addSingletonGetter(BrowserProxy);// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AUTO_SRC="auto-src";class ImgElement extends HTMLImageElement{static get observedAttributes(){return[AUTO_SRC]}attributeChangedCallback(name,oldValue,newValue){if(name!==AUTO_SRC){return}let url=null;try{url=new URL(newValue||"")}catch(_){}if(!url||url.protocol==="chrome-untrusted:"){this.removeAttribute("src")}else if(url.protocol==="data:"||url.protocol==="chrome:"){this.src=url.href}else{this.src="chrome://image?"+url.href}}set autoSrc(src){this.setAttribute(AUTO_SRC,src)}get autoSrc(){return this.getAttribute(AUTO_SRC)}}customElements.define("ntp-img",ImgElement,{extends:"img"});// Copyright 2020 The Chromium Authors. All rights reserved.
class PromoBrowserCommandProxy{constructor(){this.handler=promoBrowserCommand.mojom.CommandHandler.getRemote()}}addSingletonGetter(PromoBrowserCommandProxy);// Copyright 2020 The Chromium Authors. All rights reserved.
class MiddleSlotPromoElement extends PolymerElement{static get is(){return"ntp-middle-slot-promo"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-middle-slot-promo">:host {
  font-size: 12px;
    white-space: pre;
}

:host([modules-enabled_]):host {
  font-size: 13px;
}

:host(:not([modules-enabled_])):host {
  max-width: 537px;
}

#container {
  align-items: center;
    background-color: var(--ntp-background-override-color);
    border: solid var(--ntp-border-color) 1px;
    border-radius: 24px;
    box-sizing: border-box;
    color: var(--cr-primary-text-color);
    display: flex;
    flex-direction: row;
    height: 30px;
    justify-content: center;
    padding-inline-end: 8px;
    padding-inline-start: 8px;
}

:host([modules-enabled_]) #container {
  border-radius: 5px;
    height: 48px;
}

a {
  color: var(--cr-link-color);
    cursor: pointer;
    text-decoration: none;
}

a:focus {
  border-radius: 2px;
    box-shadow: var(--ntp-focus-shadow);
    outline: none;
}

* + .image {
  margin-inline-start: 8px;
}

.image + * {
  margin-inline-start: 8px;
}

img {
  border-radius: 50%;
    height: 24px;
    pointer-events: none;
    width: 24px;
}

:host([modules-enabled_]) img {
  background-color: var(--google-grey-refresh-100);
    height: 22px;
    padding: 5px;
    width: 22px;
}

@media (prefers-color-scheme: dark) {
img {
  background-color: var(--google-grey-200);
}

}

#container > :last-child {
  overflow: hidden;
    text-overflow: ellipsis;
}

</style>
<!-- Promo parts are added by JS. -->
<div id="container"></div>
<!--_html_template_end_-->`}static get properties(){return{hidden:{type:Boolean,value:true,reflectToAttribute:true},modulesEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesEnabled"),reflectToAttribute:true},commandIds_:{type:Object,value:()=>[]}}}constructor(){super();this.pageHandler_=BrowserProxy.getInstance().handler}connectedCallback(){super.connectedCallback();this.pageHandler_.getPromo().then(({promo:promo})=>{if(promo){promo.middleSlotParts.forEach(({image:image,link:link,text:text})=>{let el;if(image){el=new ImgElement;el.autoSrc=image.imageUrl.url;if(image.target){const anchor=this.createAnchor_(image.target);if(anchor){anchor.appendChild(el);el=anchor}}el.classList.add("image")}else if(link){el=this.createAnchor_(link.url)}else if(text){el=document.createElement("span")}const linkOrText=link||text;if(el&&linkOrText){el.innerText=linkOrText.text;if(linkOrText.color){el.style.color=linkOrText.color}}if(el){this.$.container.appendChild(el)}});this.maybeShowPromo_().then(canShow=>{if(canShow){this.pageHandler_.onPromoRendered(BrowserProxy.getInstance().now(),promo.logUrl||null);this.hidden=false}this.dispatchEvent(new Event("ntp-middle-slot-promo-loaded",{bubbles:true,composed:true}))})}else{this.dispatchEvent(new Event("ntp-middle-slot-promo-loaded",{bubbles:true,composed:true}))}})}createAnchor_(target){const commandIdMatch=/^command:(\d+)$/.exec(target.url);if(!commandIdMatch&&!target.url.startsWith("https://")){return null}const el=document.createElement("a");let commandId=null;if(!commandIdMatch){el.href=target.url}else{commandId=+commandIdMatch[1];if(!Object.values(promoBrowserCommand.mojom.Command).includes(commandId)){commandId=promoBrowserCommand.mojom.Command.kUnknownCommand}this.commandIds_.push(commandId)}const onClick=event=>{if(commandId!==null){PromoBrowserCommandProxy.getInstance().handler.executeCommand(commandId,{middleButton:event.button===1,altKey:event.altKey,ctrlKey:event.ctrlKey,metaKey:event.metaKey,shiftKey:event.shiftKey})}this.pageHandler_.onPromoLinkClicked()};el.addEventListener("auxclick",onClick);el.addEventListener("click",onClick);return el}async maybeShowPromo_(){const{handler:handler}=PromoBrowserCommandProxy.getInstance();const promises=this.commandIds_.map(commandId=>handler.canShowPromoWithCommand(commandId));return(await Promise.all(promises)).every(({canShow:canShow})=>canShow)}}customElements.define(MiddleSlotPromoElement.is,MiddleSlotPromoElement);// Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached(opt_message){assert(false,opt_message||"Unreachable code hit")}function assertInstanceof(value,type,opt_message){if(!(value instanceof type)){assertNotReached(opt_message||"Value "+value+" is not a[n] "+(type.name||typeof type))}return value}// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var EventTracker=class{constructor(){this.listeners_=[]}add(target,eventType,listener,opt_capture){const capture=!!opt_capture;const h={target:target,eventType:eventType,listener:listener,capture:capture};this.listeners_.push(h);target.addEventListener(eventType,listener,capture)}remove(target,eventType){this.listeners_=this.listeners_.filter(listener=>{if(listener.target===target&&(!eventType||listener.eventType===eventType)){EventTracker.removeEventListener(listener);return false}return true})}removeAll(){this.listeners_.forEach(listener=>EventTracker.removeEventListener(listener));this.listeners_=[]}static removeEventListener(entry){entry.target.removeEventListener(entry.eventType,entry.listener,entry.capture)}};// Copyright (c) 2012 The Chromium Authors. All rights reserved.
function getDeepActiveElement(){let a=document.activeElement;while(a&&a.shadowRoot&&a.shadowRoot.activeElement){a=a.shadowRoot.activeElement}return a}function isRTL(){return document.documentElement.dir==="rtl"}function hasKeyModifiers(e){return!!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}// Copyright 2014 The Chromium Authors. All rights reserved.
class FocusRow{constructor(root,boundary,delegate){this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate;this.eventTracker=new EventTracker}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){if(element.getFocusableElement){return element.getFocusableElement()}return element}addItem(type,selectorOrElement){assert(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(sampleElement){return assert(this.getFirstFocusable())}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(opt_type){const element=this.getFocusableElements().find(el=>!opt_type||el.getAttribute("focus-type")===opt_type);return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(FocusRow.ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach(function(element){element.tabIndex=active?0:-1});this.root.classList.toggle(FocusRow.ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}if(!e.currentTarget.disabled){e.currentTarget.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}FocusRow.ACTIVE_CLASS="focus-row-active";// Copyright 2017 The Chromium Authors. All rights reserved.
let hideInk=false;assert(!isIOS,"pointerdown doesn't work on iOS");document.addEventListener("pointerdown",function(){hideInk=true},true);document.addEventListener("keydown",function(){hideInk=false},true);const focusWithoutInk=function(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}assert(document===toFocus.ownerDocument);const{noink:noink}=toFocus;toFocus.noink=true;toFocus.focus();toFocus.noink=noink};// Copyright 2016 The Chromium Authors. All rights reserved.
const AnchorAlignment={BEFORE_START:-2,AFTER_START:-1,CENTER:0,BEFORE_END:1,AFTER_END:2};const DROPDOWN_ITEM_CLASS="dropdown-item";const AFTER_END_OFFSET=10;function getStartPointWithAnchor(start,end,menuLength,anchorAlignment,min,max){let startPoint=0;switch(anchorAlignment){case AnchorAlignment.BEFORE_START:startPoint=-menuLength;break;case AnchorAlignment.AFTER_START:startPoint=start;break;case AnchorAlignment.CENTER:startPoint=(start+end-menuLength)/2;break;case AnchorAlignment.BEFORE_END:startPoint=end-menuLength;break;case AnchorAlignment.AFTER_END:startPoint=end;break}if(startPoint+menuLength>max){startPoint=end-menuLength}if(startPoint<min){startPoint=start}startPoint=Math.max(min,Math.min(startPoint,max-menuLength));return startPoint}function getDefaultShowConfig(){return{top:0,left:0,height:0,width:0,anchorAlignmentX:AnchorAlignment.AFTER_START,anchorAlignmentY:AnchorAlignment.AFTER_START,minX:0,minY:0,maxX:0,maxY:0}}Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-action-menu">:host dialog {
  background-color: var(--cr-menu-background-color);
        border: none;
        border-radius: 4px;
        box-shadow: var(--cr-menu-shadow);
        margin: 0;
        min-width: 128px;
        outline: none;
        padding: 0;
}

:host dialog::backdrop {
  background-color: transparent;
}

:host ::slotted(.dropdown-item) {
  -webkit-tap-highlight-color: transparent;
        background: none;
        border: none;
        border-radius: 0;
        box-sizing: border-box;
        color: var(--cr-primary-text-color);
        font: inherit;
        min-height: 32px;
        padding: 0 24px;
        text-align: start;
        user-select: none;
        width: 100%;
}

:host ::slotted(.dropdown-item:not([hidden])) {
  align-items: center;
        display: flex;
}

:host ::slotted(.dropdown-item[disabled]) {
  opacity: var(--cr-action-menu-disabled-item-opacity, 0.65);
}

:host ::slotted(.dropdown-item:not([disabled])) {
  cursor: pointer;
}

:host ::slotted(.dropdown-item:focus) {
  background-color: var(--cr-menu-background-focus-color);
        outline: none;
}

.item-wrapper {
  background: var(--cr-menu-background-sheen);
        outline: none;
        padding: 8px 0;
}

</style>
    <dialog id="dialog" part="dialog" on-close="onNativeDialogClose_" role="application" aria-roledescription$="[[roleDescription]]">
      <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1">
        <slot id="contentNode"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`,is:"cr-action-menu",anchorElement_:null,boundClose_:null,hasMousemoveListener_:false,contentObserver_:null,resizeObserver_:null,lastConfig_:null,properties:{autoReposition:{type:Boolean,value:false},open:{type:Boolean,notify:true,value:false},roleDescription:String},listeners:{keydown:"onKeyDown_",mouseover:"onMouseover_",click:"onClick_"},detached(){this.removeListeners_()},getDialog(){return this.$.dialog},removeListeners_(){window.removeEventListener("resize",this.boundClose_);window.removeEventListener("popstate",this.boundClose_);if(this.contentObserver_){dom(this.$.contentNode).unobserveNodes(this.contentObserver_);this.contentObserver_=null}if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}},onNativeDialogClose_(e){if(e.target!==this.$.dialog){return}e.stopPropagation();this.fire("close")},onClick_(e){if(e.target===this){this.close();e.stopPropagation()}},onKeyDown_(e){e.stopPropagation();if(e.key==="Tab"||e.key==="Escape"){this.close();if(e.key==="Tab"){this.fire("tabkeyclose",{shiftKey:e.shiftKey})}e.preventDefault();return}if(e.key!=="Enter"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}const query=".dropdown-item:not([disabled]):not([hidden])";const options=Array.from(this.querySelectorAll(query));if(options.length===0){return}const focused=getDeepActiveElement();const index=options.findIndex(option=>FocusRow.getFocusableElement(option)===focused);if(e.key==="Enter"){if(index!==-1){return}if(isWindows||isMac){this.close();e.preventDefault();return}}e.preventDefault();this.updateFocus_(options,index,e.key!=="ArrowUp");if(!this.hasMousemoveListener_){this.hasMousemoveListener_=true;this.addEventListener("mousemove",e=>{this.onMouseover_(e);this.hasMousemoveListener_=false},{once:true})}},onMouseover_(e){const query=".dropdown-item:not([disabled])";const item=e.composedPath().find(el=>el.matches&&el.matches(query));(item||this.$.wrapper).focus()},updateFocus_(options,focusedIndex,next){const numOptions=options.length;assert(numOptions>0);let index;if(focusedIndex===-1){index=next?0:numOptions-1}else{const delta=next?1:-1;index=(numOptions+focusedIndex+delta)%numOptions}options[index].focus()},close(){this.removeListeners_();this.$.dialog.close();this.open=false;if(this.anchorElement_){focusWithoutInk(assert(this.anchorElement_));this.anchorElement_=null}if(this.lastConfig_){this.lastConfig_=null}},showAt(anchorElement,opt_config){this.anchorElement_=anchorElement;this.anchorElement_.scrollIntoViewIfNeeded();const rect=this.anchorElement_.getBoundingClientRect();let height=rect.height;if(opt_config&&!opt_config.noOffset&&opt_config.anchorAlignmentY===AnchorAlignment.AFTER_END){height-=AFTER_END_OFFSET}this.showAtPosition(Object.assign({top:rect.top,left:rect.left,height:height,width:rect.width,anchorAlignmentX:AnchorAlignment.BEFORE_END},opt_config));this.$.wrapper.focus()},showAtPosition(config){const doc=document.scrollingElement;const scrollLeft=doc.scrollLeft;const scrollTop=doc.scrollTop;this.resetStyle_();this.$.dialog.showModal();this.open=true;config.top+=scrollTop;config.left+=scrollLeft;this.positionDialog_(Object.assign({minX:scrollLeft,minY:scrollTop,maxX:scrollLeft+doc.clientWidth,maxY:scrollTop+doc.clientHeight},config));doc.scrollTop=scrollTop;doc.scrollLeft=scrollLeft;this.addListeners_()},resetStyle_(){this.$.dialog.style.left="";this.$.dialog.style.right="";this.$.dialog.style.top="0"},positionDialog_(config){this.lastConfig_=config;const c=Object.assign(getDefaultShowConfig(),config);const top=c.top;const left=c.left;const bottom=top+c.height;const right=left+c.width;const rtl=getComputedStyle(this).direction==="rtl";if(rtl){c.anchorAlignmentX*=-1}const offsetWidth=this.$.dialog.offsetWidth;const menuLeft=getStartPointWithAnchor(left,right,offsetWidth,c.anchorAlignmentX,c.minX,c.maxX);if(rtl){const menuRight=document.scrollingElement.clientWidth-menuLeft-offsetWidth;this.$.dialog.style.right=menuRight+"px"}else{this.$.dialog.style.left=menuLeft+"px"}const menuTop=getStartPointWithAnchor(top,bottom,this.$.dialog.offsetHeight,c.anchorAlignmentY,c.minY,c.maxY);this.$.dialog.style.top=menuTop+"px"},addListeners_(){this.boundClose_=this.boundClose_||function(){if(this.$.dialog.open){this.close()}}.bind(this);window.addEventListener("resize",this.boundClose_);window.addEventListener("popstate",this.boundClose_);this.contentObserver_=dom(this.$.contentNode).observeNodes(info=>{info.addedNodes.forEach(node=>{if(node.classList&&node.classList.contains(DROPDOWN_ITEM_CLASS)&&!node.getAttribute("role")){node.setAttribute("role","menuitem")}})});if(this.autoReposition){this.resizeObserver_=new ResizeObserver(()=>{if(this.lastConfig_){this.positionDialog_(this.lastConfig_);this.fire("cr-action-menu-repositioned")}});this.resizeObserver_.observe(this.$.dialog)}}});// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{constructor(doc){this.focusByKeyboard_=true;this.classList_=doc.documentElement.classList;const onEvent=function(focusByKeyboard,e){if(this.focusByKeyboard_===focusByKeyboard){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()};doc.addEventListener("keydown",onEvent.bind(this,true),true);doc.addEventListener("mousedown",onEvent.bind(this,false),true);this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"};var KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"};var MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"};var KEY_CHAR=/[a-z0-9*]/;var IDENT_CHAR=/U\+/;var ARROW_KEY=/^arrow/;var SPACE_KEY=/^space(bar)?/;var ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(lKey===" "||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if(lKey=="multiply"){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){validKey=String.fromCharCode(32+keyCode)}else if(keyCode>=112&&keyCode<=123){validKey="f"+(keyCode-112+1)}else if(keyCode>=48&&keyCode<=57){validKey=String(keyCode-48)}else if(keyCode>=96&&keyCode<=105){validKey=String(keyCode-96)}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":");var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo},{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map(function(keyComboString){return parseKeyComboString(keyComboString)})}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true}}return false},_collectKeyBindings:function(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings});if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1})}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)},this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};var MAX_RADIUS_PX=300;var MIN_DURATION_MS=800;var distance=function(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)};Polymer({_template:html`<!--css-build:shadow--><style scope="paper-ripple">:host {
  border-radius: inherit;
        bottom: 0;
        display: block;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        
        transform: translate3d(0, 0, 0);
}

.ripple {
  background-color: currentcolor;
        left: 0;
        opacity: var(--paper-ripple-opacity, 0.25);
        pointer-events: none;
        position: absolute;
        will-change: height, transform, width;
}

.ripple, :host(.circle) {
  border-radius: 50%;
}

</style>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{center:{type:Boolean,value:false},holdDown:{type:Boolean,value:false,observer:"_holdDownChanged"},recenters:{type:Boolean,value:false},noink:{type:Boolean,value:false}},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},created:function(){this.ripples=[]},attached:function(){this.keyEventTarget=this.parentNode.nodeType==11?dom(this).getOwnerRoot().host:this.parentNode;this.keyEventTarget=this.keyEventTarget;this.listen(this.keyEventTarget,"up","uiUpAction");this.listen(this.keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},simulatedRipple:function(){this.downAction();this.async(function(){this.upAction()}.bind(this),1)},uiDownAction:function(e){if(!this.noink)this.downAction(e)},downAction:function(e){if(this.ripples.length&&this.holdDown)return;this.debounce("show ripple",function(){this.__showRipple(e)},1)},clear:function(){this.__hideRipple();this.holdDown=false},showAndHoldDown:function(){this.ripples.forEach(ripple=>{ripple.remove()});this.ripples=[];this.holdDown=true},__showRipple:function(e){var rect=this.getBoundingClientRect();var roundedCenterX=function(){return Math.round(rect.width/2)};var roundedCenterY=function(){return Math.round(rect.height/2)};var centered=!e||this.center;if(centered){var x=roundedCenterX();var y=roundedCenterY()}else{var sourceEvent=e.detail.sourceEvent;var x=Math.round(sourceEvent.clientX-rect.left);var y=Math.round(sourceEvent.clientY-rect.top)}var corners=[{x:0,y:0},{x:rect.width,y:0},{x:0,y:rect.height},{x:rect.width,y:rect.height}];var cornerDistances=corners.map(function(corner){return Math.round(distance(x,y,corner.x,corner.y))});var radius=Math.min(MAX_RADIUS_PX,Math.max.apply(Math,cornerDistances));var startTranslate=x-radius+"px, "+(y-radius)+"px";if(this.recenters&&!centered){var endTranslate=roundedCenterX()-radius+"px, "+(roundedCenterY()-radius)+"px"}else{var endTranslate=startTranslate}var ripple=document.createElement("div");ripple.classList.add("ripple");ripple.style.height=ripple.style.width=2*radius+"px";this.ripples.push(ripple);this.shadowRoot.appendChild(ripple);ripple.animate({transform:["translate("+startTranslate+") scale(0)","translate("+endTranslate+") scale(1)"]},{duration:Math.max(MIN_DURATION_MS,Math.log(radius)*radius)||0,easing:"cubic-bezier(.2, .9, .1, .9)",fill:"forwards"})},uiUpAction:function(e){if(!this.noink)this.upAction()},upAction:function(e){if(!this.holdDown)this.debounce("hide ripple",function(){this.__hideRipple()},1)},__hideRipple:function(){Promise.all(this.ripples.map(function(ripple){return new Promise(function(resolve){var removeRipple=function(){ripple.remove();resolve()};var opacity=getComputedStyle(ripple).opacity;if(!opacity.length){removeRipple()}else{var animation=ripple.animate({opacity:[opacity,0]},{duration:150,fill:"forwards"});animation.addEventListener("finish",removeRipple);animation.addEventListener("cancel",removeRipple)}})})).then(function(){this.fire("transitionend")}.bind(this));this.ripples=[]},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newHoldDown,oldHoldDown){if(oldHoldDown===undefined)return;if(newHoldDown)this.downAction();else this.upAction()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:"_pressedChanged"},toggles:{type:Boolean,value:false,reflectToAttribute:true},active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},pointerDown:{type:Boolean,readOnly:true,value:false},receivedFocusFromKeyboard:{type:Boolean,readOnly:true},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=false}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false)},_upHandler:function(){this._setPointerDown(false);this._setPressed(false)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(false)},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(false)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};const template$1=document.createElement("template");template$1.innerHTML=`<dom-module id="cr-hidden-style" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-hidden-style">[hidden], :host([hidden]) {\n  display: none !important;\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$1.content.cloneNode(true));// Copyright 2019 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style" scope="cr-button">:host {
  --active-shadow-rgb: var(--google-grey-800-rgb);
        --active-shadow-action-rgb: var(--google-blue-refresh-500-rgb);
        --bg-action: var(--google-blue-600);
        --border-color: var(--google-grey-refresh-300);
        --disabled-bg-action: var(--google-grey-refresh-100);
        --disabled-bg: white;
        --disabled-border-color: var(--google-grey-refresh-100);
        --focus-shadow-color: rgba(var(--google-blue-600-rgb), .4);
        --hover-bg-action: rgba(var(--google-blue-600-rgb), .9);
        --hover-bg-color: rgba(var(--google-blue-refresh-500-rgb), .04);
        --hover-border-color: var(--google-blue-refresh-100);
        --hover-shadow-action-rgb: var(--google-blue-refresh-500-rgb);
        --ink-color-action: white;
        
        --ink-color: var(--google-blue-600);
        --ripple-opacity-action: .32;
        --ripple-opacity: .1;
        --text-color-action: white;
        --text-color: var(--google-blue-600);
}

@media (prefers-color-scheme: dark) {
:host {
  --active-bg: black linear-gradient(rgba(255, 255, 255, .06),
                                             rgba(255, 255, 255, .06));
          --active-shadow-rgb: 0, 0, 0;
          --active-shadow-action-rgb: var(--google-blue-refresh-500-rgb);
          --bg-action: var(--google-blue-refresh-300);
          --border-color: var(--google-grey-refresh-700);
          --disabled-bg-action: var(--google-grey-800);
          
          --disabled-bg: transparent;
          --disabled-border-color: var(--google-grey-800);
          --focus-shadow-color: rgba(var(--google-blue-refresh-300-rgb), .5);
          --hover-bg-action: var(--bg-action)
              linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08));
          --hover-bg-color: rgba(var(--google-blue-refresh-300-rgb), .08);
          --ink-color-action: black;
          --ink-color: var(--google-blue-refresh-300);
          --ripple-opacity-action: .16;
          --ripple-opacity: .16;
          --text-color-action: var(--google-grey-900);
          --text-color: var(--google-blue-refresh-300);
}

}

:host {
  --paper-ripple-opacity: var(--ripple-opacity);
        -webkit-tap-highlight-color: transparent;
        align-items: center;
        border: 1px solid var(--border-color);
        border-radius: 4px;
        box-sizing: border-box;
        color: var(--text-color);
        cursor: pointer;
        display: inline-flex;
        flex-shrink: 0;
        font-weight: 500;
        height: var(--cr-button-height);
        justify-content: center;
        min-width: 5.14em;
        outline-width: 0;
        padding: 8px 16px;
        position: relative;
        user-select: none;
}

:host-context(.focus-outline-visible):host(:focus) {
  box-shadow: 0 0 0 2px var(--focus-shadow-color);
}

:host(:active) {
  background: var(--active-bg);
        box-shadow:
            0 1px 2px 0 rgba(var(--active-shadow-rgb), .3),
            0 3px 6px 2px rgba(var(--active-shadow-rgb), .15);
}

:host(:hover) {
  background-color: var(--hover-bg-color);
}

@media (prefers-color-scheme: light) {
:host(:hover) {
  border-color: var(--hover-border-color);
}

}

:host(.action-button) {
  --ink-color: var(--ink-color-action);
        --paper-ripple-opacity: var(--ripple-opacity-action);
        background-color: var(--bg-action);
        border: none;
        color: var(--text-color-action);
}

:host(.action-button:active) {
  box-shadow:
            0 1px 2px 0 rgba(var(--active-shadow-action-rgb), .3),
            0 3px 6px 2px rgba(var(--active-shadow-action-rgb), .15);
}

:host(.action-button:hover) {
  background: var(--hover-bg-action);
}

@media (prefers-color-scheme: light) {
:host(.action-button:not(:active):hover) {
  box-shadow:
              0 1px 2px 0 rgba(var(--hover-shadow-action-rgb), .3),
              0 1px 3px 1px rgba(var(--hover-shadow-action-rgb), .15);
}

}

:host([disabled]) {
  background-color: var(--disabled-bg);
        border-color: var(--disabled-border-color);
        color: var(--google-grey-600);
        cursor: auto;
        pointer-events: none;
}

:host(.action-button[disabled]) {
  background-color: var(--disabled-bg-action);
        border-color: transparent;
}

:host(.cancel-button) {
  margin-inline-end: 8px;
}

:host(.action-button), :host(.cancel-button) {
  line-height: 154%;
}

paper-ripple {
  color: var(--ink-color);
        height: var(--paper-ripple-height);
        width: var(--paper-ripple-width);
        
        left: var(--paper-ripple-left, 0);
        top: var(--paper-ripple-top, 0);
}

</style>
    <slot></slot>
<!--_html_template_end_-->`,is:"cr-button",behaviors:[PaperRippleBehavior],properties:{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},circleRipple:{type:Boolean,value:false}},hostAttributes:{"aria-disabled":"false",role:"button",tabindex:0},listeners:{blur:"onBlur_",click:"onClick_",keydown:"onKeyDown_",keyup:"onKeyUp_",pointerdown:"onPointerDown_",tap:"onTap_"},spaceKeyDown_:false,timeoutIds_:null,ready(){FocusOutlineManager.forDocument(document);this.timeoutIds_=new Set},detached(){this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()},setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout(()=>{this.timeoutIds_.delete(id);fn()},delay);this.timeoutIds_.add(id)},disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",Boolean(this.disabled));this.applyTabIndex_()},applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value)},onBlur_(){this.spaceKeyDown_=false},onClick_(e){if(this.disabled){e.stopImmediatePropagation()}},onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){this.lastKeyDownKey_=null;return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_(()=>this.getRipple().uiUpAction(),100)}else if(e.key===" "){this.spaceKeyDown_=true}},onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}},onPointerDown_(){this.ensureRipple()},onTap_(){},_createRipple(){const ripple=PaperRippleBehavior._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}});// Copyright 2017 The Chromium Authors. All rights reserved.
const CrContainerShadowSide={TOP:"top",BOTTOM:"bottom"};const CrContainerShadowBehavior={intersectionObserver_:null,dropShadows_:null,intersectionProbes_:null,sides_:null,ready(){this.dropShadows_=new Map;this.intersectionProbes_=new Map},attached(){const hasBottomShadow=this.$.container.hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach(side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow);this.intersectionProbes_.set(side,document.createElement("div"))});this.$.container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),this.$.container);this.$.container.prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));if(hasBottomShadow){this.$.container.parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),this.$.container.nextSibling);this.$.container.append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM))}this.enableShadowBehavior(true)},detached(){this.enableShadowBehavior(false)},getIntersectionObserver_(){const callback=entries=>{for(const entry of entries){const target=entry.target;this.sides_.forEach(side=>{if(target===this.intersectionProbes_.get(side)){this.dropShadows_.get(side).classList.toggle("has-shadow",entry.intersectionRatio===0)}})}};return new IntersectionObserver(callback,{root:this.$.container,threshold:0})},enableShadowBehavior(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout(()=>{if(this.intersectionObserver_){this.intersectionProbes_.forEach(probe=>{this.intersectionObserver_.observe(probe)})}})},showDropShadows(){assert(!this.intersectionObserver_);assert(this.sides_);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("has-shadow",true)}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$2=html`<custom-style>
  <style is="custom-style" css-build="shadow">[hidden] {
  display: none !important;
}

</style>
</custom-style>
<custom-style>
  <style is="custom-style" css-build="shadow">html {
  --layout_-_display:  flex;;

      --layout-inline_-_display:  inline-flex;;

      --layout-horizontal_-_display:  var(--layout_-_display); --layout-horizontal_-_flex-direction:  row;;

      --layout-horizontal-reverse_-_display:  var(--layout_-_display); --layout-horizontal-reverse_-_flex-direction:  row-reverse;;

      --layout-vertical_-_display:  var(--layout_-_display); --layout-vertical_-_flex-direction:  column;;

      --layout-vertical-reverse_-_display:  var(--layout_-_display); --layout-vertical-reverse_-_flex-direction:  column-reverse;;

      --layout-wrap_-_flex-wrap:  wrap;;

      --layout-wrap-reverse_-_flex-wrap:  wrap-reverse;;

      --layout-flex-auto_-_flex:  1 1 auto;;

      --layout-flex-none_-_flex:  none;;

      --layout-flex_-_flex:  1; --layout-flex_-_flex-basis:  0.000000001px;;

      --layout-flex-2_-_flex:  2;;

      --layout-flex-3_-_flex:  3;;

      --layout-flex-4_-_flex:  4;;

      --layout-flex-5_-_flex:  5;;

      --layout-flex-6_-_flex:  6;;

      --layout-flex-7_-_flex:  7;;

      --layout-flex-8_-_flex:  8;;

      --layout-flex-9_-_flex:  9;;

      --layout-flex-10_-_flex:  10;;

      --layout-flex-11_-_flex:  11;;

      --layout-flex-12_-_flex:  12;;

      

      --layout-start_-_align-items:  flex-start;;

      --layout-center_-_align-items:  center;;

      --layout-end_-_align-items:  flex-end;;

      --layout-baseline_-_align-items:  baseline;;

      

      --layout-start-justified_-_justify-content:  flex-start;;

      --layout-center-justified_-_justify-content:  center;;

      --layout-end-justified_-_justify-content:  flex-end;;

      --layout-around-justified_-_justify-content:  space-around;;

      --layout-justified_-_justify-content:  space-between;;

      --layout-center-center_-_align-items:  var(--layout-center_-_align-items); --layout-center-center_-_justify-content:  var(--layout-center-justified_-_justify-content);;

      

      --layout-self-start_-_align-self:  flex-start;;

      --layout-self-center_-_align-self:  center;;

      --layout-self-end_-_align-self:  flex-end;;

      --layout-self-stretch_-_align-self:  stretch;;

      --layout-self-baseline_-_align-self:  baseline;;

      

      --layout-start-aligned_-_align-content:  flex-start;;

      --layout-end-aligned_-_align-content:  flex-end;;

      --layout-center-aligned_-_align-content:  center;;

      --layout-between-aligned_-_align-content:  space-between;;

      --layout-around-aligned_-_align-content:  space-around;;

      

      --layout-block_-_display:  block;;

      --layout-invisible_-_visibility:  hidden !important;;

      --layout-relative_-_position:  relative;;

      --layout-fit_-_position:  absolute; --layout-fit_-_top:  0; --layout-fit_-_right:  0; --layout-fit_-_bottom:  0; --layout-fit_-_left:  0;;

      --layout-scroll_-_-webkit-overflow-scrolling:  touch; --layout-scroll_-_overflow:  auto;;

      --layout-fullbleed_-_margin:  0; --layout-fullbleed_-_height:  100vh;;

      

      --layout-fixed-top_-_position:  fixed; --layout-fixed-top_-_top:  0; --layout-fixed-top_-_left:  0; --layout-fixed-top_-_right:  0;;

      --layout-fixed-right_-_position:  fixed; --layout-fixed-right_-_top:  0; --layout-fixed-right_-_right:  0; --layout-fixed-right_-_bottom:  0;;

      --layout-fixed-bottom_-_position:  fixed; --layout-fixed-bottom_-_right:  0; --layout-fixed-bottom_-_bottom:  0; --layout-fixed-bottom_-_left:  0;;

      --layout-fixed-left_-_position:  fixed; --layout-fixed-left_-_top:  0; --layout-fixed-left_-_bottom:  0; --layout-fixed-left_-_left:  0;;
}

</style>
</custom-style>`;template$2.setAttribute("style","display: none;");document.head.appendChild(template$2.content);var style=document.createElement("style");style.textContent="[hidden] { display: none !important; }";document.head.appendChild(style);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}}byKey(key){this.key=key;return this.value}}IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:true},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:true},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`<!--css-build:shadow--><style scope="iron-icon">:host {
  display: var(--layout-inline_-_display);
        align-items: var(--layout-center-center_-_align-items); justify-content: var(--layout-center-center_-_justify-content);
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        ;
}

:host([hidden]) {
  display: none;
}

</style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(this._iconName===""){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=false}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});// Copyright 2018 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-icon-button">:host {
  --cr-icon-button-fill-color: var(--google-grey-refresh-700);
        --cr-icon-button-icon-start-offset: 0;
        --cr-icon-button-icon-size: 20px;
        --cr-icon-button-size: 36px;
        --cr-icon-button-height: var(--cr-icon-button-size);
        --cr-icon-button-transition: 150ms ease-in-out;
        --cr-icon-button-width: var(--cr-icon-button-size);
        
        -webkit-tap-highlight-color: transparent;
        border-radius: 4px;
        color: var(--cr-icon-button-stroke-color,
            var(--cr-icon-button-fill-color));
        cursor: pointer;
        display: inline-flex;
        flex-shrink: 0;
        height: var(--cr-icon-button-height);
        margin-inline-end: var(--cr-icon-button-margin-end,
            var(--cr-icon-ripple-margin));
        margin-inline-start: var(--cr-icon-button-margin-start);
        outline: none;
        user-select: none;
        vertical-align: middle;
        width: var(--cr-icon-button-width);
}

:host([disabled]) {
  cursor: initial;
        opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

:host(.no-overlap) {
  --cr-icon-button-margin-end: 0;
        --cr-icon-button-margin-start: 0;
}

:host-context([dir=rtl]):host(:not([dir=ltr])) {
  transform: scaleX(-1);
}

:host(:not([iron-icon])) #maskedImage {
  -webkit-mask-image: var(--cr-icon-image);
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: var(--cr-icon-button-icon-size);
        background-color: var(--cr-icon-button-fill-color);
        height: 100%;
        transition: background-color var(--cr-icon-button-transition);
        width: 100%;
}

#icon {
  align-items: center;
        border-radius: 4px;
        display: flex;
        height: 100%;
        justify-content: center;
        padding-inline-start: var(--cr-icon-button-icon-start-offset);
        
        position: relative;
        width: 100%;
}

iron-icon {
  --iron-icon-fill-color: var(--cr-icon-button-fill-color);
        --iron-icon-stroke-color: var(--cr-icon-button-stroke-color, none);
        --iron-icon-height: var(--cr-icon-button-icon-size);
        --iron-icon-width: var(--cr-icon-button-icon-size);
        transition: fill var(--cr-icon-button-transition),
            stroke var(--cr-icon-button-transition);
}

paper-ripple {
  --paper-ripple-opacity: var(--cr-icon-button-ripple-opacity, .21);
}

@media (prefers-color-scheme: dark) {
:host {
  --cr-icon-button-fill-color: var(--google-grey-refresh-500);
}

paper-ripple {
  --paper-ripple-opacity: var(--cr-icon-button-ripple-opacity, .4);
}

}

</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`,is:"cr-icon-button",behaviors:[PaperRippleBehavior],properties:{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},disableRipple:{type:Boolean,value:false},ironIcon:{type:String,observer:"onIronIconChanged_",reflectToAttribute:true},rippleShowing_:{type:Boolean,value:false,reflectToAttribute:true}},hostAttributes:{"aria-disabled":"false",role:"button",tabindex:0},listeners:{blur:"onBlur_",click:"onClick_",down:"showRipple_",focus:"showRipple_",keydown:"onKeyDown_",keyup:"onKeyUp_",pointerdown:"ensureRipple",up:"hideRipple_"},spaceKeyDown_:false,hideRipple_(){if(this.hasRipple()){this.getRipple().clear();this.rippleShowing_=false}},showRipple_(){if(!this.noink&&!this.disabled&&!this.disableRipple){this.getRipple().showAndHoldDown();this.rippleShowing_=true}},disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()},applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value)},onBlur_(){this.spaceKeyDown_=false;this.hideRipple_()},onClick_(e){if(this.disabled){e.stopImmediatePropagation()}},onIronIconChanged_(){this.shadowRoot.querySelectorAll("iron-icon").forEach(el=>el.remove());if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");icons.forEach(icon=>{const ironIcon=document.createElement("iron-icon");ironIcon.icon=icon;this.$.icon.appendChild(ironIcon);if(ironIcon.shadowRoot){ironIcon.shadowRoot.querySelectorAll("svg","img").forEach(child=>child.setAttribute("role","none"))}});if(!this.hasRipple()){return}if(icons.length>1){this.getRipple().classList.remove("circle")}else{this.getRipple().classList.add("circle")}},onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}},onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}},_createRipple(){this._rippleContainer=this.$.icon;const ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");if(!(this.ironIcon||"").includes(",")){ripple.classList.add("circle")}return ripple}});const template$3=document.createElement("template");template$3.innerHTML=`<dom-module id="cr-icons" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-icons">.icon-arrow-back {\n  --cr-icon-image: url(../images/icon_arrow_back.svg);\n}\n\n.icon-arrow-dropdown {\n  --cr-icon-image: url(../images/icon_arrow_dropdown.svg);\n}\n\n.icon-cancel {\n  --cr-icon-image: url(../images/icon_cancel.svg);\n}\n\n.icon-clear {\n  --cr-icon-image: url(../images/icon_clear.svg);\n}\n\n.icon-copy-content {\n  --cr-icon-image: url(../images/icon_copy_content.svg);\n}\n\n.icon-delete-gray {\n  --cr-icon-image: url(../images/icon_delete_gray.svg);\n}\n\n.icon-picture-delete {\n  --cr-icon-image: url(../images/icon_picture_delete.svg);\n}\n\n.icon-expand-less {\n  --cr-icon-image: url(../images/icon_expand_less.svg);\n}\n\n.icon-expand-more {\n  --cr-icon-image: url(../images/icon_expand_more.svg);\n}\n\n.icon-external {\n  --cr-icon-image: url(../images/open_in_new.svg);\n}\n\n.icon-more-vert {\n  --cr-icon-image: url(../images/icon_more_vert.svg);\n}\n\n.icon-refresh {\n  --cr-icon-image: url(../images/icon_refresh.svg);\n}\n\n.icon-search {\n  --cr-icon-image: url(../images/icon_search.svg);\n}\n\n.icon-settings {\n  --cr-icon-image: url(../images/icon_settings.svg);\n}\n\n.icon-visibility {\n  --cr-icon-image: url(../images/icon_visibility.svg);\n}\n\n.icon-visibility-off {\n  --cr-icon-image: url(../images/icon_visibility_off.svg);\n}\n\n.subpage-arrow {\n  --cr-icon-image: url(../images/arrow_right.svg);\n}\n\n.cr-icon {\n  -webkit-mask-image: var(--cr-icon-image);\n        -webkit-mask-position: center;\n        -webkit-mask-repeat: no-repeat;\n        -webkit-mask-size: var(--cr-icon-size);\n        background-color: var(--google-grey-refresh-700);\n        flex-shrink: 0;\n        height: var(--cr-icon-ripple-size);\n        margin-inline-end: var(--cr-icon-ripple-margin);\n        margin-inline-start: var(--cr-icon-button-margin-start);\n        user-select: none;\n        width: var(--cr-icon-ripple-size);\n}\n\n:host-context([dir=rtl]) .cr-icon {\n  transform: scaleX(-1);\n}\n\n.cr-icon.no-overlap {\n  margin-inline-end: 0;\n        margin-inline-start: 0;\n}\n\n@media (prefers-color-scheme: dark) {\n.cr-icon {\n  background-color: var(--google-grey-refresh-500);\n}\n\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$3.content.cloneNode(true));// Copyright 2016 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-icons" scope="cr-dialog">dialog {
  --scroll-border-color: var(--paper-grey-300);
        --scroll-border: 1px solid var(--scroll-border-color);
        border: 0;
        border-radius: 8px;
        bottom: 50%;
        box-shadow: 0 0 16px rgba(0, 0, 0, 0.12),
                    0 16px 16px rgba(0, 0, 0, 0.24);
        color: inherit;
        overflow-y: hidden;
        padding: 0;
        top: 50%;
        width: var(--cr-dialog-width, 512px);
}

@media (prefers-color-scheme: dark) {
dialog {
  --scroll-border-color: var(--google-grey-refresh-700);
          background-color: var(--google-grey-900);
          
          background-image: linear-gradient(rgba(255, 255, 255, .04),
                                            rgba(255, 255, 255, .04));
}

}

dialog[open] #content-wrapper {
  display: flex;
        flex-direction: column;
        max-height: 100vh;
        overflow: auto;
}

.top-container, :host ::slotted([slot=button-container]), :host ::slotted([slot=footer]) {
  flex-shrink: 0;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.6);
        bottom: 0;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
}

:host ::slotted([slot=body]) {
  color: var(--cr-secondary-text-color);
        padding: 0 20px;
}

:host ::slotted([slot=title]) {
  color: var(--cr-primary-text-color);
        flex: 1;
        font-size: calc(15 / 13 * 100%);
        line-height: 1;
        padding-bottom: 16px;
        padding-inline-end: 20px;
        padding-inline-start: 20px;
        padding-top: 20px;
}

:host ::slotted([slot=button-container]) {
  display: flex;
        justify-content: flex-end;
        padding-bottom: 16px;
        padding-inline-end: 16px;
        padding-inline-start: 16px;
        padding-top: 24px;
}

:host ::slotted([slot=footer]) {
  border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
        border-top: 1px solid #dbdbdb;
        margin: 0;
        padding: 16px 20px;
}

@media (prefers-color-scheme: dark) {
:host ::slotted([slot=footer]) {
  border-top-color: var(--cr-separator-color);
}

}

.body-container {
  box-sizing: border-box;
        display: flex;
        flex-direction: column;
        min-height: 1.375rem; 
        overflow: auto;
}

:host {
  --transparent-border: 1px solid transparent;
}

#cr-container-shadow-top {
  border-bottom: var(--cr-dialog-body-border-top,
            var(--transparent-border));
}

#cr-container-shadow-bottom {
  border-bottom: var(--cr-dialog-body-border-bottom,
            var(--transparent-border));
}

#cr-container-shadow-top.has-shadow, #cr-container-shadow-bottom.has-shadow {
  border-bottom: var(--scroll-border);
}

.top-container {
  align-items: flex-start;
        display: flex;
        min-height: var(--cr-dialog-top-container-min-height, 31px);
}

.title-container {
  display: flex;
        flex: 1;
        outline: none;
}

#close {
  align-self: flex-start;
        margin-inline-end: 4px;
        margin-top: 4px;
}

</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title">
      <!-- This wrapper is necessary, such that the "pulse" animation is not
        erroneously played when the user clicks on the outer-most scrollbar. -->
      <div id="content-wrapper" part="wrapper">
        <div class="top-container">
          <div id="title" class="title-container" tabindex="-1">
            <slot name="title"></slot>
          </div>
          <cr-icon-button id="close" class="icon-clear" hidden$="[[!showCloseButton]]" aria-label$="[[closeText]]" on-click="cancel" on-keypress="onCloseKeypress_">
          </cr-icon-button>
        </div>
        <slot name="header"></slot>
        <div class="body-container" id="container" show-bottom-shadow="" part="body-container">
          <slot name="body"></slot>
        </div>
        <slot name="button-container"></slot>
        <slot name="footer"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`,is:"cr-dialog",behaviors:[CrContainerShadowBehavior],properties:{open:{type:Boolean,value:false,reflectToAttribute:true},closeText:String,ignorePopstate:{type:Boolean,value:false},ignoreEnterKey:{type:Boolean,value:false},consumeKeydownEvent:{type:Boolean,value:false},noCancel:{type:Boolean,value:false},showCloseButton:{type:Boolean,value:false},showOnAttach:{type:Boolean,value:false}},listeners:{pointerdown:"onPointerdown_"},intersectionObserver_:null,mutationObserver_:null,boundKeydown_:null,ready(){window.addEventListener("popstate",function(){if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}.bind(this));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}},attached(){const mutationObserverCallback=function(){if(this.$.dialog.open){this.enableShadowBehavior(true);this.addKeydownListener_()}else{this.enableShadowBehavior(false);this.removeKeydownListener_()}}.bind(this);this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}},detached(){this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}},addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)},removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null},showModal(){this.$.dialog.showModal();assert(this.$.dialog.open);this.open=true;this.fire("cr-dialog-open")},cancel(){this.fire("cancel");this.$.dialog.close();assert(!this.$.dialog.open);this.open=false},close(){this.$.dialog.close("success");assert(!this.$.dialog.open);this.open=false},setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)},onCloseKeypress_(e){e.stopPropagation()},onNativeDialogClose_(e){if(e.target!==this.getNative()){return}e.stopPropagation();this.fire("close")},onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;this.fire("cancel")},getNative(){return this.$.dialog},onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some(el=>el.tagName==="CR-INPUT"&&el.type!=="search");if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}},onKeydown_(e){assert(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()},onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()},focus(){this.$$(".title-container").focus()}});const template$4=document.createElement("template");template$4.innerHTML=`<dom-module id="cr-shared-style" assetpath="chrome://resources/">\n  <template>\n    <style include="cr-hidden-style cr-icons" scope="cr-shared-style">html, :host {\n  --scrollable-border-color: var(--google-grey-refresh-300);\n}\n\n@media (prefers-color-scheme: dark) {\nhtml, :host {\n  --scrollable-border-color: var(--google-grey-refresh-700);\n}\n\n}\n\n[actionable] {\n  cursor: pointer;\n}\n\n.hr {\n  border-top: var(--cr-separator-line);\n}\n\niron-list.cr-separators > *:not([first]) {\n  border-top: var(--cr-separator-line);\n}\n\n[scrollable] {\n  border-color: transparent;\n        border-style: solid;\n        border-width: 1px 0;\n        overflow-y: auto;\n}\n\n[scrollable].is-scrolled {\n  border-top-color: var(--scrollable-border-color);\n}\n\n[scrollable].can-scroll:not(.scrolled-to-bottom) {\n  border-bottom-color: var(--scrollable-border-color);\n}\n\n[scrollable] iron-list > :not(.no-outline):focus, [selectable]:focus, [selectable] > :focus {\n  background-color: var(--cr-focused-item-color);\n        outline: none;\n}\n\n.scroll-container {\n  display: flex;\n        flex-direction: column;\n        min-height: 1px;\n}\n\n[selectable] > * {\n  cursor: pointer;\n}\n\n.cr-centered-card-container {\n  box-sizing: border-box;\n        display: block;\n        height: inherit;\n        margin: 0 auto;\n        max-width: var(--cr-centered-card-max-width);\n        min-width: 550px;\n        position: relative;\n        width: calc(100% * var(--cr-centered-card-width-percentage));\n}\n\n.cr-container-shadow {\n  box-shadow: inset 0 5px 6px -3px rgba(0, 0, 0, .4);\n        height: var(--cr-container-shadow-height);\n        left: 0;\n        margin: 0 0 var(--cr-container-shadow-margin);\n        opacity: 0;\n        pointer-events: none;\n        position: relative;\n        right: 0;\n        top: 0;\n        transition: opacity 500ms;\n        z-index: 1;\n}\n\n#cr-container-shadow-bottom {\n  margin-bottom: 0;\n        margin-top: var(--cr-container-shadow-margin);\n        transform: scaleY(-1);\n}\n\n#cr-container-shadow-top.has-shadow, #cr-container-shadow-bottom.has-shadow {\n  opacity: var(--cr-container-shadow-max-opacity);\n}\n\n.cr-row {\n  align-items: center;\n        border-top: var(--cr-separator-line);\n        display: flex;\n        min-height: var(--cr-section-min-height);\n        padding: 0 var(--cr-section-padding);\n}\n\n.cr-row.first, .cr-row.continuation {\n  border-top: none;\n}\n\n.cr-row-gap {\n  padding-inline-start: 16px;\n}\n\n.cr-button-gap {\n  margin-inline-start: 8px;\n}\n\npaper-tooltip {\n  --paper-tooltip_-_font-size:  92.31%; --paper-tooltip_-_font-weight:  500; --paper-tooltip_-_max-width:  330px; --paper-tooltip_-_min-width:  var(--paper-tooltip-min-width, 200px); --paper-tooltip_-_padding:  var(--paper-tooltip-padding, 10px 8px);\n}\n\n.cr-padded-text {\n  padding-block-end: var(--cr-section-vertical-padding);\n        padding-block-start: var(--cr-section-vertical-padding);\n}\n\n.cr-title-text {\n  color: var(--cr-title-text-color);\n        font-size: 107.6923%; \n        font-weight: 500;\n}\n\n.cr-secondary-text {\n  color: var(--cr-secondary-text-color);\n        font-weight: 400;\n}\n\n.cr-form-field-label {\n  color: var(--cr-form-field-label-color);\n        display: block;\n        font-size: var(--cr-form-field-label-font-size);\n        font-weight: 500;\n        letter-spacing: .4px;\n        line-height: var(--cr-form-field-label-line-height);\n        margin-bottom: 8px;\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$4.content.cloneNode(true));const template$5=document.createElement("template");template$5.innerHTML=`<dom-module id="cr-input-style" assetpath="chrome://resources/">\n  <template>\n    <style scope="cr-input-style">:host {\n  --cr-input-background-color: var(--google-grey-refresh-100);\n        --cr-input-color: var(--cr-primary-text-color);\n        --cr-input-error-color: var(--google-red-600);\n        --cr-input-focus-color: var(--google-blue-600);\n        --cr-input-placeholder-color: var(--cr-secondary-text-color);\n        display: block;\n        \n        outline: none;\n}\n\n@media (prefers-color-scheme: dark) {\n:host {\n  --cr-input-background-color: rgba(0, 0, 0, .3);\n          --cr-input-error-color: var(--google-red-refresh-300);\n          --cr-input-focus-color: var(--google-blue-refresh-300);\n}\n\n}\n\n:host([focused_]:not([readonly]):not([invalid])) #label {\n  color: var(--cr-input-focus-color);\n}\n\n#input-container {\n  border-radius: var(--cr-input-border-radius, 4px);\n        overflow: hidden;\n        position: relative;\n        width: var(--cr-input-width, 100%);\n}\n\n#inner-input-container {\n  background-color: var(--cr-input-background-color);\n        box-sizing: border-box;\n        padding: 0;\n}\n\n#input {\n  -webkit-appearance: none;\n        \n        background-color: transparent;\n        border: none;\n        box-sizing: border-box;\n        caret-color: var(--cr-input-focus-color);\n        color: var(--cr-input-color);\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        min-height: var(--cr-input-min-height, auto);\n        outline: none;\n\n        \n        padding-bottom: var(--cr-input-padding-bottom, 6px);\n        padding-inline-end: var(--cr-input-padding-end, 8px);\n        padding-inline-start: var(--cr-input-padding-start, 8px);\n        padding-top: var(--cr-input-padding-top, 6px);\n\n        text-align: inherit;\n        text-overflow: ellipsis;\n        width: 100%;\n}\n\n#underline {\n  border-bottom: 2px solid var(--cr-input-focus-color);\n        border-radius: var(--cr-input-underline-border-radius, 0);\n        bottom: 0;\n        box-sizing: border-box;\n        height: var(--cr-input-underline-height, 0);\n        left: 0;\n        margin: auto;\n        opacity: 0;\n        position: absolute;\n        right: 0;\n        transition: opacity 120ms ease-out, width 0s linear 180ms;\n        width: 0;\n}\n\n:host([invalid]) #underline, :host([force-underline]) #underline, :host([focused_]:not([readonly])) #underline {\n  opacity: 1;\n        transition: opacity 120ms ease-in, width 180ms ease-out;\n        width: 100%;\n}\n\n</style>\n  </template>\n</dom-module>\n`;document.body.appendChild(template$5.content.cloneNode(true));// Copyright 2018 The Chromium Authors. All rights reserved.
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-input-style cr-shared-style" scope="cr-input">:host([disabled]) :-webkit-any(#label, #error, #input-container) {
  opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

:host ::slotted(cr-button[slot=suffix]) {
  margin-inline-start: var(--cr-button-edge-spacing) !important;
}

:host([invalid]) #label {
  color: var(--cr-input-error-color);
}

#input {
  border-bottom: var(--cr-input-border-bottom, none);
        letter-spacing: var(--cr-input-letter-spacing);
}

#input::placeholder {
  color: var(--cr-input-placeholder-color);
        letter-spacing: var(--cr-input-placeholder-letter-spacing);
}

:host([invalid]) #input {
  caret-color: var(--cr-input-error-color);
}

:host([readonly]) #input {
  opacity: 0.6;
}

:host([invalid]) #underline {
  border-color: var(--cr-input-error-color);
}

#error {
  color: var(--cr-input-error-color);
        display: var(--cr-input-error-display, block);
        font-size: var(--cr-form-field-label-font-size);
        height: var(--cr-form-field-label-height);
        line-height: var(--cr-form-field-label-line-height);
        margin: 8px 0;
        visibility: hidden;
}

:host([invalid]) #error {
  visibility: visible;
}

#row-container, #inner-input-container {
  align-items: center;
        display: flex;
        
        justify-content: space-between;
        position: relative;
}

#input[type='search']::-webkit-search-cancel-button {
  display: none;
}

:host-context([dir=rtl]) #input[type=url] {
  text-align: right;
}

#input[type=url] {
  direction: ltr;
}

</style>
    <div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
      [[label]]
    </div>
    <div id="row-container" part="row-container">
      <div id="input-container">
        <div id="inner-input-container">
          <slot name="inline-prefix"></slot>
          <!-- Only attributes that are named inconsistently between html and js
              need to use attr$="", such as |tabindex| vs .tabIndex and
              |readonly| vs .readOnly. -->
          <input id="input" disabled="[[disabled]]" autofocus="[[autofocus]]" value="{{value::input}}" tabindex$="[[tabindex]]" type="[[type]]" readonly$="[[readonly]]" maxlength$="[[maxlength]]" pattern$="[[pattern]]" required="[[required]]" minlength$="[[minlength]]" inputmode$="[[inputmode]]" aria-label$="[[getAriaLabel_(ariaLabel, label, placeholder)]]" aria-invalid$="[[getAriaInvalid_(invalid)]]" max="[[max]]" min="[[min]]" on-focus="onInputFocus_" on-blur="onInputBlur_" on-change="onInputChange_" on-keydown="onInputKeydown_" part="input">
          <slot name="inline-suffix"></slot>
        </div>
        <div id="underline"></div>
      </div>
      <slot name="suffix"></slot>
    </div>
    <div id="error">[[displayErrorMessage_]]</div>
<!--_html_template_end_-->`,is:"cr-input",properties:{ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},errorMessage:{type:String,value:"",observer:"onInvalidOrErrorMessageChanged_"},displayErrorMessage_:{type:String,value:""},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true,observer:"onInvalidOrErrorMessageChanged_"},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},inputmode:String,label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},tabindex:{type:Number,value:0,reflectToAttribute:true},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}},hostAttributes:{"aria-disabled":"false"},listeners:{focus:"onFocus_",pointerdown:"onPointerDown_"},originalTabIndex_:null,attached(){if(this.disabled){this.reconcileTabindex_()}},onTypeChanged_(){assert(SUPPORTED_INPUT_TYPES.has(this.type))},get inputElement(){return this.$.input},getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder},getAriaInvalid_(invalid){return invalid?"true":"false"},disabledChanged_(current,previous){this.setAttribute("aria-disabled",this.disabled?"true":"false");this.focused_=false;if(previous!==undefined){this.reconcileTabindex_()}},onInvalidOrErrorMessageChanged_(){this.displayErrorMessage_=this.invalid?this.errorMessage:"";const ERROR_ID="error";const errorElement=this.$$(`#${ERROR_ID}`);if(this.invalid){errorElement.setAttribute("role","alert");this.inputElement.setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.inputElement.removeAttribute("aria-errormessage")}},reconcileTabindex_(){if(this.disabled){this.recordAndUnsetTabIndex_()}else{this.restoreTabIndex_()}},placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}},onFocus_(){if(!this.focusInput()){return}this.inputElement.select()},focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true},recordAndUnsetTabIndex_(){if(this.originalTabIndex_===null){this.originalTabIndex_=this.tabindex}this.tabindex=null},restoreTabIndex_(){this.tabindex=this.originalTabIndex_;this.originalTabIndex_=null},onPointerDown_(e){if(this.disabled){return}if(e.path[0].tagName!=="INPUT"){this.recordAndUnsetTabIndex_();setTimeout(()=>{if(!this.disabled){this.restoreTabIndex_()}},0)}},onInputKeydown_(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}},onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}},onInputChange_(e){this.fire("change",{sourceEvent:e})},onInputFocus_(){this.focused_=true},onInputBlur_(){this.focused_=false},select(start,end){this.focusInput();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert(start===undefined&&end===undefined);this.inputElement.select()}},validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var IronA11yAnnouncer=Polymer({_template:html`<!--css-build:shadow--><style scope="iron-a11y-announcer">:host {
  display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
}

</style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=this}document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(text){this._text="";this.async(function(){this._text=text},100)},_onIronAnnounce:function(event){if(event.detail&&event.detail.text){this.announce(event.detail.text)}}});IronA11yAnnouncer.instance=null;IronA11yAnnouncer.requestAvailability=function(){if(!IronA11yAnnouncer.instance){IronA11yAnnouncer.instance=document.createElement("iron-a11y-announcer")}document.body.appendChild(IronA11yAnnouncer.instance)};// Copyright 2017 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-toast">:host {
  --cr-toast-background: #323232;
        --cr-toast-button-color: var(--google-blue-300);
        --cr-toast-text-color: #fff;
}

@media (prefers-color-scheme: dark) {
:host {
  --cr-toast-background: var(--google-grey-900)
              linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));
          --cr-toast-button-color: var(--google-blue-refresh-300);
          --cr-toast-text-color: var(--google-grey-200);
}

}

:host {
  align-items: center;
        background: var(--cr-toast-background);
        border-radius: 4px;
        bottom: 0;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.28);
        box-sizing: border-box;
        display: flex;
        margin: 24px;
        max-width: 568px;
        min-height: 52px;
        min-width: 288px;
        opacity: 0;
        padding: 0 24px;
        position: fixed;
        transform: translateY(100px);
        transition: opacity 300ms, transform 300ms, visibility 300ms;
        visibility: hidden;
        z-index: 1;
}

:host-context([dir=ltr]) {
  left: 0;
}

:host-context([dir=rtl]) {
  right: 0;
}

:host([open]) {
  opacity: 1;
        transform: translateY(0);
        visibility: visible;
}

:host ::slotted(*) {
  color: var(--cr-toast-text-color);
}

:host ::slotted(cr-button) {
  background-color: transparent !important;
        border: none !important;
        color: var(--cr-toast-button-color) !important;
        margin-inline-start: 32px !important;
        min-width: 52px !important;
        padding: 8px !important;
}

:host ::slotted(cr-button:hover) {
  background-color: transparent !important;
}

</style>
    <slot></slot>
<!--_html_template_end_-->`,is:"cr-toast",properties:{duration:{type:Number,value:0},open:{type:Boolean,value:false,reflectToAttribute:true}},hostAttributes:{role:"alert"},observers:["resetAutoHide_(duration, open)"],hideTimeoutId_:null,resetAutoHide_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout(()=>{this.open=false},this.duration)}},announceA11yMessage_(text){IronA11yAnnouncer.requestAvailability();this.fire("iron-announce",{text:text})},show(duration,text,shouldAnnounceA11y){if(text!==undefined){this.textContent="";const span=document.createElement("span");span.textContent=text;this.appendChild(span);if(shouldAnnounceA11y){this.announceA11yMessage_(text)}}let shouldResetAutoHide=true;if(typeof duration!=="undefined"&&duration>=0&&this.duration!==duration){this.duration=duration;shouldResetAutoHide=false}if(!this.open){this.open=true;shouldResetAutoHide=false}if(shouldResetAutoHide){this.resetAutoHide_()}},hide(){this.open=false}});// Copyright 2019 The Chromium Authors. All rights reserved.
const ScreenWidth={NARROW:0,MEDIUM:1,WIDE:2};function resetTilePosition(tile){tile.style.position="";tile.style.left="";tile.style.top=""}function setTilePosition(tile,{x:x,y:y}){tile.style.position="fixed";tile.style.left=`${x}px`;tile.style.top=`${y}px`}function getHitIndex(rects,x,y){return rects.findIndex(r=>x>=r.left&&x<=r.right&&y>=r.top&&y<=r.bottom)}class MostVisitedElement extends PolymerElement{static get is(){return"ntp-most-visited"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-icons" scope="ntp-most-visited">:host {
  --icon-size: 48px;
    --tile-size: 112px;
    --icon-button-color: var(--google-grey-600);
    --icon-button-color-active: var(--google-grey-refresh-700);
    --tile-hover-color: rgba(var(--google-grey-900-rgb), .1);
}

#container {
  --content-width: calc(var(--column-count) * var(--tile-size)
      
      + 1px);
    display: flex;
    flex-wrap: wrap;
    height: calc(var(--row-count) * 128px);
    justify-content: center;
    opacity: 0;
    overflow: hidden;
    transition: opacity 300ms ease-in-out;
    width: calc(var(--content-width) + 12px);
}

:host([visible_]) #container {
  opacity: 1;
}

#addShortcutIcon {
  -webkit-mask-image: url(chrome://resources/images/add.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--google-grey-900);
    height: 24px;
    width: 24px;
}

:host([use-white-add-icon]) #addShortcutIcon {
  background-color: white;
}

.tile, #addShortcut {
  -webkit-tap-highlight-color: transparent;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: var(--tile-size);
    margin-bottom: 13px;
    margin-top: 3px;
    opacity: 1;
    outline: none;
    padding-top: 16px;
    position: relative;
    text-decoration: none;
    transition-duration: 300ms;
    transition-property: left, top;
    transition-timing-function: ease-in-out;
    user-select: none;
    width: var(--tile-size);
}

:host-context(.focus-outline-visible) .tile:focus, :host-context(.focus-outline-visible) #addShortcut:focus {
  box-shadow: var(--ntp-focus-shadow);
}

#addShortcut {
  background-color: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
}

:host(:not([reordering_])) .tile:hover, :host(:not([reordering_])) #addShortcut:hover, .force-hover {
  background-color: var(--tile-hover-color);
}

.tile-icon {
  align-items: center;
    background-color: var(--ntp-theme-shortcut-background-color);
    border-radius: 50%;
    display: flex;
    height: var(--icon-size);
    justify-content: center;
    width: var(--icon-size);
}

.tile-icon img {
  height: 24px;
    width: 24px;
}

.tile-title {
  align-items: center;
    border-radius: 12px;
    color: var(--ntp-theme-text-color);
    display: flex;
    height: 24px;
    margin-top: 7px;
    padding: 0 8px;
    width: 88px;
}

:host([use-title-pill]) .tile-title {
  background-color: white;
    color: var(--google-grey-800);
}

.tile-title span {
  font-weight: 400;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    text-shadow: var(--ntp-theme-text-shadow);
    white-space: nowrap;
    width: 100%;
}

:host([use-title-pill]) .tile-title span {
  text-shadow: none;
}

.title-rtl {
  direction: rtl;
}

.title-ltr {
  direction: ltr;
}

.tile.dragging {
  background-color: var(--tile-hover-color);
    transition-property: none;
    z-index: 1;
}

cr-icon-button {
  --cr-icon-button-fill-color: var(--icon-button-color);
    --cr-icon-button-size: 28px;
    --cr-icon-button-transition: none;
    margin: 4px 2px;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity 100ms ease-in-out;
}

:host-context([dir=rtl]) cr-icon-button {
  left: 0;
    right: unset;
}

:host(:not([reordering_])) .tile:hover cr-icon-button, .force-hover cr-icon-button {
  opacity: 1;
    transition-delay: 400ms;
}

:host(:not([reordering_])) cr-icon-button:active, :host-context(.focus-outline-visible):host(:not([reordering_])) cr-icon-button:focus, :host(:not([reordering_])) cr-icon-button:hover {
  --cr-icon-button-fill-color: var(--icon-button-color-active);
    opacity: 1;
    transition-delay: 0s;
}

</style>
<div id="container" style="--column-count: [[columnCount_]]; --row-count: [[rowCount_]];">
  <dom-repeat id="tiles" items="[[tiles_]]" on-dom-change="onTilesRendered_">
    <template>
      <a class="tile" draggable="true" href$="[[item.url.url]]" title$="[[item.title]]" on-dragstart="onDragStart_" on-touchstart="onTouchStart_" hidden$="[[isHidden_(index, columnCount_)]]" on-click="onTileClick_" on-keydown="onTileKeyDown_">
        <cr-icon-button id="actionMenuButton" class="icon-more-vert" title="More actions" on-click="onTileActionButtonClick_" tabindex="0" hidden$="[[!customLinksEnabled_]]"></cr-icon-button>
        <cr-icon-button id="removeButton" class="icon-clear" title="Remove" on-click="onTileRemoveButtonClick_" tabindex="0" hidden$="[[customLinksEnabled_]]"></cr-icon-button>
        <div class="tile-icon">
          <img src$="[[getFaviconUrl_(item.url)]]" draggable="false">
        </div>
        <div class$="tile-title [[getTileTitleDirectionClass_(item)]]">
          <span>[[item.title]]</span>
        </div>
      </a>
    </template>
  </dom-repeat>
  <cr-button id="addShortcut" tabindex="0" on-click="onAdd_" hidden$="[[!showAdd_]]" on-keydown="onAddShortcutKeyDown_" noink="">
    <div class="tile-icon">
      <div id="addShortcutIcon" draggable="false"></div>
    </div>
    <div class="tile-title">
      <span>Add shortcut</span>
    </div>
  </cr-button>
  <cr-dialog id="dialog" on-close="onDialogClose_">
    <div slot="title">[[dialogTitle_]]</div>
    <div slot="body">
      <cr-input id="dialogInputName" label="Name" value="{{dialogTileTitle_}}" spellcheck="false" autofocus=""></cr-input>
      <cr-input id="dialogInputUrl" label="URL" value="{{dialogTileUrl_}}" invalid="[[dialogTileUrlInvalid_]]" error-message="Type a valid URL" spellcheck="false" type="url">
      </cr-input>
    </div>
    <div slot="button-container">
      <cr-button class="cancel-button" on-click="onDialogCancel_">
        Cancel
      </cr-button>
      <cr-button class="action-button" on-click="onSave_" disabled$="[[!dialogTileUrl_]]">
        Done
      </cr-button>
    </div>
  </cr-dialog>
  <cr-action-menu id="actionMenu">
    <button id="actionMenuEdit" class="dropdown-item" on-click="onEdit_">
      Edit shortcut
    </button>
    <button id="actionMenuRemove" class="dropdown-item" on-click="onRemove_">
      Remove
    </button>
  </cr-action-menu>
</div>
<cr-toast id="toast" duration="10000">
  <div>[[toastContent_]]</div>
  <dom-if if="[[showToastButtons_]]">
    <template>
      <cr-button id="undo" aria-label="Press Ctrl+Z to undo" on-click="onUndoClick_">
        Undo
      </cr-button>
      <cr-button id="restore" aria-label$="[[getRestoreButtonText_(customLinksEnabled_)]]" on-click="onRestoreDefaultsClick_">
        [[getRestoreButtonText_(customLinksEnabled_)]]
      </cr-button>
    </template>
  </dom-if>
</cr-toast>
<!--_html_template_end_-->`}static get properties(){return{useWhiteAddIcon:{type:Boolean,reflectToAttribute:true},useTitlePill:{type:Boolean,reflectToAttribute:true},columnCount_:{type:Number,computed:`computeColumnCount_(tiles_, screenWidth_, maxTiles_,\n            visible_)`},rowCount_:{type:Number,computed:"computeRowCount_(columnCount_, tiles_)"},customLinksEnabled_:Boolean,dialogTileTitle_:String,dialogTileUrl_:{type:String,observer:"onDialogTileUrlChange_"},dialogTileUrlInvalid_:{type:Boolean,value:false},dialogTitle_:String,reordering_:{type:Boolean,value:false,reflectToAttribute:true},maxTiles_:{type:Number,computed:"computeMaxTiles_(visible_, customLinksEnabled_)"},showAdd_:{type:Boolean,value:false,computed:"computeShowAdd_(tiles_, columnCount_, customLinksEnabled_)"},showToastButtons_:Boolean,screenWidth_:Number,tiles_:Array,toastContent_:String,visible_:{type:Boolean,reflectToAttribute:true}}}get tileElements_(){return Array.from(this.shadowRoot.querySelectorAll(".tile:not([hidden])"))}constructor(){performance.mark("most-visited-creation-start");super();this.adding_=false;const{callbackRouter:callbackRouter,handler:handler}=BrowserProxy.getInstance();this.callbackRouter_=callbackRouter;this.pageHandler_=handler;this.setMostVisitedInfoListenerId_=null;this.actionMenuTargetIndex_=-1;this.dragOffset_=null;this.tileRects_=[]}connectedCallback(){super.connectedCallback();this.isRtl_=window.getComputedStyle(this)["direction"]==="rtl";this.eventTracker_=new EventTracker;this.setMostVisitedInfoListenerId_=this.callbackRouter_.setMostVisitedInfo.addListener(info=>{performance.measure("most-visited-mojo","most-visited-mojo-start");this.visible_=info.visible;this.customLinksEnabled_=info.customLinksEnabled;this.tiles_=info.tiles.slice(0,10)});performance.mark("most-visited-mojo-start");this.eventTracker_.add(document,"visibilitychange",()=>{if(document.visibilityState==="visible"){this.pageHandler_.updateMostVisitedInfo()}});this.pageHandler_.updateMostVisitedInfo();FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.setMostVisitedInfoListenerId_));this.mediaListenerWideWidth_.removeListener(assert(this.boundOnWidthChange_));this.mediaListenerMediumWidth_.removeListener(assert(this.boundOnWidthChange_));this.ownerDocument.removeEventListener("keydown",this.boundOnDocumentKeyDown_);this.eventTracker_.removeAll()}ready(){super.ready();this.boundOnWidthChange_=this.updateScreenWidth_.bind(this);const{matchMedia:matchMedia}=BrowserProxy.getInstance();this.mediaListenerWideWidth_=matchMedia("(min-width: 672px)");this.mediaListenerWideWidth_.addListener(this.boundOnWidthChange_);this.mediaListenerMediumWidth_=matchMedia("(min-width: 560px)");this.mediaListenerMediumWidth_.addListener(this.boundOnWidthChange_);this.updateScreenWidth_();this.boundOnDocumentKeyDown_=(e=>this.onDocumentKeyDown_(e));this.ownerDocument.addEventListener("keydown",this.boundOnDocumentKeyDown_);performance.measure("most-visited-creation","most-visited-creation-start")}clearForceHover_(){const forceHover=this.shadowRoot.querySelector(".force-hover");if(forceHover){forceHover.classList.remove("force-hover")}}computeColumnCount_(){if(!this.visible_){return 0}let maxColumns=3;if(this.screenWidth_===ScreenWidth.WIDE){maxColumns=5}else if(this.screenWidth_===ScreenWidth.MEDIUM){maxColumns=4}const shortcutCount=this.tiles_?this.tiles_.length:0;const canShowAdd=this.maxTiles_>shortcutCount;const tileCount=Math.min(this.maxTiles_,shortcutCount+(canShowAdd?1:0));const columnCount=tileCount<=maxColumns?tileCount:Math.min(maxColumns,Math.ceil(tileCount/2));return columnCount||3}computeRowCount_(){if(this.columnCount_===0){return 0}const shortcutCount=this.tiles_?this.tiles_.length:0;return this.columnCount_<=shortcutCount?2:1}computeMaxTiles_(){return!this.visible_?0:this.customLinksEnabled_?10:8}computeShowAdd_(){return this.customLinksEnabled_&&this.tiles_&&this.tiles_.length<this.columnCount_*2}dragEnd_(x,y){this.dragOffset_=null;const dragElement=this.shadowRoot.querySelector(".tile.dragging");if(!dragElement){this.reordering_=false;return}const dragIndex=this.$.tiles.modelForElement(dragElement).index;dragElement.classList.remove("dragging");this.tileElements_.forEach(resetTilePosition);resetTilePosition(this.$.addShortcut);const dropIndex=getHitIndex(this.tileRects_,x,y);if(dragIndex!==dropIndex&&dropIndex>-1){const[draggingTile]=this.tiles_.splice(dragIndex,1);this.tiles_.splice(dropIndex,0,draggingTile);this.notifySplices("tiles_",[{index:dragIndex,removed:[draggingTile],addedCount:0,object:this.tiles_,type:"splice"},{index:dropIndex,removed:[],addedCount:1,object:this.tiles_,type:"splice"}]);this.pageHandler_.reorderMostVisitedTile(draggingTile.url,dropIndex)}}dragOver_(x,y){const dragElement=this.shadowRoot.querySelector(".tile.dragging");if(!dragElement){this.reordering_=false;return}const dragIndex=this.$.tiles.modelForElement(dragElement).index;setTilePosition(dragElement,{x:x-this.dragOffset_.x,y:y-this.dragOffset_.y});const dropIndex=getHitIndex(this.tileRects_,x,y);this.tileElements_.forEach((element,i)=>{let positionIndex;if(i===dragIndex){return}else if(dropIndex===-1){positionIndex=i}else if(dragIndex<dropIndex&&dragIndex<=i&&i<=dropIndex){positionIndex=i-1}else if(dragIndex>dropIndex&&dragIndex>=i&&i>=dropIndex){positionIndex=i+1}else{positionIndex=i}setTilePosition(element,this.tileRects_[positionIndex])})}dragStart_(dragElement,x,y){this.clearForceHover_();dragElement.classList.add("dragging");const dragElementRect=dragElement.getBoundingClientRect();this.dragOffset_={x:x-dragElementRect.x,y:y-dragElementRect.y};const tileElements=this.tileElements_;this.tileRects_=tileElements.map(t=>t.getBoundingClientRect());if(this.showAdd_){const element=this.$.addShortcut;setTilePosition(element,element.getBoundingClientRect())}tileElements.forEach((tile,i)=>{setTilePosition(tile,this.tileRects_[i])});this.reordering_=true}getFaviconUrl_(url){const faviconUrl=new URL("chrome://favicon2/");faviconUrl.searchParams.set("size","24");faviconUrl.searchParams.set("scale_factor","1x");faviconUrl.searchParams.set("show_fallback_monogram","");faviconUrl.searchParams.set("page_url",url.url);return faviconUrl.href}getRestoreButtonText_(){return loadTimeData.getString(this.customLinksEnabled_?"restoreDefaultLinks":"restoreThumbnailsShort")}getTileTitleDirectionClass_(tile){return tile.titleDirection===mojoBase.mojom.TextDirection.RIGHT_TO_LEFT?"title-rtl":"title-ltr"}isHidden_(index){return index>=this.columnCount_*2}onAdd_(){this.dialogTitle_=loadTimeData.getString("addLinkTitle");this.dialogTileTitle_="";this.dialogTileUrl_="";this.dialogTileUrlInvalid_=false;this.adding_=true;this.$.dialog.showModal()}onAddShortcutKeyDown_(e){if(e.altKey||e.shiftKey||e.metaKey||e.ctrlKey){return}if(!this.tiles_||this.tiles_.length===0){return}const backKey=this.isRtl_?"ArrowRight":"ArrowLeft";if(e.key===backKey||e.key==="ArrowUp"){this.tileFocus_(this.tiles_.length-1)}}onDialogCancel_(){this.actionMenuTargetIndex_=-1;this.$.dialog.cancel()}onDialogClose_(){if(this.adding_){this.$.addShortcut.focus()}this.adding_=false}onDialogTileUrlChange_(){this.dialogTileUrlInvalid_=false}onDocumentKeyDown_(e){if(e.altKey||e.shiftKey){return}const modifier=isMac?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey;if(modifier&&e.key==="z"){e.preventDefault();this.pageHandler_.undoMostVisitedTileAction();this.$.toast.hide()}}onDragStart_(e){if(e.dataTransfer){e.dataTransfer.setDragImage(new Image,0,0)}this.dragStart_(e.target,e.x,e.y);const dragOver=e=>{e.preventDefault();e.dataTransfer.dropEffect="move";this.dragOver_(e.x,e.y)};this.ownerDocument.addEventListener("dragover",dragOver);this.ownerDocument.addEventListener("dragend",e=>{this.ownerDocument.removeEventListener("dragover",dragOver);this.dragEnd_(e.x,e.y);const dropIndex=getHitIndex(this.tileRects_,e.x,e.y);if(dropIndex!==-1){this.tileElements_[dropIndex].classList.add("force-hover")}this.addEventListener("pointermove",()=>{this.clearForceHover_();this.reordering_=false},{once:true})},{once:true})}onEdit_(){this.$.actionMenu.close();this.dialogTitle_=loadTimeData.getString("editLinkTitle");const tile=this.tiles_[this.actionMenuTargetIndex_];this.dialogTileTitle_=tile.title;this.dialogTileUrl_=tile.url.url;this.dialogTileUrlInvalid_=false;this.$.dialog.showModal()}onRestoreDefaultsClick_(){this.$.toast.hide();this.pageHandler_.restoreMostVisitedDefaults()}async onRemove_(){this.$.actionMenu.close();await this.tileRemove_(this.actionMenuTargetIndex_);this.actionMenuTargetIndex_=-1}async onSave_(){let newUrl;try{newUrl=new URL(this.dialogTileUrl_.includes("://")?this.dialogTileUrl_:`https://${this.dialogTileUrl_}/`);if(!["http:","https:"].includes(newUrl.protocol)){throw new Error}}catch(e){this.dialogTileUrlInvalid_=true;return}this.dialogTileUrlInvalid_=false;this.$.dialog.close();let newTitle=this.dialogTileTitle_.trim();if(newTitle.length===0){newTitle=this.dialogTileUrl_}if(this.adding_){const{success:success}=await this.pageHandler_.addMostVisitedTile({url:newUrl.href},newTitle);this.toast_(success?"linkAddedMsg":"linkCantCreate",success)}else{const{url:url,title:title}=this.tiles_[this.actionMenuTargetIndex_];if(url.url!==newUrl.href||title!==newTitle){const{success:success}=await this.pageHandler_.updateMostVisitedTile(url,{url:newUrl.href},newTitle);this.toast_(success?"linkEditedMsg":"linkCantEdit",success)}this.actionMenuTargetIndex_=-1}}onTileActionButtonClick_(e){e.preventDefault();const{index:index}=this.$.tiles.modelForElement(e.target.parentElement);this.actionMenuTargetIndex_=index;this.$.actionMenu.showAt(e.target)}onTileRemoveButtonClick_(e){e.preventDefault();const{index:index}=this.$.tiles.modelForElement(e.target.parentElement);this.tileRemove_(index)}onTileClick_(e){this.pageHandler_.onMostVisitedTileNavigation(this.$.tiles.itemForElement(e.target),this.$.tiles.indexForElement(e.target))}onTileKeyDown_(e){if(e.altKey||e.shiftKey||e.metaKey||e.ctrlKey){return}if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"&&e.key!=="Delete"){return}const{index:index}=this.$.tiles.modelForElement(e.target);if(e.key==="Delete"){this.tileRemove_(index);return}const advanceKey=this.isRtl_?"ArrowLeft":"ArrowRight";const delta=e.key===advanceKey||e.key==="ArrowDown"?1:-1;this.tileFocus_(Math.max(0,index+delta))}onUndoClick_(){this.$.toast.hide();this.pageHandler_.undoMostVisitedTileAction()}onTouchStart_(e){if(this.reordering_){return}const tileElement=e.composedPath().find(el=>el.classList&&el.classList.contains("tile"));if(!tileElement){return}const{pageX:pageX,pageY:pageY}=e.changedTouches[0];this.dragStart_(tileElement,pageX,pageY);const touchMove=e=>{const{pageX:pageX,pageY:pageY}=e.changedTouches[0];this.dragOver_(pageX,pageY)};const touchEnd=e=>{this.ownerDocument.removeEventListener("touchmove",touchMove);tileElement.removeEventListener("touchend",touchEnd);tileElement.removeEventListener("touchcancel",touchEnd);const{pageX:pageX,pageY:pageY}=e.changedTouches[0];this.dragEnd_(pageX,pageY);this.reordering_=false};this.ownerDocument.addEventListener("touchmove",touchMove);tileElement.addEventListener("touchend",touchEnd,{once:true});tileElement.addEventListener("touchcancel",touchEnd,{once:true})}tileFocus_(index){if(index<0){return}const tileElements=this.tileElements_;if(index<tileElements.length){tileElements[index].focus()}else if(this.showAdd_&&index===tileElements.length){this.$.addShortcut.focus()}}toast_(msgId,showButtons){this.toastContent_=loadTimeData.getString(msgId);this.showToastButtons_=showButtons;this.$.toast.show()}async tileRemove_(index){const{title:title,url:url}=this.tiles_[index];this.pageHandler_.deleteMostVisitedTile(url);this.toast_("linkRemovedMsg",true);this.tileFocus_(index)}updateScreenWidth_(){if(this.mediaListenerWideWidth_.matches){this.screenWidth_=ScreenWidth.WIDE}else if(this.mediaListenerMediumWidth_.matches){this.screenWidth_=ScreenWidth.MEDIUM}else{this.screenWidth_=ScreenWidth.NARROW}}onTilesRendered_(){performance.measure("most-visited-rendered");this.pageHandler_.onMostVisitedTilesRendered(this.tiles_,BrowserProxy.getInstance().now())}}customElements.define(MostVisitedElement.is,MostVisitedElement);// Copyright 2017 The Chromium Authors. All rights reserved.
Polymer({_template:html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-toggle">:host {
  --cr-toggle-checked-bar-color: var(--google-blue-600);
        --cr-toggle-checked-button-color: var(--google-blue-600);
        --cr-toggle-checked-ripple-color:
            rgba(var(--google-blue-600-rgb), .2);
        --cr-toggle-unchecked-bar-color: var(--google-grey-400);
        --cr-toggle-unchecked-button-color: white;
        --cr-toggle-unchecked-ripple-color:
            rgba(var(--google-grey-600-rgb), .15);
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        display: block;
        min-width: 34px;
        outline: none;
        position: relative;
        width: 34px;
}

@media (prefers-color-scheme: dark) {
:host {
  --cr-toggle-checked-bar-color: var(--google-blue-refresh-300);
          --cr-toggle-checked-button-color: var(--google-blue-refresh-300);
          --cr-toggle-checked-ripple-color:
              rgba(var(--google-blue-refresh-300-rgb), .4);
          --cr-toggle-unchecked-bar-color: var(--google-grey-refresh-500);
          --cr-toggle-unchecked-button-color: var(--google-grey-refresh-300);
          --cr-toggle-unchecked-ripple-color:
              rgba(var(--google-grey-refresh-300-rgb), .4);
}

}

:host([dark]) {
  --cr-toggle-checked-bar-color: var(--google-blue-refresh-300);
        --cr-toggle-checked-button-color: var(--google-blue-refresh-300);
        --cr-toggle-checked-ripple-color:
            rgba(var(--google-blue-refresh-300-rgb), .4);
        --cr-toggle-unchecked-bar-color: var(--google-grey-refresh-500);
        --cr-toggle-unchecked-button-color: var(--google-grey-refresh-300);
        --cr-toggle-unchecked-ripple-color:
            rgba(var(--google-grey-refresh-300-rgb), .4);
}

:host([disabled]) {
  cursor: initial;
        opacity: var(--cr-disabled-opacity);
        pointer-events: none;
}

#bar {
  background-color: var(--cr-toggle-unchecked-bar-color);
        border-radius: 8px;
        height: 12px;
        left: 3px;
        position: absolute;
        top: 2px;
        transition: background-color linear 80ms;
        width: 28px;
        z-index: 0;
}

:host([checked]) #bar {
  background-color: var(--cr-toggle-checked-bar-color);
        opacity: 0.5;
}

#knob {
  background-color: var(--cr-toggle-unchecked-button-color);
        border-radius: 50%;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .4);
        display: block;
        height: 16px;
        position: relative;
        transition: transform linear 80ms, background-color linear 80ms;
        width: 16px;
        z-index: 1;
}

:host([checked]) #knob {
  background-color: var(--cr-toggle-checked-button-color);
        transform: translate3d(18px, 0, 0);
}

:host-context([dir=rtl]):host([checked]) #knob {
  transform: translate3d(-18px, 0, 0);
}

paper-ripple {
  --paper-ripple-opacity: 1;
        color: var(--cr-toggle-unchecked-ripple-color);
        height: 40px;
        left: -12px;
        pointer-events: none;
        top: -12px;
        transition: color linear 80ms;
        width: 40px;
}

:host([checked]) paper-ripple {
  color: var(--cr-toggle-checked-ripple-color);
}

:host-context([dir=rtl]) paper-ripple {
  left: auto;
        right: -12px;
}

</style>
    <span id="bar"></span>
    <span id="knob"></span>
<!--_html_template_end_-->`,is:"cr-toggle",behaviors:[PaperRippleBehavior],properties:{checked:{type:Boolean,value:false,reflectToAttribute:true,observer:"checkedChanged_",notify:true},dark:{type:Boolean,value:false,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"}},hostAttributes:{"aria-disabled":"false","aria-pressed":"false",role:"button",tabindex:0},listeners:{blur:"hideRipple_",click:"onClick_",focus:"onFocus_",keydown:"onKeyDown_",keyup:"onKeyUp_",pointerdown:"onPointerDown_",pointerup:"onPointerUp_"},boundPointerMove_:null,MOVE_THRESHOLD_PX:5,handledInPointerMove_:false,attached(){const direction=this.matches(":host-context([dir=rtl]) cr-toggle")?-1:1;this.boundPointerMove_=(e=>{e.preventDefault();const diff=e.clientX-this.pointerDownX_;if(Math.abs(diff)<this.MOVE_THRESHOLD_PX){return}this.handledInPointerMove_=true;const shouldToggle=diff*direction<0&&this.checked||diff*direction>0&&!this.checked;if(shouldToggle){this.toggleState_(false)}})},checkedChanged_(){this.setAttribute("aria-pressed",this.checked?"true":"false")},disabledChanged_(){this.setAttribute("tabindex",this.disabled?-1:0);this.setAttribute("aria-disabled",this.disabled?"true":"false")},onFocus_(){this.getRipple().showAndHoldDown()},hideRipple_(){this.getRipple().clear()},onPointerUp_(){this.removeEventListener("pointermove",this.boundPointerMove_);this.hideRipple_()},onPointerDown_(e){if(e.button!==0){return}this.setPointerCapture(e.pointerId);this.pointerDownX_=e.clientX;this.handledInPointerMove_=false;this.addEventListener("pointermove",this.boundPointerMove_)},onClick_(e){e.stopPropagation();e.preventDefault();if(this.handledInPointerMove_){return}this.toggleState_(false)},toggleState_(fromKeyboard){if(this.disabled){return}if(!fromKeyboard){this.hideRipple_()}this.checked=!this.checked;this.fire("change",this.checked)},onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.toggleState_(true)}},onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.key===" "){this.toggleState_(true)}},_createRipple(){this._rippleContainer=this.$.knob;const ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:false}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&parentResizable._interestedResizables.indexOf(this)===-1){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(index>-1){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(element){return true},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:false})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=true;descendant.notifyResize();this._notifyingDescendant=false},_requestResizeNotifications:function(){if(!this.isAttached){return}if(document.readyState==="loading"){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:true,cancelable:true});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronSelection{constructor(selectCallback){this.selection=[];this.selectCallback=selectCallback}get(){return this.multi?this.selection.slice():this.selection[0]}clear(excludes){this.selection.slice().forEach(function(item){if(!excludes||excludes.indexOf(item)<0){this.setItemSelected(item,false)}},this)}isSelected(item){return this.selection.indexOf(item)>=0}setItemSelected(item,isSelected){if(item!=null){if(isSelected!==this.isSelected(item)){if(isSelected){this.selection.push(item)}else{var i=this.selection.indexOf(item);if(i>=0){this.selection.splice(i,1)}}if(this.selectCallback){this.selectCallback(item,isSelected)}}}}select(item){if(this.multi){this.toggle(item)}else if(this.get()!==item){this.setItemSelected(this.get(),false);this.setItemSelected(item,true)}}toggle(item){this.setItemSelected(item,!this.isSelected(item))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:true},selectedItem:{type:Object,readOnly:true,notify:true},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:true,notify:true,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this);this._addListener(this.activateEvent)},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer)}this._removeListener(this.activateEvent)},indexOf:function(item){return this.items?this.items.indexOf(item):-1},select:function(value){this.selected=value},selectPrevious:function(){var length=this.items.length;var index=length-1;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))-1+length)%length}this.selected=this._indexToValue(index)},selectNext:function(){var index=0;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))+1)%this.items.length}this.selected=this._indexToValue(index)},selectIndex:function(index){this.select(this._indexToValue(index))},forceSynchronousItemUpdate:function(){if(this._observer&&typeof this._observer.flush==="function"){this._observer.flush()}else{this._updateItems()}},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(eventName){this.listen(this,eventName,"_activateHandler")},_removeListener:function(eventName){this.unlisten(this,eventName,"_activateHandler")},_activateEventChanged:function(eventName,old){this._removeListener(old);this._addListener(eventName)},_updateItems:function(){var nodes=dom(this).queryDistributedElements(this.selectable||"*");nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes)},_updateAttrForSelected:function(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem)}},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(selected){if(!this.items){return}var item=this._valueToItem(this.selected);if(item){this._selection.select(item)}else{this._selection.clear()}if(this.fallbackSelection&&this.items.length&&this._selection.get()===undefined){this.selected=this.fallbackSelection}},_filterItem:function(node){return!this._excludedLocalNames[node.localName]},_valueToItem:function(value){return value==null?null:this.items[this._valueToIndex(value)]},_valueToIndex:function(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i}}}else{return Number(value)}},_indexToValue:function(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item)}}else{return index}},_valueForItem:function(item){if(!item){return null}if(!this.attrForSelected){var i=this.indexOf(item);return i===-1?null:i}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=undefined?propValue:item.getAttribute(this.attrForSelected)},_applySelection:function(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item)}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item)}this._selectionChange();this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(node){return dom(node).observeNodes(function(mutation){this._updateItems();this._updateSelected();this.fire("iron-items-changed",mutation,{bubbles:false,cancelable:false})})},_activateHandler:function(e){var t=e.target;var items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(i>=0){var value=this._indexToValue(i);this._itemActivate(value,t);return}t=t.parentNode}},_itemActivate:function(value,item){if(!this.fire("iron-activate",{selected:value,item:item},{cancelable:true}).defaultPrevented){this.select(value)}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`<!--css-build:shadow--><style scope="iron-pages">:host {
  display: block;
}

:host > ::slotted(:not(slot):not(.iron-selected)) {
  display: none !important;
}

</style>

    <slot></slot>
`,is:"iron-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(selected,old){this.async(this.notifyResize)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronMultiSelectableBehaviorImpl={properties:{multi:{type:Boolean,value:false,observer:"multiChanged"},selectedValues:{type:Array,notify:true,value:function(){return[]}},selectedItems:{type:Array,readOnly:true,notify:true,value:function(){return[]}}},observers:["_updateSelected(selectedValues.splices)"],select:function(value){if(this.multi){this._toggleSelected(value)}else{this.selected=value}},multiChanged:function(multi){this._selection.multi=multi;this._updateSelected()},get _shouldUpdateSelection(){return this.selected!=null||this.selectedValues!=null&&this.selectedValues.length},_updateAttrForSelected:function(){if(!this.multi){IronSelectableBehavior._updateAttrForSelected.apply(this)}else if(this.selectedItems&&this.selectedItems.length>0){this.selectedValues=this.selectedItems.map(function(selectedItem){return this._indexToValue(this.indexOf(selectedItem))},this).filter(function(unfilteredValue){return unfilteredValue!=null},this)}},_updateSelected:function(){if(this.multi){this._selectMulti(this.selectedValues)}else{this._selectSelected(this.selected)}},_selectMulti:function(values){values=values||[];var selectedItems=(this._valuesToItems(values)||[]).filter(function(item){return item!==null&&item!==undefined});this._selection.clear(selectedItems);for(var i=0;i<selectedItems.length;i++){this._selection.setItemSelected(selectedItems[i],true)}if(this.fallbackSelection&&!this._selection.get().length){var fallback=this._valueToItem(this.fallbackSelection);if(fallback){this.select(this.fallbackSelection)}}},_selectionChange:function(){var s=this._selection.get();if(this.multi){this._setSelectedItems(s);this._setSelectedItem(s.length?s[0]:null)}else{if(s!==null&&s!==undefined){this._setSelectedItems([s]);this._setSelectedItem(s)}else{this._setSelectedItems([]);this._setSelectedItem(null)}}},_toggleSelected:function(value){var i=this.selectedValues.indexOf(value);var unselected=i<0;if(unselected){this.push("selectedValues",value)}else{this.splice("selectedValues",i,1)}},_valuesToItems:function(values){return values==null?null:values.map(function(value){return this._valueToItem(value)},this)}};const IronMultiSelectableBehavior=[IronSelectableBehavior,IronMultiSelectableBehaviorImpl];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-selector",behaviors:[IronMultiSelectableBehavior]});// Copyright 2020 The Chromium Authors. All rights reserved.
class CrGridElement extends PolymerElement{static get is(){return"cr-grid"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-grid">:host {
  --cr-grid-gap: 0px;
}

#grid {
  display: grid;
    grid-column-gap: var(--cr-grid-gap);
    grid-row-gap: var(--cr-grid-gap);
    grid-template-columns: repeat(var(--cr-grid-columns), auto);
    width: fit-content;
}

::slotted(*) {
  align-self: center;
    justify-self: center;
}

</style>
<div id="grid" on-keydown="onKeyDown_">
  <slot id="items"></slot>
</div>
<!--_html_template_end_-->`}static get properties(){return{columns:{type:Number,value:1,observer:"onColumnsChange_"}}}onColumnsChange_(){this.updateStyles({"--cr-grid-columns":this.columns})}onKeyDown_(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)){e.preventDefault();const items=this.$.items.assignedElements().filter(el=>!!(el.offsetWidth||el.offsetHeight||el.getClientRects().length));const currentIndex=items.indexOf(e.target);const isRtl=window.getComputedStyle(this)["direction"]==="rtl";const bottomRowColumns=items.length%this.columns;const direction=["ArrowRight","ArrowDown"].includes(e.key)?1:-1;const inEdgeRow=direction===1?currentIndex>=items.length-bottomRowColumns:currentIndex<this.columns;let delta=0;switch(e.key){case"ArrowLeft":case"ArrowRight":delta=direction*(isRtl?-1:1);break;case"ArrowUp":case"ArrowDown":delta=direction*(inEdgeRow?bottomRowColumns:this.columns);break}if(e.key==="ArrowUp"&&inEdgeRow&&currentIndex>=bottomRowColumns){delta-=this.columns}else if(e.key==="ArrowDown"&&!inEdgeRow&&currentIndex+delta>=items.length){delta+=bottomRowColumns}const mod=function(m,n){return(m%n+n)%n};const newIndex=mod(currentIndex+delta,items.length);items[newIndex].focus()}if(["Enter"," "].includes(e.key)){e.preventDefault();e.stopPropagation();e.target.click()}}}customElements.define(CrGridElement.is,CrGridElement);mojo.internal.exportModule("customizeThemes.mojom");customizeThemes.mojom.ThemeTypeSpec={$:mojo.internal.Enum()};customizeThemes.mojom.ThemeType={kDefault:0,kAutogenerated:1,kChrome:2,kThirdParty:3,MIN_VALUE:0,MAX_VALUE:3};customizeThemes.mojom.CustomizeThemesHandlerFactoryPendingReceiver=class{constructor(handle){this.handle=handle}};customizeThemes.mojom.CustomizeThemesHandlerFactoryRemote=class{constructor(opt_handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(customizeThemes.mojom.CustomizeThemesHandlerFactoryPendingReceiver,opt_handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}createCustomizeThemesHandler(client,handler){this.proxy.sendMessage(888389343,customizeThemes.mojom.CustomizeThemesHandlerFactory_CreateCustomizeThemesHandler_ParamsSpec.$,null,[client,handler])}};customizeThemes.mojom.CustomizeThemesHandlerFactoryReceiver=class{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(customizeThemes.mojom.CustomizeThemesHandlerFactoryRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(888389343,customizeThemes.mojom.CustomizeThemesHandlerFactory_CreateCustomizeThemesHandler_ParamsSpec.$,null,impl.createCustomizeThemesHandler.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}};customizeThemes.mojom.CustomizeThemesHandlerFactory=class{static get $interfaceName(){return"customize_themes.mojom.CustomizeThemesHandlerFactory"}static getRemote(){let remote=new customizeThemes.mojom.CustomizeThemesHandlerFactoryRemote;Mojo.bindInterface(customizeThemes.mojom.CustomizeThemesHandlerFactory.$interfaceName,remote.$.bindNewPipeAndPassReceiver().handle);return remote}};customizeThemes.mojom.CustomizeThemesHandlerFactoryCallbackRouter=class{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(customizeThemes.mojom.CustomizeThemesHandlerFactoryRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.createCustomizeThemesHandler=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(888389343,customizeThemes.mojom.CustomizeThemesHandlerFactory_CreateCustomizeThemesHandler_ParamsSpec.$,null,this.createCustomizeThemesHandler.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}};customizeThemes.mojom.CustomizeThemesHandlerPendingReceiver=class{constructor(handle){this.handle=handle}};customizeThemes.mojom.CustomizeThemesHandlerRemote=class{constructor(opt_handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(customizeThemes.mojom.CustomizeThemesHandlerPendingReceiver,opt_handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}applyAutogeneratedTheme(frameColor){this.proxy.sendMessage(757759173,customizeThemes.mojom.CustomizeThemesHandler_ApplyAutogeneratedTheme_ParamsSpec.$,null,[frameColor])}applyChromeTheme(id){this.proxy.sendMessage(108528255,customizeThemes.mojom.CustomizeThemesHandler_ApplyChromeTheme_ParamsSpec.$,null,[id])}applyDefaultTheme(){this.proxy.sendMessage(999925638,customizeThemes.mojom.CustomizeThemesHandler_ApplyDefaultTheme_ParamsSpec.$,null,[])}initializeTheme(){this.proxy.sendMessage(520645501,customizeThemes.mojom.CustomizeThemesHandler_InitializeTheme_ParamsSpec.$,null,[])}getChromeThemes(){return this.proxy.sendMessage(1867561888,customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ParamsSpec.$,customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ResponseParamsSpec.$,[])}confirmThemeChanges(){this.proxy.sendMessage(1597253468,customizeThemes.mojom.CustomizeThemesHandler_ConfirmThemeChanges_ParamsSpec.$,null,[])}revertThemeChanges(){this.proxy.sendMessage(1276009981,customizeThemes.mojom.CustomizeThemesHandler_RevertThemeChanges_ParamsSpec.$,null,[])}};customizeThemes.mojom.CustomizeThemesHandlerReceiver=class{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(customizeThemes.mojom.CustomizeThemesHandlerRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(757759173,customizeThemes.mojom.CustomizeThemesHandler_ApplyAutogeneratedTheme_ParamsSpec.$,null,impl.applyAutogeneratedTheme.bind(impl));this.helper_internal_.registerHandler(108528255,customizeThemes.mojom.CustomizeThemesHandler_ApplyChromeTheme_ParamsSpec.$,null,impl.applyChromeTheme.bind(impl));this.helper_internal_.registerHandler(999925638,customizeThemes.mojom.CustomizeThemesHandler_ApplyDefaultTheme_ParamsSpec.$,null,impl.applyDefaultTheme.bind(impl));this.helper_internal_.registerHandler(520645501,customizeThemes.mojom.CustomizeThemesHandler_InitializeTheme_ParamsSpec.$,null,impl.initializeTheme.bind(impl));this.helper_internal_.registerHandler(1867561888,customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ParamsSpec.$,customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ResponseParamsSpec.$,impl.getChromeThemes.bind(impl));this.helper_internal_.registerHandler(1597253468,customizeThemes.mojom.CustomizeThemesHandler_ConfirmThemeChanges_ParamsSpec.$,null,impl.confirmThemeChanges.bind(impl));this.helper_internal_.registerHandler(1276009981,customizeThemes.mojom.CustomizeThemesHandler_RevertThemeChanges_ParamsSpec.$,null,impl.revertThemeChanges.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}};customizeThemes.mojom.CustomizeThemesHandler=class{static get $interfaceName(){return"customize_themes.mojom.CustomizeThemesHandler"}static getRemote(){let remote=new customizeThemes.mojom.CustomizeThemesHandlerRemote;Mojo.bindInterface(customizeThemes.mojom.CustomizeThemesHandler.$interfaceName,remote.$.bindNewPipeAndPassReceiver().handle);return remote}};customizeThemes.mojom.CustomizeThemesHandlerCallbackRouter=class{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(customizeThemes.mojom.CustomizeThemesHandlerRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.applyAutogeneratedTheme=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(757759173,customizeThemes.mojom.CustomizeThemesHandler_ApplyAutogeneratedTheme_ParamsSpec.$,null,this.applyAutogeneratedTheme.createReceiverHandler(false));this.applyChromeTheme=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(108528255,customizeThemes.mojom.CustomizeThemesHandler_ApplyChromeTheme_ParamsSpec.$,null,this.applyChromeTheme.createReceiverHandler(false));this.applyDefaultTheme=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(999925638,customizeThemes.mojom.CustomizeThemesHandler_ApplyDefaultTheme_ParamsSpec.$,null,this.applyDefaultTheme.createReceiverHandler(false));this.initializeTheme=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(520645501,customizeThemes.mojom.CustomizeThemesHandler_InitializeTheme_ParamsSpec.$,null,this.initializeTheme.createReceiverHandler(false));this.getChromeThemes=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1867561888,customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ParamsSpec.$,customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ResponseParamsSpec.$,this.getChromeThemes.createReceiverHandler(true));this.confirmThemeChanges=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1597253468,customizeThemes.mojom.CustomizeThemesHandler_ConfirmThemeChanges_ParamsSpec.$,null,this.confirmThemeChanges.createReceiverHandler(false));this.revertThemeChanges=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1276009981,customizeThemes.mojom.CustomizeThemesHandler_RevertThemeChanges_ParamsSpec.$,null,this.revertThemeChanges.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}};customizeThemes.mojom.CustomizeThemesClientPendingReceiver=class{constructor(handle){this.handle=handle}};customizeThemes.mojom.CustomizeThemesClientRemote=class{constructor(opt_handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(customizeThemes.mojom.CustomizeThemesClientPendingReceiver,opt_handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}setTheme(theme){this.proxy.sendMessage(643018306,customizeThemes.mojom.CustomizeThemesClient_SetTheme_ParamsSpec.$,null,[theme])}};customizeThemes.mojom.CustomizeThemesClientReceiver=class{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(customizeThemes.mojom.CustomizeThemesClientRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(643018306,customizeThemes.mojom.CustomizeThemesClient_SetTheme_ParamsSpec.$,null,impl.setTheme.bind(impl));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}};customizeThemes.mojom.CustomizeThemesClient=class{static get $interfaceName(){return"customize_themes.mojom.CustomizeThemesClient"}static getRemote(){let remote=new customizeThemes.mojom.CustomizeThemesClientRemote;Mojo.bindInterface(customizeThemes.mojom.CustomizeThemesClient.$interfaceName,remote.$.bindNewPipeAndPassReceiver().handle);return remote}};customizeThemes.mojom.CustomizeThemesClientCallbackRouter=class{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(customizeThemes.mojom.CustomizeThemesClientRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.setTheme=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(643018306,customizeThemes.mojom.CustomizeThemesClient_SetTheme_ParamsSpec.$,null,this.setTheme.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}};customizeThemes.mojom.ThemeColorsSpec={$:{}};customizeThemes.mojom.ChromeThemeSpec={$:{}};customizeThemes.mojom.ThirdPartyThemeInfoSpec={$:{}};customizeThemes.mojom.ThemeSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandlerFactory_CreateCustomizeThemesHandler_ParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandler_ApplyAutogeneratedTheme_ParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandler_ApplyChromeTheme_ParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandler_ApplyDefaultTheme_ParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandler_InitializeTheme_ParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ResponseParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandler_ConfirmThemeChanges_ParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesHandler_RevertThemeChanges_ParamsSpec={$:{}};customizeThemes.mojom.CustomizeThemesClient_SetTheme_ParamsSpec={$:{}};customizeThemes.mojom.ThemeInfoSpec={$:{}};mojo.internal.Struct(customizeThemes.mojom.ThemeColorsSpec.$,"ThemeColors",24,[mojo.internal.StructField("frame",0,0,skia.mojom.SkColorSpec.$,null,false),mojo.internal.StructField("activeTab",8,0,skia.mojom.SkColorSpec.$,null,false),mojo.internal.StructField("activeTabText",16,0,skia.mojom.SkColorSpec.$,null,false)]);mojo.internal.Struct(customizeThemes.mojom.ChromeThemeSpec.$,"ChromeTheme",24,[mojo.internal.StructField("id",0,0,mojo.internal.Int32,0,false),mojo.internal.StructField("label",8,0,mojo.internal.String,null,false),mojo.internal.StructField("colors",16,0,customizeThemes.mojom.ThemeColorsSpec.$,null,false)]);mojo.internal.Struct(customizeThemes.mojom.ThirdPartyThemeInfoSpec.$,"ThirdPartyThemeInfo",16,[mojo.internal.StructField("id",0,0,mojo.internal.String,null,false),mojo.internal.StructField("name",8,0,mojo.internal.String,null,false)]);mojo.internal.Struct(customizeThemes.mojom.ThemeSpec.$,"Theme",24,[mojo.internal.StructField("type",0,0,customizeThemes.mojom.ThemeTypeSpec.$,0,false),mojo.internal.StructField("info",8,0,customizeThemes.mojom.ThemeInfoSpec.$,null,false)]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandlerFactory_CreateCustomizeThemesHandler_ParamsSpec.$,"CustomizeThemesHandlerFactory_CreateCustomizeThemesHandler_Params",16,[mojo.internal.StructField("client",0,0,mojo.internal.InterfaceProxy(customizeThemes.mojom.CustomizeThemesClientRemote),null,false),mojo.internal.StructField("handler",8,0,mojo.internal.InterfaceRequest(customizeThemes.mojom.CustomizeThemesHandlerPendingReceiver),null,false)]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandler_ApplyAutogeneratedTheme_ParamsSpec.$,"CustomizeThemesHandler_ApplyAutogeneratedTheme_Params",8,[mojo.internal.StructField("frameColor",0,0,skia.mojom.SkColorSpec.$,null,false)]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandler_ApplyChromeTheme_ParamsSpec.$,"CustomizeThemesHandler_ApplyChromeTheme_Params",8,[mojo.internal.StructField("id",0,0,mojo.internal.Int32,0,false)]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandler_ApplyDefaultTheme_ParamsSpec.$,"CustomizeThemesHandler_ApplyDefaultTheme_Params",0,[]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandler_InitializeTheme_ParamsSpec.$,"CustomizeThemesHandler_InitializeTheme_Params",0,[]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ParamsSpec.$,"CustomizeThemesHandler_GetChromeThemes_Params",0,[]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandler_GetChromeThemes_ResponseParamsSpec.$,"CustomizeThemesHandler_GetChromeThemes_ResponseParams",8,[mojo.internal.StructField("chromeThemes",0,0,mojo.internal.Array(customizeThemes.mojom.ChromeThemeSpec.$,false),null,false)]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandler_ConfirmThemeChanges_ParamsSpec.$,"CustomizeThemesHandler_ConfirmThemeChanges_Params",0,[]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesHandler_RevertThemeChanges_ParamsSpec.$,"CustomizeThemesHandler_RevertThemeChanges_Params",0,[]);mojo.internal.Struct(customizeThemes.mojom.CustomizeThemesClient_SetTheme_ParamsSpec.$,"CustomizeThemesClient_SetTheme_Params",8,[mojo.internal.StructField("theme",0,0,customizeThemes.mojom.ThemeSpec.$,null,false)]);mojo.internal.Union(customizeThemes.mojom.ThemeInfoSpec.$,"ThemeInfo",{chromeThemeId:{ordinal:0,type:mojo.internal.Int32},autogeneratedThemeColors:{ordinal:1,type:customizeThemes.mojom.ThemeColorsSpec.$},thirdPartyThemeInfo:{ordinal:2,type:customizeThemes.mojom.ThirdPartyThemeInfoSpec.$}});customizeThemes.mojom.ThemeInfo;// Copyright 2020 The Chromium Authors. All rights reserved.
class ThemeIconElement extends PolymerElement{static get is(){return"cr-theme-icon"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="cr-theme-icon">:host {
  --cr-theme-icon-size: 72px;
}

:host, svg {
  height: var(--cr-theme-icon-size);
    width: var(--cr-theme-icon-size);
}

#ring {
  fill: rgba(var(--google-blue-600-rgb), 0.4);
    visibility: hidden;
}

#checkMark {
  visibility: hidden;
}

:host([selected]) #ring, :host([selected]) #checkMark {
  visibility: visible;
}

#circle {
  fill: url(#gradient);
    stroke: var(--cr-theme-icon-stroke-color,
        var(--cr-theme-icon-frame-color));
    stroke-width: 1;
}

#leftColor {
  stop-color: var(--cr-theme-icon-active-tab-color);
}

#rightColor {
  stop-color: var(--cr-theme-icon-frame-color);
}

#checkMark circle {
  fill: var(--google-blue-600);
}

#checkMark path {
  fill: white;
}

@media (prefers-color-scheme: dark) {
#checkMark circle {
  fill: var(--google-blue-refresh-300);
}

#checkMark path {
  fill: var(--google-grey-900);
}

}

</style>
<svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="gradient" gradientUnits="objectBoundingBox" x1="50%" y1="0" x2="50.01%" y2="0">
      <stop id="leftColor" offset="0%"></stop>
      <stop id="rightColor" offset="100%"></stop>
    </linearGradient>
  </defs>
  <circle id="ring" cx="36" cy="36" r="36"></circle>
  <circle id="circle" cx="36" cy="36" r="32"></circle>
  <g id="checkMark" transform="translate(48.5, 3.5)">
    <circle cx="10" cy="10" r="10"></circle>
    <path d="m 2.9885708,9.99721 5.0109458,4.98792 0.00275,-0.003
        0.024151,0.0227 8.9741604,-9.01557 -1.431323,-1.42476 -7.5742214,7.6092
        -3.6031671,-3.58665 z">
    </path>
  </g>
</svg>
<!--_html_template_end_-->`}}customElements.define(ThemeIconElement.is,ThemeIconElement);// Copyright 2020 The Chromium Authors. All rights reserved.
function skColorToRgba(skColor){const a=skColor.value>>24&255;const r=skColor.value>>16&255;const g=skColor.value>>8&255;const b=skColor.value&255;return`rgba(${r}, ${g}, ${b}, ${(a/255).toFixed(2)})`}function hexColorToSkColor(hexColor){if(!/^#[0-9a-f]{6}$/.test(hexColor)){return{value:0}}const r=parseInt(hexColor.substring(1,3),16);const g=parseInt(hexColor.substring(3,5),16);const b=parseInt(hexColor.substring(5,7),16);return{value:4278190080+(r<<16)+(g<<8)+b}}// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const parseHtmlSubset=function(){const allowAttribute=(node,value)=>true;const allowedAttributes=new Map([["href",(node,value)=>{return node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://"))}],["target",(node,value)=>{return node.tagName==="A"&&value==="_blank"}]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(node,value)=>value==="action-link"||value===""],["role",(node,value)=>value==="link"],["src",(node,value)=>{return node.tagName==="IMG"&&value.startsWith("chrome://")}],["tabindex",allowAttribute]]);const allowedTags=new Set(["A","B","BR","DIV","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG"]);let unsanitizedPolicy;if(window.trustedTypes){unsanitizedPolicy=trustedTypes.createPolicy("parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML})}function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach(str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}});return clone}function mergeAttrs(optAttrs){const clone=new Map([...allowedAttributes]);optAttrs.forEach(key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}});return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue;if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}return function(s,opt_extraTags,opt_extraAttrs){const tags=opt_extraTags?mergeTags(opt_extraTags):allowedTags;const attrs=opt_extraAttrs?mergeAttrs(opt_extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}});return df}}();// Copyright 2015 The Chromium Authors. All rights reserved.
const I18nBehavior={i18nRaw_(id,var_args){return arguments.length===1?loadTimeData.getString(id):loadTimeData.getStringF.apply(loadTimeData,arguments)},i18n(id,var_args){const rawString=this.i18nRaw_.apply(this,arguments);return parseHtmlSubset("<b>"+rawString+"</b>").firstChild.textContent},i18nAdvanced(id,opts){opts=opts||{};const args=[id].concat(opts.substitutions||[]);const rawString=this.i18nRaw_.apply(this,args);return loadTimeData.sanitizeInnerHtml(rawString,opts)},i18nDynamic(locale,id,var_args){return this.i18n.apply(this,Array.prototype.slice.call(arguments,1))},i18nRecursive(locale,id,var_args){let args=Array.prototype.slice.call(arguments,2);if(args.length>0){const self=this;args=args.map(function(str){return self.i18nExists(str)?loadTimeData.getString(str):str})}return this.i18nDynamic.apply(this,[locale,id].concat(args))},i18nExists(id){return loadTimeData.valueExists(id)}};// Copyright 2020 The Chromium Authors. All rights reserved.
class CustomizeThemesBrowserProxyImpl{constructor(){this.handler_=new customizeThemes.mojom.CustomizeThemesHandlerRemote;this.callbackRouter_=new customizeThemes.mojom.CustomizeThemesClientCallbackRouter;const factory=customizeThemes.mojom.CustomizeThemesHandlerFactory.getRemote();factory.createCustomizeThemesHandler(this.callbackRouter_.$.bindNewPipeAndPassRemote(),this.handler_.$.bindNewPipeAndPassReceiver())}handler(){return this.handler_}callbackRouter(){return this.callbackRouter_}open(url){window.open(url,"_blank")}}addSingletonGetter(CustomizeThemesBrowserProxyImpl);// Copyright 2020 The Chromium Authors. All rights reserved.
class CustomizeThemesElement extends(mixinBehaviors([I18nBehavior],PolymerElement)){static get is(){return"cr-customize-themes"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-icons" scope="cr-customize-themes">:host {
  --cr-customize-themes-grid-gap: 20px;
    --cr-customize-themes-icon-size: 72px;
    display: inline-block;
}

#thirdPartyThemeContainer {
  max-width: 544px;
    width: 100%;
}

#thirdPartyTheme {
  align-items: center;
    border: 1px solid var(--google-grey-refresh-300);
    border-radius: 5px;
    color: var(--cr-primary-text-color);
    display: flex;
    flex-direction: row;
    margin-bottom: 24px;
    padding: 0 16px;
}

@media (prefers-color-scheme: dark) {
#thirdPartyTheme {
  border-color: var(--google-grey-refresh-700);
}

}

#thirdPartyBrushIcon {
  -webkit-mask-image: url(chrome://resources/cr_components/customize_themes/brush.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--cr-primary-text-color);
    margin-inline-end: 20px;
    min-height: 24px;
    min-width: 24px;
}

#thirdPartyThemeNameContainer {
  flex-grow: 1;
    margin-inline-end: 24px;
}

#thirdPartyThemeName {
  font-weight: bold;
}

#thirdPartyLink {
  --cr-icon-button-fill-color: var(--cr-primary-text-color);
    margin-inline-end: 24px;
}

#uninstallThirdPartyButton {
  margin: 16px 0;
}

#themesContainer {
  --cr-grid-gap: var(--cr-customize-themes-grid-gap);
}

#themesContainer > * {
  outline-width: 0;
}

:host-context(.focus-outline-visible) #themesContainer > *:focus {
  box-shadow: 0 0 0 2px rgba(var(--google-blue-600-rgb), .4);
}

#autogeneratedThemeContainer {
  display: flex;
    flex-direction: column;
    position: relative;
}

#colorPicker {
  border: 0;
    height: 0;
    margin: 0;
    padding: 0;
    visibility: hidden;
    width: 0;
}

#colorPickerIcon {
  -webkit-mask-image: url(chrome://resources/cr_components/customize_themes/colorize.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--google-grey-refresh-700);
    height: 20px;
    left: calc(50% - 10px);
    position: absolute;
    top: calc(50% - 10px);
    width: 20px;
}

cr-theme-icon {
  --cr-theme-icon-size: var(--cr-customize-themes-icon-size);
}

#autogeneratedTheme {
  --cr-theme-icon-frame-color: var(--google-grey-refresh-100);
    --cr-theme-icon-active-tab-color: white;
    --cr-theme-icon-stroke-color: var(--google-grey-refresh-300);
}

#defaultTheme {
  --cr-theme-icon-frame-color: rgb(222, 225, 230);
    --cr-theme-icon-active-tab-color: white;
}

@media (prefers-color-scheme: dark) {
#defaultTheme {
  --cr-theme-icon-frame-color: rgb(var(--google-grey-900-rgb));
      --cr-theme-icon-active-tab-color: rgb(50, 54, 57);
}

}

</style>
<div id="thirdPartyThemeContainer" hidden="[[!isThirdPartyTheme_(selectedTheme)]]">
  <div id="thirdPartyTheme">
    <div id="thirdPartyBrushIcon"></div>
    <div id="thirdPartyThemeNameContainer">
      <div id="thirdPartyThemeName">
        [[selectedTheme.info.thirdPartyThemeInfo.name]]
      </div>
      <div>[[i18n('thirdPartyThemeDescription')]]</div>
    </div>
    <cr-icon-button id="thirdPartyLink" class="icon-external" role="link" on-click="onThirdPartyLinkButtonClick_">
    </cr-icon-button>
    <cr-button id="uninstallThirdPartyButton" on-click="onUninstallThirdPartyThemeClick_">
      [[i18n('uninstallThirdPartyThemeButton')]]
    </cr-button>
  </div>
</div>
<cr-grid id="themesContainer" columns="6">
  <div id="autogeneratedThemeContainer" title="[[i18n('colorPickerLabel')]]" tabindex="0" on-click="onAutogeneratedThemeClick_">
    <cr-theme-icon id="autogeneratedTheme" selected$="[[isThemeIconSelected_('autogenerated', selectedTheme)]]">
    </cr-theme-icon>
    <div id="colorPickerIcon"></div>
    <input id="colorPicker" type="color" on-change="onCustomFrameColorChange_">
    
  </div>
  <cr-theme-icon id="defaultTheme" title="[[i18n('defaultThemeLabel')]]" on-click="onDefaultThemeClick_" tabindex="0" selected$="[[isThemeIconSelected_('default', selectedTheme)]]">
  </cr-theme-icon>
  <template is="dom-repeat" id="themes" items="[[chromeThemes_]]">
    <cr-theme-icon title="[[item.label]]" on-click="onChromeThemeClick_" style="--cr-theme-icon-frame-color:
            [[skColorToRgba_(item.colors.frame)]];
            --cr-theme-icon-active-tab-color:
            [[skColorToRgba_(item.colors.activeTab)]];" tabindex="0" selected$="[[isThemeIconSelected_(item.id, selectedTheme)]]">
    </cr-theme-icon>
  </template>
</cr-grid>
<!--_html_template_end_-->`}static get properties(){return{selectedTheme:{type:Object,observer:"onThemeChange_",notify:true},autoConfirmThemeChanges:{type:Boolean,value:false},chromeThemes_:Array}}constructor(){super();this.handler_=CustomizeThemesBrowserProxyImpl.getInstance().handler();this.callbackRouter_=CustomizeThemesBrowserProxyImpl.getInstance().callbackRouter();this.setThemeListenerId_=null}connectedCallback(){super.connectedCallback();this.handler_.initializeTheme();this.handler_.getChromeThemes().then(({chromeThemes:chromeThemes})=>{this.chromeThemes_=chromeThemes});this.setThemeListenerId_=this.callbackRouter_.setTheme.addListener(theme=>{this.selectedTheme=theme})}disconnectedCallback(){this.revertThemeChanges();this.callbackRouter_.removeListener(assert(this.setThemeListenerId_));super.disconnectedCallback()}confirmThemeChanges(){this.handler_.confirmThemeChanges()}revertThemeChanges(){this.handler_.revertThemeChanges()}onCustomFrameColorChange_(e){this.handler_.applyAutogeneratedTheme(hexColorToSkColor(e.target.value));if(this.autoConfirmThemeChanges){this.handler_.confirmThemeChanges()}}onAutogeneratedThemeClick_(){this.$.colorPicker.click()}onDefaultThemeClick_(){this.handler_.applyDefaultTheme();if(this.autoConfirmThemeChanges){this.handler_.confirmThemeChanges()}}onChromeThemeClick_(e){this.handler_.applyChromeTheme(this.$.themes.itemForElement(e.target).id);if(this.autoConfirmThemeChanges){this.handler_.confirmThemeChanges()}}onThemeChange_(){if(this.selectedTheme.type!==customizeThemes.mojom.ThemeType.kAutogenerated){return}const rgbaFrameColor=skColorToRgba(this.selectedTheme.info.autogeneratedThemeColors.frame);const rgbaActiveTabColor=skColorToRgba(this.selectedTheme.info.autogeneratedThemeColors.activeTab);this.$.autogeneratedTheme.style.setProperty("--cr-theme-icon-frame-color",rgbaFrameColor);this.$.autogeneratedTheme.style.setProperty("--cr-theme-icon-stroke-color",rgbaFrameColor);this.$.autogeneratedTheme.style.setProperty("--cr-theme-icon-active-tab-color",rgbaActiveTabColor);this.$.colorPickerIcon.style.setProperty("background-color",skColorToRgba(this.selectedTheme.info.autogeneratedThemeColors.activeTabText))}onUninstallThirdPartyThemeClick_(e){this.handler_.applyDefaultTheme();this.handler_.confirmThemeChanges()}onThirdPartyLinkButtonClick_(){CustomizeThemesBrowserProxyImpl.getInstance().open(`https://chrome.google.com/webstore/detail/${this.selectedTheme.info.thirdPartyThemeInfo.id}`)}isThemeIconSelected_(id){if(!this.selectedTheme){return false}if(id==="autogenerated"){return this.selectedTheme.type===customizeThemes.mojom.ThemeType.kAutogenerated}else if(id==="default"){return this.selectedTheme.type===customizeThemes.mojom.ThemeType.kDefault}else{return this.selectedTheme.type===customizeThemes.mojom.ThemeType.kChrome&&id===this.selectedTheme.info.chromeThemeId}}isThirdPartyTheme_(){return this.selectedTheme.type===customizeThemes.mojom.ThemeType.kThirdParty}skColorToRgba_(skColor){return skColorToRgba(skColor)}}customElements.define(CustomizeThemesElement.is,CustomizeThemesElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class MiniPageElement extends PolymerElement{static get is(){return"ntp-mini-page"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-mini-page">:host {
  --ntp-mini-page-shortcut-color: var(--google-grey-refresh-300);
}

.mini-page {
  align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
}

.mini-header {
  height: 28%;
    width: 92%;
}

:host(:not([single-colored-logo])) .mini-header {
  background-image: url(icons/colored_header.svg);
    background-repeat: no-repeat;
    background-size: 100%;
}

:host([single-colored-logo]) .mini-header {
  -webkit-mask-image: url(icons/colored_header.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--google-grey-refresh-300);
}

.mini-shortcuts {
  -webkit-mask-image: url(icons/shortcut_circles.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--ntp-mini-page-shortcut-color);
    height: 29%;
    margin-top: 8%;
    width: 82%;
}

@media (prefers-color-scheme: dark) {
:host(:not([single-colored-logo])) .mini-header, .mini-header {
  -webkit-mask-image: url(icons/colored_header.svg);
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: 100%;
      background: white;
}

}

</style>
<div class="mini-page">
  <div class="mini-header"></div>
  <div class="mini-shortcuts"></div>
</div>
<!--_html_template_end_-->`}}customElements.define(MiniPageElement.is,MiniPageElement);// Copyright 2020 The Chromium Authors. All rights reserved.
/**
 * @fileoverview Wrapper around <iframe> element that lets us mock out loading
 * and postMessaging in tests.
 */class IframeElement extends PolymerElement{static get is(){return"ntp-iframe"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-iframe">:host(:not([hidden])) {
  display: block;
}

#iframe {
  border: none;
    border-radius: inherit;
    height: inherit;
    max-height: inherit;
    max-width: inherit;
    width: inherit;
}

</style>
<iframe id="iframe" src="[[src_]]"></iframe>
<!--_html_template_end_-->`}static get properties(){return{src:{reflectToAttribute:true,type:String},src_:{type:String,computed:"computeSrc_(src)"}}}postMessage(message){BrowserProxy.getInstance().postMessage(this.$.iframe,message,new URL(this.src).origin)}computeSrc_(){return BrowserProxy.getInstance().createIframeSrc(this.src)}}customElements.define(IframeElement.is,IframeElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class CustomizeBackgroundsElement extends PolymerElement{static get is(){return"ntp-customize-backgrounds"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style" scope="ntp-customize-backgrounds">:host {
  display: flex;
}

#container {
  padding: 4px;
}

cr-grid {
  --cr-grid-gap: 8px;
}

.tile {
  cursor: pointer;
    outline-width: 0;
}

ntp-iframe {
  pointer-events: none;
}

:host-context(.focus-outline-visible) .tile:focus {
  box-shadow: var(--ntp-focus-shadow);
}

.image {
  border-radius: 4px;
    display: block;
    height: 176px;
    width: 176px;
}

.label {
  color: var(--cr-primary-text-color);
    margin-bottom: 4px;
    margin-top: 3px;
    min-height: 30px;
}

.selected {
  background-color: var(--ntp-selected-background-color);
    border-radius: 4px;
    position: relative;
}

.selected .image, .selected #uploadFromDevice {
  box-shadow: 0 1px 3px 0 rgba(var(--google-grey-800-rgb), .3),
        0 4px 8px 3px rgba(var(--google-grey-800-rgb), .15);
}

.selected .image {
  transform: scale(.8);
}

.selected-circle {
  background-color: var(--ntp-background-override-color);
    border-radius: 50%;
    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, .16),
        0 1px 2px 1px rgba(0, 0, 0, .23);
    display: none;
    height: 22px;
    left: initial;
    position: absolute;
    right: 10px;
    top: 8px;
    width: 22px;
}

:host-context([dir=rtl]) .selected-circle {
  left: 10px;
    right: initial;
}

.selected-check {
  -webkit-mask-image: url(icons/check_circle.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 28px;
    background-color: var(--ntp-selected-border-color);
    display: none;
    height: 28px;
    left: initial;
    position: absolute;
    right: 7px;
    top: 5px;
    width: 28px;
}

:host-context([dir=rtl]) .selected-check {
  left: 7px;
    right: initial;
}

.selected :-webkit-any(.selected-circle, .selected-check) {
  display: block;
}

#noBackground .image, #uploadFromDevice .image {
  background: var(--ntp-background-override-color);
    border: 1px solid var(--ntp-border-color);
}

#uploadFromDevice {
  position: relative;
}

#uploadFromDeviceImage {
  position: absolute;
    top: 0;
    width: 100%;
}

#uploadFromDeviceImage .label {
  text-align: center;
}

#uploadIcon {
  -webkit-mask-image: url(icons/upload.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--google-grey-refresh-700);
    height: 32px;
    margin: 61px auto 8px;
    width: 32px;
}

#backgroundsDisabled {
  align-items: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 100%;
}

#backgroundsDisabledIcon {
  -webkit-mask-image: url(chrome://resources/images/business.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--cr-primary-text-color);
    height: 48px;
    margin: auto;
    width: 48px;
}

#backgroundsDisabledTitle {
  margin-top: 10px;
    text-align: center;
    width: 50%;
}

@media (prefers-color-scheme: dark) {
.selected .image, .selected #uploadFromDevice {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3),
          0 4px 8px 3px rgba(0, 0, 0, .15);
}

#uploadIcon {
  background-color: var(--google-grey-refresh-500);
}

}

</style>
<div id="backgroundsDisabled" hidden$="[[!customBackgroundDisabledByPolicy_]]">
  <div id="backgroundsDisabledIcon"></div>
  <div id="backgroundsDisabledTitle">Custom backgrounds have been turned off by your administrator</div>
</div>
<cr-grid id="collections" columns="3" hidden="[[!showBackgroundSelection_]]">
  <div id="uploadFromDevice" class="tile" role="button" on-click="onUploadFromDeviceClick_" tabindex="0">
    <div class$="[[getCustomBackgroundClass_(theme, backgroundSelection)]]">
      <div class="image">
      </div>
      <div id="uploadFromDeviceImage">
        <div id="uploadIcon"></div>
        <div class="label">Upload from device</div>
      </div>
      <div class="selected-circle"></div>
      <div class="selected-check"></div>
    </div>
    <div class="label"></div>
  </div>
  <div id="noBackground" class="tile" role="button" on-click="onDefaultClick_" tabindex="0">
    <div class$="[[getNoBackgroundClass_(theme, backgroundSelection)]]">
      <div class="image">
        <ntp-mini-page></ntp-mini-page>
      </div>
      <div class="selected-circle"></div>
      <div class="selected-check"></div>
    </div>
    <div class="label">No background</div>
  </div>
  <dom-repeat id="collectionsRepeat" items="[[collections_]]">
    <template>
      <div class="tile" tabindex="0" title="[[item.label]]" role="button" on-click="onCollectionClick_">
        <ntp-iframe class="image" src="chrome-untrusted://new-tab-page/background_image?[[item.previewImageUrl.url]]">
        </ntp-iframe>
        <div class="label">[[item.label]]</div>
      </div>
    </template>
  </dom-repeat>
</cr-grid>
<cr-grid id="images" columns="3" hidden="[[!selectedCollection]]">
  <dom-repeat id="imagesRepeat" items="[[images_]]">
    <template>
      <div class$="tile
              [[getImageSelectedClass_(index, theme, backgroundSelection)]]" tabindex="0" title="[[item.attribution1]]" role="button" on-click="onImageClick_">
        <ntp-iframe class="image" src="chrome-untrusted://new-tab-page/background_image?[[item.previewImageUrl.url]]">
        </ntp-iframe>
        <div class="selected-circle"></div>
        <div class="selected-check"></div>
      </div>
    </template>
  </dom-repeat>
</cr-grid>
<!--_html_template_end_-->`}static get properties(){return{backgroundSelection:{type:Object,value:()=>({type:BackgroundSelectionType.NO_SELECTION}),notify:true},customBackgroundDisabledByPolicy_:{type:Boolean,value:()=>loadTimeData.getBoolean("customBackgroundDisabledByPolicy")},showBackgroundSelection_:{type:Boolean,computed:"computeShowBackgroundSelection_(selectedCollection)"},selectedCollection:{notify:true,observer:"onSelectedCollectionChange_",type:Object,value:null},theme:Object,collections_:Array,images_:Array}}constructor(){super();if(this.customBackgroundDisabledByPolicy_){return}this.pageHandler_=BrowserProxy.getInstance().handler;this.pageHandler_.getBackgroundCollections().then(({collections:collections})=>{this.collections_=collections})}computeShowBackgroundSelection_(){return!this.customBackgroundDisabledByPolicy_&&!this.selectedCollection}getCustomBackgroundClass_(){switch(this.backgroundSelection.type){case BackgroundSelectionType.NO_SELECTION:return this.theme&&this.theme.backgroundImage&&this.theme.backgroundImage.url.url.startsWith("chrome-untrusted://new-tab-page/background.jpg")?"selected":"";default:return""}}getNoBackgroundClass_(){switch(this.backgroundSelection.type){case BackgroundSelectionType.NO_BACKGROUND:return"selected";case BackgroundSelectionType.NO_SELECTION:return this.theme&&!this.theme.backgroundImage&&!this.theme.dailyRefreshCollectionId?"selected":"";case BackgroundSelectionType.IMAGE:case BackgroundSelectionType.DAILY_REFRESH:default:return""}}getImageSelectedClass_(index){const{url:url}=this.images_[index].imageUrl;switch(this.backgroundSelection.type){case BackgroundSelectionType.IMAGE:return this.backgroundSelection.image.imageUrl.url===url?"selected":"";case BackgroundSelectionType.NO_SELECTION:return this.theme&&this.theme.backgroundImage&&this.theme.backgroundImage.url.url===url&&!this.theme.dailyRefreshCollectionId?"selected":"";case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return""}}onCollectionClick_(e){this.selectedCollection=this.$.collectionsRepeat.itemForElement(e.target);this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kBackgroundsCollectionOpened)}async onUploadFromDeviceClick_(){this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kBackgroundsUploadFromDeviceClicked);const{success:success}=await this.pageHandler_.chooseLocalCustomBackground();if(success){this.dispatchEvent(new Event("close",{bubbles:true,composed:true}))}}onDefaultClick_(){if(this.backgroundSelection.type!==BackgroundSelectionType.NO_BACKGROUND){this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kBackgroundsNoBackgroundSelected)}this.backgroundSelection={type:BackgroundSelectionType.NO_BACKGROUND}}onImageClick_(e){const image=this.$.imagesRepeat.itemForElement(e.target);if(this.backgroundSelection.type!==BackgroundSelectionType.IMAGE||this.backgroundSelection.image!==image){this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kBackgroundsImageSelected)}this.backgroundSelection={type:BackgroundSelectionType.IMAGE,image:image}}async onSelectedCollectionChange_(){this.images_=[];if(!this.selectedCollection){return}const collectionId=this.selectedCollection.id;const{images:images}=await this.pageHandler_.getBackgroundImages(collectionId);if(!this.selectedCollection||this.selectedCollection.id!==collectionId){return}this.images_=images}}customElements.define(CustomizeBackgroundsElement.is,CustomizeBackgroundsElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class CustomizeShortcutsElement extends PolymerElement{static get is(){return"ntp-customize-shortcuts"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-icons" scope="ntp-customize-shortcuts">:host {
  line-height: 20px;
}

#options {
  display: flex;
}

.option {
  margin-inline-end: 9px;
    width: 268px;
}

.option-image {
  border: 1px solid var(--ntp-border-color);
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    height: 176px;
    position: relative;
    width: 268px;
}

:host-context(.focus-outline-visible) .option-image:focus {
  box-shadow: var(--ntp-focus-shadow);
}

.selected .option-image {
  background-color: var(--ntp-selected-background-color);
    border-color: var(--ntp-selected-border-color);
}

.option-mini {
  background-color: var(--ntp-background-override-color);
    border: 1px solid var(--ntp-border-color);
    border-radius: 4px;
    box-sizing: border-box;
    height: 144px;
    position: absolute;
    right: 40px;
    top: 16px;
    width: 144px;
}

:host-context([dir='rtl']) .option-mini {
  left: 40px;
    right: unset;
}

.selected .option-mini {
  border-color: transparent;
    box-shadow: 0 1px 3px 0 rgba(var(--google-grey-800-rgb), .3),
        0 4px 8px 3px rgba(var(--google-grey-800-rgb), .15);
}

@media (prefers-color-scheme: dark) {
.selected .option-mini {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .3),
          0 4px 8px 3px rgba(0, 0, 0, .15);
}

}

ntp-mini-page {
  --ntp-mini-page-shortcut-color: var(--google-grey-refresh-500);
}

.selected ntp-mini-page {
  --ntp-mini-page-shortcut-color: var(--ntp-selected-border-color);
}

.option-icon {
  -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background: 96px 96px var(--ntp-border-color);
    height: 96px;
    left: 16px;
    position: absolute;
    top: 48px;
    width: 96px;
}

#optionCustomLinks .option-icon {
  -webkit-mask-image: url(icons/account_circle.svg);
}

#optionMostVisited .option-icon {
  -webkit-mask-image: url(icons/generic_globe.svg);
}

:host-context([dir='rtl']) .option-icon {
  right: 16px;
}

.selected .option-icon {
  background-color: var(--ntp-selected-light-background-color);
}

@media (prefers-color-scheme: dark) {
.selected .option-icon {
  background-color: var(--ntp-selected-border-color);
}

}

.option-image .selected-circle {
  box-shadow: 0 3px 6px 1px rgba(0, 0, 0, .16),
        0 1px 2px 1px rgba(0, 0, 0, .23);
    height: 22px;
    left: 209px;
    top: 9px;
    width: 22px;
}

:host-context([dir='rtl']) .option-image .selected-circle {
  left: 0;
    right: 209px;
}

.option-image .selected-check {
  left: initial;
    right: 32px;
    top: 6px;
}

:host-context([dir='rtl']) .option-image .selected-check {
  left: 32px;
    right: initial;
}

.option-title {
  font-weight: bold;
    margin: 8px 0;
}

#hide {
  align-items: center;
    border: 1px solid var(--ntp-border-color);
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    height: 64px;
    margin-top: 24px;
    max-width: 544px;
    width: 100%;
}

#hide.selected {
  background-color: var(--ntp-selected-background-color);
    border-color: var(--ntp-selected-border-color);
    color: var(--ntp-selected-border-color);
}

#hideIcon {
  margin-inline-end: 20px;
    margin-inline-start: 24px;
}

.selected #hideIcon {
  background-color: var(--ntp-selected-border-color);
}

#hideTitleContainer {
  flex-grow: 1;
}

#hideTitle {
  font-weight: bold;
}

cr-toggle {
  margin-inline-end: 20px;
}

.selected-circle {
  background: var(--ntp-background-override-color) no-repeat center;
    border-radius: 50%;
    display: none;
    height: 22px;
    left: 66px;
    position: absolute;
    top: 46px;
    width: 22px;
}

:host-context([dir='rtl']) .selected-circle {
  left: auto;
    right: 66px;
}

.selected-check {
  background: url(icons/check_circle.svg) no-repeat center;
    background-size: 28px 28px;
    display: none;
    height: 28px;
    left: 63px;
    position: absolute;
    top: 43px;
    width: 28px;
}

.selected :-webkit-any(.selected-circle, .selected-check) {
  display: block;
}

:host-context([dir='rtl']) .selected-check {
  left: auto;
    right: 63px;
}

@media (prefers-color-scheme: dark) {
.selected-check {
  background: transparent;
}

}

@media (prefers-color-scheme: dark) {
.selected-check::after {
  -webkit-mask-image: url(icons/check_circle.svg);
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: 28px;
      background-color: var(--google-blue-refresh-300);
      content: '';
      display: block;
      height: 28px;
      left: 0;
      position: absolute;
      top: 0;
      width: 28px;
}

}

</style>
<div id="options">
  <div id="optionCustomLinks" class$="option [[getCustomLinksSelected_(customLinksEnabled_, hide_)]]">
    <cr-button id="optionCustomLinksButton" class="option-image" tabindex="0" aria-pressed$="[[getCustomLinksAriaPressed_(customLinksEnabled_,
            hide_)]]" title="My shortcuts" on-click="onCustomLinksClick_" noink="">
      <div class="option-icon"></div>
      <div class="option-mini">
        <ntp-mini-page single-colored-logo=""></ntp-mini-page>
      </div>
      <div class="selected-circle"></div>
      <div class="selected-check"></div>
    </cr-button>
    <div class="option-title">My shortcuts</div>
    Shortcuts are curated by you
  </div>
  <div id="optionMostVisited" class$="option [[getMostVisitedSelected_(customLinksEnabled_, hide_)]]">
    <cr-button id="optionMostVisitedButton" class="option-image" tabindex="0" aria-pressed$="[[getMostVisitedAriaPressed_(customLinksEnabled_,
            hide_)]]" title="Most visited sites" on-click="onMostVisitedClick_" on-keydown="onMostVistedKey" noink="">
      <div class="option-icon"></div>
      <div class="option-mini">
        <ntp-mini-page single-colored-logo=""></ntp-mini-page>
      </div>
      <div class="selected-circle"></div>
      <div class="selected-check"></div>
    </cr-button>
    <div class="option-title">Most visited sites</div>
    Shortcuts are suggested based on websites you visit often
  </div>
</div>
<div id="hide" class$="[[getHideClass_(hide_)]]">
  <div id="hideIcon" class="cr-icon icon-visibility-off"></div>
  <div id="hideTitleContainer">
    <div id="hideTitle">Hide shortcuts</div>
    Don&#39;t show shortcuts on this page
  </div>
  <cr-toggle id="hideToggle" title="Hide shortcuts" checked="[[hide_]]" on-change="onHideChange_"></cr-toggle>
</div>
<!--_html_template_end_-->`}static get properties(){return{customLinksEnabled_:Boolean,hide_:Boolean}}constructor(){super();const{callbackRouter:callbackRouter,handler:handler}=BrowserProxy.getInstance();this.callbackRouter_=callbackRouter;this.pageHandler_=handler;this.setMostVisitedInfoListenerId_=null}connectedCallback(){super.connectedCallback();this.setMostVisitedInfoListenerId_=this.callbackRouter_.setMostVisitedInfo.addListener(info=>{this.customLinksEnabled_=info.customLinksEnabled;this.hide_=!info.visible});this.pageHandler_.updateMostVisitedInfo();FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.setMostVisitedInfoListenerId_))}apply(){this.pageHandler_.setMostVisitedSettings(this.customLinksEnabled_,!this.hide_)}getCustomLinksAriaPressed_(){return!this.hide_&&this.customLinksEnabled_?"true":"false"}getCustomLinksSelected_(){return!this.hide_&&this.customLinksEnabled_?"selected":""}getHideClass_(){return this.hide_?"selected":""}getMostVisitedAriaPressed_(){return!this.hide_&&!this.customLinksEnabled_?"true":"false"}getMostVisitedSelected_(){return!this.hide_&&!this.customLinksEnabled_?"selected":""}onCustomLinksClick_(){if(!this.customLinksEnabled_){this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kShortcutsCustomLinksClicked)}this.customLinksEnabled_=true;this.hide_=false}onHideChange_(e){this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kShortcutsVisibilityToggleClicked);this.hide_=e.detail}onMostVisitedClick_(){if(this.customLinksEnabled_){this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kShortcutsMostVisitedClicked)}this.customLinksEnabled_=false;this.hide_=false}}customElements.define(CustomizeShortcutsElement.is,CustomizeShortcutsElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class CustomizeModulesElement extends PolymerElement{static get is(){return"ntp-customize-modules"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-icons" scope="ntp-customize-modules">:host {
  line-height: 20px;
}

#hide {
  align-items: center;
    border: 1px solid var(--ntp-border-color);
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    height: 64px;
    max-width: 544px;
    width: 100%;
}

:host([hide_]) #hide {
  background-color: var(--ntp-selected-background-color);
    border-color: var(--ntp-selected-border-color);
    color: var(--ntp-selected-border-color);
}

#hideIcon {
  margin-inline-end: 20px;
    margin-inline-start: 24px;
}

:host([hide_]) #hideIcon {
  background-color: var(--ntp-selected-border-color);
}

#hideTitleContainer {
  flex-grow: 1;
}

#hideTitle {
  font-weight: bold;
}

cr-toggle {
  margin-inline-end: 20px;
}

</style>
<div id="hide">
  <div id="hideIcon" class="cr-icon icon-visibility-off"></div>
  <div id="hideTitleContainer">
    <div id="hideTitle">Hide cards</div>
    Don&#39;t show cards on this page
  </div>
  <cr-toggle id="hideToggle" title="Hide cards" checked="[[hide_]]" on-change="onHideChange_"></cr-toggle>
</div>
<!--_html_template_end_-->`}static get properties(){return{hide_:{type:Boolean,reflectToAttribute:true}}}constructor(){super();this.setModulesVisibleListenerId_=null}connectedCallback(){super.connectedCallback();this.setModulesVisibleListenerId_=BrowserProxy.getInstance().callbackRouter.setModulesVisible.addListener(visible=>{this.hide_=!visible});BrowserProxy.getInstance().handler.updateModulesVisible()}disconnectedCallback(){super.disconnectedCallback();BrowserProxy.getInstance().callbackRouter.removeListener(assert(this.setModulesVisibleListenerId_))}apply(){BrowserProxy.getInstance().handler.setModulesVisible(!this.hide_)}onHideChange_(e){this.hide_=e.detail}}customElements.define(CustomizeModulesElement.is,CustomizeModulesElement);// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function createScrollBorders(container,topBorder,bottomBorder,showAttribute){const topProbe=document.createElement("div");container.prepend(topProbe);const bottomProbe=document.createElement("div");container.append(bottomProbe);const observer=new IntersectionObserver(entries=>{entries.forEach(({target:target,intersectionRatio:intersectionRatio})=>{const show=intersectionRatio===0;if(target===topProbe){topBorder.toggleAttribute(showAttribute,show)}else if(target===bottomProbe){bottomBorder.toggleAttribute(showAttribute,show)}})},{root:container});observer.observe(topProbe);observer.observe(bottomProbe);return observer}function decodeString16(str){return str?str.data.map(ch=>String.fromCodePoint(ch)).join(""):""}function mojoString16(str){const array=new Array(str.length);for(let i=0;i<str.length;++i){array[i]=str.charCodeAt(i)}return{data:array}}function mojoTimeDelta(timeDelta){return{microseconds:Math.floor(timeDelta*1e3)}}function $$(element,selector){return element.shadowRoot.querySelector(selector)}// Copyright 2019 The Chromium Authors. All rights reserved.
const BackgroundSelectionType={NO_SELECTION:0,NO_BACKGROUND:1,IMAGE:2,DAILY_REFRESH:3};class CustomizeDialogElement extends PolymerElement{static get is(){return"ntp-customize-dialog"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style cr-icons" scope="ntp-customize-dialog">cr-dialog::part(dialog) {
  height: 100%;
    max-height: 520px;
    min-width: 800px;
}

cr-dialog::part(wrapper) {
  height: 100%;
}

cr-dialog::part(body-container) {
  flex-grow: 1;
}

div[slot=title] {
  align-items: center;
    color: var(--cr-primary-text-color);
    display: flex;
    flex-direction: row;
    height: 64px;
    margin-top: 16px;
    padding: 0;
}

div[slot=body] {
  color: var(--cr-primary-text-color);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0;
}

#bodyContainer {
  display: flex;
    flex-direction: row;
    overflow: hidden;
}

div[slot=button-container] {
  padding-top: 16px;
}

#menuContainer, #pagesContainer {
  overflow: hidden;
}

#leftTitleSpacer, #menuContainer {
  flex-basis: 232px;
}

#title {
  line-height: 1.5;
    margin-bottom: -2px;
    padding-inline-end: 24px;
    user-select: none;
}

#title, #pagesContainer {
  flex-grow: 1;
}

#menu, #pages {
  height: 100%;
    overflow: auto;
}

#pages > iron-pages {
  margin: 2px;
}

div[scroll-border] {
  border-bottom: 1px solid transparent;
}

div[scroll-border][show-1], div[scroll-border][show-2] {
  border-bottom-color: var(--ntp-border-color);
}

#menu {
  display: flex;
    flex-direction: column;
}

#menuSelector {
  margin-bottom: 2px;
    margin-top: 2px;
}

.menu-item {
  align-items: center;
    border-radius: 0 16px 16px 0;
    color: var(--cr-primary-text-color);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    font-size: 14px;
    height: 32px;
    outline: none;
    width: 192px;
}

.menu-item + .menu-item {
  margin-top: 16px;
}

:host-context([dir=rtl]) .menu-item {
  border-radius: 16px 0 0 16px;
}

.menu-item:hover {
  background-color: var(--ntp-hover-background-color);
}

:host-context(.focus-outline-visible) .menu-item:focus {
  box-shadow: var(--ntp-focus-shadow);
}

.menu-item:active {
  background-color: var(--ntp-active-background-color);
}

.menu-item[selected] {
  background-color: var(--ntp-selected-background-color);
    color: var(--ntp-selected-primary-text-color);
}

.menu-item-icon {
  -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--cr-primary-text-color);
    height: 20px;
    margin-inline-end: 16px;
    margin-inline-start: 24px;
    width: 20px;
}

.menu-item[selected] .menu-item-icon {
  background-color: var(--ntp-selected-primary-text-color);
}

#backgroundsIcon {
  -webkit-mask-image: url(icons/backgrounds.svg);
}

#shortcutsIcon {
  -webkit-mask-image: url(icons/link.svg);
}

#modulesIcon {
  -webkit-mask-image: url(icons/cards.svg);
}

#themesIcon {
  -webkit-mask-image: url(icons/colors.svg);
}

#backButton {
  --cr-icon-button-fill-color: var(--cr-primary-text-color);
    margin-inline-end: 4px;
    
    margin-inline-start: -12px;
}

#titleNavigation {
  align-items: center;
    display: flex;
    flex-direction: row;
}

cr-toggle {
  margin-inline-end: 12px;
}

#collectionTitle {
  flex-grow: 1;
}

</style>
<cr-dialog id="dialog" on-cancel="onCancel_" show-on-attach="">
  <div slot="title">
    <div id="leftTitleSpacer"></div>
    <div id="title">
      <div id="titleText" hidden="[[showTitleNavigation_]]">
        Customize this page
      </div>
      <div id="titleNavigation" hidden="[[!showTitleNavigation_]]">
        <cr-icon-button id="backButton" class="icon-arrow-back" on-click="onBackClick_" title="Back">
        </cr-icon-button>
        <div id="collectionTitle">[[selectedCollection_.label]]</div>
        <cr-toggle id="refreshToggle" checked="[[isRefreshToggleChecked_]]" on-change="onBackgroundDailyRefreshToggleChange_">
        </cr-toggle>
        Refresh daily
      </div>
    </div>
  </div>
  <div slot="body">
    <div id="topPageScrollBorder" scroll-border=""></div>
    <div id="bodyContainer">
      <div id="menuContainer">
        <div id="menu">
          <iron-selector id="menuSelector" selected-attribute="selected" attr-for-selected="page-name" selected="{{selectedPage_}}" on-keydown="onMenuItemKeyDown_">
            <div class="menu-item" page-name="backgrounds" tabindex="0">
              <div id="backgroundsIcon" class="menu-item-icon"></div>
              Background
            </div>
            <div class="menu-item" page-name="shortcuts" tabindex="0">
              <div id="shortcutsIcon" class="menu-item-icon"></div>
              Shortcuts
            </div>
            <div class="menu-item" page-name="modules" tabindex="0" hidden$="[[!modulesEnabled_]]">
              <div id="modulesIcon" class="menu-item-icon"></div>
              Cards
            </div>
            <div class="menu-item" page-name="themes" tabindex="0">
              <div id="themesIcon" class="menu-item-icon"></div>
              Color and theme
            </div>
          </iron-selector>
        </div>
      </div>
      <div id="pagesContainer">
        <div id="pages">
          <iron-pages selected="[[selectedPage_]]" attr-for-selected="page-name">
            <ntp-customize-backgrounds id="backgrounds" page-name="backgrounds" selected-collection="{{selectedCollection_}}" theme="[[theme]]" background-selection="{{backgroundSelection}}">
            </ntp-customize-backgrounds>
            <ntp-customize-shortcuts page-name="shortcuts">
            </ntp-customize-shortcuts>
            <ntp-customize-modules page-name="modules" hidden$="[[!modulesEnabled_]]">
            </ntp-customize-modules>
            <cr-customize-themes id="customizeThemes" page-name="themes">
            </cr-customize-themes>
          </iron-pages>
        </div>
      </div>
    </div>
    <div id="bottomPageScrollBorder" scroll-border=""></div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      Cancel
    </cr-button>
    <cr-button class="action-button" on-click="onDoneClick_">
      Done
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}static get properties(){return{backgroundSelection:{type:Object,notify:true},theme:Object,selectedPage_:{type:String,value:"backgrounds",observer:"onSelectedPageChange_"},selectedCollection_:Object,showTitleNavigation_:{type:Boolean,computed:"computeShowTitleNavigation_(selectedPage_, selectedCollection_)",value:false},isRefreshToggleChecked_:{type:Boolean,computed:`computeIsRefreshToggleChecked_(theme, selectedCollection_,\n            backgroundSelection)`},modulesEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesEnabled")}}}constructor(){super();this.pageHandler_=BrowserProxy.getInstance().handler;this.intersectionObservers_=[];this.backgroundSelection={type:BackgroundSelectionType.NO_SELECTION}}disconnectedCallback(){super.disconnectedCallback();this.intersectionObservers_.forEach(observer=>{observer.disconnect()});this.intersectionObservers_=[]}ready(){super.ready();this.intersectionObservers_=[createScrollBorders(this.$.menu,this.$.topPageScrollBorder,this.$.bottomPageScrollBorder,"show-1"),createScrollBorders(this.$.pages,this.$.topPageScrollBorder,this.$.bottomPageScrollBorder,"show-2")];this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kOpenClicked)}onCancel_(){this.$.customizeThemes.revertThemeChanges();this.backgroundSelection={type:BackgroundSelectionType.NO_SELECTION}}onCancelClick_(){this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kCancelClicked);this.$.dialog.cancel()}onDoneClick_(){this.$.customizeThemes.confirmThemeChanges();this.shadowRoot.querySelector("ntp-customize-shortcuts").apply();if(this.modulesEnabled_){this.shadowRoot.querySelector("ntp-customize-modules").apply()}switch(this.backgroundSelection.type){case BackgroundSelectionType.NO_BACKGROUND:this.pageHandler_.setNoBackgroundImage();break;case BackgroundSelectionType.IMAGE:const{attribution1:attribution1,attribution2:attribution2,attributionUrl:attributionUrl,imageUrl:imageUrl}=assert(this.backgroundSelection.image);this.pageHandler_.setBackgroundImage(attribution1,attribution2,attributionUrl,imageUrl);break;case BackgroundSelectionType.DAILY_REFRESH:this.pageHandler_.setDailyRefreshCollectionId(assert(this.backgroundSelection.dailyRefreshCollectionId))}this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kDoneClicked);this.$.dialog.close()}onMenuItemKeyDown_(e){if(!["Enter"," "].includes(e.key)){return}e.preventDefault();e.stopPropagation();this.selectedPage_=e.target.getAttribute("page-name")}onSelectedPageChange_(){this.$.pages.scrollTop=0}computeIsRefreshToggleChecked_(){if(!this.selectedCollection_){return false}switch(this.backgroundSelection.type){case BackgroundSelectionType.NO_SELECTION:return!!this.theme&&this.selectedCollection_.id===this.theme.dailyRefreshCollectionId;case BackgroundSelectionType.DAILY_REFRESH:return this.selectedCollection_.id===this.backgroundSelection.dailyRefreshCollectionId}return false}computeShowTitleNavigation_(){return this.selectedPage_==="backgrounds"&&!!this.selectedCollection_}onBackClick_(){this.selectedCollection_=null;this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kBackgroundsBackClicked)}onBackgroundDailyRefreshToggleChange_(){if(this.$.refreshToggle.checked){this.backgroundSelection={type:BackgroundSelectionType.DAILY_REFRESH,dailyRefreshCollectionId:this.selectedCollection_.id}}else{this.backgroundSelection={type:BackgroundSelectionType.NO_BACKGROUND}}this.pageHandler_.onCustomizeDialogAction(newTabPage.mojom.CustomizeDialogAction.kBackgroundsRefreshToggleClicked)}}customElements.define(CustomizeDialogElement.is,CustomizeDialogElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const RECOGNITION_CONFIDENCE_THRESHOLD=.5;const QUERY_LENGTH_LIMIT=120;const IDLE_TIMEOUT_MS=8e3;const ERROR_TIMEOUT_SHORT_MS=3e3;const ERROR_TIMEOUT_LONG_MS=8e3;const VOLUME_ANIMATION_DURATION_MIN_MS=170;const VOLUME_ANIMATION_DURATION_RANGE_MS=10;const State={UNINITIALIZED:-1,STARTED:0,AUDIO_RECEIVED:1,SPEECH_RECEIVED:2,RESULT_RECEIVED:3,ERROR_RECEIVED:4,RESULT_FINAL:5};const Error$1=newTabPage.mojom.VoiceSearchError;function toError(webkitError){switch(webkitError){case"aborted":return Error$1.kAborted;case"audio-capture":return Error$1.kAudioCapture;case"language-not-supported":return Error$1.kLanguageNotSupported;case"network":return Error$1.kNetwork;case"no-speech":return Error$1.kNoSpeech;case"not-allowed":return Error$1.kNotAllowed;case"service-not-allowed":return Error$1.kServiceNotAllowed;case"bad-grammar":return Error$1.kBadGrammar;default:return Error$1.kOther}}function getErrorTimeout(error){switch(error){case Error$1.kAudioCapture:case Error$1.kNoSpeech:case Error$1.kNotAllowed:case Error$1.kNoMatch:return ERROR_TIMEOUT_LONG_MS;default:return ERROR_TIMEOUT_SHORT_MS}}class VoiceSearchOverlayElement extends PolymerElement{static get is(){return"ntp-voice-search-overlay"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-icons" scope="ntp-voice-search-overlay">:host {
  --receiving-audio-color: var(--google-red-refresh-500);
    --speak-shown-duration: 2s;
}

.display-stack {
  display: grid;
}

.display-stack > * {
  grid-column-start: 1;
    grid-row-start: 1;
}

#dialog {
  align-items: center;
    background-color: var(--ntp-background-override-color);
    border: none;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    margin: 0;
    padding: 0;
    top: 0;
    width: 100%;
}

#closeButton {
  --cr-icon-button-fill-color: var(--cr-secondary-text-color);
    margin: 0;
    position: absolute;
    top: 16px;
}

:host-context([dir='ltr']) #closeButton {
  right: 16px;
}

:host-context([dir='rtl']) #closeButton {
  left: 16px;
}

#content {
  align-items: center;
    display: flex;
    flex-direction: row;
    width: 660px;
}

#texts {
  color: var(--cr-secondary-text-color);
    flex-grow: 1;
    font-size: 32px;
    text-align: start;
}

*[text] {
  transition-delay: 200ms;
    transition-duration: 500ms;
    transition-property: opacity, padding-inline-start;
    transition-timing-function: ease-out;
    visibility: hidden;
    width: 100%;
}

*[text='waiting'], *[text='speak'] {
  opacity: 0;
    padding-inline-start: 50px;
}

*[text][visible] {
  opacity: 1;
    padding-inline-start: 0;
    visibility: visible;
}

*[text='speak'][visible] #speak {
  opacity: 0;
    transition: opacity 0ms var(--speak-shown-duration);
}

*[text='speak'] #listening {
  opacity: 0;
}

*[text='speak'][visible] #listening {
  opacity: 1;
    transition: opacity 750ms ease-out var(--speak-shown-duration);
}

#finalResult {
  color: var(--cr-primary-text-color);
}

#errors, #errorLinks {
  display: inline;
}

#errorLinks a {
  color: var(--cr-link-color);
    font-size: 18px;
    font-weight: 500;
    margin-inline-start: 0.25em;
    text-decoration: none;
}

#micContainer {
  --mic-button-size: 165px;
    --mic-container-size: 300px;
    align-items: center;
    flex-shrink: 0;
    height: var(--mic-container-size);
    justify-items: center;
    width: var(--mic-container-size);
}

#micVolume {
  --mic-volume-size: calc(var(--mic-button-size) +
        var(--mic-volume-level) * (var(--mic-container-size) -
            var(--mic-button-size)));
    align-items: center;
    background-color: var(--ntp-border-color);
    border-radius: 50%;
    display: flex;
    height: var(--mic-volume-size);
    justify-content: center;
    transition-duration: var(--mic-volume-duration);
    transition-property: height, width;
    transition-timing-function: ease-in-out;
    width: var(--mic-volume-size);
}

#micVolumeCutout {
  background-color: var(--ntp-background-override-color);
    border-radius: 50%;
    height: var(--mic-button-size);
    width: var(--mic-button-size);
}

#micButton {
  border-radius: 50%;
    height: var(--mic-button-size);
    transition: background-color 200ms ease-in-out;
    width: var(--mic-button-size);
}

.receiving #micButton {
  background-color: var(--receiving-audio-color);
    border-color: var(--receiving-audio-color);
}

#micIcon {
  -webkit-mask-image: url(icons/mic.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--ntp-border-color);
    height: 80px;
    transition: background-color 200ms ease-in-out;
    width: 80px;
}

.listening #micIcon {
  background-color: var(--receiving-audio-color);
}

.receiving #micIcon {
  background-color: white;
}

</style>
<dialog id="dialog" on-close="onOverlayClose_" on-click="onOverlayClick_" on-keydown="onOverlayKeydown_">
  <!-- Purely exists to capture focus upon opening the dialog. -->
  <div tabindex="-1"></div>
  <cr-icon-button id="closeButton" class="icon-clear" title="Close">
  </cr-icon-button>
  <div id="content">
    <iron-selector id="texts" selected="[[getText_(state_)]]" attr-for-selected="text" fallback-selection="none" aria-live="polite" selected-attribute="visible" class="display-stack">
      <div text="none"></div>
      <div text="waiting">Waitingâ€¦</div>
      <div text="speak" class="display-stack">
        <div id="speak">Speak now</div>
        <div id="listening">Listeningâ€¦</div>
      </div>
      <div text="result" aria-hidden="true">
        <span id="finalResult">[[finalResult_]]</span>
        <span>[[interimResult_]]</span>
      </div>
      <div text="error">
        <iron-pages id="errors" selected="[[getErrorText_(error_)]]" attr-for-selected="error" fallback-selection="other">
          <span error="no-speech">Please check your microphone and audio levels.</span>
          <span error="audio-capture">Please check your microphone.</span>
          <span error="network">No Internet connection.</span>
          <span error="not-allowed">Voice search has been turned off.</span>
          <span error="language-not-supported">Voice search in your language is not available.</span>
          <span error="no-match">Didn&#39;t get that.</span>
          <span error="other">Unknown error.</span>
        </iron-pages>
        <iron-pages id="errorLinks" selected="[[getErrorLink_(error_)]]" attr-for-selected="link" fallback-selection="none">
          <span link="none"></span>
          <a link="learn-more" target="_blank" href="[[helpUrl_]]" on-click="onLearnMoreClick_" on-keydown="onLinkKeydown_"><!--
            -->Learn more
          </a>
          <a link="details" target="_blank" href="[[helpUrl_]]" on-keydown="onLinkKeydown_"><!--
            -->Details
          </a>
          <a link="try-again" id="retryLink" href="#" on-click="onTryAgainClick_" on-keydown="onLinkKeydown_"><!--
            -->Try again
          </a>
        </iron-pages>
      </div>
    </iron-selector>
    <div id="micContainer" class$="[[getMicClass_(state_)]] display-stack">
      <div id="micVolume" style="--mic-volume-level: [[micVolumeLevel_]];
                --mic-volume-duration: [[micVolumeDuration_]]ms;">
        <div id="micVolumeCutout">
        </div>
      </div>
      <cr-button id="micButton" on-click="onMicClick_">
        <div id="micIcon"></div>
      </cr-button>
    </div>
  </div>
</dialog>
<!--_html_template_end_-->`}static get properties(){return{interimResult_:String,finalResult_:String,state_:{type:Number,value:State.UNINITIALIZED},error_:Number,helpUrl_:{type:String,readOnly:true,value:`https://support.google.com/chrome/?`+`p=ui_voice_search&hl=${window.navigator.language}`},micVolumeLevel_:{type:Number,value:0},micVolumeDuration_:{type:Number,value:VOLUME_ANIMATION_DURATION_MIN_MS}}}constructor(){super();this.pageHandler_=BrowserProxy.getInstance().handler;this.voiceRecognition_=new webkitSpeechRecognition;this.voiceRecognition_.continuous=false;this.voiceRecognition_.interimResults=true;this.voiceRecognition_.lang=window.navigator.language;this.voiceRecognition_.onaudiostart=this.onAudioStart_.bind(this);this.voiceRecognition_.onspeechstart=this.onSpeechStart_.bind(this);this.voiceRecognition_.onresult=this.onResult_.bind(this);this.voiceRecognition_.onend=this.onEnd_.bind(this);this.voiceRecognition_.onerror=(e=>{this.onError_(toError(e.error))});this.voiceRecognition_.onnomatch=(()=>{this.onError_(Error$1.kNoMatch)});this.timerId_=undefined}connectedCallback(){super.connectedCallback();this.$.dialog.showModal();this.start()}start(){this.voiceRecognition_.start();this.state_=State.STARTED;this.resetIdleTimer_()}onOverlayClose_(){this.voiceRecognition_.abort();this.dispatchEvent(new Event("close"))}onOverlayClick_(){this.$.dialog.close();this.pageHandler_.onVoiceSearchAction(newTabPage.mojom.VoiceSearchAction.kCloseOverlay)}onOverlayKeydown_(e){if(["Enter"," "].includes(e.key)&&this.finalResult_){this.onFinalResult_()}else if(e.key==="Escape"){this.onOverlayClick_()}}onLinkKeydown_(e){if(!["Enter"," "].includes(e.key)){return}e.stopPropagation();e.preventDefault();e.target.click()}onLearnMoreClick_(){this.pageHandler_.onVoiceSearchAction(newTabPage.mojom.VoiceSearchAction.kSupportLinkClicked)}onTryAgainClick_(e){e.stopPropagation();this.start();this.pageHandler_.onVoiceSearchAction(newTabPage.mojom.VoiceSearchAction.kTryAgainLink)}onMicClick_(e){if(this.state_!==State.ERROR_RECEIVED||this.error_!==Error$1.kNoMatch){return}e.stopPropagation();this.start();this.pageHandler_.onVoiceSearchAction(newTabPage.mojom.VoiceSearchAction.kTryAgainMicButton)}resetIdleTimer_(){BrowserProxy.getInstance().clearTimeout(this.timerId_);this.timerId_=BrowserProxy.getInstance().setTimeout(this.onIdleTimeout_.bind(this),IDLE_TIMEOUT_MS)}onIdleTimeout_(){if(this.state_===State.RESULT_FINAL){return}if(this.finalResult_){this.onFinalResult_();return}this.voiceRecognition_.abort();this.onError_(Error$1.kNoMatch)}resetErrorTimer_(duration){BrowserProxy.getInstance().clearTimeout(this.timerId_);this.timerId_=BrowserProxy.getInstance().setTimeout(()=>{this.$.dialog.close()},duration)}onAudioStart_(){this.resetIdleTimer_();this.state_=State.AUDIO_RECEIVED}onSpeechStart_(){this.resetIdleTimer_();this.state_=State.SPEECH_RECEIVED;this.animateVolume_()}onResult_(e){this.resetIdleTimer_();switch(this.state_){case State.STARTED:this.onAudioStart_();this.onSpeechStart_();break;case State.AUDIO_RECEIVED:this.onSpeechStart_();break;case State.SPEECH_RECEIVED:case State.RESULT_RECEIVED:break;default:return}const results=e.results;if(results.length===0){return}this.state_=State.RESULT_RECEIVED;this.interimResult_="";this.finalResult_="";const finalResult=results[e.resultIndex];if(finalResult.isFinal){this.finalResult_=finalResult[0].transcript;this.onFinalResult_();return}for(let j=0;j<results.length;j++){const result=results[j][0];if(result.confidence>RECOGNITION_CONFIDENCE_THRESHOLD){this.finalResult_+=result.transcript}else{this.interimResult_+=result.transcript}}if(this.interimResult_.length>QUERY_LENGTH_LIMIT){this.onFinalResult_()}}onFinalResult_(){if(!this.finalResult_){this.onError_(Error$1.kNoMatch);return}this.state_=State.RESULT_FINAL;const searchParams=new URLSearchParams;searchParams.append("q",this.finalResult_);searchParams.append("gs_ivs","1");const queryUrl=new URL("/search",loadTimeData.getString("googleBaseUrl"));queryUrl.search=searchParams.toString();this.pageHandler_.onVoiceSearchAction(newTabPage.mojom.VoiceSearchAction.kQuerySubmitted);BrowserProxy.getInstance().navigate(queryUrl.href)}onEnd_(){switch(this.state_){case State.STARTED:this.onError_(Error$1.kAudioCapture);return;case State.AUDIO_RECEIVED:this.onError_(Error$1.kNoSpeech);return;case State.SPEECH_RECEIVED:case State.RESULT_RECEIVED:this.onError_(Error$1.kNoMatch);return;case State.ERROR_RECEIVED:case State.RESULT_FINAL:return;default:this.onError_(Error$1.kOther);return}}onError_(error){this.pageHandler_.onVoiceSearchError(error);if(error===Error$1.kAborted){return}this.error_=error;this.state_=State.ERROR_RECEIVED;this.resetErrorTimer_(getErrorTimeout(error))}animateVolume_(){this.micVolumeLevel_=0;this.micVolumeDuration_=VOLUME_ANIMATION_DURATION_MIN_MS;if(this.state_!==State.SPEECH_RECEIVED&&this.state_!==State.RESULT_RECEIVED){return}this.micVolumeLevel_=BrowserProxy.getInstance().random();this.micVolumeDuration_=Math.round(VOLUME_ANIMATION_DURATION_MIN_MS+BrowserProxy.getInstance().random()*VOLUME_ANIMATION_DURATION_RANGE_MS);BrowserProxy.getInstance().setTimeout(this.animateVolume_.bind(this),this.micVolumeDuration_)}getText_(){switch(this.state_){case State.STARTED:return"waiting";case State.AUDIO_RECEIVED:case State.SPEECH_RECEIVED:return"speak";case State.RESULT_RECEIVED:case State.RESULT_FINAL:return"result";case State.ERROR_RECEIVED:return"error";default:return"none"}}getErrorText_(){switch(this.error_){case Error$1.kNoSpeech:return"no-speech";case Error$1.kAudioCapture:return"audio-capture";case Error$1.kNetwork:return"network";case Error$1.kNotAllowed:case Error$1.kServiceNotAllowed:return"not-allowed";case Error$1.kLanguageNotSupported:return"language-not-supported";case Error$1.kNoMatch:return"no-match";case Error$1.kAborted:case Error$1.kOther:default:return"other"}}getErrorLink_(){switch(this.error_){case Error$1.kNoSpeech:case Error$1.kAudioCapture:return"learn-more";case Error$1.kNotAllowed:case Error$1.kServiceNotAllowed:return"details";case Error$1.kNoMatch:return"try-again";default:return"none"}}getMicClass_(){switch(this.state_){case State.AUDIO_RECEIVED:return"listening";case State.SPEECH_RECEIVED:case State.RESULT_RECEIVED:return"receiving";default:return""}}}customElements.define(VoiceSearchOverlayElement.is,VoiceSearchOverlayElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class FakeboxElement extends PolymerElement{static get is(){return"ntp-fakebox"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-fakebox">:host {
  --ntp-fakebox-height: 44px;
    background-color: white;
    border-radius: calc(0.5 * var(--ntp-fakebox-height));
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    height: var(--ntp-fakebox-height);
    position: relative;
}

:host([hidden_]) {
  visibility: hidden;
}

:host > * {
  bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}

#controls {
  align-items: center;
    display: flex;
    flex-direction: row;
    left: 16px;
    pointer-events: none;
    right: 16px;
}

input {
  border: 0;
    opacity: 0;
    padding: 0;
    width: 100%;
}

#searchIcon {
  -webkit-mask-image: url(chrome://resources/images/icon_search.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--cr-secondary-text-color);
    height: 21px;
    width: 21px;
}

@keyframes blink {
0% {
  opacity: 1;
}

61.55% {
  opacity: 0;
}

}

#fakeCursor {
  background-color: var(--cr-secondary-text-color);
    height: 1rem;
    margin-inline-start: 11px;
    visibility: hidden;
    width: 1px;
}

:host([focused_]) #fakeCursor {
  animation: blink 1.3s step-end infinite;
    visibility: visible;
}

:host([dragged_]) #fakeCursor {
  visibility: visible;
}

#hint {
  color: var(--cr-secondary-text-color);
    flex-grow: 1;
    font-size: 1rem;
    margin-inline-start: 3px;
}

:host([focused_]) #hint, :host([dragged_]) #hint {
  visibility: hidden;
}

#voiceSearchButton {
  background: url(icons/googlemic_clr_24px.svg) no-repeat center;
    background-size: 21px 21px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    height: 100%;
    outline: none;
    padding: 0;
    pointer-events: auto;
    width: 26px;
}

:host-context(.focus-outline-visible) #voiceSearchButton:focus {
  box-shadow: var(--ntp-focus-shadow);
}

</style>
<input id="input" on-pointerdown="onPointerDown_" on-paste="onPaste_" on-dragenter="onDragenter_" on-dragleave="onDragleave_" on-drop="onDrop_" autocomplete="off" tabindex="-1" type="url" aria-hidden="true">

<div id="controls">
  <div id="searchIcon"></div>
  <div id="fakeCursor"></div>
  <div id="hint">Search Google or type a URL</div>
  <button id="voiceSearchButton" on-click="onVoiceSearchClick_" title="Search by voice">
  </button>
</div>
<!--_html_template_end_-->`}static get properties(){return{focused_:{reflectToAttribute:true,type:Boolean},hidden_:{reflectToAttribute:true,type:Boolean},dragged_:{reflectToAttribute:true,type:Boolean}}}constructor(){performance.mark("fakebox-creation-start");super();this.pageHandler_=BrowserProxy.getInstance().handler;this.callbackRouter_=BrowserProxy.getInstance().callbackRouter;this.setFakeboxFocusedListenerId_=null;this.setFakeboxVisibleListenerId_=null}connectedCallback(){super.connectedCallback();this.setFakeboxFocusedListenerId_=this.callbackRouter_.setFakeboxFocused.addListener(focused=>{this.focused_=focused;this.dragged_=false});this.setFakeboxVisibleListenerId_=this.callbackRouter_.setFakeboxVisible.addListener(visible=>{this.hidden_=!visible})}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.setFakeboxFocusedListenerId_));this.callbackRouter_.removeListener(assert(this.setFakeboxVisibleListenerId_))}ready(){super.ready();performance.measure("fakebox-creation","fakebox-creation-start")}onPointerDown_(){this.pageHandler_.focusOmnibox()}onPaste_(e){e.preventDefault();const text=e.clipboardData.getData("text/plain");if(!text){return}this.pageHandler_.pasteIntoOmnibox(text)}onDragenter_(){this.dragged_=true}onDragleave_(){this.dragged_=false}onDrop_(e){e.preventDefault();const text=e.dataTransfer.getData("text/plain");if(!text){return}this.pageHandler_.focusOmnibox();this.pageHandler_.pasteIntoOmnibox(text)}onVoiceSearchClick_(){this.dispatchEvent(new Event("open-voice-search"))}}customElements.define(FakeboxElement.is,FakeboxElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class RealboxButtonElement extends PolymerElement{static get is(){return"ntp-realbox-button"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-realbox-button">:host {
  align-items: center;
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    height: 24px;
    justify-content: center;
    outline: none;
    width: 24px;
}

:host([hidden]) {
  display: none;
}

:host(:hover) {
  background-color: var(--search-box-icon-bg-hovered, rgba(var(--google-grey-900-rgb), .16));
}

:host(:focus-within) {
  background-color: var(--search-box-icon-bg-focused, rgba(var(--google-grey-900-rgb), .32));
}

#icon {
  -webkit-mask-image: url(chrome://resources/images/icon_clear.svg);
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 16px;
    height: 100%;
    width: 100%;
}

:host-context(.header) #icon {
  -webkit-mask-image: url(icons/chevron.svg);
    -webkit-transform: rotate(180deg);
    background-color: var(--search-box-icon, var(--google-grey-900));
}

:host-context(.header[group-is-hidden]) #icon {
  -webkit-transform: none;
}

:host-context(ntp-realbox-match:hover) #icon {
  background-color: var(--search-box-icon, var(--google-grey-900));
}

:host-context(ntp-realbox-match:-webkit-any(:focus-within, .selected)) #icon, :host-context(.header:focus-within) #icon {
  background-color: var(--search-box-icon-selected, var(--google-grey-900));
}

</style>
<div id="icon"></div>

<!--_html_template_end_-->`}ready(){super.ready();this.addEventListener("mousedown",this.onMouseDown_.bind(this))}onMouseDown_(e){e.preventDefault()}}customElements.define(RealboxButtonElement.is,RealboxButtonElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const DOCUMENT_MATCH_TYPE="document";class RealboxIconElement extends PolymerElement{static get is(){return"ntp-realbox-icon"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-realbox-icon">:host {
  align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 32px;
}

#imageContainer {
  align-items: center;
    border-radius: 8px;
    display: none;
    height: 32px;
    justify-content: center;
    overflow: hidden;
    width: 32px;
}

:host-context(ntp-realbox-match[has-image]) #imageContainer {
  display: flex;
}

#image {
  max-height: 32px;
    max-width: 32px;
}

#icon {
  -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 16px;
    background-color: var(--search-box-icon, var(--google-grey-refresh-700));
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 16px;
    height: 24px;
    width: 24px;
}

:host-context(ntp-realbox-match[has-image]) #icon {
  display: none;
}

:host([in-searchbox][background-image='google_g.png']) #icon {
  background-size: 12px;
}

:host([in-searchbox][mask-image='search.svg']) #icon {
  -webkit-mask-size: 20px;
}

</style>
<div id="imageContainer" style$="[[imageContainerStyle_]]">
    <img id="image" src$="[[imageSrc_]]">
</div>
<div id="icon" style$="[[iconStyle_]]">
</div>

<!--_html_template_end_-->`}static get properties(){return{backgroundImage:{type:String,computed:`computeBackgroundImage_(match.faviconDataUrl, match)`,reflectToAttribute:true},defaultIcon:{type:String,value:""},maskImage:{type:String,computed:`computeMaskImage_(match)`,reflectToAttribute:true},match:{type:Object},iconStyle_:{type:String,computed:`computeIconStyle_(backgroundImage, maskImage)`},imageContainerStyle_:{type:String,computed:`computeImageContainerStyle_(imageSrc_, match)`},imageSrc_:{type:String,computed:`computeImageSrc_(match.imageDataUrl, match)`}}}computeBackgroundImage_(){if(this.match&&!this.match.isSearchType){if(this.match.faviconDataUrl){return this.match.faviconDataUrl}else if(this.match.type===DOCUMENT_MATCH_TYPE){return this.match.iconUrl}else{return""}}else if(this.defaultIcon==="google_g.png"){return this.defaultIcon}else{return""}}computeMaskImage_(){if(this.match){return this.match.iconUrl}else{return this.defaultIcon}}computeIconStyle_(){if(this.backgroundImage){return`background-image: url(${this.backgroundImage});`+`background-color: transparent;`}else{return`-webkit-mask-image: url(${this.maskImage});`}}computeImageContainerStyle_(){return this.match&&this.match.imageDominantColor&&!this.imageSrc_?`background-color: ${this.match.imageDominantColor}40;`:"background-color: transparent;"}computeImageSrc_(){if(!this.match){return""}if(this.match.imageDataUrl){return this.match.imageDataUrl}else if(this.match.imageUrl&&this.match.imageUrl.startsWith("data:image/")){return this.match.imageUrl}else{return""}}}customElements.define(RealboxIconElement.is,RealboxIconElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const ACMatchClassificationStyle={NONE:0,URL:1<<0,MATCH:1<<1,DIM:1<<2};class RealboxMatchElement extends PolymerElement{static get is(){return"ntp-realbox-match"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-realbox-match">:host {
  align-items: center;
    cursor: default;
    display: flex;
    font-size: 16px;
    line-height: 1;
    outline: none;
    padding-bottom: 6px;
    padding-inline-end: 16px;
    padding-inline-start: 12px;
    padding-top: 6px;
}

#container {
  align-items: center;
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    padding-inline-end: 8px;
    padding-inline-start: 8px;
    white-space: nowrap;
}

#contents, #description {
  overflow: hidden;
    text-overflow: ellipsis;
}

#separator {
  white-space: pre;
}

:host([has-image]) #container {
  align-items: flex-start;
    flex-direction: column;
}

:host([has-image]) #separator {
  display: none;
}

:host([has-image]) #contents {
  width: 100%;
}

:host([has-image]) #description {
  font-size: 14px;
    line-height: 16px;
    margin-top: 2px;
    width: 100%;
}

.match {
  font-weight: 500;
}

:host([has-image]) #description, .dim {
  color: var(--search-box-results-dim, var(--google-grey-refresh-700));
}

:host-context(ntp-realbox-match:-webkit-any(:focus-within, .selected)):host([has-image]) #description, :host-context(ntp-realbox-match:-webkit-any(:focus-within, .selected)) .dim {
  color: var(--search-box-results-dim-selected, var(--google-grey-refresh-700));
}

.url {
  color: var(--search-box-results-url, var(--google-blue-refresh-700));
}

:host-context(ntp-realbox-match:-webkit-any(:focus-within, .selected)) .url {
  color: var(--search-box-results-url-selected, var(--google-blue-refresh-700));
}

</style>
<ntp-realbox-icon id="icon" match="[[match]]"></ntp-realbox-icon>
<div id="container">
  <span id="contents" inner-h-t-m-l="[[contentsHtml_]]"></span>
  <span id="separator" class="dim">[[separatorText_]]</span>
  <span id="description" inner-h-t-m-l="[[descriptionHtml_]]"></span>
</div>
<ntp-realbox-button id="remove" tabindex="0" role="button" on-click="onRemoveButtonClick_" on-keydown="onRemoveButtonKeydown_" title$="[[removeButtonTitle_]]" hidden$="[[!removeButtonIsVisible_]]">
</ntp-realbox-button>
<!--_html_template_end_-->`}static get properties(){return{ariaLabel:{type:String,computed:`computeAriaLabel_(match)`,reflectToAttribute:true},hasImage:{type:Boolean,computed:`computeHasImage_(match)`,reflectToAttribute:true},match:{type:Object},matchIndex:{type:Number,value:-1},contentsHtml_:{type:String,computed:`computeContentsHtml_(match)`},descriptionHtml_:{type:String,computed:`computeDescriptionHtml_(match)`},removeButtonIsVisible_:{type:Boolean,computed:`computeRemoveButtonIsVisible_(match)`},removeButtonTitle_:{type:String,value:()=>loadTimeData.getString("removeSuggestion")},separatorText_:{type:String,computed:`computeSeparatorText_(match)`}}}ready(){super.ready();this.addEventListener("click",this.onMatchClick_.bind(this));this.addEventListener("focusin",this.onMatchFocusin_.bind(this))}onMatchClick_(e){if(e.button>1){return}this.dispatchEvent(new CustomEvent("match-click",{bubbles:true,composed:true,detail:{index:this.matchIndex,event:e}}));e.preventDefault();e.stopPropagation()}onMatchFocusin_(e){this.dispatchEvent(new CustomEvent("match-focusin",{bubbles:true,composed:true,detail:this.matchIndex}))}onRemoveButtonClick_(e){if(e.button!==0){return}this.dispatchEvent(new CustomEvent("match-remove",{bubbles:true,composed:true,detail:this.matchIndex}));e.preventDefault();e.stopPropagation()}onRemoveButtonKeydown_(e){if(e.key!=="Enter"&&e.key!==" "){return}e.target.click();e.preventDefault()}computeAriaLabel_(){if(!this.match){return""}const contents=decodeString16(this.match.contents);const description=decodeString16(this.match.description);return this.match.swapContentsAndDescription?description+this.separatorText_+contents:contents+this.separatorText_+description}computeContentsHtml_(){if(!this.match){return""}const match=this.match;return match.swapContentsAndDescription?this.renderTextWithClassifications_(decodeString16(match.description),match.descriptionClass).innerHTML:this.renderTextWithClassifications_(decodeString16(match.contents),match.contentsClass).innerHTML}computeDescriptionHtml_(){if(!this.match){return""}const match=this.match;return match.swapContentsAndDescription?this.renderTextWithClassifications_(decodeString16(match.contents),match.contentsClass).innerHTML:this.renderTextWithClassifications_(decodeString16(match.description),match.descriptionClass).innerHTML}computeHasImage_(){return this.match&&!!this.match.imageUrl}computeRemoveButtonIsVisible_(){return this.match&&this.match.supportsDeletion}computeSeparatorText_(){return this.match&&decodeString16(this.match.description)?loadTimeData.getString("realboxSeparator"):""}convertClassificationStyleToCSSClasses_(style){const classes=[];if(style&ACMatchClassificationStyle.DIM){classes.push("dim")}if(style&ACMatchClassificationStyle.MATCH){classes.push("match")}if(style&ACMatchClassificationStyle.URL){classes.push("url")}return classes}createSpanWithClasses_(text,classes){const span=document.createElement("span");if(classes.length){span.classList.add(...classes)}span.textContent=text;return span}renderTextWithClassifications_(text,classifications){return classifications.map(({offset:offset,style:style},index)=>{const next=classifications[index+1]||{offset:text.length};const subText=text.substring(offset,next.offset);const classes=this.convertClassificationStyleToCSSClasses_(style);return this.createSpanWithClasses_(subText,classes)}).reduce((container,currentElement)=>{container.appendChild(currentElement);return container},document.createElement("span"))}}customElements.define(RealboxMatchElement.is,RealboxMatchElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class RealboxDropdownElement extends PolymerElement{static get is(){return"ntp-realbox-dropdown"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-realbox-dropdown">:host {
  background-color: var(--search-box-results-bg, white);
    overflow: hidden;
}

@media (min-width: 560px) {
:host {
  width: 449px;
}

}

@media (min-width: 672px) {
:host {
  width: 561px;
}

}

ntp-realbox-match {
  color: var(--search-box-results-text);
}

.header {
  align-items: center;
    display: flex;
    margin-top: 8px;
    outline: none;
    padding-bottom: 6px;
    padding-inline-end: 16px;
    padding-inline-start: 12px;
    padding-top: 6px;
}

.header .text {
  color: var(--search-box-results-dim, var(--google-grey-refresh-700));
    cursor: default;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    overflow: hidden;
    padding-inline-end: 8px;
    text-overflow: ellipsis;
    text-transform: uppercase;
    user-select: none;
    white-space: nowrap;
}

ntp-realbox-match:hover, .header:hover {
  background-color: var(--search-box-results-bg-hovered, rgba(var(--google-grey-900-rgb), .1));
}

ntp-realbox-match:-webkit-any(:focus-within, .selected), .header:focus-within:not(:focus) {
  background-color: var(--search-box-results-bg-selected, rgba(var(--google-grey-900-rgb), .16));
    color: var(--search-box-results-text-selected, var(--google-grey-900));
}

</style>
<iron-selector id="selector" selectable="ntp-realbox-match" items="{{selectableMatchElements_}}" selected="{{selectedMatchIndex}}" selected-class="selected">
  <template is="dom-repeat" items="[[groupIds_]]" as="groupId">
    <template is="dom-if" if="[[groupHasHeader_(groupId)]]">
      <!-- Header cannot be tabbed into but gets focus when clicked. This stops
           the dropdown from losing focus and closing as a result. -->
      <div class="header" data-id$="[[groupId]]" tabindex="-1" on-focusin="onHeaderFocusin_" on-click="onHeaderClick_" aria-hidden="true" group-is-hidden$="[[groupIsHidden_(groupId, hiddenGroupIds_.*)]]">
        <span class="text">[[headerForGroup_(groupId)]]</span>
        <ntp-realbox-button tabindex="0" role="button" title="[[toggleButtonTitleForGroup_(groupId, hiddenGroupIds_.*)]]" aria-label$="[[toggleButtonA11yLabelForGroup_(groupId, hiddenGroupIds_.*)]]" on-keydown="onToggleButtonKeydown_">
        </ntp-realbox-button>
      </div>
    </template>
    <template is="dom-if" if="[[!groupIsHidden_(groupId, hiddenGroupIds_.*)]]" restamp="">
      <template is="dom-repeat" items="[[result.matches]]" filter="[[computeMatchBelongsToGroup_(groupId)]]" on-dom-change="onResultRepaint_">
        <ntp-realbox-match tabindex="0" role="option" match="[[item]]" match-index="[[matchIndex_(item)]]">
        </ntp-realbox-match>
      </template>
    </template>
  <template>

<!--_html_template_end_--></template></template></iron-selector>`}static get properties(){return{result:{type:Object},selectedMatchIndex:{type:Number,value:-1,notify:true},theme:{type:Object,observer:"onThemeChange_"},groupIds_:{type:Array,computed:`computeGroupIds_(result)`},hiddenGroupIds_:{type:Array,computed:`computeHiddenGroupIds_(result)`},selectableMatchElements_:{type:Array,value:()=>[]}}}constructor(){super();this.callbackRouter_=BrowserProxy.getInstance().callbackRouter;this.pageHandler_=BrowserProxy.getInstance().handler;this.autocompleteMatchImageAvailableListenerId_=null}connectedCallback(){super.connectedCallback();this.autocompleteMatchImageAvailableListenerId_=this.callbackRouter_.autocompleteMatchImageAvailable.addListener(this.onAutocompleteMatchImageAvailable_.bind(this))}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.autocompleteMatchImageAvailableListenerId_))}unselect(){this.selectedMatchIndex=-1}focusSelected(){if(this.$.selector.selectedItem){this.$.selector.selectedItem.focus()}}selectFirst(){this.selectedMatchIndex=0}selectIndex(index){this.selectedMatchIndex=index}selectPrevious(){this.selectedMatchIndex=this.selectedMatchIndex-1>=0?this.selectedMatchIndex-1:this.selectableMatchElements_.length-1}selectLast(){this.selectedMatchIndex=this.selectableMatchElements_.length-1}selectNext(){this.selectedMatchIndex=this.selectedMatchIndex+1<this.selectableMatchElements_.length?this.selectedMatchIndex+1:0}onAutocompleteMatchImageAvailable_(matchIndex,url,dataUrl){if(!this.result||!this.result.matches){return}const match=this.result.matches[matchIndex];if(!match){return}if(match.destinationUrl.url===url.url){this.set(`result.matches.${matchIndex}.faviconDataUrl`,dataUrl)}else if(match.imageUrl===url.url){this.set(`result.matches.${matchIndex}.imageDataUrl`,dataUrl)}}onResultRepaint_(){this.dispatchEvent(new CustomEvent("result-repaint",{bubbles:true,composed:true,detail:window.performance.now()}))}onThemeChange_(){if(!loadTimeData.getBoolean("realboxMatchOmniboxTheme")){return}const icon=assert(this.theme.icon);const iconBgHovered={value:icon.value&704643071};const iconSelected=assert(this.theme.iconSelected);const iconBgFocused={value:iconSelected.value&1392508927};this.updateStyles({"--search-box-icon-bg-focused":skColorToRgba(iconBgFocused),"--search-box-icon-bg-hovered":skColorToRgba(iconBgHovered),"--search-box-icon-selected":skColorToRgba(iconSelected),"--search-box-icon":skColorToRgba(icon),"--search-box-results-bg-hovered":skColorToRgba(assert(this.theme.resultsBgHovered)),"--search-box-results-bg-selected":skColorToRgba(assert(this.theme.resultsBgSelected)),"--search-box-results-bg":skColorToRgba(assert(this.theme.resultsBg)),"--search-box-results-dim-selected":skColorToRgba(assert(this.theme.resultsDimSelected)),"--search-box-results-dim":skColorToRgba(assert(this.theme.resultsDim)),"--search-box-results-text-selected":skColorToRgba(assert(this.theme.resultsTextSelected)),"--search-box-results-text":skColorToRgba(assert(this.theme.resultsText)),"--search-box-results-url-selected":skColorToRgba(assert(this.theme.resultsUrlSelected)),"--search-box-results-url":skColorToRgba(assert(this.theme.resultsUrl))})}onHeaderFocusin_(){this.dispatchEvent(new CustomEvent("header-focusin",{bubbles:true,composed:true}))}onHeaderClick_(e){const groupId=Number(e.currentTarget.dataset.id);this.pageHandler_.toggleSuggestionGroupIdVisibility(groupId);const index=this.hiddenGroupIds_.indexOf(groupId);if(index===-1){this.push("hiddenGroupIds_",groupId)}else{this.splice("hiddenGroupIds_",index,1)}}onToggleButtonKeydown_(e){if(e.key!=="Enter"&&e.key!==" "){return}e.target.click();e.preventDefault()}matchIndex_(match){if(!this.result||!this.result.matches){return-1}return this.result.matches.indexOf(match)}computeGroupIds_(){if(!this.result||!this.result.matches){return[]}return[...new Set(this.result.matches.map(match=>match.suggestionGroupId))]}computeHiddenGroupIds_(){if(!this.result){return[]}return Object.keys(this.result.suggestionGroupsMap).map(groupId=>Number(groupId)).filter((groupId=>{return this.result.suggestionGroupsMap[groupId].hidden}).bind(this))}computeMatchBelongsToGroup_(groupId){return match=>{return match.suggestionGroupId===groupId}}groupHasHeader_(groupId){return!!this.headerForGroup_(groupId)}groupIsHidden_(groupId){return this.hiddenGroupIds_.indexOf(groupId)!==-1}headerForGroup_(groupId){return this.result&&this.result.suggestionGroupsMap&&this.result.suggestionGroupsMap[groupId]?decodeString16(this.result.suggestionGroupsMap[groupId].header):""}toggleButtonTitleForGroup_(groupId){if(!this.groupHasHeader_(groupId)){return""}return loadTimeData.getString(this.groupIsHidden_(groupId)?"showSuggestions":"hideSuggestions")}toggleButtonA11yLabelForGroup_(groupId){if(!this.groupHasHeader_(groupId)){return""}return loadTimeData.substituteString(loadTimeData.getString(this.groupIsHidden_(groupId)?"showSection":"hideSection"),this.headerForGroup_(groupId))}}customElements.define(RealboxDropdownElement.is,RealboxDropdownElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class RealboxElement extends PolymerElement{static get is(){return"ntp-realbox"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-realbox">:host {
  --ntp-realbox-height: 44px;
    border-radius: calc(0.5 * var(--ntp-realbox-height));
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    height: var(--ntp-realbox-height);
}

:host([matches-are-visible]) {
  box-shadow: none;
}

#inputWrapper {
  height: 100%;
    position: relative;
}

input {
  background-color: var(--search-box-bg, white);
    border: none;
    border-radius: calc(0.5 * var(--ntp-realbox-height));
    color: var(--search-box-text);
    font-size: 16px;
    height: 100%;
    outline: none;
    padding-inline-end:  40px;
    padding-inline-start: 52px;
    position: relative;
    width: 100%;
}

input::-webkit-search-decoration, input::-webkit-search-cancel-button, input::-webkit-search-results-button, input::-webkit-search-results-decoration {
  display: none;
}

input::placeholder {
  color: var(--search-box-placeholder, var(--google-grey-refresh-700));
}

input:focus::placeholder {
  color: transparent;
}

input:focus, :host([matches-are-visible]) input {
  background-color: var(--search-box-results-bg, white);
}

ntp-realbox-icon {
  height: 100%;
    left: 12px;
    position: absolute;
    top: 0;
}

:host-context([dir='rtl']) ntp-realbox-icon {
  left: unset;
    right: 12px;
}

#voiceSearchButton {
  background: url(icons/googlemic_clr_24px.svg) no-repeat center;
    background-size: 21px 21px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    height: 100%;
    outline: none;
    padding: 0;
    pointer-events: auto;
    position: absolute;
    right: 16px;
    width: 26px;
}

:host-context([dir='rtl']) #voiceSearchButton {
  left: 16px;
    right: unset;
}

:host-context(.focus-outline-visible) #voiceSearchButton:focus {
  box-shadow: var(--ntp-focus-shadow);
}

:-webkit-any(input, ntp-realbox-icon, #voiceSearchButton) {
  z-index: 2;
}

ntp-realbox-dropdown {
  border-radius: calc(0.25 * var(--ntp-realbox-height));
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
    left: 0;
    padding-bottom: 8px;
    padding-top: var(--ntp-realbox-height);
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
}

</style>
<div id="inputWrapper" on-focusout="onInputWrapperFocusout_" on-keydown="onInputWrapperKeydown_">
  <input id="input" type="search" autocomplete="off" spellcheck="false" aria-live="polite" placeholder="Search Google or type a URL" on-copy="onInputCutCopy_" on-cut="onInputCutCopy_" on-focus="onInputFocus_" on-input="onInputInput_" on-keydown="onInputKeydown_" on-keyup="onInputKeyup_" on-mousedown="onInputMouseDown_" on-paste="onInputPaste_">
  <ntp-realbox-icon id="icon" match="[[selectedMatch_]]" default-icon="[[realboxIcon_]]" in-searchbox="">
  </ntp-realbox-icon>
  <button id="voiceSearchButton" on-click="onVoiceSearchClick_" title="Search by voice">
  </button>
  <ntp-realbox-dropdown id="matches" role="listbox" theme="[[theme]]" result="[[result_]]" selected-match-index="{{selectedMatchIndex_}}" on-result-repaint="onResultRepaint_" on-match-focusin="onMatchFocusin_" on-match-click="onMatchClick_" on-match-remove="onMatchRemove_" on-header-focusin="onHeaderFocusin_" hidden$="[[!matchesAreVisible]]">
  </ntp-realbox-dropdown>
</div>
<!--_html_template_end_-->`}static get properties(){return{matchesAreVisible:{type:Boolean,value:false,reflectToAttribute:true},theme:{type:Object,observer:"onThemeChange_"},charTypedTime_:{type:Number,value:0},isDeletingInput_:{type:Boolean,value:false},lastIgnoredEnterEvent_:{type:Object,value:null},lastInput_:{type:Object,value:{text:"",inline:""}},lastInputFocusTime_:{type:Number,value:null},lastQueriedInput_:{type:String,value:null},pastedInInput_:{type:Boolean,value:false},realboxIcon_:{type:String,value:()=>loadTimeData.getString("realboxDefaultIcon")},result_:{type:Object},selectedMatch_:{type:Object,computed:`computeSelectedMatch_(result_, selectedMatchIndex_)`},selectedMatchIndex_:{type:Number,value:-1}}}constructor(){performance.mark("realbox-creation-start");super();this.pageHandler_=BrowserProxy.getInstance().handler;this.callbackRouter_=BrowserProxy.getInstance().callbackRouter;this.autocompleteResultChangedListenerId_=null;this.autocompleteMatchImageAvailableListenerId_=null}connectedCallback(){super.connectedCallback();this.autocompleteResultChangedListenerId_=this.callbackRouter_.autocompleteResultChanged.addListener(this.onAutocompleteResultChanged_.bind(this));this.autocompleteMatchImageAvailableListenerId_=this.callbackRouter_.autocompleteMatchImageAvailable.addListener(this.onAutocompleteMatchImageAvailable_.bind(this))}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.autocompleteResultChangedListenerId_));this.callbackRouter_.removeListener(assert(this.autocompleteMatchImageAvailableListenerId_))}ready(){super.ready();performance.measure("realbox-creation","realbox-creation-start")}onAutocompleteMatchImageAvailable_(matchIndex,url,dataUrl){if(!this.result_||!this.result_.matches){return}const match=this.result_.matches[matchIndex];if(!match||this.selectedMatchIndex_!==matchIndex){return}if(match.destinationUrl.url===url.url){match.faviconDataUrl=dataUrl;this.notifyPath("selectedMatch_.faviconDataUrl")}}onAutocompleteResultChanged_(result){if(this.lastQueriedInput_===null||this.lastQueriedInput_.trimLeft()!==decodeString16(result.input)){return}this.result_=result;const hasMatches=result&&result.matches&&result.matches.length>0;this.matchesAreVisible=hasMatches;this.$.input.focus();const firstMatch=hasMatches?this.result_.matches[0]:null;if(firstMatch&&firstMatch.allowedToBeDefaultMatch){this.$.matches.selectFirst();this.updateInput_({inline:decodeString16(firstMatch.inlineAutocompletion)});if(this.lastIgnoredEnterEvent_){this.navigateToMatch_(0,this.lastIgnoredEnterEvent_);this.lastIgnoredEnterEvent_=null}}else if(hasMatches&&this.selectedMatchIndex_!==-1&&this.selectedMatchIndex_<this.result_.matches.length){this.$.matches.selectIndex(this.selectedMatchIndex_);this.updateInput_({text:decodeString16(this.selectedMatch_.fillIntoEdit),inline:"",moveCursorToEnd:true})}else{this.$.matches.unselect();this.updateInput_({inline:""})}}onThemeChange_(){if(!loadTimeData.getBoolean("realboxMatchOmniboxTheme")){return}this.updateStyles({"--search-box-bg":skColorToRgba(assert(this.theme.bg)),"--search-box-placeholder":skColorToRgba(assert(this.theme.placeholder)),"--search-box-results-bg":skColorToRgba(assert(this.theme.resultsBg)),"--search-box-text":skColorToRgba(assert(this.theme.text)),"--search-box-icon":skColorToRgba(assert(this.theme.icon))})}onHeaderFocusin_(){assert(this.lastQueriedInput_==="");this.$.matches.unselect();this.updateInput_({text:"",inline:""})}onInputCutCopy_(e){if(!this.$.input.value||this.$.input.selectionStart!==0||this.$.input.selectionEnd!==this.$.input.value.length||!this.result_||this.result_.matches.length===0){return}if(this.selectedMatch_&&!this.selectedMatch_.isSearchType){e.clipboardData.setData("text/plain",this.selectedMatch_.destinationUrl.url);e.preventDefault();if(e.type==="cut"){this.$.input.value=""}}}onInputFocus_(){this.lastInputFocusTime_=window.performance.now()}onInputInput_(){const inputValue=this.$.input.value;this.updateInput_({text:inputValue,inline:""});const charTyped=!this.isDeletingInput_&&!!inputValue.trim();this.charTypedTime_=charTyped?this.charTypedTime_||window.performance.now():0;if(inputValue.trim()){this.queryAutocomplete_(inputValue)}else{this.matchesAreVisible=false;this.clearAutocompleteMatches_()}this.pastedInInput_=false}onInputKeydown_(e){if(!this.lastInput_.inline){return}const inputValue=this.$.input.value;const inputSelection=inputValue.substring(this.$.input.selectionStart,this.$.input.selectionEnd);const lastInputValue=this.lastInput_.text+this.lastInput_.inline;if(inputSelection===this.lastInput_.inline&&inputValue===lastInputValue&&this.lastInput_.inline[0].toLocaleLowerCase()===e.key.toLocaleLowerCase()){this.updateInput_({text:assert(this.lastInput_.text+e.key),inline:this.lastInput_.inline.substr(1)});this.charTypedTime_=this.charTypedTime_||window.performance.now();this.queryAutocomplete_(this.lastInput_.text);e.preventDefault()}}onInputKeyup_(e){if(e.key!=="Tab"){return}if(!this.$.input.value){this.queryAutocomplete_("")}}onInputMouseDown_(e){if(e.button!==0){return}if(!this.$.input.value){this.queryAutocomplete_("")}}onInputPaste_(e){this.pastedInInput_=true}onInputWrapperFocusout_(e){const relatedTarget=e.relatedTarget;if(!this.$.inputWrapper.contains(relatedTarget)){if(this.lastQueriedInput_===""){this.$.matches.unselect();this.updateInput_({text:"",inline:""})}this.matchesAreVisible=false;this.pageHandler_.stopAutocomplete(false)}}onInputWrapperKeydown_(e){const KEYDOWN_HANDLED_KEYS=["ArrowDown","ArrowUp","Delete","Enter","Escape","PageDown","PageUp"];if(!KEYDOWN_HANDLED_KEYS.includes(e.key)){return}if(e.defaultPrevented){return}if(!this.matchesAreVisible){if(e.key==="ArrowUp"||e.key==="ArrowDown"){const inputValue=this.$.input.value;if(inputValue.trim()||!inputValue){this.queryAutocomplete_(inputValue)}e.preventDefault();return}}if(!this.result_||this.result_.matches.length===0){return}if(e.key==="Enter"){if([this.$.matches,this.$.input].includes(e.target)){if(this.lastQueriedInput_===decodeString16(this.result_.input)){if(this.selectedMatch_){this.navigateToMatch_(this.selectedMatchIndex_,e)}}else{this.lastIgnoredEnterEvent_=e;e.preventDefault()}}return}if(e.key==="Delete"){if(e.shiftKey&&!e.altKey&&!e.ctrlKey&&!e.metaKey){if(this.selectedMatch_&&this.selectedMatch_.supportsDeletion){this.pageHandler_.deleteAutocompleteMatch(this.selectedMatchIndex_);e.preventDefault()}}return}if(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey){return}if(e.key==="Escape"&&this.selectedMatchIndex_===0){this.updateInput_({text:"",inline:""});this.matchesAreVisible=false;this.clearAutocompleteMatches_();e.preventDefault();return}if(e.key==="ArrowDown"){this.$.matches.selectNext()}else if(e.key==="ArrowUp"){this.$.matches.selectPrevious()}else if(e.key==="Escape"||e.key==="PageUp"){this.$.matches.selectFirst()}else if(e.key==="PageDown"){this.$.matches.selectLast()}e.preventDefault();if(this.shadowRoot.activeElement===this.$.matches){this.$.matches.focusSelected()}const newFill=decodeString16(this.selectedMatch_.fillIntoEdit);const newInline=this.selectedMatch_.allowedToBeDefaultMatch?decodeString16(this.selectedMatch_.inlineAutocompletion):"";const newFillEnd=newFill.length-newInline.length;this.updateInput_({text:assert(newFill.substr(0,newFillEnd)),inline:newInline,moveCursorToEnd:newInline.length===0})}onMatchClick_(e){this.navigateToMatch_(e.detail.index,e.detail.event)}onMatchFocusin_(e){this.$.matches.selectIndex(e.detail);this.updateInput_({text:decodeString16(this.selectedMatch_.fillIntoEdit),inline:"",moveCursorToEnd:true})}onMatchRemove_(e){this.pageHandler_.deleteAutocompleteMatch(e.detail)}onResultRepaint_(e){if(this.charTypedTime_){this.pageHandler_.logCharTypedToRepaintLatency(mojoTimeDelta(e.detail-this.charTypedTime_));this.charTypedTime_=0}}onVoiceSearchClick_(){this.dispatchEvent(new Event("open-voice-search"))}computeSelectedMatch_(){if(!this.result_||!this.result_.matches){return null}return this.result_.matches[this.selectedMatchIndex_]||null}clearAutocompleteMatches_(){this.result_=null;this.$.matches.unselect();this.pageHandler_.stopAutocomplete(true);this.lastQueriedInput_=null}navigateToMatch_(matchIndex,e){assert(matchIndex>=0);const match=assert(this.result_.matches[matchIndex]);assert(this.lastInputFocusTime_);const delta=mojoTimeDelta(window.performance.now()-this.lastInputFocusTime_);this.pageHandler_.openAutocompleteMatch(matchIndex,match.destinationUrl,this.matchesAreVisible,delta,e.button||0,e.altKey,e.ctrlKey,e.metaKey,e.shiftKey);e.preventDefault()}queryAutocomplete_(input){this.lastQueriedInput_=input;const caretNotAtEnd=this.$.input.selectionStart!==input.length;const preventInlineAutocomplete=this.isDeletingInput_||this.pastedInInput_||caretNotAtEnd;this.pageHandler_.queryAutocomplete(mojoString16(input),preventInlineAutocomplete)}updateInput_(update){const newInput=Object.assign({},this.lastInput_,update);const newInputValue=newInput.text+newInput.inline;const lastInputValue=this.lastInput_.text+this.lastInput_.inline;const inlineDiffers=newInput.inline!==this.lastInput_.inline;const preserveSelection=!inlineDiffers&&!update.moveCursorToEnd;let needsSelectionUpdate=!preserveSelection;const oldSelectionStart=this.$.input.selectionStart;const oldSelectionEnd=this.$.input.selectionEnd;if(newInputValue!==this.$.input.value){this.$.input.value=newInputValue;needsSelectionUpdate=true}if(newInputValue.trim()&&needsSelectionUpdate){this.$.input.selectionStart=preserveSelection?oldSelectionStart:update.moveCursorToEnd?newInputValue.length:newInput.text.length;this.$.input.selectionEnd=preserveSelection?oldSelectionEnd:newInputValue.length}this.isDeletingInput_=lastInputValue.length>newInputValue.length&&lastInputValue.startsWith(newInputValue);this.lastInput_=newInput}}customElements.define(RealboxElement.is,RealboxElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const FACEBOOK_APP_ID=738026486351791;class DoodleShareDialogElement extends PolymerElement{static get is(){return"ntp-doodle-share-dialog"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-doodle-share-dialog">#dialog::part(dialog) {
  max-width: 300px;
}

#buttons {
  display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 28px;
    margin-top: 20px;
}

#buttons cr-button {
  background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    height: 48px;
    min-width: 48px;
    width: 48px;
}

#buttons cr-button:hover {
  opacity: 0.8;
}

#buttons > :not(:last-child) {
  margin-inline-end: 12px;
}

#facebookButton {
  background-image: url(icons/facebook.svg);
}

#twitterButton {
  background-image: url(icons/twitter.svg);
}

#emailButton {
  background-image: url(icons/mail.svg);
}

#url {
  --cr-input-error-display: none;
}

#copyButton {
  --cr-icon-image: url(icons/copy.svg);
    margin-inline-start: 2px;
}

</style>
<cr-dialog id="dialog" show-on-attach="">
  <div id="title" slot="title">
    [[title]]
  </div>
  <div slot="body">
    <div id="buttons">
      <cr-button id="facebookButton" title="Facebook" on-click="onFacebookClick_">
      </cr-button>
      <cr-button id="twitterButton" title="Twitter" on-click="onTwitterClick_">
      </cr-button>
      <cr-button id="emailButton" title="E-mail" on-click="onEmailClick_">
      </cr-button>
    </div>
    <cr-input readonly="" label="Doodle Link" id="url" value="[[url.url]]">
      <cr-icon-button id="copyButton" slot="suffix" title="Copy Link" on-click="onCopyClick_">
      </cr-icon-button>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button id="doneButton" class="action-button" on-click="onCloseClick_">
      Done
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}static get properties(){return{title:String,url:Object}}onFacebookClick_(){const url="https://www.facebook.com/dialog/share"+`?app_id=${FACEBOOK_APP_ID}`+`&href=${encodeURIComponent(this.url.url)}`+`&hashtag=${encodeURIComponent("#GoogleDoodle")}`;BrowserProxy.getInstance().open(url);this.notifyShare_(newTabPage.mojom.DoodleShareChannel.kFacebook)}onTwitterClick_(){const url="https://twitter.com/intent/tweet"+`?text=${encodeURIComponent(`${this.title}\n${this.url.url}`)}`;BrowserProxy.getInstance().open(url);this.notifyShare_(newTabPage.mojom.DoodleShareChannel.kTwitter)}onEmailClick_(){const url=`mailto:?subject=${encodeURIComponent(this.title)}`+`&body=${encodeURIComponent(this.url.url)}`;BrowserProxy.getInstance().navigate(url);this.notifyShare_(newTabPage.mojom.DoodleShareChannel.kEmail)}onCopyClick_(){this.$.url.select();navigator.clipboard.writeText(this.url.url);this.notifyShare_(newTabPage.mojom.DoodleShareChannel.kLinkCopy)}onCloseClick_(){this.$.dialog.close()}notifyShare_(channel){this.dispatchEvent(new CustomEvent("share",{detail:channel}))}}customElements.define(DoodleShareDialogElement.is,DoodleShareDialogElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const SHARE_BUTTON_SIZE_PX=26;class LogoElement extends PolymerElement{static get is(){return"ntp-logo"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-hidden-style" scope="ntp-logo">:host {
  --ntp-logo-height: 200px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: flex-end;
    min-height: var(--ntp-logo-height);
}

:host([doodle-boxed_]) {
  justify-content: flex-end;
}

#logo {
  height: 92px;
    width: 272px;
}

:host([single-colored]) #logo {
  -webkit-mask-image: url(chrome://resources/images/google_logo.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--ntp-logo-color);
}

:host(:not([single-colored])) #logo {
  background-image: url(chrome://resources/images/google_logo.svg);
}

#imageDoodle {
  cursor: pointer;
    outline: none;
}

:host([doodle-boxed_]) #imageDoodle {
  background-color: var(--ntp-logo-box-color);
    border-radius: 20px;
    padding: 16px 24px;
}

:host-context(.focus-outline-visible) #imageDoodle:focus {
  box-shadow: 0 0 0 2px rgba(var(--google-blue-600-rgb), .4);
}

#imageContainer {
  display: flex;
    height: fit-content;
    position: relative;
    width: fit-content;
}

#image {
  max-height: var(--ntp-logo-height);
    max-width: 100%;
}

:host([doodle-boxed_]) #image {
  max-height: 160px;
}

#animation {
  height: 100%;
    pointer-events: none;
    position: absolute;
    width: 100%;
}

#shareButton {
  background-color: var(--ntp-logo-share-button-background-color, none);
    border: none;
    height: var(--ntp-logo-share-button-height, 0);
    left: var(--ntp-logo-share-button-x, 0);
    min-width: var(--ntp-logo-share-button-width, 0);
    opacity: 0.8;
    outline: initial;
    padding: 2px;
    position: absolute;
    top: var(--ntp-logo-share-button-y, 0);
    width: var(--ntp-logo-share-button-width, 0);
}

#shareButton:hover {
  opacity: 1;
}

#shareButton img {
  height: 100%;
    width: 100%;
}

#iframe {
  border: none;
    height: var(--height, var(--ntp-logo-height));
    transition-duration: var(--duration, 100ms);
    transition-property: height, width;
    width: var(--width, 100%);
}

#iframe:not([expanded]) {
  max-height: var(--ntp-logo-height);
}

</style>

<template is="dom-if" if="[[showLogo_]]" restamp="">
  <div id="logo"></div>
</template>
<template is="dom-if" if="[[showDoodle_]]" restamp="">
  <div id="doodle" title="[[doodle_.description]]">
    <div id="imageDoodle" hidden="[[!imageDoodle_]]" tabindex="0" on-click="onImageClick_" on-keydown="onImageKeydown_">
      <div id="imageContainer">
        <!-- The static image is always visible and the animated image is
             stacked on top of the static image so that there is no flicker
             when starting the animation. -->
        <img id="image" src="[[imageUrl_]]" on-load="onImageLoad_">
        <ntp-iframe id="animation" src="[[animationUrl_]]" hidden="[[!showAnimation_]]">
        </ntp-iframe>
        <cr-button id="shareButton" title="Share Doodle" on-click="onShareButtonClick_" hidden="[[!imageDoodle_.shareButton]]">
          <img id="shareButtonImage" src="[[imageDoodle_.shareButton.iconUrl.url]]">
          
        </cr-button>
      </div>
    </div>
    <template is="dom-if" if="[[iframeUrl_]]" restamp="">
      <ntp-iframe id="iframe" src="[[iframeUrl_]]" expanded$="[[expanded_]]">
      </ntp-iframe>
    </template>
  </div>
</template>
<template is="dom-if" if="[[showShareDialog_]]" restamp="">
  <ntp-doodle-share-dialog title="[[doodle_.description]]" url="[[doodle_.image.shareUrl]]" on-close="onShareDialogClose_" on-share="onShare_">
  </ntp-doodle-share-dialog>
</template>
<!--_html_template_end_-->`}static get properties(){return{doodleAllowed:{reflectToAttribute:true,type:Boolean,value:true},singleColored:{reflectToAttribute:true,type:Boolean,value:false},dark:{observer:"onDarkChange_",type:Boolean},backgroundColor:Object,loaded_:Boolean,doodle_:Object,imageDoodle_:{observer:"onImageDoodleChange_",computed:"computeImageDoodle_(dark, doodle_)",type:Object},canShowDoodle_:{computed:"computeCanShowDoodle_(doodle_, imageDoodle_)",type:Boolean},showLogo_:{computed:"computeShowLogo_(doodleAllowed, loaded_, canShowDoodle_)",type:Boolean},showDoodle_:{computed:"computeShowDoodle_(doodleAllowed, loaded_, canShowDoodle_)",type:Boolean},doodleBoxed_:{reflectToAttribute:true,type:Boolean,computed:"computeDoodleBoxed_(backgroundColor, imageDoodle_)"},imageUrl_:{computed:"computeImageUrl_(imageDoodle_)",type:String},showAnimation_:{type:Boolean,value:false},animationUrl_:{computed:"computeAnimationUrl_(imageDoodle_)",type:String},iframeUrl_:{computed:"computeIframeUrl_(doodle_)",type:String},duration_:{observer:"onDurationHeightWidthChange_",type:String},height_:{observer:"onDurationHeightWidthChange_",type:String},width_:{observer:"onDurationHeightWidthChange_",type:String},expanded_:Boolean,showShareDialog_:Boolean}}constructor(){performance.mark("logo-creation-start");super();this.eventTracker_=new EventTracker;this.pageHandler_=BrowserProxy.getInstance().handler;this.pageHandler_.getDoodle().then(({doodle:doodle})=>{this.doodle_=doodle;this.loaded_=true;if(this.doodle_&&this.doodle_.interactive){this.width_=`${this.doodle_.interactive.width}px`;this.height_=`${this.doodle_.interactive.height}px`}});this.imageClickParams_=null;this.interactionLogUrl_=null;this.shareId_=null}connectedCallback(){super.connectedCallback();this.eventTracker_.add(window,"message",({data:data})=>{if(data["cmd"]==="resizeDoodle"){this.duration_=assert(data.duration);this.height_=assert(data.height);this.width_=assert(data.width);this.expanded_=true}else if(data["cmd"]==="sendMode"){this.sendMode_()}});this.sendMode_()}disconnectedCallback(){super.disconnectedCallback();this.eventTracker_.removeAll()}ready(){super.ready();performance.measure("logo-creation","logo-creation-start")}onImageDoodleChange_(){const shareButton=this.imageDoodle_&&this.imageDoodle_.shareButton;if(shareButton){const height=this.imageDoodle_.height;const width=this.imageDoodle_.width;this.updateStyles({"--ntp-logo-share-button-background-color":skColorToRgba(shareButton.backgroundColor),"--ntp-logo-share-button-height":`${SHARE_BUTTON_SIZE_PX/height*100}%`,"--ntp-logo-share-button-width":`${SHARE_BUTTON_SIZE_PX/width*100}%`,"--ntp-logo-share-button-x":`${shareButton.x/width*100}%`,"--ntp-logo-share-button-y":`${shareButton.y/height*100}%`})}else{this.updateStyles({"--ntp-logo-share-button-background-color":null,"--ntp-logo-share-button-height":null,"--ntp-logo-share-button-width":null,"--ntp-logo-share-button-x":null,"--ntp-logo-share-button-y":null})}if(this.imageDoodle_){this.updateStyles({"--ntp-logo-box-color":skColorToRgba(this.imageDoodle_.backgroundColor)})}else{this.updateStyles({"--ntp-logo-box-color":null})}this.showAnimation_=false;this.imageClickParams_=null;this.interactionLogUrl_=null;this.shareId_=null}computeImageDoodle_(){return this.doodle_&&this.doodle_.image&&(this.dark?this.doodle_.image.dark:this.doodle_.image.light)||null}computeCanShowDoodle_(){return!!this.imageDoodle_||!!this.doodle_&&!!this.doodle_.interactive&&window.navigator.onLine}computeShowLogo_(){return!this.doodleAllowed||!!this.loaded_&&!this.canShowDoodle_}computeShowDoodle_(){return!!this.doodleAllowed&&this.canShowDoodle_}computeDoodleBoxed_(){return!this.backgroundColor||!!this.imageDoodle_&&this.imageDoodle_.backgroundColor.value!==this.backgroundColor.value}onImageClick_(){if(this.isCtaImageShown_()){this.showAnimation_=true;this.pageHandler_.onDoodleImageClicked(newTabPage.mojom.DoodleImageType.kCta,this.interactionLogUrl_);this.logImageRendered_(newTabPage.mojom.DoodleImageType.kAnimation,this.imageDoodle_.animationImpressionLogUrl);return}this.pageHandler_.onDoodleImageClicked(this.showAnimation_?newTabPage.mojom.DoodleImageType.kAnimation:newTabPage.mojom.DoodleImageType.kStatic,null);const onClickUrl=new URL(this.doodle_.image.onClickUrl.url);if(this.imageClickParams_){for(const param of new URLSearchParams(this.imageClickParams_)){onClickUrl.searchParams.append(param[0],param[1])}}BrowserProxy.getInstance().open(onClickUrl.toString())}onImageLoad_(){this.logImageRendered_(this.isCtaImageShown_()?newTabPage.mojom.DoodleImageType.kCta:newTabPage.mojom.DoodleImageType.kStatic,this.imageDoodle_.imageImpressionLogUrl)}async logImageRendered_(type,logUrl){const{imageClickParams:imageClickParams,interactionLogUrl:interactionLogUrl,shareId:shareId}=await this.pageHandler_.onDoodleImageRendered(type,BrowserProxy.getInstance().now(),logUrl);this.imageClickParams_=imageClickParams;this.interactionLogUrl_=interactionLogUrl;this.shareId_=shareId}onImageKeydown_(e){if([" ","Enter"].includes(e.key)){this.onImageClick_()}}onShare_(e){const doodleId=new URL(this.doodle_.image.onClickUrl.url).searchParams.get("ct");if(!doodleId){return}this.pageHandler_.onDoodleShared(e.detail,doodleId,this.shareId_)}isCtaImageShown_(){return!this.showAnimation_&&!!this.imageDoodle_.animationUrl}sendMode_(){const iframe=$$(this,"#iframe");if(!loadTimeData.getBoolean("themeModeDoodlesEnabled")||this.dark===undefined||!iframe){return}iframe.postMessage({cmd:"changeMode",dark:this.dark})}onDarkChange_(){this.sendMode_()}computeImageUrl_(){return this.imageDoodle_?this.imageDoodle_.imageUrl.url:""}computeAnimationUrl_(){return this.imageDoodle_&&this.imageDoodle_.animationUrl?`chrome-untrusted://new-tab-page/image?${this.imageDoodle_.animationUrl.url}`:""}computeIframeUrl_(){if(this.doodle_&&this.doodle_.interactive){const url=new URL(this.doodle_.interactive.url.url);if(loadTimeData.getBoolean("themeModeDoodlesEnabled")){url.searchParams.append("theme_messages","0")}return url.href}else{return""}}onShareButtonClick_(e){e.stopPropagation();this.showShareDialog_=true}onShareDialogClose_(){this.showShareDialog_=false}onDurationHeightWidthChange_(){this.updateStyles({"--duration":this.duration_,"--height":this.height_,"--width":this.width_})}}customElements.define(LogoElement.is,LogoElement);// Copyright 2020 The Chromium Authors. All rights reserved.
class ModuleDescriptor{constructor(id,heightPx,initializeCallback){this.id_=id;this.heightPx_=heightPx;this.title_=null;this.element_=null;this.initializeCallback_=initializeCallback;this.actions_=null}get id(){return this.id_}get heightPx(){return this.heightPx_}get title(){return this.title_}get element(){return this.element_}get actions(){return this.actions_}async initialize(){const info=await this.initializeCallback_();if(!info){return}this.title_=info.title;this.element_=info.element;this.actions_=info.actions||null;BrowserProxy.getInstance().handler.onModuleLoaded(this.id_,BrowserProxy.getInstance().now())}}// Copyright 2020 The Chromium Authors. All rights reserved.
class ModuleWrapperElement extends PolymerElement{static get is(){return"ntp-module-wrapper"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-icons" scope="ntp-module-wrapper">:host {
  background-color: var(--ntp-background-override-color);
    border: solid var(--ntp-border-color) 1px;
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
    overflow: hidden;
}

#header {
  align-items: center;
    display: flex;
    height: 22px;
    margin: 16px;
}

#title {
  color: var(--cr-primary-text-color);
    font-size: 15px;
}

#headerSpacer {
  flex-grow: 1;
}

#infoButton {
  --cr-icon-image: url(./icons/info.svg);
}

#dismissButton {
  --cr-icon-button-margin-start: 4px;
}

#moduleElement {
  align-items: center;
    display: flex;
    justify-content: center;
}

</style>
<div id="header">
  <span id="title">[[descriptor.title]]</span>
  <div id="headerSpacer"></div>
  <template is="dom-if" if="[[descriptor.actions.info]]">
    <cr-icon-button id="infoButton" title="Why am I seeing this?" on-click="onInfoButtonClick_">
    </cr-icon-button>
  </template>
  <template is="dom-if" if="[[descriptor.actions.dismiss]]">
    <cr-icon-button id="dismissButton" title="Remove" class="icon-clear" on-click="onDismissButtonClick_">
    </cr-icon-button>
  </template>
</div>
<div id="moduleElement"></div>
<!--_html_template_end_-->`}static get properties(){return{descriptor:{observer:"onDescriptorChange_",type:Object}}}onDescriptorChange_(newValue,oldValue){assert(!oldValue);this.$.moduleElement.appendChild(this.descriptor.element);this.$.moduleElement.style.height=`${this.descriptor.heightPx}px`;const observer=new IntersectionObserver(([{intersectionRatio:intersectionRatio}])=>{if(intersectionRatio>=.5){observer.disconnect();BrowserProxy.getInstance().handler.onModuleImpression(this.descriptor.id,BrowserProxy.getInstance().now())}},{threshold:.5});microTask.run(()=>{observer.observe(this.$.header)});this.descriptor.element.addEventListener("usage",()=>{BrowserProxy.getInstance().handler.onModuleUsage(this.descriptor.id)},{once:true})}onInfoButtonClick_(){this.descriptor.actions.info()}onDismissButtonClick_(){this.hidden=true;const message=this.descriptor.actions.dismiss();this.dispatchEvent(new CustomEvent("dismiss-module",{bubbles:true,composed:true,detail:message}))}restore(){this.hidden=false;if(this.descriptor.actions.restore){this.descriptor.actions.restore()}}}customElements.define(ModuleWrapperElement.is,ModuleWrapperElement);// Copyright 2020 The Chromium Authors. All rights reserved.
const KALEIDOSCOPE_RESOURCES=[{url:"chrome://kaleidoscope/geometry.mojom-lite.js"},{url:"chrome://kaleidoscope/chrome/browser/media/feeds/media_feeds_store.mojom-lite.js"},{url:"chrome://kaleidoscope/kaleidoscope.mojom-lite.js"},{url:"chrome://kaleidoscope/content.js"},{url:"chrome://kaleidoscope/resources/_locales/strings.js"},{url:"chrome://kaleidoscope/module.js",module:true}];function loadResource(resource){return new Promise(resolve=>{const script=document.createElement("script");if(resource.module){script.type="module"}script.src=resource.url;script.addEventListener("load",resolve,{once:true});document.body.appendChild(script)})}const kaleidoscopeDescriptor=new ModuleDescriptor("kaleidoscope",330,async()=>{await Promise.all(KALEIDOSCOPE_RESOURCES.map(r=>loadResource(r)));return window.loadKaleidoscopeModule()});// Copyright 2020 The Chromium Authors. All rights reserved.
class ModuleRegistry{constructor(){this.descriptors_=[]}registerModules(descriptors){this.descriptors_=descriptors}async initializeModules(){await Promise.all(this.descriptors_.map(d=>d.initialize()));return this.descriptors_.filter(descriptor=>!!descriptor.element)}}addSingletonGetter(ModuleRegistry);// Copyright 2020 The Chromium Authors. All rights reserved.
class ShoppingTasksHandlerProxy{constructor(){this.handler=shoppingTasks.mojom.ShoppingTasksHandler.getRemote()}}addSingletonGetter(ShoppingTasksHandlerProxy);// Copyright 2020 The Chromium Authors. All rights reserved.
class ShoppingTasksModuleElement extends PolymerElement{static get is(){return"ntp-shopping-tasks-module"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style scope="ntp-shopping-tasks-module">:host {
  box-sizing: border-box;
    display: block;
    height: 100%;
    padding-inline-end: 15px;
    padding-inline-start: 15px;
    width: 100%;
}

#products {
  display: flex;
    flex-direction: row;
}

.product {
  border-radius: 4px;
    display: flex;
    flex-direction: column;
    outline: none;
    text-decoration: none;
    width: 120px;
}

:host-context(.focus-outline-visible) .product:focus {
  box-shadow: var(--ntp-focus-shadow);
}

.product + .product {
  margin-inline-start: 16px;
}

.image {
  background: var(--google-grey-50);
    border-radius: 4px;
    box-sizing: border-box;
    height: 120px;
    margin-bottom: 8px;
    padding: 10px;
    width: 120px;
}

img {
  height: 100%;
    object-fit: contain;
    width: 100%;
}

.price {
  color: var(--cr-primary-text-color);
    font-size: 13px;
    font-weight: bold;
    height: 14px;
    line-height: 15px;
    margin-bottom: 8px;
}

.name {
  -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: var(--cr-primary-text-color);
    display: -webkit-box;
    font-size: 12px;
    height: 40px;
    line-height: 20px;
    margin-bottom: 5px;
    overflow: hidden;
}

.info {
  color: var(--cr-secondary-text-color);
    font-size: 11px;
    height: 13px;
    text-overflow: ellipsis;
}

#relatedSearches {
  display: flex;
    flex-direction: row;
    margin-top: 16px;
}

.pill {
  align-items: center;
    border: solid var(--ntp-border-color) 1px;
    border-radius: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    height: 32px;
    outline: none;
    text-decoration: none;
}

:host-context(.focus-outline-visible) .pill:focus {
  box-shadow: var(--ntp-focus-shadow);
}

.pill + .pill {
  margin-inline-start: 8px;
}

.loupe {
  -webkit-mask-image: url(search.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--cr-secondary-text-color);
    height: 16px;
    margin-inline-start: 12px;
    width: 16px;
}

.search-text {
  color: var(--cr-primary-text-color);
    font-size: 13px;
    margin-inline-end: 12px;
    margin-inline-start: 8px;
}

cr-dialog::part(dialog) {
  width: 459px;
}

cr-dialog [slot='body'] div:not(:last-of-type) {
  margin-bottom: 24px;
}

cr-dialog [slot='body'] a[href] {
  color: var(--cr-link-color);
    text-decoration: none;
}

</style>
<div id="products">
  <template is="dom-repeat" id="productsRepeat" items="[[shoppingTask.products]]" on-dom-change="onDomChange_">
    <a class="product" href="[[item.targetUrl.url]]" on-click="onProductClick_" on-auxclick="onProductClick_">
      <div class="image">
        <img is="ntp-img" auto-src="[[item.imageUrl.url]]">
      </div>
      <div class="price">[[item.price]]</div>
      <div class="name" title="[[item.name]]">[[item.name]]</div>
      <div class="info">[[item.info]]</div>
    </a>
  </template>
</div>
<div id="relatedSearches">
  <template is="dom-repeat" id="relatedSearchesRepeat" items="[[shoppingTask.relatedSearches]]" on-dom-change="onDomChange_">
    <a class="pill" href="[[item.targetUrl.url]]" on-click="onPillClick_" on-auxclick="onPillClick_">
      <div class="loupe"></div>
      <div class="search-text">[[item.text]]</div>
    </a>
  </template>
</div>
<template is="dom-if" if="[[showInfoDialog]]" restamp="">
  <cr-dialog show-on-attach="">
    <div slot="title">Why am I seeing this?</div>
    <div slot="body">
      <div>Youâ€™re seeing this item based on your previous activity using Google services. You can see your data, delete it, and change your settings at <a href="https://myactivity.google.com/" target="_blank">myactivity.google.com</a>.</div>
      <div>Learn about the data Google collects and why at <a href="https://policies.google.com/" target="_blank">policies.google.com</a>.</div>
    </div>
    <div slot="button-container">
      <cr-button class="action-button" on-click="onCloseClick_">
        Close
      </cr-button>
    </div>
  </cr-dialog>
</template>
<!--_html_template_end_-->`}static get properties(){return{shoppingTask:Object,showInfoDialog:Boolean}}ready(){super.ready();this.intersectionObserver_=null}onProductClick_(e){const index=this.$.productsRepeat.indexForElement(e.target);ShoppingTasksHandlerProxy.getInstance().handler.onProductClicked(index);this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}))}onPillClick_(e){const index=this.$.relatedSearchesRepeat.indexForElement(e.target);ShoppingTasksHandlerProxy.getInstance().handler.onRelatedSearchClicked(index);this.dispatchEvent(new Event("usage",{bubbles:true,composed:true}))}onCloseClick_(){this.showInfoDialog=false}onDomChange_(){if(!this.intersectionObserver_){this.intersectionObserver_=new IntersectionObserver(entries=>{entries.forEach(({intersectionRatio:intersectionRatio,target:target})=>{target.style.visibility=intersectionRatio<1?"hidden":"visible"});this.dispatchEvent(new Event("visibility-update"))},{root:this,threshold:1})}else{this.intersectionObserver_.disconnect()}this.shadowRoot.querySelectorAll(".product, .pill").forEach(el=>this.intersectionObserver_.observe(el))}}customElements.define(ShoppingTasksModuleElement.is,ShoppingTasksModuleElement);async function createModule(){const{shoppingTask:shoppingTask}=await ShoppingTasksHandlerProxy.getInstance().handler.getPrimaryShoppingTask();if(!shoppingTask){return null}const element=new ShoppingTasksModuleElement;element.shoppingTask=shoppingTask;return{element:element,title:shoppingTask.title,actions:{info:()=>{element.showInfoDialog=true},dismiss:()=>{ShoppingTasksHandlerProxy.getInstance().handler.dismissShoppingTask(shoppingTask.name);return loadTimeData.getStringF("dismissModuleToastMessage",shoppingTask.name)},restore:()=>{ShoppingTasksHandlerProxy.getInstance().handler.restoreShoppingTask(shoppingTask.name)}}}}const shoppingTasksDescriptor=new ModuleDescriptor("shopping_tasks",270,createModule);// Copyright 2020 The Chromium Authors. All rights reserved.
const descriptors=[];if(loadTimeData.getBoolean("shoppingTasksModuleEnabled")){descriptors.push(shoppingTasksDescriptor)}if(loadTimeData.getBoolean("kaleidoscopeModuleEnabled")){descriptors.push(kaleidoscopeDescriptor)}ModuleRegistry.getInstance().registerModules(descriptors);// Copyright 2016 The Chromium Authors. All rights reserved.
var PromiseResolver=class{constructor(){this.resolve_;this.reject_;this.isFulfilled_=false;this.promise_=new Promise((resolve,reject)=>{this.resolve_=(resolution=>{resolve(resolution);this.isFulfilled_=true});this.reject_=(reason=>{reject(reason);this.isFulfilled_=true})})}get isFulfilled(){return this.isFulfilled_}set isFulfilled(i){assertNotReached()}get promise(){return this.promise_}set promise(p){assertNotReached()}get resolve(){return this.resolve_}set resolve(r){assertNotReached()}get reject(){return this.reject_}set reject(s){assertNotReached()}};// Copyright 2020 The Chromium Authors. All rights reserved.
class LoadTimeResolver{constructor(url){this.resolver_=new PromiseResolver;this.eventTracker_=new EventTracker;this.eventTracker_.add(window,"message",({data:data})=>{if(data.frameType==="background-image"&&data.messageType==="loaded"&&url===data.url){this.resolve_(data.time)}})}get promise(){return this.resolver_.promise}reject(){this.resolver_.reject();this.eventTracker_.removeAll()}resolve_(loadTime){this.resolver_.resolve(loadTime);this.eventTracker_.removeAll()}}class BackgroundManager{constructor(){this.backgroundImage_=document.body.querySelector("#backgroundImage");this.loadTimeResolver_=null;this.url_=this.backgroundImage_.src}setShowBackgroundImage(show){document.body.toggleAttribute("show-background-image",show)}setBackgroundColor(color){document.body.style.backgroundColor=skColorToRgba(color)}setBackgroundImage(image){const url=new URL("chrome-untrusted://new-tab-page/custom_background_image");url.searchParams.append("url",image.url.url);if(image.url2x){url.searchParams.append("url2x",image.url2x.url)}if(image.size){url.searchParams.append("size",image.size)}if(image.repeatX){url.searchParams.append("repeatX",image.repeatX)}if(image.repeatY){url.searchParams.append("repeatY",image.repeatY)}if(image.positionX){url.searchParams.append("positionX",image.positionX)}if(image.positionY){url.searchParams.append("positionY",image.positionY)}if(url.href===this.url_){return}if(this.loadTimeResolver_){this.loadTimeResolver_.reject();this.loadTimeResolver_=null}this.backgroundImage_.contentWindow.location.replace(url.href);this.url_=url.href}getBackgroundImageLoadTime(){if(!this.loadTimeResolver_){this.loadTimeResolver_=new LoadTimeResolver(this.backgroundImage_.src);BrowserProxy.getInstance().postMessage(this.backgroundImage_,"sendLoadTime","chrome-untrusted://new-tab-page")}return this.loadTimeResolver_.promise}}addSingletonGetter(BackgroundManager);// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const callApi=async(apiName,fnName,...args)=>{const{gbar:gbar}=window;if(!gbar){return}const api=await gbar.a[apiName]();return api[fnName].apply(api,args)};const api=[{name:"bar",apiName:"bf",fns:[["setForegroundStyle","pc"],["setBackgroundColor","pd"],["setDarkMode","pp"]]}].reduce((topLevelApi,def)=>{topLevelApi[def.name]=def.fns.reduce((apiPart,[name,fnName])=>{apiPart[name]=callApi.bind(null,def.apiName,fnName);return apiPart},{});return topLevelApi},{});const updateDarkMode=async()=>{await api.bar.setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);api.bar.setBackgroundColor("transparent");api.bar.setForegroundStyle(foregroundLight?1:0)};let foregroundLight=false;const oneGoogleBarApi={isForegroundLight:()=>foregroundLight,setForegroundLight:enabled=>{foregroundLight=enabled;api.bar.setForegroundStyle(foregroundLight?1:0)},trackDarkModeChanges:()=>{window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{updateDarkMode()});updateDarkMode()}};// Copyright 2019 The Chromium Authors. All rights reserved.
class AppElement extends PolymerElement{static get is(){return"ntp-app"}static get template(){return html`<!--css-build:shadow--><!--_html_template_start_--><style include="cr-shared-style" scope="ntp-app">:host {
  --ntp-theme-shortcut-background-color: rgb(229, 231, 232);
    --ntp-theme-text-color: var(--google-grey-800);
    --ntp-theme-text-shadow: none;
    --ntp-one-google-bar-height: 56px;
    --ntp-search-box-width: 337px;
}

@media (min-width: 560px) {
:host {
  --ntp-search-box-width: 449px;
}

}

@media (min-width: 672px) {
:host {
  --ntp-search-box-width: 561px;
}

}

@media (prefers-color-scheme: dark) {
:host {
  --ntp-theme-shortcut-background-color: var(--google-grey-refresh-100);
      --ntp-theme-text-color: white;
}

}

:host([show-background-image_]) {
  --ntp-theme-text-shadow: 0 0 16px rgba(0, 0, 0, .3);
}

#oneGoogleBar {
  height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
}

#oneGoogleBarOverlayBackdrop {
  background: rgba(0, 0, 0, .6);
    display: none;
    height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
}

#oneGoogleBarOverlayBackdrop[show] {
  display: block;
}

#content {
  align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--ntp-one-google-bar-height));
    position: relative;
}

:host([iframe-one-google-bar-enabled_]) #content {
  padding-top: var(--ntp-one-google-bar-height);
}

#logo {
  margin-bottom: 38px;
    z-index: 1;
}

ntp-fakebox, ntp-realbox {
  margin-bottom: 32px;
}

ntp-fakebox, ntp-realbox, ntp-module-wrapper {
  flex-shrink: 0;
    width: var(--ntp-search-box-width);
}

:host([modules-enabled_]) ntp-middle-slot-promo {
  width: var(--ntp-search-box-width);
}

:host(:not([modules-enabled_])) ntp-middle-slot-promo {
  bottom: 16px;
    position: fixed;
}

ntp-realbox {
  visibility: hidden;
}

ntp-realbox[shown] {
  visibility: visible;
}

ntp-most-visited[dark] {
  --icon-button-color-active: var(--google-grey-refresh-300);
    --icon-button-color: white;
    --tile-hover-color: rgba(255, 255, 255, .1);
}

ntp-middle-slot-promo:not([hidden]) + ntp-module-wrapper, ntp-module-wrapper + ntp-module-wrapper {
  margin-top: 16px;
}

:host(:not([promo-and-modules-loaded_])) ntp-middle-slot-promo, :host(:not([promo-and-modules-loaded_])) ntp-module-wrapper, :host(:not([modules-visible_])) ntp-module-wrapper {
  display: none;
}

#customizeButtonSpacer {
  flex-grow: 1;
}

#customizeButtonContainer {
  align-self: flex-end;
    background-color: var(--ntp-background-override-color);
    border-radius: calc(.5 * var(--cr-button-height));
    bottom: 16px;
    margin-inline-end: 16px;
    position: sticky;
}

:host([show-background-image_]) #customizeButtonContainer {
  background-color: transparent;
}

:host([show-background-image_]) #customizeButtonContainer:hover {
  background-color: rgba(255, 255, 255, .1);
}

#customizeButton {
  border: none;
    border-radius: calc(.5 * var(--cr-button-height));
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23);
    font-weight: 400;
    min-width: 32px;
}

:host([show-background-image_]) #customizeButton {
  box-shadow: none;
    padding: 0;
}

:host-context(.focus-outline-visible) #customizeButton:focus {
  box-shadow: var(--ntp-focus-shadow);
}

#customizeIcon {
  -webkit-mask-image: url(icons/icon_pencil.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--text-color);
    height: 16px;
    margin-inline-end: 8px;
    width: 16px;
}

:host([show-background-image_]) #customizeIcon {
  background-color: white;
    margin: 0;
}

@media (max-width: 550px) {
#customizeButton {
  padding: 0;
}

#customizeIcon {
  margin: 0;
}

#customizeText {
  display: none;
}

}

#themeAttribution {
  align-self: flex-start;
    bottom: 16px;
    color: var(--cr-secondary-text-color);
    margin-inline-start: 16px;
    position: fixed;
}

#backgroundImageAttribution {
  border-radius: 8px;
    bottom: 16px;
    color: var(--ntp-theme-text-color);
    line-height: 20px;
    max-width: 50vw;
    padding: 8px;
    position: fixed;
    text-shadow: var(--ntp-theme-text-shadow);
}

:host-context([dir='ltr']) #backgroundImageAttribution {
  left: 16px;
}

:host-context([dir='rtl']) #backgroundImageAttribution {
  right: 16px;
}

#backgroundImageAttribution:hover {
  background: rgba(var(--google-grey-900-rgb), .1);
}

#backgroundImageAttribution1Container {
  align-items: center;
    display: flex;
    flex-direction: row;
}

#linkIcon {
  -webkit-mask-image: url(icons/link.svg);
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100%;
    background-color: var(--ntp-theme-text-color);
    height: 16px;
    margin-inline-end: 8px;
    width: 16px;
}

#backgroundImageAttribution1, #backgroundImageAttribution2 {
  overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

#backgroundImageAttribution1 {
  font-size: .875rem;
}

#backgroundImageAttribution2 {
  font-size: .75rem;
}

@keyframes fadein {
from {
  opacity: 0;
}

to {
  opacity: 1;
}

}

.fadein {
  animation: 100ms ease-in-out fadein;
}

svg {
  position: fixed;
}

</style>
<div id="content" style="--ntp-theme-text-color: [[rgbaOrInherit_(theme_.shortcutTextColor)]];
        --ntp-theme-shortcut-background-color:
              [[rgbaOrInherit_(theme_.shortcutBackgroundColor)]];
        --ntp-logo-color: [[rgbaOrInherit_(logoColor_)]];">
  <template is="dom-if" if="[[showIframedOneGoogleBar_]]">
    <ntp-iframe id="oneGoogleBar" src="[[oneGoogleBarIframePath_]]" hidden$="[[!oneGoogleBarLoaded_]]">
    </ntp-iframe>
  </template>
  <ntp-logo id="logo" doodle-allowed$="[[doodleAllowed_]]" single-colored$="[[singleColoredLogo_]]" dark="[[theme_.isDark]]" background-color="[[backgroundColor_]]">
  </ntp-logo>
  <ntp-fakebox id="fakebox" on-open-voice-search="onOpenVoiceSearch_" hidden$="[[realboxEnabled_]]">
  </ntp-fakebox>
  <ntp-realbox id="realbox" on-open-voice-search="onOpenVoiceSearch_" theme="[[theme_.searchBox]]" shown$="[[realboxShown_]]" hidden$="[[!realboxEnabled_]]">
  </ntp-realbox>
  <ntp-most-visited id="mostVisited" dark$="[[theme_.isDark]]" use-white-add-icon$="[[theme_.shortcutUseWhiteAddIcon]]" use-title-pill$="[[theme_.shortcutUseTitlePill]]">
  </ntp-most-visited>
  <dom-if if="[[lazyRender_]]" on-dom-change="onLazyRendered_">
    <template>
      <ntp-middle-slot-promo on-ntp-middle-slot-promo-loaded="onMiddleSlotPromoLoaded_">
      </ntp-middle-slot-promo>
      <template is="dom-repeat" items="[[moduleDescriptors_]]" id="modules" on-dom-change="onModulesLoaded_">
        <ntp-module-wrapper descriptor="[[item]]" on-dismiss-module="onDismissModule_">
        </ntp-module-wrapper>
      </template>
      <a id="backgroundImageAttribution" href="[[backgroundImageAttributionUrl_]]" hidden="[[!backgroundImageAttribution1_]]">
        <div id="backgroundImageAttribution1Container">
          <div id="linkIcon"></div>
          <div id="backgroundImageAttribution1">
            [[backgroundImageAttribution1_]]
          </div>
        </div>
        <div id="backgroundImageAttribution2" hidden="[[!backgroundImageAttribution2_]]">
          [[backgroundImageAttribution2_]]
        </div>
      </a>
      <div id="customizeButtonSpacer"></div>
      <!-- cr-button has a transparent background. This leads to incorrect
           results when a custom background is set. Therefore, wrap customize
           button in container to enfore solid background color. -->
      <div id="customizeButtonContainer">
        <cr-button id="customizeButton" on-click="onCustomizeClick_" title="Customize this page">
          <div id="customizeIcon"></div>
          <div id="customizeText" hidden$="[[showBackgroundImage_]]">
            Customize
          </div>
        </cr-button>
      </div>
      <div id="themeAttribution" hidden$="[[!theme_.backgroundImage.attributionUrl]]">
        <div>Theme created by</div>
        <img src="[[theme_.backgroundImage.attributionUrl.url]]"><img>
      </div>
    </template>
  </dom-if>
</div>
<dom-if if="[[showVoiceSearchOverlay_]]" restamp="">
  <template>
    <ntp-voice-search-overlay on-close="onVoiceSearchOverlayClose_">
    </ntp-voice-search-overlay>
  </template>
</dom-if>
<dom-if if="[[showCustomizeDialog_]]" restamp="">
  <template>
    <ntp-customize-dialog on-close="onCustomizeDialogClose_" theme="[[theme_]]" background-selection="{{backgroundSelection_}}">
    </ntp-customize-dialog>
  </template>
</dom-if>
<dom-if if="[[lazyRender_]]" restamp="">
  <template>
    <cr-toast id="dismissModuleToast" duration="10000">
      <div id="dismissModuleToastMessage">[[dismissModuleToastMessage_]]</div>
      <cr-button id="undoDismissModuleButton" aria-label="Press Ctrl+Z to undo" on-click="onUndoDismissModuleButtonClick_">
        Undo
      </cr-button>
    </cr-toast>
  </template>
</dom-if>
<div id="oneGoogleBarOverlayBackdrop"></div>
<svg>
  <defs>
    <clipPath id="oneGoogleBarClipPath"></clipPath>
  </defs>
</svg>
<!--_html_template_end_-->`}static get properties(){return{iframeOneGoogleBarEnabled_:{type:Boolean,value:()=>{const params=new URLSearchParams(window.location.search);if(params.has("ogbinline")){return false}return loadTimeData.getBoolean("iframeOneGoogleBarEnabled")||params.has("ogbiframe")},reflectToAttribute:true},oneGoogleBarModalOverlaysEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("oneGoogleBarModalOverlaysEnabled")},oneGoogleBarIframePath_:{type:String,value:()=>{const params=new URLSearchParams;params.set("paramsencoded",btoa(window.location.search.replace(/^[?]/,"&")));return`chrome-untrusted://new-tab-page/one-google-bar?${params}`}},oneGoogleBarLoaded_:{observer:"oneGoogleBarLoadedChange_",type:Boolean,value:false},oneGoogleBarDarkThemeEnabled_:{type:Boolean,computed:`computeOneGoogleBarDarkThemeEnabled_(oneGoogleBarLoaded_,\n            theme_, backgroundSelection_)`,observer:"onOneGoogleBarDarkThemeEnabledChange_"},showIframedOneGoogleBar_:{type:Boolean,value:false,computed:`computeShowIframedOneGoogleBar_(iframeOneGoogleBarEnabled_,\n            lazyRender_)`},theme_:{observer:"onThemeChange_",type:Object},showCustomizeDialog_:Boolean,showVoiceSearchOverlay_:Boolean,showBackgroundImage_:{computed:"computeShowBackgroundImage_(theme_, backgroundSelection_)",observer:"onShowBackgroundImageChange_",reflectToAttribute:true,type:Boolean},backgroundSelection_:{type:Object,value:()=>({type:BackgroundSelectionType.NO_SELECTION}),observer:"updateBackgroundImagePath_"},backgroundImageAttribution1_:{type:String,computed:`computeBackgroundImageAttribution1_(theme_,\n            backgroundSelection_)`},backgroundImageAttribution2_:{type:String,computed:`computeBackgroundImageAttribution2_(theme_,\n            backgroundSelection_)`},backgroundImageAttributionUrl_:{type:String,computed:`computeBackgroundImageAttributionUrl_(theme_,\n            backgroundSelection_)`},doodleAllowed_:{computed:"computeDoodleAllowed_(showBackgroundImage_, theme_)",type:Boolean},backgroundColor_:{computed:"computeBackgroundColor_(showBackgroundImage_, theme_)",type:Object},logoColor_:{type:String,computed:"computeLogoColor_(theme_, backgroundSelection_)"},singleColoredLogo_:{computed:"computeSingleColoredLogo_(theme_, backgroundSelection_)",type:Boolean},realboxEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("realboxEnabled")},realboxShown_:{type:Boolean,computed:"computeRealboxShown_(theme_)"},modulesEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("modulesEnabled"),reflectToAttribute:true},modulesVisible_:{type:Boolean,reflectToAttribute:true},middleSlotPromoLoaded_:Boolean,modulesLoaded_:Boolean,promoAndModulesLoaded_:{type:Boolean,computed:`computePromoAndModulesLoaded_(middleSlotPromoLoaded_,\n            modulesLoaded_)`,reflectToAttribute:true},modulesLoadedAndVisible_:{type:Boolean,computed:`computeModulesLoadedAndVisible_(promoAndModulesLoaded_,\n            modulesVisible_)`,observer:"onModulesLoadedAndVisibleChange_"},lazyRender_:Boolean,moduleDescriptors_:Object,dismissedModuleWrapper_:{type:Object,value:null},dismissModuleToastMessage_:String}}constructor(){performance.mark("app-creation-start");super();this.callbackRouter_=BrowserProxy.getInstance().callbackRouter;this.pageHandler_=BrowserProxy.getInstance().handler;this.backgroundManager_=BackgroundManager.getInstance();this.setThemeListenerId_=null;this.setModulesVisibleListenerId_=null;this.eventTracker_=new EventTracker;this.loadOneGoogleBar_();this.shouldPrintPerformance_=new URLSearchParams(location.search).has("print_perf");this.backgroundImageLoadStartEpoch_=performance.timeOrigin;this.backgroundImageLoadStart_=0}connectedCallback(){super.connectedCallback();this.setThemeListenerId_=this.callbackRouter_.setTheme.addListener(theme=>{performance.measure("theme-set");this.theme_=theme});this.setModulesVisibleListenerId_=this.callbackRouter_.setModulesVisible.addListener(visible=>{this.modulesVisible_=visible});this.pageHandler_.updateModulesVisible();this.eventTracker_.add(window,"message",event=>{const data=event.data;if(typeof data!=="object"){return}if("frameType"in data&&data.frameType==="one-google-bar"){this.handleOneGoogleBarMessage_(event)}});this.eventTracker_.add(window,"keydown",e=>this.onWindowKeydown_(e));if(this.shouldPrintPerformance_){this.backgroundManager_.getBackgroundImageLoadTime().then(time=>{const duration=time-this.backgroundImageLoadStartEpoch_;this.printPerformanceDatum_("background-image-load",this.backgroundImageLoadStart_,duration);this.printPerformanceDatum_("background-image-loaded",this.backgroundImageLoadStart_+duration)},()=>{console.error("Failed to capture background image load time")})}FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.callbackRouter_.removeListener(assert(this.setThemeListenerId_));this.eventTracker_.removeAll()}ready(){super.ready();BrowserProxy.getInstance().waitForLazyRender().then(()=>{this.lazyRender_=true});this.printPerformance_();performance.measure("app-creation","app-creation-start")}computeOneGoogleBarDarkThemeEnabled_(){if(!this.theme_||!this.oneGoogleBarLoaded_){return false}switch(this.backgroundSelection_.type){case BackgroundSelectionType.IMAGE:return true;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:case BackgroundSelectionType.NO_SELECTION:default:return this.theme_.isDark}}async loadOneGoogleBar_(){if(this.iframeOneGoogleBarEnabled_){const oneGoogleBar=document.querySelector("#oneGoogleBar");if(oneGoogleBar){oneGoogleBar.remove()}return}const{parts:parts}=await this.pageHandler_.getOneGoogleBarParts(window.location.search.replace(/^[?]/,"&"));if(!parts){return}const inHeadStyle=document.createElement("style");inHeadStyle.type="text/css";inHeadStyle.appendChild(document.createTextNode(parts.inHeadStyle));document.head.appendChild(inHeadStyle);const inHeadScript=document.createElement("script");inHeadScript.type="text/javascript";inHeadScript.appendChild(document.createTextNode(parts.inHeadScript));document.head.appendChild(inHeadScript);this.oneGoogleBarLoaded_=true;const oneGoogleBar=document.querySelector("#oneGoogleBar");oneGoogleBar.innerHTML=parts.barHtml;const afterBarScript=document.createElement("script");afterBarScript.type="text/javascript";afterBarScript.appendChild(document.createTextNode(parts.afterBarScript));oneGoogleBar.parentNode.insertBefore(afterBarScript,oneGoogleBar.nextSibling);document.querySelector("#oneGoogleBarEndOfBody").innerHTML=parts.endOfBodyHtml;const endOfBodyScript=document.createElement("script");endOfBodyScript.type="text/javascript";endOfBodyScript.appendChild(document.createTextNode(parts.endOfBodyScript));document.body.appendChild(endOfBodyScript);this.pageHandler_.onOneGoogleBarRendered(BrowserProxy.getInstance().now());oneGoogleBarApi.trackDarkModeChanges()}onOneGoogleBarDarkThemeEnabledChange_(){if(!this.oneGoogleBarLoaded_){return}if(this.iframeOneGoogleBarEnabled_){$$(this,"#oneGoogleBar").postMessage({type:"enableDarkTheme",enabled:this.oneGoogleBarDarkThemeEnabled_});return}oneGoogleBarApi.setForegroundLight(this.oneGoogleBarDarkThemeEnabled_)}computeShowIframedOneGoogleBar_(){return this.iframeOneGoogleBarEnabled_&&this.lazyRender_}computeBackgroundImageAttribution1_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:return this.theme_&&this.theme_.backgroundImageAttribution1||"";case BackgroundSelectionType.IMAGE:return this.backgroundSelection_.image.attribution1;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return""}}computeBackgroundImageAttribution2_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:return this.theme_&&this.theme_.backgroundImageAttribution2||"";case BackgroundSelectionType.IMAGE:return this.backgroundSelection_.image.attribution2;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return""}}computeBackgroundImageAttributionUrl_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:return this.theme_&&this.theme_.backgroundImageAttributionUrl?this.theme_.backgroundImageAttributionUrl.url:"";case BackgroundSelectionType.IMAGE:return this.backgroundSelection_.image.attributionUrl.url;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return""}}computeRealboxShown_(){return!loadTimeData.getBoolean("realboxMatchOmniboxTheme")||!!this.theme_}computePromoAndModulesLoaded_(){return this.middleSlotPromoLoaded_&&(!loadTimeData.getBoolean("modulesEnabled")||this.modulesLoaded_)}computeModulesLoadedAndVisible_(){return this.promoAndModulesLoaded_&&this.modulesVisible_}async onLazyRendered_(){if(!loadTimeData.getBoolean("modulesEnabled")){return}this.moduleDescriptors_=await ModuleRegistry.getInstance().initializeModules()}onOpenVoiceSearch_(){this.showVoiceSearchOverlay_=true;this.pageHandler_.onVoiceSearchAction(newTabPage.mojom.VoiceSearchAction.kActivateSearchBox)}onCustomizeClick_(){this.showCustomizeDialog_=true}onCustomizeDialogClose_(){this.showCustomizeDialog_=false}onVoiceSearchOverlayClose_(){this.showVoiceSearchOverlay_=false}onWindowKeydown_(e){let ctrlKeyPressed=e.ctrlKey;if(ctrlKeyPressed&&e.code==="Period"&&e.shiftKey){this.showVoiceSearchOverlay_=true;this.pageHandler_.onVoiceSearchAction(newTabPage.mojom.VoiceSearchAction.kActivateKeyboard)}if(ctrlKeyPressed&&e.key==="z"){this.onUndoDismissModuleButtonClick_()}}rgbaOrInherit_(skColor){return skColor?skColorToRgba(skColor):"inherit"}computeShowBackgroundImage_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:return!!this.theme_&&!!this.theme_.backgroundImage;case BackgroundSelectionType.IMAGE:return true;case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return false}}onShowBackgroundImageChange_(){this.backgroundManager_.setShowBackgroundImage(this.showBackgroundImage_)}onThemeChange_(){if(this.theme_){this.backgroundManager_.setBackgroundColor(this.theme_.backgroundColor)}this.updateBackgroundImagePath_()}onModulesLoadedAndVisibleChange_(){if(this.modulesLoadedAndVisible_){this.pageHandler_.onModulesRendered(BrowserProxy.getInstance().now())}}updateBackgroundImagePath_(){if(!this.showCustomizeDialog_&&this.backgroundSelection_.type!==BackgroundSelectionType.NO_SELECTION){if(this.backgroundSelection_.type===BackgroundSelectionType.NO_BACKGROUND){setTimeout(()=>{this.backgroundSelection_={type:BackgroundSelectionType.NO_SELECTION}},100)}else{this.backgroundSelection_={type:BackgroundSelectionType.NO_SELECTION}}}let backgroundImage;switch(this.backgroundSelection_.type){case BackgroundSelectionType.NO_SELECTION:backgroundImage=this.theme_&&this.theme_.backgroundImage;break;case BackgroundSelectionType.IMAGE:backgroundImage={url:{url:this.backgroundSelection_.image.imageUrl.url}};break}if(backgroundImage){this.backgroundManager_.setBackgroundImage(backgroundImage)}}computeDoodleAllowed_(){return loadTimeData.getBoolean("themeModeDoodlesEnabled")||!this.showBackgroundImage_&&this.theme_&&this.theme_.isDefault&&!this.theme_.isDark}computeBackgroundColor_(){if(this.showBackgroundImage_){return null}return this.theme_&&this.theme_.backgroundColor}computeLogoColor_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.IMAGE:return hexColorToSkColor("#ffffff");case BackgroundSelectionType.NO_SELECTION:case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.DAILY_REFRESH:default:return this.theme_&&(this.theme_.logoColor||(this.theme_.isDark?hexColorToSkColor("#ffffff"):null))}}computeSingleColoredLogo_(){switch(this.backgroundSelection_.type){case BackgroundSelectionType.IMAGE:return true;case BackgroundSelectionType.DAILY_REFRESH:case BackgroundSelectionType.NO_BACKGROUND:case BackgroundSelectionType.NO_SELECTION:default:return this.theme_&&(!!this.theme_.logoColor||this.theme_.isDark)}}canShowPromoWithBrowserCommand_(messageData,commandSource,commandOrigin){const commandId=Object.values(promoBrowserCommand.mojom.Command).includes(messageData.commandId)?messageData.commandId:promoBrowserCommand.mojom.Command.kUnknownCommand;PromoBrowserCommandProxy.getInstance().handler.canShowPromoWithCommand(commandId).then(({canShow:canShow})=>{const response={messageType:messageData.messageType};response[messageData.commandId]=canShow;commandSource.postMessage(response,commandOrigin)})}executePromoBrowserCommand_(commandData,commandSource,commandOrigin){const commandId=Object.values(promoBrowserCommand.mojom.Command).includes(commandData.commandId)?commandData.commandId:promoBrowserCommand.mojom.Command.kUnknownCommand;PromoBrowserCommandProxy.getInstance().handler.executeCommand(commandId,commandData.clickInfo).then(({commandExecuted:commandExecuted})=>{commandSource.postMessage(commandExecuted,commandOrigin)})}handleOneGoogleBarMessage_(event){const data=event.data;if(data.messageType==="loaded"){if(!this.oneGoogleBarModalOverlaysEnabled_){const oneGoogleBar=$$(this,"#oneGoogleBar");oneGoogleBar.style.clipPath="url(#oneGoogleBarClipPath)";oneGoogleBar.style.zIndex="1000"}this.oneGoogleBarLoaded_=true;this.pageHandler_.onOneGoogleBarRendered(BrowserProxy.getInstance().now())}else if(data.messageType==="overlaysUpdated"){this.$.oneGoogleBarClipPath.querySelectorAll("rect").forEach(el=>{el.remove()});const overlayRects=data.data;overlayRects.forEach(({x:x,y:y,width:width,height:height})=>{const rectElement=document.createElementNS("http://www.w3.org/2000/svg","rect");rectElement.setAttribute("x",x-8);rectElement.setAttribute("y",y-8);rectElement.setAttribute("width",width+16);rectElement.setAttribute("height",height+16);this.$.oneGoogleBarClipPath.appendChild(rectElement)})}else if(data.messageType==="activate"){this.$.oneGoogleBarOverlayBackdrop.toggleAttribute("show",true);$$(this,"#oneGoogleBar").style.zIndex="1000"}else if(data.messageType==="deactivate"){this.$.oneGoogleBarOverlayBackdrop.toggleAttribute("show",false);$$(this,"#oneGoogleBar").style.zIndex="0"}else if(data.messageType==="can-show-promo-with-browser-command"){this.canShowPromoWithBrowserCommand_(data,event.source,event.origin)}else if(data.messageType==="execute-browser-command"){this.executePromoBrowserCommand_(data.data,event.source,event.origin)}}oneGoogleBarLoadedChange_(){if(this.oneGoogleBarLoaded_&&this.iframeOneGoogleBarEnabled_&&this.oneGoogleBarModalOverlaysEnabled_){this.setupShortcutDragDropOneGoogleBarWorkaround_()}}onMiddleSlotPromoLoaded_(){this.middleSlotPromoLoaded_=true;if(this.modulesEnabled_){return}const onResize=()=>{const promoElement=$$(this,"ntp-middle-slot-promo");promoElement.hidden=this.$.mostVisited.getBoundingClientRect().bottom>=promoElement.offsetTop};this.eventTracker_.add(window,"resize",onResize);onResize()}onModulesLoaded_(){this.modulesLoaded_=true}onDismissModule_(e){this.dismissedModuleWrapper_=e.target;this.dismissModuleToastMessage_=e.detail;$$(this,"#dismissModuleToast").show();this.pageHandler_.onDismissModule(this.dismissedModuleWrapper_.descriptor.id)}onUndoDismissModuleButtonClick_(){this.dismissedModuleWrapper_.restore();$$(this,"#dismissModuleToast").hide();this.pageHandler_.onRestoreModule(this.dismissedModuleWrapper_.descriptor.id);this.dismissedModuleWrapper_=null}setupShortcutDragDropOneGoogleBarWorkaround_(){const iframe=$$(this,"#oneGoogleBar");let resetAtDragEnd=false;let dragging=false;let originalPointerEvents;this.eventTracker_.add(this.$.mostVisited,"pointerenter",()=>{if(dragging){resetAtDragEnd=false;return}originalPointerEvents=getComputedStyle(iframe).pointerEvents;iframe.style.pointerEvents="none"});this.eventTracker_.add(this.$.mostVisited,"pointerleave",()=>{if(dragging){resetAtDragEnd=true;return}iframe.style.pointerEvents=originalPointerEvents});this.eventTracker_.add(this.$.mostVisited,"dragstart",()=>{dragging=true});this.eventTracker_.add(this.$.mostVisited,"dragend",()=>{dragging=false;if(resetAtDragEnd){resetAtDragEnd=false;iframe.style.pointerEvents=originalPointerEvents}})}printPerformanceDatum_(name,time,auxTime=0){if(!this.shouldPrintPerformance_){return}if(!auxTime){console.log(`${name}: ${time}`)}else{console.log(`${name}: ${time} (${auxTime})`)}}printPerformance_(){if(!this.shouldPrintPerformance_){return}const entryTypes=["paint","measure"];const log=entry=>{this.printPerformanceDatum_(entry.name,entry.duration?entry.duration:entry.startTime,entry.duration&&entry.startTime?entry.startTime:0)};const observer=new PerformanceObserver(list=>{list.getEntries().forEach(entry=>{log(entry)})});observer.observe({entryTypes:entryTypes});performance.getEntries().forEach(entry=>{if(!entryTypes.includes(entry.entryType)){return}log(entry)})}}customElements.define(AppElement.is,AppElement);export{$$,BackgroundManager,BackgroundSelectionType,BrowserProxy,ImgElement,ModuleDescriptor,ModuleRegistry,PromoBrowserCommandProxy,ShoppingTasksHandlerProxy,createScrollBorders,decodeString16,kaleidoscopeDescriptor,mojoString16,shoppingTasksDescriptor};