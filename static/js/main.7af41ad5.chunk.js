(this["webpackJsonptest-components"]=this["webpackJsonptest-components"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){e.exports={column:"HW4_column__3JtlY",hw4:"HW4_hw4__2YicU",form__field:"HW4_form__field__3BoSp",buttonExample:"HW4_buttonExample__2I-dC",buttonDisabled:"HW4_buttonDisabled__SoUug"}},function(e,t,n){e.exports={msgLeft:"Message_msgLeft__2L5re",msgDesc:"Message_msgDesc__3WGSS",name:"Message_name__DBIyh"}},function(e,t,n){e.exports={container:"Header_container__NC_Oj",navLinks:"Header_navLinks__1T2Gt",point:"Header_point__2rDfA",navLink:"Header_navLink__2eS7h"}},,,,,,,,function(e,t,n){e.exports={dark:"HW12_dark__3DrdR","dark-text":"HW12_dark-text__ELqfq",red:"HW12_red__2Jd_0","red-text":"HW12_red-text__3ZOzz",some:"HW12_some__1WH3c","some-text":"HW12_some-text__G5lft"}},,,,,function(e,t,n){e.exports={errorInput:"SuperInputText_errorInput__wqSa7",error:"SuperInputText_error__23Uq9"}},function(e,t,n){e.exports={default:"SuperButton_default__FMGMt",red:"SuperButton_red__i4AT1"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3tLbu",spanClassName:"SuperCheckbox_spanClassName__mGJX0"}},function(e,t,n){e.exports={superEditableSpan:"SuperEditableSpan_superEditableSpan__33Vuk",superEditableInput:"SuperEditableSpan_superEditableInput__28sD0"}},function(e,t,n){e.exports={container:"SuperDoubleRange_container__2E4Zf",doubleRange:"SuperDoubleRange_doubleRange__1XENh",rangeSlider:"SuperDoubleRange_rangeSlider__2qg0D"}},,function(e,t,n){e.exports={App:"App_App__Dyc1P"}},function(e,t,n){e.exports={someClass:"Greeting_someClass__1W2i0",error:"Greeting_error___ETYo"}},function(e,t,n){e.exports={range:"SuperRange_range__3jmi2",doubleRangeValue:"SuperRange_doubleRangeValue__2pUyb",doubleRangeLine:"SuperRange_doubleRangeLine__2R_mq",runner:"SuperRange_runner__2LFw7",doubleRange:"SuperRange_doubleRange__1Arre"}},function(e,t,n){e.exports={container:"HW5_container__v36B9"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(19),s=n.n(r),i=(n(42),n(34)),o=n.n(i),j=n(11),u=n(15),l=n.n(u),d=n(0);var b=function(){return Object(d.jsx)("div",{className:l.a.container,children:Object(d.jsxs)("div",{className:l.a.navLinks,children:[Object(d.jsx)(j.b,{className:l.a.navLink,to:"/pre-junior",children:"pre-junior"}),Object(d.jsx)(j.b,{className:l.a.navLink,to:"/junior",children:"junior"}),Object(d.jsx)(j.b,{className:l.a.navLink,to:"/junior-plus",children:"junior+"}),Object(d.jsx)("div",{className:l.a.point})]})})},O=n(4),h=n(14),x=n.n(h);var m=function(e){return Object(d.jsx)("li",{className:x.a.msgLeft,children:Object(d.jsxs)("div",{className:x.a.msgLeftSub,children:[Object(d.jsx)("img",{src:e.avatar,alt:""}),Object(d.jsxs)("div",{className:x.a.msgDesc,children:[Object(d.jsx)("div",{className:x.a.name,children:e.name}),e.message,Object(d.jsx)("small",{children:e.time})]})]})})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",g="some text",v="22:00";var _=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("ul",{children:Object(d.jsx)(m,{avatar:p,name:f,message:g,time:v})}),Object(d.jsx)("hr",{})]})},C=n(3);var N=function(e){var t=e.affair,n=e.deleteAffairCallback;return Object(d.jsxs)("div",{children:[t.name," |",Object(d.jsxs)("span",{children:[t.priority," |"]}),Object(d.jsx)("button",{onClick:function(){n(t._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(d.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(a.useState)(S),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(C.a)(r,2),i=s[0],o=s[1],j=function(e,t){switch(t){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(k,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!=t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},E=n(22),w=n(35),H=n.n(w),A=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=void 0!==c,i=s?H.a.error:"";return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:n,className:i}),Object(d.jsx)("span",{children:c}),Object(d.jsx)("button",{onClick:a,disabled:s,children:"add"}),Object(d.jsx)("span",{children:r})]})},R=function(e){if(!/^[A-Za-z]+$/.test(e))return"name should contain only latin letters"},D=function(e){if(0===e.length)return"Field is required"},L=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(C.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(void 0),j=Object(C.a)(o,2),u=j[0],l=j[1],b=t.length;return Object(d.jsx)(A,{name:s,setNameCallback:function(e){i(e.currentTarget.value);var t,n,a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduce((function(t,n){return t||n(e)}),void 0)}}(R,(n=6,function(e){if(e.length<n)return"minimum length is ".concat(n)}),(t=15,function(e){if(e.length>t)return"maximum length is ".concat(t)}),D)(e.currentTarget.value);l(a)},addUser:function(){n(s),alert("Hello  ".concat(s,"!")),i("")},error:u,totalUsers:b})},T=n(51);var G=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(L,{users:n,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};c([].concat(Object(E.a)(n),[t]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},I=n(5),W=n(6),F=n(28),M=n.n(F),U=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],B=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,U),j="".concat(M.a.error," ").concat(i||""),u="".concat(r?M.a.errorInput:""," ").concat(s||"");return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:u},o)),r&&Object(d.jsx)("span",{className:j,children:r})]})},P=n(13),q=n.n(P),J=n(29),Y=n.n(J),z=["red","className"],X=function(e){var t=e.red,n=e.className,a=Object(W.a)(e,z),c="".concat(t?Y.a.red:Y.a.default," ").concat(n);return Object(d.jsx)("button",Object(I.a)({className:c},a))},Z=n(30),K=n.n(Z),V=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(W.a)(e,V),s="".concat(K.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(d.jsx)("span",{className:K.a.spanClassName,children:c})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n?"":"Field is required",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{className:q.a.hw4,children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:q.a.column,children:[Object(d.jsx)(B,{value:n,onChangeText:c,onEnter:s,error:r,className:q.a.form__field,placeholder:"name",name:"name"}),Object(d.jsx)(B,{className:q.a.form__field,placeholder:"login"}),Object(d.jsx)(X,{className:q.a.buttonExample,children:"default"}),Object(d.jsx)(X,{className:q.a.buttonExample,red:!0,onClick:s,children:"delete "}),Object(d.jsx)(X,{disabled:!0,className:q.a.buttonDisabled,children:"disabled"}),Object(d.jsx)($,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)($,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ee=["autoFocus","onBlur","onEnter","spanProps"],te=["children","onDoubleClick","className"],ne=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(W.a)(e,ee),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],u=c||{},l=u.children,b=u.onDoubleClick,O=u.className,h=Object(W.a)(u,te),x="".concat(O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(B,Object(I.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(d.jsx)("span",Object(I.a)(Object(I.a)({onDoubleClick:function(e){j(!0),b&&b(e)},className:x},h),{},{children:l||r.value}))})};function ae(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ce(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ae("test",{x:"A",y:1});ce("test",{x:"",y:0});var re=n(31),se=n.n(re);var ie=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsx)("div",{children:Object(d.jsx)(ne,{value:n,onChangeText:c,className:se.a.superEditableInput,spanProps:{children:n?void 0:"enter text...",className:se.a.superEditableSpan}})}),Object(d.jsx)(X,{onClick:function(){ae("editable-span-value",n)},children:"save"}),Object(d.jsx)(X,{onClick:function(){var e=ce("editable-span-value",n);c(e)},children:"restore"}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var oe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{}),Object(d.jsx)(y,{}),Object(d.jsx)(G,{}),Object(d.jsx)(Q,{}),Object(d.jsx)(ie,{})]})};var je=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ue=["options","onChange","onChangeOption"],le=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,c=Object(W.a)(e,ue),r=t?t.map((function(e,t){return Object(d.jsx)("option",{children:e},t)})):[];return Object(d.jsx)("select",Object(I.a)(Object(I.a)({onChange:function(e){n&&n(e),a&&a(e.currentTarget.value)}},c),{},{children:r}))},de=["type","name","options","value","onChange","onChangeOption","className"],be=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=e.className,i=(Object(W.a)(e,de),function(e){c&&c(e),r&&r(e.currentTarget.value)}),o=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:s,children:[Object(d.jsx)("input",{type:"radio",name:t,checked:e===a,value:e,onChange:i}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:o})},Oe=["x","y","z"];var he=function(){var e=Object(a.useState)(Oe[1]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsx)("div",{children:Object(d.jsx)(le,{options:Oe,value:n,onChangeOption:c})}),Object(d.jsx)("div",{children:Object(d.jsx)(be,{name:"radio",options:Oe,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},xe=function(e,t){switch(t.type){case"sort":var n="up"===t.payload?1:-1;return Object(E.a)(e).sort((function(e,t){return n*(e.age-t.age)}));case"check":return e.filter((function(e){return e.age>=18}));default:return e}},me=function(e){return{type:"sort",payload:e}},pe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];function fe(){var e=Object(a.useReducer)(xe,pe),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{children:[e.name," --- ",e.age]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",r,Object(d.jsx)("div",{children:Object(d.jsx)(X,{onClick:function(){return c(me("up"))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(X,{onClick:function(){return c(me("down"))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(X,{onClick:function(){return c({type:"check",payload:18})},children:"check 18"})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})}var ge=c.a.memo(fe);var ve=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(new Date),s=Object(C.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),u=Object(C.a)(j,2),l=u[0],b=u[1],O=function(){clearInterval(n)},h=i.getSeconds()<10?"0"+i.getSeconds():i.getSeconds(),x=i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes(),m=i.getHours()<10?"0"+i.getHours():i.getHours(),p="".concat(m,":").concat(x,":").concat(h),f="".concat(i.getDay(),":").concat(i.getMonth(),":").concat(i.getFullYear());return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:p}),l&&Object(d.jsx)("div",{children:f}),Object(d.jsx)(X,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(d.jsx)(X,{onClick:O,children:"stop"})]})};var _e,Ce=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(ve,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Ne=n(12);!function(e){e.CHANGE_LOADING="LOADING/CHANGE_LOADING"}(_e||(_e={}));var ke={isLoading:!1},Se=function(e){return{type:_e.CHANGE_LOADING,payload:{isLoading:e}}},ye=n.p+"static/media/Dual Ring-1s-200px.c76ff49a.svg";var Ee=function(){var e=Object(Ne.c)((function(e){return e.loading.isLoading})),t=Object(Ne.b)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",e?Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:ye})}):Object(d.jsx)("div",{children:Object(d.jsx)(X,{onClick:function(){t(Se(!0)),setTimeout((function(){t(Se(!1))}),3e3),console.log("loading...")},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},we=n(36),He=n.n(we),Ae=["type","onChange","onChangeRange","className"],Re=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(W.a)(e,Ae),r="".concat(He.a.range," ").concat(a||"");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(I.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r,value:c.value},c))})},De=n(32),Le=n.n(De),Te=function(e){var t=e.onChangeRange,n=e.value,a=e.min,c=e.max,r=e.step,s=e.disabled,i=function(e,n){"object"===typeof n&&t&&t(n)},o=function(e){var t=e.currentTarget.dataset.position;t&&n&&("left"===t?e.currentTarget.valueAsNumber<=n[1]&&i(0,[Number(e.currentTarget.value),n[1]]):e.currentTarget.valueAsNumber>=n[0]&&i(0,[n[0],Number(e.currentTarget.value)]))},j=c||100,u=a||0;return Object(d.jsxs)("div",{className:Le.a.doubleRange,children:[Object(d.jsx)("span",{children:u}),Object(d.jsxs)("div",{className:Le.a.rangeSlider,children:[Object(d.jsx)("input",{type:"range","data-position":"left",value:n?n[0]:0,min:u,max:j,onChange:o,step:r,disabled:s}),Object(d.jsx)("input",{type:"range","data-position":"right",value:n?n[1]:100,min:u,max:j,onChange:o,step:r,disabled:s})]}),Object(d.jsx)("span",{children:j})]})};var Ge,Ie=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(100),s=Object(C.a)(r,2),i=s[0],o=s[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 11",Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)(Re,{value:n,onChangeRange:c})]}),Object(d.jsx)("div",{children:Object(d.jsx)(Te,{value:[n,i],onChangeRange:function(e){var t=Object(C.a)(e,2),n=t[0],a=t[1];c(n),o(a)},min:1e3,max:1e5})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},We=c.a.memo((function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(he,{}),Object(d.jsx)(ge,{}),Object(d.jsx)(Ce,{}),Object(d.jsx)(Ee,{}),Object(d.jsx)(Ie,{})]})})),Fe=n(23),Me=n.n(Fe);!function(e){e.CHANGE_THEME="THEME_REDUCER/CHANGE_THEME"}(Ge||(Ge={}));var Ue={};Ue[Ge.CHANGE_THEME]=function(e,t){return Object(I.a)(Object(I.a)({},e),t.payload)};var Be=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0,c=t[a.type];return c?c(n,a):n}}({theme:"red"},Ue),Pe=["dark","red","some"];var qe=function(){var e=Object(Ne.c)((function(e){return e.theme.theme})),t=Object(Ne.b)();return Object(d.jsxs)("div",{className:Me.a[e],children:[Object(d.jsx)("hr",{}),Object(d.jsx)("span",{className:Me.a[e+"-text"],children:"homeworks 12"}),Object(d.jsx)(be,{options:Pe,onChangeOption:function(e){t(function(e){return{type:Ge.CHANGE_THEME,payload:{theme:e}}}(e))},value:e,className:Me.a[e+"-text"]}),Object(d.jsx)("hr",{})]})},Je=c.a.memo((function(){return Object(d.jsx)("div",{children:Object(d.jsx)(qe,{})})})),Ye="/pre-junior",ze="/junior",Xe="/junior-plus";var Ze=function(){return Object(d.jsx)(j.a,{children:Object(d.jsx)("div",{children:Object(d.jsxs)(O.d,{children:["\u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043c\u044b \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u043c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 '/' \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0441\u0440\u0430\u0437\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 PRE_JUNIOR exact \u043d\u0443\u0436\u0435\u043d \u0447\u0442\u043e\u0431 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u0441\u043e\u0432\u043f\u043e\u0434\u0435\u043d\u0438\u0435 (\u0447\u0442\u043e \u043f\u043e\u0441\u043b\u0435 '/' \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0431\u0443\u0434\u0435\u0442)",Object(d.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(O.a,{to:Ye})}}),Object(d.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(O.a,{to:ze})}}),Object(d.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(O.a,{to:Xe})}}),Object(d.jsx)(O.b,{path:Ye,render:function(){return Object(d.jsx)(oe,{})}}),Object(d.jsx)(O.b,{path:ze,render:function(){return Object(d.jsx)(We,{})}}),Object(d.jsx)(O.b,{path:Xe,render:function(){return Object(d.jsx)(Je,{})}}),"// add routes \u0443 \u044d\u0442\u043e\u0433\u043e \u0440\u043e\u0443\u0442\u0430 \u043d\u0435\u0442 \u043f\u0443\u0442\u0438, \u043e\u043d \u043e\u0442\u0440\u0438\u0441\u0443\u0435\u0442\u0441\u044f \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u0445\u043e\u0447\u0435\u0442 \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",Object(d.jsx)(O.b,{render:function(){return Object(d.jsx)(je,{})}})]})})})},Ke=n(37),Ve=n.n(Ke);var $e=function(){return Object(d.jsxs)("div",{className:Ve.a.container,children:[Object(d.jsx)(b,{}),Object(d.jsx)(Ze,{})]})};var Qe=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)($e,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var et=n(33),tt=Object(et.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING/CHANGE_LOADING":return Object(I.a)(Object(I.a)({},e),t.payload);default:return e}},theme:Be}),nt=Object(et.b)(tt),at=nt;window.store=nt,s.a.render(Object(d.jsx)(j.a,{children:Object(d.jsx)(Ne.a,{store:at,children:Object(d.jsx)(Qe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[49,1,2]]]);
//# sourceMappingURL=main.7af41ad5.chunk.js.map