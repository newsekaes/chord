(function(e){function t(t){for(var a,i,c=t[0],s=t[1],d=t[2],u=0,h=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(h.length)h.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/chord/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},5712:function(e,t){e.exports="data:image/png;base64,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"},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},7271:function(e,t,n){e.exports={chordItemCpn:"index-module_chord-item-cpn_1jYve",chordItemResult:"index-module_chord-item__result_aZi44"}},"8e1f":function(e,t,n){},"9c0c":function(e,t,n){},a21d:function(e,t,n){e.exports={logo:"index-module_logo_XRiW0",editSwitchArea:"index-module_edit-switch-area_2wVJQ",editSwitchItem:"index-module_edit-switch-item_z3ilt",switchItemIcon:"index-module_switch-item-icon_3rX-n",switchItemField:"index-module_switch-item-field_1vpYI"}},a4d9:function(e,t,n){e.exports={home:"index-module_home_1Y-rr",chordCardBox:"index-module_chord-cardBox_3-iz4",chordCard:"index-module_chord-card_--K0s",chordCreateBox:"index-module_chord-create-box_1lKs6",chordTabShow:"index-module_chord-tab-show_2zmU2",chordTabShowIcon:"index-module_chord-tab-show-icon_1twTs"}},b6bb:function(e,t,n){e.exports={chordCard:"index-module_chord-card__aAIX",chordCardEditing:"index-module_chord-card__editing_2gBB4",chordName:"index-module_chord-name_1bWeN",chordNameField:"index-module_chord-name-field_zyPIP",chordBox:"index-module_chord-box_RH-OH",chordBtnGroup:"index-module_chord-btn-group_2vpxd",chordBtn:"index-module_chord-btn_1Emnh",chordBtnIcon:"index-module_chord-btn-icon_1PC7B",chordBtnDel:"index-module_chord-btn-del_2kvGH",chordBtnModify:"index-module_chord-btn-modify_W72eY",chordBtnCancel:"index-module_chord-btn-cancel_cwXtl",chordBtnConfirm:"index-module_chord-btn-confirm_-W06n",chordCreateTitle:"index-module_chord-create-title_1FUmF",chordCardCreate:"index-module_chord-card__create_fBTeb"}},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("5c0b"),n("2877")),c={},s=Object(i["a"])(c,o,r,!1,null,null,null),d=s.exports,l=n("8c4f"),u=(n("d81d"),n("b0c0"),n("d3b7"),n("ddb0"),n("5530")),h=n("2638"),m=n.n(h),p=n("d4ec"),f=n("bee2"),w=n("262e"),v=n("2caf"),b=n("9ab4"),C=n("60a3"),y=n("4bb5"),g=n("48d3"),k=(n("9a83"),n("f564")),I=n("d24f"),A=n.n(I),j=Object(y["a"])("answerStorage"),O=function(e){Object(w["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.text="",e.tabActive=0,e}return Object(f["a"])(n,[{key:"stopPropagation",value:function(e){e.stopPropagation()}},{key:"importJson",value:function(){var e=JSON.parse(this.text);this.importAnswers(e)}},{key:"hideOverlay",value:function(){this.$emit("update:show",!1)}},{key:"copy",value:function(){var e=document.createElement("input");e.style.position="fixed",e.style.visibility="hidden",document.body.appendChild(e),e.value=this.copyValue,e.focus(),e.select(),document.execCommand("copy")&&document.execCommand("copy"),e.blur(),document.body.removeChild(e),Object(k["a"])({type:"success",message:"复制成功, 请妥善保存"})}},{key:"render",value:function(){var e=this,t=arguments[0];return t("van-overlay",{attrs:{show:this.show},on:{click:this.hideOverlay}},[t("div",{class:A.a.wrapper},[t("van-tabs",{class:A.a.block,nativeOn:{click:this.stopPropagation},model:{value:e.tabActive,callback:function(t){e.tabActive=t}}},[t("van-tab",{attrs:{title:"导入"}},[t("div",{class:A.a.wrapperContent},[t("van-field",{attrs:{label:"",placeholder:"请输入导入数据",autosize:!0,type:"textarea",rows:"1"},model:{value:e.text,callback:function(t){e.text=t}}})]),t("div",{class:A.a.btnGroup},[t("div",{class:A.a.btn,on:{click:this.importJson}},["确定"])])]),t("van-tab",{attrs:{title:"导出"}},[t("div",{class:A.a.wrapperContent},[t("van-field",{attrs:{value:this.copyValue,label:"",placeholder:"请输入导入数据",autosize:!0,type:"textarea",rows:"1",readonly:!0}})]),t("div",{class:A.a.btnGroup},[t("div",{class:A.a.btn,on:{click:this.copy}},["复制到剪贴板"])])])])])])}},{key:"copyValue",get:function(){var e=this.answers;return JSON.stringify(e)}}]),n}(g["Component"]);Object(b["a"])([Object(C["c"])()],O.prototype,"show",void 0),Object(b["a"])([j.State("answers")],O.prototype,"answers",void 0),Object(b["a"])([Object(C["b"])("import")],O.prototype,"importJson",null),Object(b["a"])([j.Action("importAnswers")],O.prototype,"importAnswers",void 0),O=Object(b["a"])([C["a"]],O);var Q=O,x=(n("99af"),n("96cf"),n("1da1")),B=n("b6bb"),J=n.n(B),E=(n("cb29"),n("25f0"),n("7271")),S=n.n(E),M={width:20,height:83,fill:"white"},_={width:13,height:47,fill:"black"},U=function(e){Object(w["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(p["a"])(this,a),e=t.apply(this,arguments),e.configKonva={width:14*M.width+10,height:M.height+5,offsetX:-5,offsetY:-2.5},e.keys=new Array(24).fill(0),e.hoverIndex=null,e.whiteKeyRect=M,e.blackKeyRect=_,e}return Object(f["a"])(a,[{key:"render",value:function(){var e=this,t=arguments[0];return t("div",{class:S.a.chordItemCpn},[t("konva-stage",{attrs:{config:this.configKonva},ref:"stage",style:14*this.whiteKeyRect.width+20},[t("konva-layer",[t("konva-group",[this.keys.map((function(n,a){return t("konva-rect",{on:{mouseenter:e.handleMouseEnter.bind(e,a),mouseleave:e.handleMouseLeave,click:e.handleClick.bind(e,a),tap:e.handleClick.bind(e,a)},attrs:{config:e.getKeyRect(a,n,e.hoverIndex)},key:a})}))])])]),t("div",{class:S.a.chordItem__result},[t("span",[t("img",{style:{visibility:this.resultRight?"visible":"hidden"},attrs:{width:"24",height:"24",src:n("5712"),alt:"right"}})])])])}},{key:"getKeyRect",value:function(e,t,n){var a=e%12,o=Math.floor(e/12),r={stroke:"black",strokeWidth:2,fill:"#ffffff"};return a<7?(Object.assign(r,M),r.x=a*M.width+7*o*M.width,r.y=0):(Object.assign(r,_),r.x=(a-7<2?a-7:a-6)*M.width+M.width-_.width/2+7*o*M.width,r.y=0),n===e&&(r.fill="gray"),0!==t&&(r.fill="#ffb8b8"),r}},{key:"handleClick",value:function(e){this.keys=this.keys.map((function(t,n){return e===n?0===t?1:0:t})),this.$emit("change",this.keys)}},{key:"handleMouseEnter",value:function(e){this.hoverIndex=e;var t=this.$refs.stage.getStage();t&&(t.container().style.cursor="pointer")}},{key:"handleMouseLeave",value:function(){this.hoverIndex=null;var e=this.$refs.stage.getStage();e&&(e.container().style.cursor="pointer")}},{key:"getKeys",value:function(){return this.keys}},{key:"showAnswer",value:function(){this.answer&&(this.keys=this.answer)}},{key:"clear",value:function(){this.keys=new Array(24).fill(0)}},{key:"resultRight",get:function(){return!!this.answer&&this.keys.toString()===this.answer.toString()}}]),a}(g["Component"]);Object(b["a"])([Object(C["c"])()],U.prototype,"answer",void 0),U=Object(b["a"])([C["a"]],U);var G=U,K=function(e){Object(w["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.editStatus=0,e.nameModel="",e}return Object(f["a"])(n,[{key:"addChord",value:function(){var e=this.$refs.chordCreate;return{name:this.nameModel,keys:e.getKeys()}}},{key:"delChord",value:function(){return this.name}},{key:"modifyChord",value:function(){var e=this.$refs.chord;return{name:this.nameModel,keys:e.getKeys()}}},{key:"showAnswerWatcher",value:function(e,t){e!==t&&this.answer&&(e?this.$refs.chord.showAnswer():this.$refs.chord.clear())}},{key:"initEdit",value:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.editStatus=1,this.nameModel=this.name,e.next=4,this.$nextTick();case 4:this.$refs.nameField.focus();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"initDel",value:function(){this.editStatus=2}},{key:"editDone",value:function(){1===this.editStatus?this.modifyChord():2===this.editStatus&&this.delChord(),this.editClear()}},{key:"editClear",value:function(){this.editStatus=0,this.nameModel=""}},{key:"render",value:function(){var e=this,t=arguments[0];return this.isCreateBox?t("div",{class:[J.a.chordCard,J.a.chordCardCreate]},[t("h3",{class:J.a.chordCreateTitle},["新建和弦"]),t("van-field",{class:J.a.chordNameField,attrs:{label:"",placeholder:"请输入和弦名(不可重复)","input-align":"center",clearable:!0},model:{value:e.nameModel,callback:function(t){e.nameModel=t}}}),t("div",{class:J.a.chordBox},[t(G,{ref:"chordCreate"})]),t("div",{class:J.a.chordBtnGroup},[t("div",{class:[J.a.chordBtnConfirm,J.a.chordBtn],on:{click:this.addChord}},[t("van-icon",{class:J.a.chordBtnIcon,attrs:{name:"success"}})])])]):t("div",{class:[J.a.chordCard,this.isEditing&&J.a.chordCardEditing]},[1===this.editStatus?t("van-field",{class:J.a.chordNameField,attrs:{label:"",placeholder:"请输入和弦名(不可重复)","input-align":"center",clearable:!0},ref:"nameField",model:{value:e.nameModel,callback:function(t){e.nameModel=t}}}):t("h3",{class:J.a.chordName},[this.name]),t("div",{class:J.a.chordBox},[t(G,{attrs:{answer:this.answer},ref:"chord"})]),this.isEditing&&(0===this.editStatus?t("div",{class:J.a.chordBtnGroup},[t("div",{class:"".concat(J.a.chordBtn," ").concat(J.a.chordBtnDel),on:{click:this.initDel}},[t("van-icon",{class:J.a.chordBtnIcon,attrs:{name:"delete"}})]),t("div",{class:"".concat(J.a.chordBtn," ").concat(J.a.chordBtnModify),on:{click:this.initEdit}},[t("van-icon",{class:J.a.chordBtnIcon,attrs:{name:"edit"}})])]):t("div",{class:J.a.chordBtnGroup},[t("div",{class:"".concat(J.a.chordBtn," ").concat(J.a.chordBtnCancel),on:{click:this.editClear}},[t("van-icon",{class:J.a.chordBtnIcon,attrs:{name:"cross"}})]),1===this.editStatus?t("div",{class:"".concat(J.a.chordBtn," ").concat(J.a.chordBtnConfirm),on:{click:this.editDone}},[t("van-icon",{class:J.a.chordBtnIcon,attrs:{name:"success"}})]):t("div",{class:"".concat(J.a.chordBtn," ").concat(J.a.chordBtnDel),on:{click:this.editDone}},[t("van-icon",{class:J.a.chordBtnIcon,attrs:{name:"delete"}})])]))])}}]),n}(g["Component"]);Object(b["a"])([Object(C["c"])({default:""})],K.prototype,"name",void 0),Object(b["a"])([Object(C["c"])({default:function(){return[]}})],K.prototype,"answer",void 0),Object(b["a"])([Object(C["c"])({default:!1})],K.prototype,"isCreateBox",void 0),Object(b["a"])([Object(C["c"])({default:!1})],K.prototype,"isEditing",void 0),Object(b["a"])([Object(C["c"])({default:!1})],K.prototype,"showAnswer",void 0),Object(b["a"])([Object(C["b"])("add")],K.prototype,"addChord",null),Object(b["a"])([Object(C["b"])("del")],K.prototype,"delChord",null),Object(b["a"])([Object(C["b"])("modify")],K.prototype,"modifyChord",null),Object(b["a"])([Object(C["d"])("showAnswer",{immediate:!1})],K.prototype,"showAnswerWatcher",null),K=Object(b["a"])([C["a"]],K);var R=K,Z=n("a21d"),T=n.n(Z),Y=function(e){Object(w["a"])(n,e);var t=Object(v["a"])(n);function n(){return Object(p["a"])(this,n),t.apply(this,arguments)}return Object(f["a"])(n,[{key:"replayClick",value:function(){return!0}},{key:"render",value:function(){var e=this,t=arguments[0];return t("van-popup",{attrs:{position:"bottom"},model:{value:e.__show,callback:function(t){e.__show=t}}},[t("div",{class:T.a.editSwitchArea},[t("div",{class:T.a.editSwitchItem},[t("van-icon",{class:T.a.switchItemIcon,attrs:{name:"replay"},nativeOn:{click:this.replayClick}})]),t("div",{class:T.a.editSwitchItem},[t("van-icon",{class:T.a.switchItemIcon,attrs:{name:"edit"}}),t("span",[": "]),t("van-switch",{attrs:{"inactive-color":"gray"},class:T.a.switchItemField,model:{value:e.__editing,callback:function(t){e.__editing=t}}})]),t("div",{class:T.a.editSwitchItem},[t("van-icon",{class:T.a.switchItemIcon,attrs:{name:"completed"}}),t("span",[": "]),t("van-switch",{attrs:{"inactive-color":"gray"},class:T.a.switchItemField,model:{value:e.__showAnswer,callback:function(t){e.__showAnswer=t}}})])])])}},{key:"__show",get:function(){return this.show},set:function(e){this.$emit("update:show",e)}},{key:"__editing",get:function(){return this.editing},set:function(e){this.$emit("update:editing",e)}},{key:"__showAnswer",get:function(){return this.showAnswer},set:function(e){this.$emit("update:showAnswer",e)}}]),n}(g["Component"]);Object(b["a"])([Object(C["c"])({default:!1})],Y.prototype,"editing",void 0),Object(b["a"])([Object(C["c"])({default:!1})],Y.prototype,"showAnswer",void 0),Object(b["a"])([Object(C["c"])({default:!1})],Y.prototype,"show",void 0),Object(b["a"])([Object(C["b"])("replayClick")],Y.prototype,"replayClick",null),Y=Object(b["a"])([C["a"]],Y);var D=Y,N=n("a4d9"),V=n.n(N),X=Object(y["a"])("answerStorage"),P="/chord/",L=function(e){Object(w["a"])(n,e);var t=Object(v["a"])(n);function n(){var e;return Object(p["a"])(this,n),e=t.apply(this,arguments),e.editing=!1,e.showAnswer=!1,e.showPopup=!1,e.showTab=!1,e.BASE_URL=P,e}return Object(f["a"])(n,[{key:"addChord",value:function(e){var t=e.name,n=e.keys;this.addAnswer([{name:t,map:[n]}])}},{key:"delChord",value:function(e){this.delAnswer(e)}},{key:"modifyChord",value:function(e,t){var n=t.name,a=t.keys;this.modifyAnswer([e,{name:n,keys:a}])}},{key:"render",value:function(){var e=this,t=arguments[0];return t("div",{class:V.a.home},[t("div",{class:V.a.chordCardArea},[t("div",{class:V.a.chordCardBox},[this.answers.map((function(n,a){return t(R,{attrs:{isEditing:e.editing,showAnswer:e.showAnswer,answer:n.map[0],name:n.name},key:n.name,on:{add:e.addChord,del:e.delChord.bind(e,a),modify:function(t){e.modifyChord.bind(e,a,t)}},class:V.a.chordCard,ref:"chord"})}))]),t("div",{class:V.a.chordCreateBox,directives:[{name:"show",value:this.editing}]},[t(R,{class:V.a.chordCard,attrs:{"is-create-box":!0},on:{add:this.addChord},key:this.answers.length+1})])]),t(Q,{attrs:{show:this.showTab},on:Object(u["a"])({},{"update:show":function(t){e.showTab=t}})}),t(D,m()([{attrs:{show:this.showPopup,editing:this.editing,showAnswer:this.showAnswer}},{on:{replayClick:function(){e.showPopup=!1,e.showTab=!0},"update:show":function(t){e.showPopup=t},"update:editing":function(t){e.editing=t},"update:showAnswer":function(t){e.showAnswer=t}}}])),t("div",{class:V.a.chordTabShow,on:{click:function(){e.showPopup=!e.showPopup}}},[t("van-icon",{attrs:{name:"ellipsis"},class:V.a.chordTabShowIcon})])])}}]),n}(g["Component"]);Object(b["a"])([X.State("answers")],L.prototype,"answers",void 0),Object(b["a"])([X.Action("addAnswer")],L.prototype,"addAnswer",void 0),Object(b["a"])([X.Action("delAnswer")],L.prototype,"delAnswer",void 0),Object(b["a"])([X.Action("modifyAnswer")],L.prototype,"modifyAnswer",void 0),L=Object(b["a"])([C["a"]],L);var H=L;a["default"].use(l["a"]);var F=[{path:"/",name:"Home",component:H}],W=new l["a"]({routes:F}),q=W,z=n("2f62"),$=(n("a623"),n("a630"),n("45fc"),n("a434"),n("6062"),n("3ca3"),n("3835")),ee=[{name:"C",map:[[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Cm",map:[[1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Cdim",map:[[1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Caug",map:[[1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"C7",map:[[1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Csus",map:[[1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Cadd2",map:[[1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"C6",map:[[1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Cm6",map:[[1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"CM7",map:[[1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Cm7",map:[[1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Cdim7",map:[[1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"Cm7b5",map:[[1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"C7sus",map:[[1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{name:"C9",map:[[0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0]]},{name:"CM9",map:[[0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]]},{name:"Cm9",map:[[0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]]},{name:"C7b9",map:[[0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0]]},{name:"C9b5",map:[[0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0]]},{name:"C9#5",map:[[0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0]]},{name:"C11",map:[[0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0]]}],te="chordAnswer",ne={10001:"和弦名称不能为空",10002:"和弦名称不能有重复",20001:"和弦琴键不能为空"},ae=window.localStorage;function oe(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a="0";return""===e.name?a="10001":this[t]&&this[t].name===e.name||!this.some((function(t){return t.name===e.name}))?e.map[0].every((function(e){return 0===e}))&&(a="20001"):a="10002",n?"0"===a||(Object(k["a"])({type:"warning",message:ne[a]}),!1):{errno:a}}function re(e){ae.setItem("chordAnswer",JSON.stringify(e))}function ie(e){var t=e.map((function(e){return e.name}));return t.length===Array.from(new Set(t)).length}function ce(){var e=JSON.parse(""+ae.getItem(te));return e&&e.length>0||(e=ee),e}var se={namespaced:!0,state:{answers:ce()},getters:{},mutations:{setAnswers:function(e,t){e.answers=t}},actions:{addAnswer:function(e,t){var n=e.state,a=Object($["a"])(t,2),o=a[0],r=a[1],i=void 0===r?n.answers.length:r;return!!oe.call(n.answers,o,i)&&(n.answers.splice(i,0,o),re(n.answers),Object(k["a"])({type:"success",message:"保存成功"}),!0)},delAnswer:function(e,t){var n=e.state;n.answers.splice(t,1),re(n.answers),Object(k["a"])({type:"success",message:"删除成功"})},modifyAnswer:function(e,t){var n=e.state,a=Object($["a"])(t,2),o=a[0],r=a[1],i=r.name,c=r.keys,s={name:i,map:[c]};if(oe.call(n.answers,s,o)){var d=n.answers[o];return d.name=i,d.map=[c],Object(k["a"])({type:"success",message:"修改成功"}),!0}return!1},loadAnswer:function(e,t){var n=e.state;return!!ie(t)&&(n.answers=t,re(n.answers),!0)},importAnswers:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,n.next=3,a("loadAnswer",t);case 3:if(!n.sent){n.next=7;break}Object(k["a"])({type:"success",message:"导入成功"}),n.next=8;break;case 7:Object(k["a"])({type:"warning",message:"和弦名称不能有重复"});case 8:case"end":return n.stop()}}),n)})))()},clearStorage:function(){ae.setItem(te,"[]")}}};a["default"].use(z["a"]);var de=new z["a"].Store({state:{isMobile:"ontouchstart"in window},mutations:{},actions:{},modules:{answerStorage:se}}),le=n("7591"),ue=n.n(le),he=(n("8e1f"),n("8a58"),n("e41f")),me=(n("bda7"),n("5e46")),pe=(n("da3c"),n("0b33")),fe=(n("f1dc"),n("6e47")),we=(n("b000"),n("1a23")),ve=(n("c3a6"),n("ad06")),be=(n("be7f"),n("565f"));a["default"].use(be["a"]),a["default"].use(ve["a"]),a["default"].use(we["a"]),a["default"].use(fe["a"]),a["default"].use(pe["a"]),a["default"].use(me["a"]),a["default"].use(he["a"]),a["default"].use(ue.a,{prefix:"Konva"}),a["default"].config.productionTip=!1,new a["default"]({router:q,store:de,render:function(e){return e(d)}}).$mount("#app")},d24f:function(e,t,n){e.exports={wrapper:"index-module_wrapper_3a-cd",wrapperContent:"index-module_wrapperContent_3AUpJ",block:"index-module_block_2Pina",btnGroup:"index-module_btn-group_1vnR1",btn:"index-module_btn_2J_ak"}}});
//# sourceMappingURL=app.59b78f01.js.map