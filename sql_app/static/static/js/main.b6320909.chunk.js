(this.webpackJsonpimdb_fynd_frontend=this.webpackJsonpimdb_fynd_frontend||[]).push([[0],{41:function(e,t,n){},43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(33),i=n.n(s),l=(n(41),n(3)),o=(n(42),n(43),n(7)),u=n.n(o),d=n(2),j=n(12),b=n(4),p=n.n(b),m=n(9);var O=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(1),o=Object(l.a)(i,2),d=o[0],j=o[1],b=Object(c.useState)(""),O=Object(l.a)(b,2),h=O[0],x=O[1];Object(c.useEffect)((function(){v()}),[d]),Object(c.useEffect)((function(){(h.length>=3||0===h.length)&&f()}),[h]);var v=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/movies/all?page=".concat(d));case 2:t=e.sent,n=t.data,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/movies/search?page=".concat(d,"&query=").concat(h));case 2:t=e.sent,n=t.data,s(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){e<0&&1==d||e>0&&r.length<10||j(d+e)};return Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"p-5 w-100",children:Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"Search"})}),Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Movie/Director Name",onChange:function(e){var t=e.target.value;x(t)}})]})}),r.map((function(e){return Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title",children:e.name}),Object(a.jsx)("p",{className:"card-text",children:e.director}),e.genres.map((function(e){return Object(a.jsx)("a",{className:"badge badge-dark",children:e.name})})),Object(a.jsx)("br",{}),Object(a.jsxs)("a",{href:"#",className:"badge badge-primary",children:["IMDB Score: ",e.imdb_score]})]})})},e.id)})),Object(a.jsxs)("div",{className:"d-flex justify-content-center full-width w-100 p-3",children:[d>1?Object(a.jsx)("button",{className:"btn btn-secondary mr-3",onClick:function(e){return g(-1)},children:"Prev"}):null,"page ",d,10===r.length?Object(a.jsx)("button",{className:"btn btn-secondary ml-3",onClick:function(e){return g(1)},children:"Next"}):null]})]})},h=n(14),x=n(5),v=Object(c.createContext)();function f(){return Object(c.useContext)(v)}var g=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)({}),o=Object(l.a)(i,2),d=o[0],j=o[1],b=Object(c.useState)({}),O=Object(l.a)(b,2),v=O[0],g=O[1],N=Object(c.useState)(1),w=Object(l.a)(N,2),y=w[0],k=w[1],C=f().authTokens;Object(c.useEffect)((function(){S()}),[0]);var S=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/movies/all");case 2:t=e.sent,n=t.data,console.log({movies:n}),s(n),a={},n.map((function(e){a[e.id]=e})),g(a);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){j(Object(x.a)(Object(x.a)({},d),{},Object(h.a)({},e.id,!d[e.id])))},A=function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(n=C||{}).token_type,c=n.access_token,e.next=3,u.a.put("/movie/",t,{headers:{Authorization:" ".concat(a," ").concat(c)}});case 3:r=e.sent,console.log({resp:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){e<0&&1==y||e>0&&r.length<10||k(y+e)};return Object(a.jsxs)("div",{className:"row",children:[r.map((function(e){return Object(a.jsx)("div",{className:"col-sm-6",children:Object(a.jsx)("div",{className:"card",children:Object(a.jsx)("div",{className:"card-body",children:d[e.id]?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{className:"card-title",value:v[e.id].name}),Object(a.jsx)("input",{className:"card-title",value:v[e.id].director}),Object(a.jsx)("input",{className:"card-title",value:v[e.id].imdb_score}),Object(a.jsx)("input",{className:"card-title",value:v[e.id].popularity}),e.genres.map((function(e){return Object(a.jsx)("a",{className:"badge badge-dark",children:e.name})})),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn btn-danger pull-right",onClick:function(t){return P(e)},children:"Cancel"}),Object(a.jsx)("button",{className:"btn btn-primary pull-right",onClick:function(t){return A(e)},children:"Save"})]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h5",{className:"card-title",children:e.name}),Object(a.jsx)("p",{className:"card-text",children:e.director}),e.genres.map((function(e){return console.log({genre:e}),Object(a.jsx)("a",{className:"badge badge-dark",children:e.name})})),Object(a.jsxs)("a",{href:"#",className:"badge badge-primary",children:["IMDB Score: ",e.imdb_score]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"btn btn-primary pull-right",onClick:function(t){return P(e)},children:"Edit"})})]})})})},e.id)})),Object(a.jsxs)("div",{className:"d-flex justify-content-center full-width w-100 p-3",children:[y>1?Object(a.jsx)("button",{className:"btn btn-secondary mr-3",onClick:function(e){return _(-1)},children:"Prev"}):null,"page ",y,10===r.length?Object(a.jsx)("button",{className:"btn btn-secondary ml-3",onClick:function(e){return _(1)},children:"Next"}):null]})]})},N=n(35);var w=function(e){var t=e.component,n=Object(N.a)(e,["component"]),c=f(),r=c.authTokens,s=c.isAdmin;return Object(a.jsx)(d.b,Object(x.a)(Object(x.a)({},n),{},{render:function(e){return r&&s?Object(a.jsx)(t,Object(x.a)({},e)):Object(a.jsx)(d.a,{to:"/"})}}))};var y=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),o=i[0],b=i[1],O=Object(c.useState)(""),h=Object(l.a)(O,2),x=h[0],v=h[1],g=Object(c.useState)(""),N=Object(l.a)(g,2),w=N[0],y=N[1],k=Object(d.f)(),C=f(),S=C.setAuthTokens,P=C.setIsAdmin,A=C.authTokens;Object(c.useEffect)(Object(m.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=A||{}).token_type,a=t.access_token,e.next=3,u.a.get("/users/me",{headers:{Authorization:" ".concat(n," ").concat(a)}});case 3:"admin"===e.sent.data.role?P(!0):P(!1),k.push("/admin");case 6:case"end":return e.stop()}}),e)}))),[n]);var _=new FormData;function T(){return(T=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _.append("username",x),_.append("password",w),e.prev=2,e.next=5,u.a.post("/token",_,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});case 5:t=e.sent,console.log({result:t}),200===t.status?(S(t.data),r(!0)):b(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),b(!0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(a.jsx)("div",{className:"card",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"username",value:x,onChange:function(e){v(e.target.value)},placeholder:"email"})}),Object(a.jsx)("input",{type:"password",value:w,onChange:function(e){y(e.target.value)},placeholder:"password"}),Object(a.jsx)("button",{onClick:function(){return T.apply(this,arguments)},children:"Sign In"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(j.b,{to:"/signup",children:"Don't have an account?"}),o&&"The username or password provided were incorrect!"]})]})})},k={username:"",email:"",role:"",password:"",confirmPassword:""};var C=function(){var e=Object(c.useState)(k),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(d.f)(),i=function(e,t){return function(t){var a=(t.target||{value:t}).value;console.log(Object(h.a)({},e,a)),r(Object(x.a)(Object(x.a)({},n),{},Object(h.a)({},e,a)))}},o=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},j=function(e){return/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e)},b=function(){var e=n.username,t=n.email,a=n.role,c=n.password,r=n.confirmPassword;return console.log({password:c,confirmPassword:r}),!!e&&!!t&&!!a&&c===r},O=function(){var e=Object(m.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(n.email)){e.next=3;break}return alert("Please enter a valid email"),e.abrupt("return");case 3:if(j(n.password)){e.next=6;break}return alert("Password must be minimum eight characters with at least one letter and one number"),e.abrupt("return");case 6:if(b()){e.next=9;break}return alert("Please fill in all details. Also ensure password matches with confirm password"),e.abrupt("return");case 9:return n.genre=n.genres,e.prev=10,e.next=13,u.a.post("/users/",n);case 13:201===e.sent.status?(alert("Saved successfully"),s.push("/")):alert("There was an error"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),alert("There was an error.");case 20:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100 p-5",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"Username"})}),Object(a.jsx)("input",{className:"form-control",onChange:i("username"),value:n.username})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"Email"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"email",className:"form-control",onChange:i("email"),value:n.email})}),n.email&&!o(n.email)?Object(a.jsx)("div",{children:"Please enter a valid email ID"}):""]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"Password"})}),Object(a.jsx)("input",{type:"password",className:"form-control",onChange:i("password"),value:n.password})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"Confirm Password"})}),Object(a.jsx)("input",{type:"password",className:"form-control",onChange:i("confirmPassword"),value:n.confirmPassword}),n.password!==n.confirmPassword?Object(a.jsx)("p",{children:"Passwords do not match!"}):""]}),Object(a.jsxs)("div",{className:"input-group",onClick:function(e){return i("role")("admin")},children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("input",{type:"radio",checked:"admin"===n.role})})}),Object(a.jsx)("input",{disabled:!0,type:"text",className:"form-control",value:"Admin"})]}),Object(a.jsxs)("div",{className:"input-group",onClick:function(e){return i("role")("user")},children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("div",{className:"input-group-text",children:Object(a.jsx)("input",{type:"radio",checked:"user"===n.role})})}),Object(a.jsx)("input",{disabled:!0,type:"text",className:"form-control",value:"User"})]})]}),n.password&&!j(n.password)?Object(a.jsx)("p",{children:"Password must be minimum eight characters with at least one letter and one number"}):"",Object(a.jsx)("button",{disabled:!b()||!j(n.password)||!o(n.email),className:"btn btn-primary pull-right",onClick:function(e){return O()},children:"Save"})]})})},S=n(19),P={name:"",director:"",imdb_score:0,popularity:0,genres:[{name:""}]};var A=function(e){var t=Object(c.useState)(P),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(d.f)(),o=f().authTokens,j=function(){var e=Object(m.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b()){e.next=2;break}return e.abrupt("return");case 2:return r.genre=r.genres,n=(t=o||{}).token_type,a=t.access_token,e.prev=4,e.next=7,u.a.post("/movie/",r,{headers:{Authorization:" ".concat(n," ").concat(a)}});case 7:201===e.sent.status?(alert("Saved successfully"),i.push("/")):alert("There was an error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),alert("There was an error. Please make sure you are logged in as admin");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}(),b=function(){return r.name&&r.director?r.imdb_score<0||r.imdb_score>10?(alert("IMDB score must be between 0 to 10"),!1):!(r.popularity<0||r.popularity>100)||(alert("Popularity score must be between 0 to 100"),!1):(alert("Invalid details! Please fill all details"),!1)},O=function(e,t){return function(n){var a=n.target.value;if("genre"===e&&!isNaN(t)){var c=Object(S.a)(r.genres);return c[t].name=a,void s(Object(x.a)(Object(x.a)({},r),{},Object(h.a)({genres:c},e,a)))}s(Object(x.a)(Object(x.a)({},r),{},Object(h.a)({},e,a)))}};return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"d-flex justify-content-center align-items-center w-100 p-5",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"movie name"})}),Object(a.jsx)("input",{className:"form-control",onChange:O("name"),value:r.name})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"director"})}),Object(a.jsx)("input",{className:"form-control",onChange:O("director"),value:r.director})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"popularity"})}),Object(a.jsx)("input",{type:"number",className:"form-control",onChange:O("popularity"),value:r.popularity})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"imdb score"})}),Object(a.jsx)("input",{type:"number",className:"form-control",onChange:O("imdb_score"),value:r.imdb_score})]}),Object(a.jsxs)("div",{className:"input-group mb-3",children:[Object(a.jsx)("div",{className:"input-group-prepend",children:Object(a.jsx)("label",{className:"input-group-text",children:"Genres"})}),Object(a.jsx)("div",{className:"d-flex flex-column",children:r.genres.map((function(e,t){return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{class:"input-group pr-1 pb-1",children:[Object(a.jsx)("input",{type:"text",className:"form-control",onChange:O("genre",t),value:e.name}),r.genres.length>1?Object(a.jsx)("div",{class:"input-group-append",children:Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(e){return function(e){var t=Object(S.a)(r.genres);t.splice(e,1),s(Object(x.a)(Object(x.a)({},r),{},{genres:t}))}(t)},children:"Remove"})}):null]})})}))})]}),Object(a.jsx)("button",{className:"btn btn-secondary",onClick:function(){var e=Object(S.a)(r.genres);e.push({name:""}),s(Object(x.a)(Object(x.a)({},r),{},{genres:e}))},children:"+ Add Genre"})]}),Object(a.jsx)("button",{className:"btn btn-primary pull-right",onClick:function(e){return j()},children:"Save"})]})})})};var _=function(){var e=JSON.parse(localStorage.getItem("tokens")),t=Object(c.useState)(e),n=Object(l.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),o=Object(l.a)(i,2),u=o[0],b=o[1];return Object(d.f)(),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(v.Provider,{value:{authTokens:r,setAuthTokens:function(e){localStorage.setItem("tokens",JSON.stringify(e)),s(e)},setIsAdmin:b,isAdmin:u},children:Object(a.jsxs)(j.a,{children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)(j.b,{to:"/",className:"navbar-brand",children:"Fynd's IMDB"}),Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)(j.b,{to:"/",className:"navbar-brand",children:Object(a.jsx)("li",{className:"nav-item active",children:"Home"})}),r?Object(a.jsxs)(a.Fragment,{children:[u?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j.b,{to:"/admin",className:"navbar-brand",children:Object(a.jsx)("li",{className:"nav-item",children:"Admin"})}),Object(a.jsx)(j.b,{to:"/newMovie",className:"navbar-brand",children:Object(a.jsx)("li",{className:"nav-item",children:"New Movie"})})]}):null,Object(a.jsx)("li",{className:"nav-item",onClick:function(){s()},children:"Logout"})]}):Object(a.jsx)(j.b,{to:"/login",className:"navbar-brand",children:Object(a.jsx)("li",{className:"nav-item",children:"Login"})})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",component:O}),Object(a.jsx)(d.b,{path:"/login",component:y}),Object(a.jsx)(d.b,{path:"/signup",component:C}),Object(a.jsx)(w,{path:"/admin",component:g}),Object(a.jsx)(w,{path:"/newMovie",component:A})]})]})})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root")),T()}},[[67,1,2]]]);
//# sourceMappingURL=main.b6320909.chunk.js.map