(this["webpackJsonpwhatsapp-frontend"]=this["webpackJsonpwhatsapp-frontend"]||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(18),l=t.n(r),s=(t(70),t(60)),o=t(14),m=(t(71),t(72),t(54)),i=t.n(m),u=t(53),p=t.n(u),d=t(55),h=t.n(d),E=t(126),b=t(120),f=t(121);t(73);var v=function(){return c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(E.a,null),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",null,"Room Name"),c.a.createElement("p",null,"last message sent")))},g=Object(n.createContext)(),_=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},w=function(){return Object(n.useContext)(g)};var N=function(){var e=w(),a=Object(o.a)(e,2),t=a[0].user;return a[1],c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(E.a,{src:t.photoURL}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(b.a,null,c.a.createElement(p.a,null)),c.a.createElement(b.a,null,c.a.createElement(i.a,null)),c.a.createElement(b.a,null,c.a.createElement(h.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(f.a,null),c.a.createElement("input",{placeholder:"Search or start new chat",type:"text"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(v,null),c.a.createElement(v,null),c.a.createElement(v,null)))},j=t(37),y=t.n(j),O=t(56),A=(t(80),t(122)),k=t(123),I=t(124),S=t(58),R=t.n(S),C=t(57),U=t.n(C).a.create({baseURL:"http://https://whatspp-clone-backend.herokuapp.com/"});var x=function(e){var a=e.messages,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],s=r[1],m=w(),i=Object(o.a)(m,2),u=i[0].user;i[1],console.log(u);var p=function(){var e=Object(O.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,U.post("/messages/new",{message:l,name:u.displayName,timestamp:new Intl.DateTimeFormat("en-US",{hour:"2-digit",minute:"2-digit"}).format(Date.now()),recieved:!1});case 3:s("");case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(E.a,{src:u.photoURL}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",null,"Room name"),c.a.createElement("p",null,"last seen at...")),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(b.a,null,c.a.createElement(f.a,null)),c.a.createElement(b.a,null,c.a.createElement(A.a,null)),c.a.createElement(b.a,null,c.a.createElement(k.a,null)))),c.a.createElement("div",{className:"chat__body"},a.map((function(e){return c.a.createElement("p",{className:"chat__message ".concat(e.name===u.displayName&&"chat__reciever")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},e.timestamp))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(I.a,null),c.a.createElement("form",null,c.a.createElement("input",{value:l,onChange:function(e){return s(e.target.value)},placeholder:"type a message",type:"text"}),c.a.createElement("button",{onClick:p,type:"submit"},"send a Message")),c.a.createElement(R.a,null)))},B=t(59),D=t.n(B),F=(t(97),t(125)),L=t(33),M=t.n(L),W=(M.a.initializeApp({apiKey:"AIzaSyDBaXZ89OdgMO8HMkoEyBqK1YlIWzGh45c",authDomain:"whatsapp-clone-47661.firebaseapp.com",databaseURL:"https://whatsapp-clone-47661.firebaseio.com",projectId:"whatsapp-clone-47661",storageBucket:"whatsapp-clone-47661.appspot.com",messagingSenderId:"222392720285",appId:"1:222392720285:web:dd01178e169bfef9542d74"}),M.a.auth()),z=new M.a.auth.GoogleAuthProvider,K=t(38),P="SET_USER",G=function(e,a){switch(console.log(a),a.type){case P:return Object(K.a)(Object(K.a)({},e),{},{user:a.user});default:return e}};var J=function(){var e=w(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__logo"},c.a.createElement("img",{src:"https://1.bp.blogspot.com/-9QI816UQv4U/VdnyUjC-AKI/AAAAAAAAFAk/oZ_9Fp8uFbs/s1600/whatsup-logo1.png",alt:""})),c.a.createElement(F.a,{type:"submit",onClick:function(){W.signInWithPopup(z).then((function(e){t({type:P,user:e.user}),console.log(e)})).catch((function(e){return alert(e.message)}))}},"Sign In"))};var Q=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=w(),m=Object(o.a)(l,2),i=m[0].user;return m[1],Object(n.useEffect)((function(){U.get("/messages/sync").then((function(e){r(e.data)}))}),[]),console.log(t),Object(n.useEffect)((function(){var e=new D.a("d178400321556bd83beb",{cluster:"mt1"}).subscribe("messages");return e.bind("inserted",(function(e){r([].concat(Object(s.a)(t),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[t]),c.a.createElement("div",{className:"app"},i?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app__body"},c.a.createElement(N,null),c.a.createElement(x,{messages:t}))):c.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{user:null},reducer:G},c.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,a,t){e.exports=t(108)},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},80:function(e,a,t){},97:function(e,a,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.acc26981.chunk.js.map