webpackJsonp([1],Array(40).concat([function(t,e,i){"use strict";var n=i(27),r=i(124),s=i(135),a=i.n(s),l=i(138),o=i.n(l),c=i(137),u=i.n(c);n.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Hello",component:a.a},{path:"/newMovie",name:"newMovie",component:o.a},{path:"/myFilm",name:"myFilm",component:u.a}]})},function(t,e,i){function n(t){i(93),i(94)}var r=i(0)(i(52),i(111),n,null,null);t.exports=r.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(27),r=i(41),s=i.n(r),a=i(40);n.a.config.productionTip=!1,new n.a({el:"#app",router:a.a,template:"<App/>",components:{App:s.a}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"badge",props:{text:[String,Number]}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(129),r=i.n(n),s=i(28),a=i(57);e.default={name:"cell",components:{InlineDesc:r.a},props:i.i(a.a)(),beforeMount:function(){this.hasTitleSlot=!!this.$slots.title},computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){!this.disabled&&i.i(s.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!1}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number]}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"inline-desc"}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"rater",created:function(){this.currentValue=this.value},mounted:function(){this.updateStyle()},props:{max:{type:Number,default:5},value:{type:Number,default:0},disabled:Boolean,star:{type:String,default:"★"},activeColor:{type:String,default:"#fc6"},margin:{type:Number,default:2},fontSize:{type:Number,default:25}},computed:{sliceValue:function(){var t=this.currentValue.toFixed(2).split(".");return 1===t.length?[t[0],0]:t},cutIndex:function(){return 1*this.sliceValue[0]},cutPercent:function(){return 1*this.sliceValue[1]}},methods:{handleClick:function(t,e){this.disabled&&!e||(this.currentValue===t+1?(this.currentValue=t,this.updateStyle()):this.currentValue=t+1)},updateStyle:function(){for(var t=0;t<this.max;t++)t<=this.currentValue-1?this.$set(this.colors,t,this.activeColor):this.$set(this.colors,t,"#ccc")}},data:function(){return{colors:[],currentValue:0}},watch:{currentValue:function(t){this.updateStyle(),this.$emit("input",t)},value:function(t){this.currentValue=t}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(29),r=i(126),s=i.n(r);e.default={name:"tabbar-item",components:{Badge:s.a},beforeMount:function(){this.$slots.icon||(this.simple=!0),this.$slots["icon-active"]&&(this.hasActiveIcon=!0)},mixins:[n.a],props:{showDot:{type:Boolean,default:!1},badge:String,link:[String,Object],iconClass:String},computed:{isActive:function(){return this.$parent.index===this.currentIndex}},data:function(){return{simple:!1,hasActiveIcon:!1}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(29);e.default={name:"tabbar",mixins:[n.b],props:{iconClass:String}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(108),r=i.n(n);e.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(133),r=i.n(n),s=i(134),a=i.n(s),l=i(132),o=i.n(l),c=i(131),u=i.n(c);e.default={data:function(){return{isShowBack:!1}},components:{XHeader:a.a,Tabbar:o.a,TabbarItem:u.a,ViewBox:r.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(127),r=i.n(n),s=i(128),a=i.n(s),l=i(130),o=i.n(l);e.default={props:["list","title","rightTitle"],components:{Cell:r.a,Group:a.a,Rater:o.a}}},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(136),r=i.n(n),s=i(106);e.default={data:function(){return{hotList:[],rightTitle:"更多",title1:"影院热映",comingList:[],title2:"即将上映"}},components:{List:r.a},created:function(){var t=this;s("https://api.douban.com/v2/movie/in_theaters?count=6",null,function(e,i){t.hotList=i.subjects.map(function(t){return{url:"javascript:",imgL:t.images.large,imgM:t.images.medium,title:t.title,rating:t.rating.average}})}),s("https://api.douban.com/v2/movie/coming_soon?count=6",null,function(e,i){console.log(i),t.comingList=i.subjects.map(function(t){return{url:"javascript:",imgL:t.images.large,imgM:t.images.medium,title:t.title,rating:t.rating.average}})})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("view-box",{ref:"viewBox",attrs:{id:"viewBox"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{"left-options":{showBack:t.isShowBack}},slot:"header"},[t._v("主页")]),t._v(" "),i("router-view"),t._v(" "),i("tabbar",{staticStyle:{width:"100%",position:"absolute",left:"0",bottm:"0","z-index":"100"},attrs:{id:"tabbar"}},[i("tabbar-item",{attrs:{"show-dot":!1,selected:"",link:"/newMovie"}},[i("img",{attrs:{src:""},slot:"icon"}),t._v(" "),i("span",{slot:"label"},[t._v("\n\t\t\t    \t新电影\n\t\t\t    ")])]),t._v(" "),i("tabbar-item",{attrs:{link:"/myFilm"}},[i("img",{attrs:{src:""},slot:"icon"}),t._v(" "),i("span",{slot:"label"},[t._v("\n\t\t\t    \t我的\n\t\t\t    ")])]),t._v(" "),i("tabbar-item",[i("img",{attrs:{src:""},slot:"icon"}),t._v(" "),i("span",{slot:"label"},[t._v("前端")])])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"box"}},[i("list",{attrs:{list:t.hotList,title:t.title1,rightTitle:t.rightTitle}}),t._v(" "),i("list",{attrs:{list:t.comingList,title:t.title2,rightTitle:t.rightTitle}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:["vux-badge",{"vux-badge-dot":void 0===t.text,"vux-badge-single":void 0!==t.text&&1===t.text.toString().length}],domProps:{textContent:t._s(t.text)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-rater"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticStyle:{display:"none"},domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),t._l(t.max,function(e){return i("a",{staticClass:"vux-rater-box",class:{"is-active":t.currentValue>e-1},style:{color:t.colors&&t.colors[e-1]?t.colors[e-1]:"#ccc",marginRight:t.margin+"px",fontSize:t.fontSize+"px",width:t.fontSize+"px",height:t.fontSize+"px",lineHeight:t.fontSize+"px"},on:{click:function(i){t.handleClick(e-1)}}},[i("span",{staticClass:"vux-rater-inner"},[t._v(t._s(t.star)),t.cutPercent>0&&t.cutIndex===e-1?i("span",{staticClass:"vux-rater-outer",style:{color:t.activeColor,width:t.cutPercent+"%"}},[t._v(t._s(t.star))]):t._e()])])})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"weui-tabbar__item",class:{"weui-bar__item_on":t.isActive,"vux-tabbar-simple":t.simple},attrs:{href:"javascript:;"},on:{click:function(e){t.onItemClick(!0)}}},[t.simple?t._e():i("div",{staticClass:"weui-tabbar__icon",class:[t.iconClass||t.$parent.iconClass,{"vux-reddot":t.showDot}]},[t.simple||t.hasActiveIcon&&t.isActive?t._e():t._t("icon"),t._v(" "),!t.simple&&t.hasActiveIcon&&t.isActive?t._t("icon-active"):t._e(),t._v(" "),t.badge?i("sup",[i("badge",{attrs:{text:t.badge}})],1):t._e()],2),t._v(" "),i("p",{staticClass:"weui-tabbar__label"},[t._t("label")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"box"}},[i("group",{staticClass:"group"},[i("cell",{attrs:{title:t.title,value:t.rightTitle}})],1),t._v(" "),i("ul",{attrs:{id:"hot"}},t._l(t.list,function(e,n){return i("li",[i("img",{attrs:{src:e.imgM}}),t._v(" "),i("span",{staticClass:"title"},[t._v(t._s(e.title.slice(0,5)))]),t._v(" "),i("group",{directives:[{name:"show",rawName:"v-show",value:0!==e.rating,expression:"item.rating!==0"}],staticClass:"ratingGroup"},[i("rater",{attrs:{disabled:"",value:e.rating/2,"active-color":"#FF9900",margin:0,"font-size":10}}),t._v(" "),i("span",{staticClass:"ratingNum"},[t._v(t._s(e.rating))])],1),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:0===e.rating,expression:"item.rating === 0"}],staticClass:"tempNo"},[t._v("暂无评分")])],1)}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-tabbar"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.getLabelStyles()},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("我的页面")])},staticRenderFns:[]}},,,function(t,e,i){function n(t){i(96)}var r=i(0)(i(43),i(113),n,null,null);t.exports=r.exports},function(t,e,i){function n(t){i(103)}var r=i(0)(i(44),i(121),n,null,null);t.exports=r.exports},function(t,e,i){function n(t){i(92)}var r=i(0)(i(45),i(110),n,null,null);t.exports=r.exports},function(t,e,i){function n(t){i(98)}var r=i(0)(i(46),i(116),n,null,null);t.exports=r.exports},function(t,e,i){function n(t){i(97)}var r=i(0)(i(47),i(114),n,null,null);t.exports=r.exports},function(t,e,i){var n=i(0)(i(48),i(115),null,null,null);t.exports=n.exports},function(t,e,i){function n(t){i(101)}var r=i(0)(i(49),i(119),n,null,null);t.exports=r.exports},function(t,e,i){function n(t){i(102)}var r=i(0)(i(50),i(120),n,null,null);t.exports=r.exports},function(t,e,i){function n(t){i(104)}var r=i(0)(i(51),i(122),n,null,null);t.exports=r.exports},function(t,e,i){function n(t){i(99)}var r=i(0)(i(53),i(117),n,"data-v-50eb41d8",null);t.exports=r.exports},function(t,e,i){function n(t){i(100)}var r=i(0)(i(54),i(118),n,null,null);t.exports=r.exports},function(t,e,i){function n(t){i(105)}var r=i(0)(i(55),i(123),n,"data-v-b6e7a3cc",null);t.exports=r.exports},function(t,e,i){function n(t){i(95)}var r=i(0)(i(56),i(112),n,null,null);t.exports=r.exports}]),[42]);
//# sourceMappingURL=app.c22001f679fa0f500570.js.map