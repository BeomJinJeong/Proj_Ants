(self["webpackChunkrtc_frontend"]=self["webpackChunkrtc_frontend"]||[]).push([[506],{7410:()=>{},9562:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>Se});var n=o(3673);const s=(0,n.HX)("data-v-45830520"),a=s(((e,t,o,s,a,l)=>{const i=(0,n.up)("Side"),m=(0,n.up)("top-navbar"),d=(0,n.up)("main-content"),r=(0,n.up)("chat");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)(i),(0,n.Wm)(m),(0,n.Wm)(d),(0,n.Wm)(r)],64)}));o(71);var l=o(2323),i=o(4152),m=o.n(i);const d=(0,n.HX)("data-v-2aee0ba2");(0,n.dD)("data-v-2aee0ba2");const r={id:"header"},c={id:"headerLeft"},u={id:"headerRight"},p={class:"dropdown"},g={class:"dropdown-content"},f=(0,n.Uk)("개인정보 수정");(0,n.Cn)();const h=d(((e,t,o,s,a,i)=>{const h=(0,n.up)("q-img"),v=(0,n.up)("q-btn"),W=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)("div",r,[(0,n.Wm)("div",c,[(0,n.Wm)(h,{src:m(),style:{width:"90px","margin-top":"4px"}})]),(0,n.Wm)("div",u,[(0,n.Wm)("div",p,[(0,n.Wm)(v,{class:"dropbtn",flat:""},{default:d((()=>[(0,n.Uk)((0,l.zw)(e.state.name)+" 님 ▼",1)])),_:1}),(0,n.Wm)("div",g,[(0,n.Wm)(W,{to:{path:"mypage"}},{default:d((()=>[f])),_:1}),(0,n.Wm)("a",{href:"",onClick:t[1]||(t[1]=(...t)=>e.logout&&e.logout(...t))},"로그아웃")])])])])}));var v=o(1959),W=o(9582);const y=(0,n.aZ)({methods:{mvManagement(){this.$router.push("/management")},mvMypage(){this.$router.push("/mypage")}},setup(){const e=(0,v.qj)({name:localStorage.getItem("name"),profileLocation:localStorage.getItem("profileLocation")}),t=(0,W.tv)(),o=function(){localStorage.clear(),t.push("/")};return{state:e,onItemClick(){console.log("아이템 클릭")},logout:o}}});var w=o(4027),b=o(2670),k=o(7011),C=o(3414),x=o(2035),L=o(5096),I=o(2350),M=o(4554),_=o(2165),z=o(677),Z=o(7518),q=o.n(Z);y.render=h,y.__scopeId="data-v-2aee0ba2";const D=y;q()(y,"components",{QImg:w.Z,QBtnDropdown:b.Z,QList:k.Z,QItem:C.Z,QItemSection:x.Z,QAvatar:L.Z,QItemLabel:I.Z,QIcon:M.Z,QBtn:_.Z}),q()(y,"directives",{ClosePopup:z.Z});const T=(0,n.HX)("data-v-88acf3ce");(0,n.dD)("data-v-88acf3ce");const H={id:"side"},U={class:"img"},S=(0,n.Wm)("strong",{style:{"font-size":"14px"}},"메인화면",-1),B={class:"img"},Q=(0,n.Wm)("strong",{style:{"font-size":"14px"}},"근태관리",-1),j={class:"img"},R=(0,n.Wm)("strong",{style:{"font-size":"14px"}},"회의룸",-1),$={class:"img"},F=(0,n.Wm)("strong",{style:{"font-size":"14px"}},"사내 게시글",-1),N={class:"img"},X=(0,n.Wm)("strong",{style:{"font-size":"14px"}},"자료 공유함",-1),E={class:"img"},V=(0,n.Wm)("strong",{style:{"font-size":"14px"}},"그룹관리",-1),G={class:"img"},Y=(0,n.Wm)("strong",{style:{"font-size":"14px"}},"로그아웃",-1);(0,n.Cn)();const A=T(((e,t,o,s,a,l)=>{const i=(0,n.up)("q-icon"),m=(0,n.up)("q-tooltip");return(0,n.wg)(),(0,n.j4)("div",H,[(0,n.Wm)("div",{onClick:t[1]||(t[1]=(...t)=>e.mvHome&&e.mvHome(...t)),class:"list clicked"},[(0,n.Wm)("div",U,[(0,n.Wm)(i,{style:{"font-size":"3.0em",color:"white"},name:"home"}),(0,n.Wm)(m,{anchor:"center right",self:"center left",offset:[10,10]},{default:T((()=>[S])),_:1})])]),(0,n.Wm)("div",{class:"list",onClick:t[2]||(t[2]=(...t)=>e.mvManagement&&e.mvManagement(...t))},[(0,n.Wm)("div",B,[(0,n.Wm)(i,{style:{"font-size":"3.0em",color:"white"},name:"event_available"}),(0,n.Wm)(m,{anchor:"center right",self:"center left",offset:[10,10]},{default:T((()=>[Q])),_:1})])]),(0,n.Wm)("div",{onClick:t[3]||(t[3]=(...t)=>e.mvRTC&&e.mvRTC(...t)),class:"list"},[(0,n.Wm)("div",j,[(0,n.Wm)(i,{style:{"font-size":"3.0em",color:"white"},name:"support_agent"}),(0,n.Wm)(m,{anchor:"center right",self:"center left",offset:[10,10]},{default:T((()=>[R])),_:1})])]),(0,n.Wm)("div",{onClick:t[4]||(t[4]=(...t)=>e.mvBoard&&e.mvBoard(...t)),class:"list"},[(0,n.Wm)("div",$,[(0,n.Wm)(i,{style:{"font-size":"3.0em",color:"white"},name:"content_paste"}),(0,n.Wm)(m,{anchor:"center right",self:"center left",offset:[10,10]},{default:T((()=>[F])),_:1})])]),(0,n.Wm)("div",{class:"list",onClick:t[5]||(t[5]=(...t)=>e.mvDownloads&&e.mvDownloads(...t))},[(0,n.Wm)("div",N,[(0,n.Wm)(i,{style:{"font-size":"3.0em",color:"white"},name:"download"}),(0,n.Wm)(m,{anchor:"center right",self:"center left",offset:[10,10]},{default:T((()=>[X])),_:1})])]),(0,n.Wm)("div",{onClick:t[6]||(t[6]=(...t)=>e.mvGroup&&e.mvGroup(...t)),class:"list"},[(0,n.Wm)("div",E,[(0,n.Wm)(i,{style:{"font-size":"3.0em",color:"white"},name:"groups"}),(0,n.Wm)(m,{anchor:"center right",self:"center left",offset:[10,10]},{default:T((()=>[V])),_:1})])]),(0,n.Wm)("div",{onClick:t[7]||(t[7]=(...t)=>e.logout&&e.logout(...t)),class:"list",id:"logout"},[(0,n.Wm)("div",G,[(0,n.Wm)(i,{style:{"font-size":"3.0em",color:"white"},name:"logout"}),(0,n.Wm)(m,{anchor:"center right",self:"center left",offset:[10,10]},{default:T((()=>[Y])),_:1})])])])}));var O=o(5535),K=o(7874);const P=(0,n.aZ)({name:"login",methods:{mvHome(){this.$router.push("/main"),this.sideMenuClick(1)},mvRTC(){this.$router.push("/rtc"),this.sideMenuClick(3)},mvDownloads(){this.$router.push("/downloads"),this.sideMenuClick(5)},mvManagement(){this.$router.push("/management"),this.sideMenuClick(2)}},setup(){const e=(0,K.oR)(),t=(0,W.tv)(),n=function(){localStorage.clear();const o={id:"",name:"",department:"",position:""};e.commit("module/setLoginUser",o),t.push("/")};let s=[],a=[];const l=function(){this.sideMenuClick(4),e.dispatch("module/board",{}).then((function(o){for(let e=0;e<o.data.length;e++)o.data[e].registrationTime=o.data[e].registrationTime.substr(0,16),s.push(o.data[e]);e.commit("module/setRows",s);const n=Math.ceil(s.length/8);e.commit("module/setPageNumber",n),s=[],e.dispatch("module/boardList",{}).then((function(o){for(let e=0;e<o.data.length;e++)a.push(o.data[e]);e.commit("module/setBoardList",a),a=[];const n=localStorage.getItem("id");e.dispatch("module/markList",n).then((function(o){for(let e=0;e<o.data.length;e++)o.data[e].registrationTime=o.data[e].registrationTime.substr(0,16);e.commit("module/setMarkList",o.data),t.push("/board")}))})).catch((function(){alert("오류발생")}))})).catch((function(){alert("오류발생")}))},i=function(){const e=o(1770),n=localStorage.getItem("userState");console.log(n+"유저 스테이트"),this.sideMenuClick(6),"1"!==n?e.fire({title:'<span style="font-family:NEXON Lv1 Gothic OTF; font-size:16px;">접근 권한이 없습니다.</span>',confirmButtonColor:"#ce1919",confirmButtonText:'<span style="font-family:NEXON Lv1 Gothic OTF; font-size:14px;">확인</span>'}):(console.log(n),t.push("/group"))},m=function(){const e=document.getElementsByClassName("list");for(let t=0;t<e.length;t++)e[t].classList.remove("clicked")},d=function(e){m();const t=document.querySelector(`.list:nth-child(${e})`);t.classList.add("clicked")};return{outlinedAllInbox:O.XEX,logout:n,mvBoard:l,mvGroup:i,sideMenuClick:d}}});var J=o(8870);P.render=A,P.__scopeId="data-v-88acf3ce";const ee=P;function te(e,t,o,s,a,l){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}q()(P,"components",{QIcon:M.Z,QTooltip:J.Z});var oe=o(7410),ne=o.n(oe);ne().render=te;const se=ne();var ae=o(8880);const le=(0,n.HX)("data-v-13409630");(0,n.dD)("data-v-13409630");const ie={class:"q-mt-md"},me={id:"dm"},de=(0,n.Wm)("h4",{style:{"margin-top":"20px","margin-left":"25px","margin-bottom":"8px","font-weight":"bold"}},"DM List",-1),re={id:"list"},ce={class:"detail",onsubmit:"dmConnect($(this).find('input').eq(0).val(), $(this).find('input').eq(1).val()); return false;"},ue={class:"txtName"},pe=(0,n.Uk)(),ge={class:"txt"},fe={id:"chat"},he={id:"conversation"},ve={onsubmit:"dmDisconnect(); return false;"},We={id:"dmChatWindow",class:"q-pa-md row justify-center"},ye={key:0,class:"box1"},we={class:"name1"},be=(0,n.Wm)("div",{class:"left1"},null,-1),ke={class:"right1"},Ce={key:1,class:"box"},xe={style:{"font-weight":"bold","font-size":"14px"}},Le=(0,n.Wm)("div",{class:"left"},null,-1),Ie={class:"right"},Me=(0,n.Wm)("div",{id:"nowChat"},null,-1),_e={id:"form"},ze={onsubmit:"dmSendChat($(this).find('input').eq(0).val(), $(this).find('input').eq(1).val(), $(this).find('input').eq(2).val()); return false;"};(0,n.Cn)();const Ze=le(((e,t,o,s,a,i)=>{const m=(0,n.up)("q-scroll-area"),d=(0,n.up)("q-btn"),r=(0,n.up)("q-fab");return(0,n.wg)(),(0,n.j4)("div",ie,[(0,n.Wm)(r,{id:"dmBtn",modelValue:e.dm,"onUpdate:modelValue":t[5]||(t[5]=t=>e.dm=t),label:"메신저","vertical-actions-align":"left",color:"yellow-10",icon:"keyboard_arrow_down",direction:"down"},{default:le((()=>[(0,n.Wm)("div",me,[(0,n.wy)((0,n.Wm)("div",null,[de,(0,n.Wm)(m,{style:{height:"400px","max-width":"600px"}},{default:le((()=>[(0,n.Wm)("div",re,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.dmRoomList,(t=>((0,n.wg)(),(0,n.j4)("div",{key:t.roomId},[(0,n.Wm)("form",ce,[(0,n.Wm)("input",{value:t.roomId,style:{display:"none"}},null,8,["value"]),(0,n.Wm)("input",{value:e.loginUser.name,style:{display:"none"}},null,8,["value"]),(0,n.Wm)("input",{style:{backgroundImage:"url("+t.profileLocation+")"},class:"enter",type:"submit",onClick:o=>e.enter(t.roomId,t.username),value:" "},null,12,["onClick"]),(0,n.Wm)("span",ue,(0,l.zw)(t.username),1),pe,(0,n.Wm)("span",ge,(0,l.zw)(t.departmentName),1)])])))),128))])])),_:1})],512),[[ae.F8,!e.chatMode]]),(0,n.wy)((0,n.Wm)("div",fe,[(0,n.Wm)("div",he,[(0,n.Wm)("form",ve,[(0,n.Wm)(d,{onClick:e.back,round:"",color:"yellow-10",icon:"clear",size:"11px",style:{position:"relative",left:"450px","margin-top":"10px"},type:"submit"},null,8,["onClick"])]),(0,n.Wm)("div",We,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.dmHistory,(t=>((0,n.wg)(),(0,n.j4)("div",{key:t.id},[t.user===e.loginUser.name?((0,n.wg)(),(0,n.j4)("div",ye,[(0,n.Wm)("div",we,(0,l.zw)(t.user),1),(0,n.Wm)("div",null,[be,(0,n.Wm)("div",ke,(0,l.zw)(t.message),1)])])):(0,n.kq)("",!0),t.user!==e.loginUser.name?((0,n.wg)(),(0,n.j4)("div",Ce,[(0,n.Wm)("div",xe,(0,l.zw)(t.user),1),(0,n.Wm)("div",null,[Le,(0,n.Wm)("div",Ie,(0,l.zw)(t.message),1)])])):(0,n.kq)("",!0)])))),128)),Me])]),(0,n.Wm)("div",_e,[(0,n.Wm)("form",ze,[(0,n.wy)((0,n.Wm)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.sendTo.roomId=t),style:{display:"none"}},null,512),[[ae.nr,e.sendTo.roomId]]),(0,n.wy)((0,n.Wm)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.loginUser.name=t),style:{display:"none"}},null,512),[[ae.nr,e.loginUser.name]]),(0,n.wy)((0,n.Wm)("input",{id:"chatMessage",style:{display:"inline-block",width:"400px",height:"47px","border-radius":"8px",border:"1px solid green"},class:"form-control",placeholder:"메세지를 입력하세요","onUpdate:modelValue":t[3]||(t[3]=t=>e.message=t)},null,512),[[ae.nr,e.message]]),(0,n.Wm)("button",{id:"chatSendSend",class:"btn btn-default",type:"submit",onClick:t[4]||(t[4]=t=>e.sendDm(e.sendTo.roomId,e.loginUser.name,e.message))},"Send")])])],512),[[ae.F8,e.chatMode]])])])),_:1},8,["modelValue"])])})),qe=(0,n.aZ)({name:"mainpage",components:{},methods:{mvAttendance(){this.$router.push("/management")}},setup(){const e=(0,K.oR)(),t=(0,n.Fl)((()=>e.getters["module/getMemberList"])),o=(0,n.Fl)((()=>e.getters["module/getChatMode"])),s=(0,n.Fl)((()=>e.getters["module/getDmRoomList"])),a=(0,n.Fl)((()=>e.getters["module/getLoginUser"])),l={name:"",roomId:""},i=(0,n.Fl)((()=>e.getters["module/getDmHistory"])),m="";(0,n.bv)((()=>{e.dispatch("module/dmRoomList",e.getters["module/getLoginUser"].id).then((function(t){console.log(t.data,"받은 데이터"),e.commit("module/setDmRoomList",t.data),console.log(e.getters["module/getDmRoomList"],"테스트 확인")})),e.dispatch("module/memberList").then((function(o){e.dispatch("module/departmentInfo").then((function(n){for(let e=0;e<o.data.length;e++)for(let t=0;t<n.data.length;t++)o.data[e].department===n.data[t].id&&(o.data[e].department=n.data[t].departmentName);e.commit("module/setMemberList",o.data),console.log("포문 다돔"),console.log(o.data),console.log(t)}))}));const o=document.getElementById("dmBtn");var n=0,s=0,a=!1;o.addEventListener("mousedown",(function(e){a=!0,n=o.offsetLeft-e.clientX,s=o.offsetTop-e.clientY}),!0),o.addEventListener("mouseup",(function(e){a=!1}),!0),o.addEventListener("mousemove",(function(e){a&&(o.style.left=e.clientX+n+"px",o.style.top=e.clientY+s+"px")}))}));const d=function(t,o){e.dispatch("module/getDmHistory",t).then((function(t){document.getElementById("nowChat").innerHTML="",console.log(t.data),e.commit("module/setDmHistory",t.data)})),l.roomId=t,l.name=o,e.commit("module/setChatMode",!0)},r=function(){e.commit("module/setChatMode",!1)},c=function(t,o,n){const s={roomId:t,user:o,message:n};e.dispatch("module/sendDm",s).then((function(e){console.log(e.data)}))};return{dm:(0,v.iH)(!1),memberList:t,chatMode:o,dmRoomList:s,loginUser:a,sendTo:l,message:m,dmHistory:i,enter:d,back:r,sendDm:c}}});var De=o(9200),Te=o(8446);qe.render=Ze,qe.__scopeId="data-v-13409630";const He=qe;q()(qe,"components",{QFab:De.Z,QScrollArea:Te.Z,QBtn:_.Z});const Ue=(0,n.aZ)({name:"login",components:{TopNavbar:D,Side:ee,MainContent:se,Chat:He}});Ue.render=a,Ue.__scopeId="data-v-45830520";const Se=Ue}}]);