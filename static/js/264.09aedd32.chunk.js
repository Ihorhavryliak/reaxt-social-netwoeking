"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[264],{6264:function(e,r,n){n.r(r),n.d(r,{default:function(){return P}});var s=n(2791),t=n(1413),i=n(8687),l=n(7689),a=n(9408),o=n(9529),u=n(9849),c=n(4942),d=n(9439),f="Paginator_paginator__raO36",m="Paginator_pageNumber__bptVQ",h="Paginator_selectedPage__UkHSv",g=n(1694),v=n.n(g),_=n(1020),x=n(184),j=function(e){for(var r=e.totalUserCount,n=e.pageSize,t=e.curruntPage,i=e.onPageChange,l=e.portionSize,a=void 0===l?10:l,o=Math.ceil(r/n),u=[],g=1;g<=o;g++)u.push(g);var j=Math.ceil(o/a),p=(0,s.useState)(1),b=(0,d.Z)(p,2),C=b[0],w=b[1],N=(C-1)*a+1,Z=C*a;return(0,x.jsxs)("div",{className:f,children:[C>1&&(0,x.jsx)(_.Z,{onClick:function(){return w(C-1)},children:"Previos"}),u.filter((function(e){return e>=N&&e<=Z})).map((function(e,r){return(0,x.jsx)("span",{className:v()((0,c.Z)({},h,t===e),m),onClick:function(r){i(e)},children:e},"-"+r)})),j>C&&(0,x.jsx)(_.Z,{onClick:function(){return w(C+1)},children:"Next"})]})},p={userPhoto:"users_userPhoto__J5qHX",buttonFollow:"users_buttonFollow__6VvmC",searchFormUser:"users_searchFormUser__6q09I",blockUsersList:"users_blockUsersList__exUl8",oneUserSearch:"users_oneUserSearch__+uQlO",status:"users_status__GVjom",nameUser:"users_nameUser__-3acb",errorFiledMessage:"users_errorFiledMessage__3J6zu",errorField:"users_errorField__Sm-Rq"},b=n(3307),C=n(1087),w=n(3243),N=function(e){var r=e.users,n=e.followingInProgres,s=e.unfollow,t=e.follow,l=e.createChat,a=(0,i.v9)(w.Kt);return(0,x.jsxs)("div",{className:p.oneUserSearch,children:[(0,x.jsx)(C.OL,{to:a===r.id?"/":"/profile/"+r.id,children:(0,x.jsx)("img",{src:null!==r.photos.small?r.photos.small:b,alt:"got",className:p.userPhoto})}),(0,x.jsx)("div",{className:p.nameUser,children:(0,x.jsx)(C.OL,{to:a===r.id?"/":"/profile/"+r.id,children:r.name})}),(0,x.jsxs)("div",{className:p.status,children:[r.status," "]}),a!==r.id?(0,x.jsxs)("div",{className:p.sendMessage,children:[r.followed?(0,x.jsx)(_.Z,{className:p.buttonFollow,disabled:n.some((function(e){return e===r.id})),onClick:function(){s(r.id)},children:"Unfollow"}):(0,x.jsx)(_.Z,{className:p.buttonFollow,disabled:n.some((function(e){return e===r.id})),onClick:function(){t(r.id)},children:"Follow"}),"    ",(0,x.jsx)(_.Z,{onClick:function(){return l(r.id)},children:"Send Message"})]}):""]})},Z=n(5705),F=function(e){return{}},U=s.memo((function(e){var r=(0,i.v9)(o.sw);return(0,x.jsx)("div",{children:(0,x.jsx)(Z.J9,{enableReinitialize:!0,initialValues:{term:r.term,friend:String(r.friend)},validate:F,onSubmit:function(r,n){var s=n.setSubmitting,t={term:r.term,friend:"null"===r.friend?null:"true"===r.friend};e.onFilterChange(t),s(!1)},children:function(e){var r=e.isSubmitting,n=e.errors;return(0,x.jsxs)(Z.l0,{children:[(0,x.jsxs)("div",{className:p.errorField,children:[(0,x.jsx)(Z.gN,{type:"text",placeholder:"Enter a user name",className:p.searchFormUser,name:"term"}),n.term?(0,x.jsx)("span",{className:p.errorFiledMessage,children:n.term}):null]}),(0,x.jsxs)(Z.gN,{className:p.searchFormUser,name:"friend",as:"select",children:[(0,x.jsx)("option",{value:"null",children:"All"}),(0,x.jsx)("option",{value:"true",children:"Only followed"}),(0,x.jsx)("option",{value:"false",children:"Only unfollowed"})]}),(0,x.jsx)("button",{className:"ant-btn ant-btn-default users_buttonFollow__6VvmC",disabled:r,children:"Search"})]})}})})})),k=function(e){var r=(0,i.v9)(o.YI),c=(0,i.v9)(o.lr),d=(0,i.v9)(o.PR),f=(0,i.v9)(o.b7),m=(0,i.v9)(o.sw),h=(0,i.v9)(o.xT),g=(0,i.I0)();(0,s.useEffect)((function(){g((0,u.CZ)(d,f,m))}),[]);var v=(0,l.TH)();(0,s.useEffect)((function(){var e=n(4245).parse(v.search),r=m,s=d;switch(e.page&&(s=+e.page),e.term&&(r=(0,t.Z)((0,t.Z)({},r),{},{term:e.term})),e.friend){case"null":r=(0,t.Z)((0,t.Z)({},r),{},{friend:null});break;case"true":r=(0,t.Z)((0,t.Z)({},r),{},{friend:!0});break;default:r=(0,t.Z)((0,t.Z)({},r),{},{friend:!1})}g((0,u.CZ)(s,f,r))}),[]);var _=(0,l.s0)();(0,s.useEffect)((function(){var e={};m.term&&(e.term=m.term),null!==m.friend&&(e.friend=String(m.friend)),1!==d&&(e.page=String(d));var r=n(4245).stringify(e);_("/users?"+r)}),[m,d,f]);var b=function(e){g((0,u.jE)(e))},C=function(e){g((0,u.ke)(e))},w=function(e){return g((0,a.OE)(e)),_("/dialogs/".concat(e,"/"))};return(0,x.jsxs)("div",{children:[(0,x.jsx)(U,{onFilterChange:function(e){g((0,u.CZ)(1,f,e))}}),(0,x.jsxs)("div",{className:p.blockUsersList,children:[r.map((function(e){return(0,x.jsx)(N,{users:e,followingInProgres:h,unfollow:b,follow:C,createChat:w},e.id)})),0===r.length&&"No users found"]}),(0,x.jsx)(j,{curruntPage:d,pageSize:f,onPageChange:function(e){g((0,u.CZ)(e,f,m))},totalUserCount:c})]})},S=n(6279),P=function(e){document.title=e.pageTitle;var r=(0,i.v9)(o.Ih);return(0,x.jsxs)(x.Fragment,{children:[r?(0,x.jsx)(S.Z,{}):null,(0,x.jsx)("h2",{children:e.pageTitle}),(0,x.jsx)(k,{})]})}}}]);
//# sourceMappingURL=264.09aedd32.chunk.js.map