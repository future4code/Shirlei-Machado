(this.webpackJsonplabenusers=this.webpackJsonplabenusers||[]).push([[0],{28:function(e,n,t){e.exports=t(52)},33:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(23),c=t.n(o),i=(t(33),t(4)),u=t(5),l=t(7),s=t(6),d=t(2),h=t(3),m=t(8),p=t.n(m);function f(){var e=Object(d.a)(["\n      text-align: center;\n      color:white;      \n\n"]);return f=function(){return e},e}function g(){var e=Object(d.a)(["\n    margin-top: 20px;\n    width: 30%;\n    height: 30px;\n    align-self: center;\n    background-color: #dedede;\n    color:black;\n        :hover{\n        color: white;\n        cursor: pointer;\n    \n"]);return g=function(){return e},e}function b(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 40px;\n    box-sizing: border-box;\n    margin: 30px auto;\n    width: 500px;\n    border: 5px solid #dedede;\n    background-color:gray;\n"]);return b=function(){return e},e}var v=h.a.div(b()),w=h.a.button(g()),C=h.a.h3(f()),k=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={nameValue:"",emailValue:""},e.onChangeName=function(n){e.setState({nameValue:n.target.value})},e.onChangeEmail=function(n){e.setState({emailValue:n.target.value})},e.onClickCriar=function(){var n={name:e.state.nameValue,email:e.state.emailValue};p.a.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",n,{headers:{Authorization:"shirlei-machado-julian"}}).then((function(e){window.alert("Usuario criado com sucesso!")})).catch((function(e){console.log(e.response),window.alert("Erro ao criar usu\xe1rio!")})),e.setState({nameValue:"",emailValue:""})},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(C,null,"Cadastre-se aqui"),r.a.createElement("input",{placeholder:"Nome",value:this.state.nameValue,onChange:this.onChangeName}),r.a.createElement("input",{placeholder:"Email",value:this.state.emailValue,onChange:this.onChangeEmail}),r.a.createElement(w,{onClick:this.onClickCriar},"CONFIRME"))}}]),t}(r.a.Component),O=t(11),E=t.n(O),j=t(27);function x(){var e=Object(d.a)(["\n    color:red;\n    background-color:gray;\n    border:none;\n     :hover{\n        cursor: pointer;   \n"]);return x=function(){return e},e}function y(){var e=Object(d.a)(["\n    text-align: center;\n    color: gray\n"]);return y=function(){return e},e}function L(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    margin: 30px auto;\n    padding: 10px;\n    background-color:gray;\n    color:white;\n    border: 5px solid #dedede;\n    width:500px;\n"]);return L=function(){return e},e}var V=h.a.div(L()),U=h.a.h1(y()),S=h.a.button(x()),A=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={usersList:[]},e.getUsersList=Object(j.a)(E.a.mark((function n(){var t;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.a.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{headers:{Authorization:"shirlei-machado-julian"}});case 3:t=n.sent,e.setState({usersList:t.data}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),e.onClickDeleteUser=function(n){p.a.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/".concat(n),{headers:{Authorization:"shirlei-machado-julian"}}).then((function(n){window.alert("Usuario deletado com sucesso"),e.getUsersList()})).catch((function(e){window.alert("Deu um erro :(")}))},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getUsersList()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(U,null,"Lista de Usu\xe1rios"),r.a.createElement("div",null,this.state.usersList.map((function(n){return r.a.createElement(V,null,r.a.createElement("p",null,n.name),r.a.createElement(S,{onClick:function(){return e.onClickDeleteUser(n.id)}},"X"))}))))}}]),t}(r.a.Component),M=function(e){Object(l.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={currentPage:"LIST"},e.onClickChangePage=function(){var n="FORM"===e.state.currentPage?"LIST":"FORM";e.setState({currentPage:n})},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("button",{onClick:this.onClickChangePage},"FORM"===this.state.currentPage?"Ir para Lista de Usu\xe1rios":"Ir para Cadastro"),"FORM"===this.state.currentPage?r.a.createElement(k,null):r.a.createElement(A,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.3aaf79c0.chunk.js.map