(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{36:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(28),r=s.n(n),i=s(2),l=s(5),o=(s(36),s(18)),j=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},u=s(0),b={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},p=Object(a.createContext)(b),d=function(e){var t=e.children,s=Object(a.useReducer)(j,b),c=Object(i.a)(s,2),n=c[0],r=c[1];return Object(a.useEffect)((function(){localStorage.setItem("user",JSON.stringify(n.user))}),[n.user]),Object(u.jsx)(p.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},m=function(){var e=Object(a.useContext)(p),t=e.user,s=e.dispatch,c=Object(a.useState)(!1),n=Object(i.a)(c,2),r=n[0],o=n[1];return Object(u.jsxs)("div",{className:"top",children:[Object(u.jsxs)("div",{className:"topLeft",children:[Object(u.jsx)("i",{className:"top-icon fab fa-linkedin"}),Object(u.jsx)("i",{className:"top-icon fab fa-instagram"}),Object(u.jsx)("i",{className:"top-icon fab fa-github"}),Object(u.jsx)("i",{className:"top-icon fab fa-youtube"})]}),Object(u.jsx)("div",{className:r?"mobTop":"topCenter",children:Object(u.jsxs)("ul",{className:"toplist",onClick:function(){return o(!1)},children:[Object(u.jsx)("li",{className:"topListItem home",children:Object(u.jsx)(l.b,{className:r?"mobNav":"link",to:"/",children:"HOME "})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(l.b,{className:r?"mobNav":"link",to:"/",children:"ABOUT"})}),Object(u.jsx)("li",{className:"topListItem",children:Object(u.jsx)(l.b,{className:r?"mobNav":"link",to:"/write",children:"WRITE"})}),Object(u.jsx)("li",{className:r?"mobNav":"topListItem link",onClick:function(){s({type:"LOGOUT"})},children:t&&"LOGOUT"})]})}),Object(u.jsxs)("div",{className:r?"mobTop":"topRight",children:[t?Object(u.jsx)(l.b,{to:"/settings",children:Object(u.jsx)("img",{src:"https://sathyanarayan.herokuapp.com/images/"+t.profilePic,className:"topImage",alt:"profile pic"})}):Object(u.jsxs)("ul",{className:"toplist",children:[Object(u.jsx)("li",{className:"topListItem log",children:Object(u.jsx)(l.b,{className:r?"mobNav":"link",to:"/login",children:"LOGIN"})}),Object(u.jsx)("li",{className:"topListItem reg",children:Object(u.jsx)(l.b,{className:r?"mobNav":"link",to:"/register",children:"REGISTER"})}),Object(u.jsx)("li",{className:"topListItem",style:{color:"#d4af59"},children:"Sathya's Blog"})]}),Object(u.jsx)("i",{className:"topSearch fas fa-search"})]}),Object(u.jsx)("button",{className:"mobile-menu-icon",onClick:function(){return o(!r)},children:r?Object(u.jsx)("i",{className:"fas fa-times"}):Object(u.jsx)("i",{className:"fas fa-bars"})})]})},O=s(4),h=s.n(O),x=s(8),f=(s(44),function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsxs)("div",{className:"headerTitles",children:[Object(u.jsx)("span",{className:"headerTitleSm",children:" Sathya's"}),Object(u.jsx)("span",{className:"headerTitleLg",children:"Blog"})]}),Object(u.jsx)("img",{className:"headerImage",src:"./images/headerImg.jpg",alt:"headerImg"}),Object(u.jsx)("img",{className:"headerImage2",src:"https://images.unsplash.com/photo-1510442650500-93217e634e4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80",alt:""})]})}),g=(s(45),function(e){var t=e.post;return Object(u.jsxs)("div",{className:"BlogPosts",children:[t.photo&&Object(u.jsx)("img",{className:"postImg",src:"https://sathyanarayan.herokuapp.com/images/"+t.photo,alt:""}),Object(u.jsxs)("div",{className:"postInfo",children:[Object(u.jsx)("div",{className:"postCats",children:t.categories.map((function(e){return Object(u.jsx)("span",{className:"postCat",children:Object(u.jsx)(l.b,{to:"/?cat=".concat(e),className:"link cat",children:e})})}))}),Object(u.jsx)(l.b,{to:"/posts/".concat(t._id),className:"mobTitle link",children:Object(u.jsx)("span",{className:"postTitle",children:t.title})}),Object(u.jsx)("hr",{}),Object(u.jsx)("span",{className:"postdate",children:new Date(t.createdAt).toDateString()})]}),Object(u.jsx)("p",{className:"postDec",children:t.desc})]})}),N=(s(46),function(e){var t=e.posts;return Object(u.jsx)("div",{className:"posts",children:t.map((function(e){return Object(u.jsx)(g,{post:e})}))})}),v=s(7),y=s.n(v),w=(s(65),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("./categories");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"ABOUT ME"}),Object(u.jsx)("img",{className:"sideBarImg",src:"./images/sa.jpg",alt:"sidebar pro"}),Object(u.jsx)("p",{className:"aboutMe",children:"My name is P Sathya Narayan. I created this website to share my perspectives on technology and philosophy"})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"CATEGORIES"}),Object(u.jsx)("ul",{className:"sideBarList",children:s.map((function(e){return Object(u.jsxs)(l.b,{to:"/?cat=".concat(e.name),className:"link",children:[" ",Object(u.jsx)("li",{className:"sideBarListItems",children:e.name})]})}))})]}),Object(u.jsxs)("div",{className:"sidebarItem",children:[Object(u.jsx)("span",{className:"sidebarTitle",children:"FOLLOW US"}),Object(u.jsxs)("div",{className:"sideBarSocial",children:[Object(u.jsx)("i",{className:"sideBar-icon fab fa-linkedin"}),Object(u.jsx)("i",{className:"sideBar-icon fab fa-instagram"}),Object(u.jsx)("i",{className:"sideBar-icon fab fa-github"}),Object(u.jsx)("i",{className:"sideBar-icon fab fa-youtube"})]})]})]})}),S=(s(66),s(3));function I(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(S.f)().search;return Object(a.useEffect)((function(){(function(){var e=Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/posts"+n);case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)("div",{className:"Home",children:[Object(u.jsx)(N,{posts:s}),Object(u.jsx)(w,{})]})]})}s(67);var k=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useState)(!1),c=Object(i.a)(s,2),n=c[0],r=c[1],o=Object(a.useContext)(p),j=o.dispatch,b=o.isFetching,d=function(){var s=Object(x.a)(h.a.mark((function s(a){var c;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),j({type:"LOGIN_START"}),s.prev=2,s.next=5,y.a.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:c=s.sent,j({type:"LOGIN_SUCCESS",payload:c.data}),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(2),j({type:"LOGIN_FAILURE"}),r(!0);case 13:case"end":return s.stop()}}),s,null,[[2,9]])})));return function(e){return s.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("span",{className:"loginTitle",children:"Login"}),Object(u.jsxs)("form",{className:"loginForm",onSubmit:d,children:[Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",className:"loginInput",placeholder:"Enter your email...",ref:e}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"loginInput",placeholder:"Enter your password...",ref:t}),Object(u.jsx)("button",{className:"loginBtn",type:"submit",disabled:b,children:"Login"}),n&&Object(u.jsx)("span",{style:{color:"red",textAlign:"center",marginTop:"20px"},children:"Please login correctly"})]}),Object(u.jsx)("button",{className:"registerBtn",children:Object(u.jsx)(l.b,{className:"link",to:"/register",children:"Register"})})]})},T=(s(68),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),o=r[0],j=r[1],b=Object(a.useState)(""),p=Object(i.a)(b,2),d=p[0],m=p[1],O=Object(a.useState)("false"),f=Object(i.a)(O,2),g=f[0],N=f[1],v=function(){var e=Object(x.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!1),e.prev=2,e.next=5,y.a.post("/auth/register",{username:s,email:d,password:o});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),N(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"register",children:[Object(u.jsx)("span",{className:"registerTitle",children:"Register"}),Object(u.jsxs)("form",{className:"registerForm",onSubmit:v,children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",className:"registerInput",placeholder:"Enter your username...",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"email",className:"registerInput",placeholder:"Enter your email...",onChange:function(e){return m(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"registerInput",placeholder:"Enter your password...",onChange:function(e){return j(e.target.value)}}),Object(u.jsx)("button",{className:"RegisterBtn",type:"submit",children:"Register "}),g&&Object(u.jsx)("span",{style:{color:"red",marginTop:"10px"},children:"Something went wrong"})]}),Object(u.jsx)("button",{className:"LoginBtn",children:Object(u.jsx)(l.b,{className:"link",to:"/login",children:"Login"})})]})}),C=(s(69),function(){var e=Object(a.useContext)(p),t=e.user,s=e.dispatch,c=Object(a.useState)(null),n=Object(i.a)(c,2),r=n[0],l=n[1],o=Object(a.useState)(""),j=Object(i.a)(o,2),b=j[0],d=j[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),f=O[0],g=O[1],N=Object(a.useState)(""),v=Object(i.a)(N,2),S=v[0],I=v[1],k=Object(a.useState)(!1),T=Object(i.a)(k,2),C=T[0],L=T[1],P=function(){var e=Object(x.a)(h.a.mark((function e(a){var c,n,i,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s({type:"UPDATE_START"}),c={userId:t._id,username:b,email:f,password:S},!r){e.next=16;break}return n=new FormData,i=Date.now()+r.name,n.append("name",i),n.append("file",r),c.profilePic=i,e.prev=9,e.next=12,y.a.post("/upload",n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,y.a.put("/users/"+t._id,c);case 19:l=e.sent,L(!0),s({type:"UPDATE_SUCCESS",payload:l.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),s({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"settings",children:[Object(u.jsxs)("div",{className:"settingsWrapper",children:[Object(u.jsxs)("div",{className:"settingsTitle",children:[Object(u.jsx)("span",{className:"settingsUpdateTitle",children:"Update your Account"}),Object(u.jsx)("span",{className:"settingsDeleteTitle",children:"Delete your Account"})]}),Object(u.jsxs)("form",{className:"settingsForm",onSubmit:P,children:[Object(u.jsx)("label",{children:"Profile Picture"}),Object(u.jsxs)("div",{className:"settingsPP",children:[Object(u.jsx)("img",{src:r?URL.createObjectURL(r):"https://sathyanarayan.herokuapp.com/images/"+t.profilePic,alt:"pro"}),Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"settingsPPIcon fas fa-user-circle"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return l(e.target.files[0])}})]}),Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",className:"usrname",placeholder:t.username,onChange:function(e){return d(e.target.value)}}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"email",className:"email",placeholder:t.email,onChange:function(e){return g(e.target.value)}}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"password",onChange:function(e){return I(e.target.value)}}),Object(u.jsx)("button",{className:"settingSubmit",type:"submit",children:"Update"}),C&&Object(u.jsx)("span",{style:{color:"green",textAlign:"center",marginTop:"20px"},children:"Profile has been updated..."})]})]}),Object(u.jsx)(w,{})]})}),L=(s(70),s(71),s(31)),P=function(){var e=Object(S.f)().pathname.split("/")[2],t=Object(a.useState)({}),s=Object(i.a)(t,2),c=s[0],n=s[1],r=Object(a.useContext)(p).user,o=Object(a.useState)(""),j=Object(i.a)(o,2),b=j[0],d=j[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),f=O[0],g=O[1],N=Object(a.useState)(!1),v=Object(i.a)(N,2),w=v[0],I=v[1];Object(a.useEffect)((function(){(function(){var t=Object(x.a)(h.a.mark((function t(){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("/posts/"+e);case 2:s=t.sent,n(s.data),d(s.data.title),g(s.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var k=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.delete("/posts/".concat(c._id),{data:{username:r.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.put("/posts/".concat(c._id),{username:r.username,title:b,desc:f});case 3:window.location.reload(),I(!1),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"singlepost",children:Object(u.jsxs)("div",{className:"singlePostWrapper",children:[c.photo&&Object(u.jsx)("img",{src:"https://sathyanarayan.herokuapp.com/images/"+c.photo,alt:"",className:"wrapperImg"}),w?Object(u.jsx)("input",{type:"text",autoFocus:!0,value:b,className:"singlePostTitleInput",onChange:function(e){d(e.target.value)}}):Object(u.jsxs)("h1",{className:"singlePostTitle",children:[c.title,c.username===(null===r||void 0===r?void 0:r.username)&&Object(u.jsxs)("div",{className:"singlePostEdit",children:[Object(u.jsx)("i",{className:"singlePostIcon far fa-edit",onClick:function(){return I(!0)}},"item1"),Object(u.jsx)("i",{className:"singlePostIcon far fa-trash-alt",onClick:k},"item2")]})]}),Object(u.jsxs)("div",{className:"singlePostInfo",children:[Object(u.jsxs)("span",{className:"singlePostAuthor",children:["Author: ",Object(u.jsx)(l.b,{to:"/?user=".concat(c.username),className:" mobAuth link",children:Object(u.jsx)("b",{children:c.username})})," "]}),Object(u.jsx)("span",{className:"singlePostDate",children:new Date(c.createdAt).toDateString()})]}),w?Object(u.jsx)("textarea",{className:"singlePostDescInput",value:f,onChange:function(e){return g(e.target.value)}}):Object(u.jsx)("p",{className:"singlePostDesc",children:Object(u.jsx)(L.a,{options:{forceBlock:!0},children:f})}),w&&Object(u.jsx)("button",{className:"singlePostButton",onClick:T,children:"Update"})]})})},E=function(){return Object(u.jsxs)("div",{className:"single",children:[Object(u.jsx)(P,{}),Object(u.jsx)(w,{})]})},U=(s(72),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),r=Object(i.a)(n,2),l=r[0],o=r[1],j=Object(a.useState)(null),b=Object(i.a)(j,2),d=b[0],m=b[1],O=Object(a.useState)([]),f=Object(i.a)(O,2),g=f[0],N=(f[1],Object(a.useContext)(p).user),v=function(){var e=Object(x.a)(h.a.mark((function e(t){var a,c,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a={username:N.username,title:s,desc:l,cat:g},!d){e.next=15;break}return c=new FormData,n=Date.now()+d.name,c.append("name",n),c.append("file",d),a.photo=n,e.prev=8,e.next=11,y.a.post("/upload",c);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,y.a.post("/posts",a);case 18:r=e.sent,window.location.replace("/posts/"+r.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"write",children:[d&&Object(u.jsx)("img",{src:URL.createObjectURL(d),className:"fileImg",alt:"",srcset:""}),Object(u.jsxs)("form",{className:"writeForm",onSubmit:v,children:[Object(u.jsxs)("div",{className:"writeFromGroup",children:[Object(u.jsx)("label",{htmlFor:"fileInput",children:Object(u.jsx)("i",{className:"addIcon fas fa-plus"})}),Object(u.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:function(e){return m(e.target.files[0])}}),Object(u.jsx)("input",{type:"text",placeholder:"Title",className:"writeInput",autoFocus:!0,onChange:function(e){return c(e.target.value)}})]}),Object(u.jsxs)("div",{className:"writeFromGroup",children:[Object(u.jsx)("textarea",{placeholder:"Tell your story...",type:"text",className:"writeInput writeText",onChange:function(e){return o(e.target.value)}}),Object(u.jsx)("textarea",{placeholder:"Category"})]}),Object(u.jsx)("button",{className:"writeSubmit",type:"submit",children:"Publish"})]})]})});var F=function(){var e=Object(a.useContext)(p).user;return Object(u.jsxs)(l.a,{children:[Object(u.jsx)(m,{}),Object(u.jsxs)(S.c,{children:[Object(u.jsx)(S.a,{exact:!0,path:"/",children:Object(u.jsx)(I,{})}),Object(u.jsx)(S.a,{path:"/Register",children:e?Object(u.jsx)(I,{}):Object(u.jsx)(T,{})}),Object(u.jsx)(S.a,{path:"/Login",children:e?Object(u.jsx)(I,{}):Object(u.jsx)(k,{})}),Object(u.jsx)(S.a,{path:"/Write",children:e?Object(u.jsx)(U,{}):Object(u.jsx)(k,{})}),Object(u.jsx)(S.a,{path:"/Settings",children:e?Object(u.jsx)(C,{}):Object(u.jsx)(k,{})}),Object(u.jsx)(S.a,{path:"/post:postId",children:Object(u.jsx)(E,{})})]})]})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d,{children:Object(u.jsx)(F,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.c8b5c542.chunk.js.map