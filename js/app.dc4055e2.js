(function(t){function e(e){for(var o,u,c=e[0],s=e[1],a=e[2],d=0,f=[];d<c.length;d++)u=c[d],r[u]&&f.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("el-card",{staticClass:"container"},[n("el-input",{staticClass:"input",nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}},model:{value:t.text,callback:function(e){t.text="string"===typeof e?e.trim():e},expression:"text"}}),n("ul",{staticClass:"todo_list"},[n("transition-group",{attrs:{name:"fade"}},t._l(t.todoListComputed,function(e){return n("li",{key:e.id,class:[{delete_todo:e.isComplete},"todo"],on:{click:function(n){t.todoCompleteChange(e.id)}}},[t._v("\n          "+t._s(e.text)+"\n          "),n("el-button",{staticClass:"delete_btn",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(n){n.stopPropagation(),t.deleteTodo(e.id)}}})],1)}))],1),n("el-button",{on:{click:function(e){t.currentStatus="ALL"}}},[t._v(" 全部 "+t._s(t.todoList.length))]),n("el-button",{on:{click:function(e){t.currentStatus="COMPLETE"}}},[t._v(" 已完成 "+t._s(t.todoCompletedNum))]),n("el-button",{on:{click:function(e){t.currentStatus="TODO"}}},[t._v(" 未完成 "+t._s(t.todoList.length-t.todoCompletedNum))])],1)],1)},i=[],u=n("c93e"),c=n("8afe"),s=(n("96cf"),n("3040")),a=(n("c5f6"),[{id:4,text:"学习 Vue",isComplete:!1},{id:8,text:"今天天气不错",isComplete:!1}]),l="ALL",d="COMPLETE",f="TODO",p={name:"app",computed:{todoListComputed:function(){var t=this.currentStatus,e=this.todoList;return t===l?e:t===d?e.filter(function(t){return t.isComplete}):t===f?e.filter(function(t){return!t.isComplete}):void 0},todoCompletedNum:function(){return this.todoList.reduce(function(t,e){return t+Number(e.isComplete)},0)}},data:function(){return{text:"",todoList:[{id:1,text:"明天 8 点起床跑步",isComplete:!1},{id:3,text:"今晚上吃蔬菜",isComplete:!0}],currentStatus:l}},mounted:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this._fetchData().then(function(t){e.todoList=Object(c["a"])(e.todoList).concat(Object(c["a"])(t))}).catch(function(){e.$message.error("获取数据失败")});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{_fetchData:function(){return new Promise(function(t){return setTimeout(function(){return t(a)},1500)})},addTodo:function(){var t=this.text;if(!t)return this.$message.warning("请输入内容");var e=this.todoList.reduce(function(t,e){return Math.max(t,e.id)},-1)+1,n={id:e,text:t,isComplete:!1};this.todoList.push(n),this.text=""},deleteTodo:function(t){this.todoList=this.todoList.filter(function(e){return e.id!==t})},todoCompleteChange:function(t){this.todoList=this.todoList.map(function(e){return Object(u["a"])({},e,{isComplete:e.id===t?!e.isComplete:e.isComplete})})}}},m=p,h=(n("034f"),n("2877")),v=Object(h["a"])(m,r,i,!1,null,null,null);v.options.__file="App.vue";var b=v.exports,C=n("5c96"),_=n.n(C);n("0fae");o["default"].use(_.a),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(b)}}).$mount("#app")},c21b:function(t,e,n){}});
//# sourceMappingURL=app.dc4055e2.js.map