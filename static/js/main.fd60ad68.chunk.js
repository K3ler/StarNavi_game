(this.webpackJsonpstartnavi_game=this.webpackJsonpstartnavi_game||[]).push([[0],{11:function(e,a,t){e.exports={message:"Message_message__QN21A",show:"Message_show__2019q",hide:"Message_hide__2yHHQ",winner:"Message_winner__1PtzN",color_change:"Message_color_change__3uzBP"}},13:function(e,a,t){e.exports={wrapper:"LeaderList_wrapper__2TeV-",leaderTitle:"LeaderList_leaderTitle__2DSUL",leaderList:"LeaderList_leaderList__WbY8C"}},14:function(e,a,t){e.exports={leaderItem:"Item_leaderItem__2minK"}},20:function(e,a,t){e.exports={app:"App_app__1Ukov",container:"App_container__1YWGW"}},21:function(e,a,t){e.exports={mapCells:"Map_mapCells__-O0sc"}},22:function(e,a,t){e.exports={select:"GameDifficult_select__1umrE"}},23:function(e,a,t){e.exports={usernameControl:"Username_usernameControl__3CLSx",usernameInput:"Username_usernameInput__2pTbr"}},24:function(e,a,t){e.exports={playButton:"PlayButton_playButton__lS0Oy"}},36:function(e,a,t){e.exports={row:"Cells_row__25T4W"}},39:function(e,a,t){e.exports={controls:"Controls_controls__1EepC"}},41:function(e,a,t){e.exports=t(70)},46:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c);t(46),t(47),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=t(1),u=t(6),s=t(35),i=t(2),p=1,m=2,d=3,f="GENERATE_MAP",y="CHANGE_DELAY",_="CHANGE_VALUE",E="PREV_CELL",b="SETUP_MODES",v="SET_GAME_MODE",O="SET_GAME_STATE",h="RESET_MAP",g="SET_USERNAME",j="SET_USER_SCORE",N="SET_AI_SCORE",S="RESET_PLAYERS",w="SET_WINNER",C="GET_LEADERS",A="ADD_WINNER",T="SET_LEADERS",L={isGameRunning:!1,cells:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],mapSize:5,modes:[],delay:null,currentDelay:null,prevCell:[0,0]},M={userScore:0,aiScore:0,userName:"",winner:""},D={leaders:[],bestScore:0},k=Object(u.c)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case f:return Object(i.a)(Object(i.a)({},e),{},{cells:a.payload.cells,mapSize:a.payload.size});case y:return Object(i.a)(Object(i.a)({},e),{},{delay:a.payload});case _:return Object(i.a)(Object(i.a)({},e),{},{cells:a.payload});case E:return Object(i.a)(Object(i.a)({},e),{},{prevCell:a.payload});case b:return Object(i.a)(Object(i.a)({},e),{},{modes:a.payload});case v:return Object(i.a)(Object(i.a)({},e),{},{currentDelay:a.payload.delay,mapSize:a.payload.mapSize});case O:return Object(i.a)(Object(i.a)({},e),{},{isGameRunning:a.payload});case h:return{isGameRunning:!1,cells:[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],mapSize:5,modes:[],delay:null,currentDelay:null,prevCell:[0,0]};default:return e}},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case g:return Object(i.a)(Object(i.a)({},e),{},{userName:a.payload});case j:return Object(i.a)(Object(i.a)({},e),{},{userScore:a.payload});case N:return Object(i.a)(Object(i.a)({},e),{},{aiScore:a.payload});case w:return Object(i.a)(Object(i.a)({},e),{},{winner:a.payload.winner});case S:return{userScore:0,aiScore:0,userName:"",winner:""};default:return e}},leaderBoard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case C:case A:return Object(i.a)(Object(i.a)({},e),{},{leaders:a.payload});default:return e}}}),R=t(20),x=t.n(R),G=t(15),P=t(21),I=t.n(P),B=t(36),U=t.n(B),z=t(9),J=t.n(z),W=function(e){var a;a="".concat(e.value===p?J.a.hightlight:"")+"".concat(e.value===d?J.a.user:"")+"".concat(e.value===m?J.a.ai:"");return r.a.createElement("td",{className:"".concat(J.a.cell," ").concat(a),onClick:function(){e.click(e.y,e.x)}})},H=function(e){var a=e.cells.map((function(a,t){return r.a.createElement("tr",{className:U.a.row,key:"a"+t},a.map((function(a,n){return r.a.createElement(W,{y:t,x:n,value:a,click:e.handleClick,key:"a"+t+"b"+n})})))}));return r.a.createElement(r.a.Fragment,null,a)},F=t(40),Y=function(e){return{payload:e,type:y}},V=function(e,a,t){return function(n,r){var c=JSON.parse(JSON.stringify(r().map.cells));c[e][a]=t,n({payload:c,type:_})}},Q=function(e){return function(a,t){-1===e&&(e=0);var n,r=t().map.modes[e],c=r.delay,l=r.field;a({payload:{delay:c,mapSize:l},type:v}),a((n=l,{payload:{cells:Object(F.a)(Array(n).fill(Array(n).fill(0))),size:n},type:f}))}},q=t(37),K=t.n(q).a.create({baseURL:"https://starnavi-frontend-test-task.herokuapp.com",timeout:1e3}),$=function(){return function(e){var a;a=function(a){e({payload:a.data.reverse(),type:C})},K.get("/winners").then(a)}},X=function(e,a){return function(a,t){var n,r,c=JSON.parse(JSON.stringify(t().leaderBoard.leaders)),l=new Date,o=l.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][l.getMonth()]+" "+l.getFullYear(),u=("0"+l.getHours()).slice(-2),s=("0"+l.getMinutes()).slice(-2),i="".concat(u,":").concat(s,"; ")+o;c.reverse(),c.push({winner:e,date:i}),c.reverse(),n={winner:e,date:i},r=function(e){return a(function(e){return{payload:e,type:T}}(e.data.reverse()))},K.post("/winners",n,{headers:{"Content-Type":"application/json"}}).then(r),a({payload:c,type:A}),a({payload:{winner:e,date:i},type:w})}},Z=t(38),ee=function(e){var a=Object(o.b)(),t=Object(o.c)((function(e){return e.map.delay})),c=Object(o.c)((function(e){return e.map.cells})),l=Object(o.c)((function(e){return e.map.mapSize})),u=Object(o.c)((function(e){return e.map.prevCell})),s=Object(o.c)((function(e){return e.player.aiScore})),i=Object(o.c)((function(e){return e.player.userScore})),f=Object(o.c)((function(e){return e.player.userName})),y=function(){return[Math.floor(Math.random()*(l-1-0+1))+0,Math.floor(Math.random()*(l-1-0+1))+0]},_=function(e,a,t){return t[e][a]!==p&&t[e][a]!==m&&t[e][a]!==d},b=function(){for(var e=JSON.parse(JSON.stringify(c)),t=y(),n=Object(G.a)(t,2),r=n[0],l=n[1];!_(r,l,e);){var o=y(),u=Object(G.a)(o,2);r=u[0],l=u[1]}a(V(r,l,p)),a(function(e,a){return{payload:[e,a],type:E}}(r,l))},v=function(){var e=Object(G.a)(u,2),t=e[0],n=e[1];c[t][n]===p&&(a(V(t,n,m)),a({payload:s+1,type:N}))};return Object(n.useEffect)((function(){var e=l*l/2;i>=e&&(a(X(f,new Date)),a(Y(null))),s>=e&&(a(X("Computer",new Date)),a(Y(null)))}),[s,i,l,a,f]),Object(Z.a)((function(){v(),b()}),t),r.a.createElement("div",{className:I.a.map},r.a.createElement("table",{className:I.a.mapCells},r.a.createElement("thead",null),r.a.createElement("tbody",null,r.a.createElement(H,{cells:c,handleClick:function(e,t){c[e][t]===p&&(a(V(e,t,d)),a({payload:i+1,type:j}))}}))))},ae=t(39),te=t.n(ae),ne=t(22),re=t.n(ne),ce=function(e){var a=Object(o.c)((function(e){return e.map.modes}));return r.a.createElement("div",{className:re.a.wrapper},r.a.createElement("select",{className:re.a.select,onChange:e.change},r.a.createElement("option",{value:"-1"},"Game Difficult"),a.map((function(e,a){return r.a.createElement("option",{key:"f"+a,value:a},e.name)}))))},le=t(23),oe=t.n(le),ue=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.player.userName}));return r.a.createElement("div",{className:oe.a.usernameControl},r.a.createElement("input",{className:oe.a.usernameInput,onChange:function(a){var t=a.target.value;e(function(e){return{payload:e,type:g}}(t))},value:a,placeholder:"Enter Username"}))},se=t(24),ie=t.n(se),pe=function(){return function(e){var a;a=function(a){var t=a.data,n=[];for(var r in t)t[r].name=r,n.push(t[r]);e({payload:n,type:b})},K.get("/game-settings").then(a)}},me=t(8),de=function(){var e=Object(o.c)((function(e){return e.map.isGameRunning})),a=Object(o.c)((function(e){return e.map.currentDelay})),t=Object(o.c)((function(e){return e.player.userName})),n=Object(o.b)(),c=function(){if(e)return n({type:h}),n({type:S}),void n(pe());var r;""!==t?a?(n((r=!e,function(e){e({payload:r,type:O})})),n(Y(a))):me.b.error("Please select Game Difficult"):me.b.error("Please Enter Username")};return r.a.createElement("div",{className:ie.a.control},r.a.createElement("button",{className:ie.a.playButton,onClick:function(){c()}},e?"Play again":"Play"))},fe=function(){var e=Object(o.b)();return r.a.createElement("div",{className:te.a.controls},r.a.createElement(ce,{change:function(a){var t=parseInt(a.target.value);e(Q(t))}}),r.a.createElement(ue,null),r.a.createElement(de,null))},ye=t(13),_e=t.n(ye),Ee=t(14),be=t.n(Ee),ve=function(){var e=Object(o.c)((function(e){return e.leaderBoard.leaders})).map((function(e,a){return r.a.createElement("li",{className:be.a.leaderItem,key:"ld"+a},r.a.createElement("span",{className:be.a.leaderName},e.winner),r.a.createElement("span",{className:be.a.leaderDate},e.date))}));return r.a.createElement(r.a.Fragment,null,e)},Oe=function(){return r.a.createElement("div",{className:_e.a.wrapper},r.a.createElement("h1",{className:_e.a.leaderTitle},"Leader Board"),r.a.createElement("ul",{className:_e.a.leaderList},r.a.createElement(ve,null)))},he=t(11),ge=t.n(he),je=function(){var e=Object(o.c)((function(e){return e.player.winner}));return r.a.createElement("div",{className:"".concat(ge.a.message)},r.a.createElement("h1",{className:"".concat(""!==e?ge.a.show:ge.a.hide)},r.a.createElement("span",{className:ge.a.winner},""!==e?"".concat(e.toUpperCase()," wins!"):"")))},Ne=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e(pe()),e($())}),[e]),r.a.createElement("div",{className:x.a.app},r.a.createElement(me.a,{position:"top-right",autoClose:5e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0}),r.a.createElement(fe,null),r.a.createElement(je,null),r.a.createElement("div",{className:x.a.container},r.a.createElement(ee,null),r.a.createElement(Oe,null)))},Se=Object(u.d)(k,Object(u.a)(s.a));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:Se},r.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports={cell:"Cell_cell__2feTL",hightlight:"Cell_hightlight__3IvAC",user:"Cell_user__1P8f3",ai:"Cell_ai__1yfVC"}}},[[41,1,2]]]);
//# sourceMappingURL=main.fd60ad68.chunk.js.map