/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadComponents("ohb7yn8n",function(t,e,i,o,s){var n=function(){function t(){this._isCancelVisible=!1,this._shouldBlur=!0,this._shouldAlignLeft=!0,this.activated=!1,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search"}return t.prototype.componentDidLoad=function(){this.positionElements()},t.prototype.clearInput=function(t){var e=this;this.ionClear.emit({event:t}),setTimeout(function(){var i=e.value;void 0!==i&&""!==i&&(e.value="",e.ionInput.emit({event:t}))},64),this._shouldBlur=!1},t.prototype.cancelSearchbar=function(t){this.ionCancel.emit({event:t}),this.clearInput(t),this._shouldBlur=!0,this.activated=!1},t.prototype.inputChanged=function(t){this.value=t.target.value,this.ionInput.emit(t)},t.prototype.inputUpdated=function(){this.positionElements()},t.prototype.inputBlurred=function(){var t=this.el.querySelector(".searchbar-input");if(!1===this._shouldBlur)return t.focus(),this._shouldBlur=!0,this.ionBlur.emit({this:this}),void this.inputUpdated();this.focused=!1,this.positionElements()},t.prototype.inputFocused=function(){this.activated=!0,this.focused=!0,this.ionFocus.emit({this:this}),this.inputUpdated(),this.positionElements()},t.prototype.positionElements=function(){var t=this._shouldAlignLeft,e=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this._shouldAlignLeft=e,"ios"===this.mode&&(t!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())},t.prototype.positionPlaceholder=function(){var t="rtl"===document.dir,e=this.el.querySelector(".searchbar-input"),i=this.el.querySelector(".searchbar-search-icon");if(this._shouldAlignLeft)e.removeAttribute("style"),i.removeAttribute("style");else{var o=document.createElement("span");o.innerHTML=this.placeholder,document.body.appendChild(o);var s=o.offsetWidth;document.body.removeChild(o);var n="calc(50% - "+s/2+"px)",a="calc(50% - "+(s/2+30)+"px)";t?(e.style.paddingRight=n,i.style.marginRight=a):(e.style.paddingLeft=n,i.style.marginLeft=a)}},t.prototype.positionCancelButton=function(){var t="rtl"===document.dir,e=this.el.querySelector(".searchbar-ios-cancel"),i=this.focused;if(i!==this._isCancelVisible){var o=e.style;if(this._isCancelVisible=i,i)t?o.marginLeft="0":o.marginRight="0";else{var s=e.offsetWidth;s>0&&(t?o.marginLeft=-s+"px":o.marginRight=-s+"px")}}},t.prototype.hostData=function(){return{class:{"searchbar-active":this.activated,"searchbar-animated":this.animated,"searchbar-has-value":void 0!==this.value&&""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this._shouldAlignLeft,"searchbar-has-focus":this.focused}}},t.prototype.render=function(){return[e("div",{c:{"searchbar-input-container":!0}},e("ion-button",{c:{"searchbar-md-cancel":!0},o:{click:this.cancelSearchbar.bind(this),mousedown:this.cancelSearchbar.bind(this)},a:{mode:"md",color:"dark"},p:{clear:!0}},e("ion-icon",{a:{name:"md-arrow-back"}})),e("div",{c:{"searchbar-search-icon":!0}}),e("input",{c:{"searchbar-input":!0},o:{input:this.inputChanged.bind(this),blur:this.inputBlurred.bind(this),focus:this.inputFocused.bind(this)},p:{placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}}),e("ion-button",{c:{"searchbar-clear-icon":!0},o:{click:this.clearInput.bind(this),mousedown:this.clearInput.bind(this)},p:{clear:!0}})),e("ion-button",{c:{"searchbar-ios-cancel":!0},o:{click:this.cancelSearchbar.bind(this),mousedown:this.cancelSearchbar.bind(this)},p:{tabindex:this.activated?1:-1,clear:!0}},this.cancelButtonText)]},t}();t["ION-SEARCHBAR"]=n},["ION-SEARCHBAR",[["activated",5],["animated",2,1],["autocomplete",2],["autocorrect",2],["cancelButtonText",2],["debounce",2,2],["el",7],["focused",5],["placeholder",2],["showCancelButton",2,1],["spellcheck",2,1],["type",2],["value",2]],{theme:"searchbar"},[["ionInput"],["ionCancel"],["ionClear"],["ionBlur"],["ionFocus"]]]);