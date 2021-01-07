(this.webpackJsonpreduxapi=this.webpackJsonpreduxapi||[]).push([[0],{80:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),a=n.n(r),s=n(25),o=n.n(s),l=(n(51),n(17)),i=n(14),u=n(44),d=n(45),b=n(9),j=n.n(b),p=n(7),h="SET_LOADING",x="GET_USERS",O="GET_USERS_REQUESTED",m="ADD_USER_REQUESTED",f="ADD_USER",v="GET_USER_REQUESTED",g="GET_USER",y="DELETE_USER_REQUESTED",k=n(24),E=n.n(k),N=j.a.mark(T),C=j.a.mark(_),S=j.a.mark(A),w=j.a.mark(G),U=j.a.mark(L),D="https://reduxblog.herokuapp.com/api",R="?key=cseckler1234";function T(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(p.b)({type:h});case 2:return e="".concat(D,"/posts").concat(R),n.next=5,Object(p.a)(E.a.get,e);case 5:return t=n.sent,n.next=8,Object(p.b)({type:x,playload:t.data});case 8:case"end":return n.stop()}}),N)}function _(e){var t,n,c;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.id,r.prev=1,r.next=4,Object(p.b)({type:h});case 4:return n="".concat(D,"/posts/").concat(t).concat(R),r.next=7,Object(p.a)(E.a.get,n);case 7:return c=r.sent,r.next=10,Object(p.b)({type:g,playload:c.data});case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(1),console.log("Request failed! Could not fetch post.");case 15:case"end":return r.stop()}}),C,null,[[1,12]])}function A(e){var t,n,c,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.id,n=e.callback,a.prev=1,a.next=4,Object(p.b)({type:h});case 4:return c="".concat(D,"/posts/").concat(t).concat(R),a.next=7,Object(p.a)(E.a.delete,c);case 7:return r=a.sent,n(),a.next=11,Object(p.b)({type:"DELETE_USER",payload:r.data});case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),console.log("Request failed! Could not delete post.");case 16:case"end":return a.stop()}}),S,null,[[1,13]])}function G(e){var t,n,c,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.playload,n=e.callback,a.prev=1,a.next=4,Object(p.b)({type:h});case 4:return c="".concat(D,"/posts").concat(R),a.next=7,Object(p.a)(E.a.post,c,t);case 7:return r=a.sent,n(),a.next=11,Object(p.b)({type:f,playload:r.data});case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(1),console.log("Request failed! Could not delete post.");case 16:case"end":return a.stop()}}),w,null,[[1,13]])}function L(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(O,T);case 2:return e.next=4,Object(p.e)(m,G);case 4:return e.next=6,Object(p.d)(v,_);case 6:return e.next=8,Object(p.e)(y,A);case 8:case"end":return e.stop()}}),U)}var P=j.a.mark(I);function I(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)(L);case 2:case"end":return e.stop()}}),P)}var M=n(32),Q=n(15),q={loading:!1,users:[]},B=Object(i.combineReducers)({userreducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.playload;switch(n){case h:return Object(Q.a)(Object(Q.a)({},e),{},{loading:!0});case x:return Object(Q.a)(Object(Q.a)({},e),{},{users:c,loading:!1});case g:case f:return Object(Q.a)(Object(Q.a)({},e),{},{users:[c].concat(Object(M.a)(e.users)),loading:!1});default:return e}}}),J=Object(d.a)(),W=Object(i.createStore)(B,{},Object(u.composeWithDevTools)(Object(i.applyMiddleware)(J)));J.run(I);var z=W,F=n(16),H=n(6),K=n(19),V=n(20),X=n(22),Y=n(21),Z=function(e){var t=e.user,n=e.dbclickhandler;return Object(c.jsxs)("div",{className:"mt-3 p-2 border",onDoubleClick:function(){n(t.id)},children:[Object(c.jsx)("div",{children:t.title}),Object(c.jsx)("div",{children:t.categories}),Object(c.jsx)("div",{children:t.content})]})},$=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(K.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).ondbclick=function(t){e.props.history.push("/".concat(t))},e}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"render",value:function(){var e=this,t=this.props,n=t.users,r=t.loading;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(F.b,{to:"/adduser",children:Object(c.jsx)("button",{className:"btn btn-primary my-3",children:"Add User"})}),r&&Object(c.jsx)("h2",{children:"Loading..."}),!r&&Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-md-5",children:n.map((function(t){return Object(c.jsx)(Z,{user:t,dbclickhandler:e.ondbclick})}))})})]})}}]),n}(a.a.Component),ee=Object(l.b)((function(e){return{users:e.userreducer.users,loading:e.userreducer.loading}}),(function(e){return{getUsers:function(){return e({type:O})}}}))($),te=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(K.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={title:null,categories:null,content:null},e.onChangeName=function(t){e.setState({title:t.target.value})},e.onChangeUsername=function(t){e.setState({categories:t.target.value})},e.onChangeEmail=function(t){e.setState({content:t.target.value})},e.onClickbtn=function(){e.props.addUser(e.state,(function(){e.props.history.push("/")}))},e}return Object(V.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"col-xl-6 border p-3 mx-auto mt-5",children:[Object(c.jsx)(F.b,{to:"/",children:"Back to Index"}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"col-xl-2",children:"Title"}),Object(c.jsx)("div",{className:"col-xl-4",children:Object(c.jsx)("input",{type:"text",onChange:this.onChangeName,className:"form-control"})})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"col-xl-2",children:"Categories"}),Object(c.jsx)("div",{className:"col-xl-4",children:Object(c.jsx)("input",{type:"text",onChange:this.onChangeUsername,className:"form-control"})})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{className:"col-xl-2",children:"Content"}),Object(c.jsx)("div",{className:"col-xl-4",children:Object(c.jsx)("input",{type:"text",onChange:this.onChangeEmail,className:"form-control"})})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("button",{className:"btn btn-primary ml-3",onClick:this.onClickbtn,children:"Add"})})]})})}}]),n}(a.a.Component),ne=Object(l.b)(null,(function(e){return{addUser:function(t,n){return e({type:m,playload:t,callback:n})}}}))(te),ce=function(e){Object(X.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(V.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchPost(this.props.match.params.id)}},{key:"onDeleteClick",value:function(){var e=this;this.props.deletePost(this.props.match.params.id,(function(){e.props.history.push("/")}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.users;return t.loading?Object(c.jsx)("h2",{children:"Loading..."}):Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"col-xl-6 border p-3 mx-auto mt-5",children:[Object(c.jsx)(F.b,{to:"/",children:"Back to Index"}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("h3",{children:n[0].title})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsxs)("h6",{children:["Categories: ",n[0].categories]})}),Object(c.jsx)("p",{children:n[0].content}),Object(c.jsx)("button",{className:"btn btn-danger pull-xs-right",onClick:function(){return e.onDeleteClick()},children:"Delete Post"})]})})}}]),n}(a.a.Component),re=Object(l.b)((function(e){return{loading:e.userreducer.loading,users:e.userreducer.users}}),(function(e){return{fetchPost:function(t){return e({type:v,id:t})},deletePost:function(t,n){return e({type:y,id:t,callback:n})}}}))(ce),ae=function(){return Object(c.jsx)(l.a,{store:z,children:Object(c.jsx)(F.a,{children:Object(c.jsxs)(H.c,{children:[Object(c.jsx)(H.a,{exact:!0,path:"/",component:ee}),Object(c.jsx)(H.a,{path:"/adduser",component:ne}),Object(c.jsx)(H.a,{path:"/:id",component:re})]})})})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ae,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.34e371c6.chunk.js.map