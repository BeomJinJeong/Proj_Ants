(self["webpackChunkrtc_frontend"]=self["webpackChunkrtc_frontend"]||[]).push([[526],{526:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>me});o(71);var i=o(3673),n=o(8880),l=o(2323),a=o(4297),s=o.n(a);const m={id:"container"},d={id:"wrapper"},r={id:"join",style:{position:"absolute",left:"60px",top:"-30px"},class:"animate join"},c={key:0,style:{"font-size":"45px","font-weight":"bold",color:"grey",position:"absolute",top:"400px",left:"530px",width:"700px"}},u={onsubmit:"register(); return false;","accept-charset":"UTF-8"},p={class:"submit"},g={class:"q-pa-md row items-start q-gutter-md"},f={class:"absolute-bottom"},v={class:"text-h6"},h={class:"text-subtitle2"},y={class:"enter",onsubmit:"joinConference($(this).find('input').eq(0).val(), $(this).find('input').eq(1).val()); return false;","accept-charset":"UTF-8"},W={id:"room",style:{display:"none"}},b=(0,i.Wm)("div",{id:"participants"},null,-1),w={key:0,id:"down"},x={id:"registFile"},F={style:{"margin-left":"60px","margin-top":"10px"}},k=(0,i.Wm)("br",null,null,-1),L={align:"center"},R={align:"center"},N=(0,i.Wm)("div",{align:"center",style:{"line-height":"150px"}},"파일을 끌어서 올려주세요",-1),C={style:{display:"inline-block","margin-left":"30px",position:"absolute",top:"80px",left:"255px"}},j=(0,i.Uk)("파일 업로드"),q={style:{"margin-top":"10px"}},U=(0,i.Uk)("초기화"),D={id:"viewFile",class:"row"},E={style:{"margin-top":"15px","text-align":"center"}},I={id:"chatchat"},z=(0,i.Wm)("div",{style:{"font-size":"30px","font-weight":"bold","margin-top":"5px","margin-left":"5px"}},"대화내용",-1),M=(0,i.Wm)("div",{id:"chatDiv"},[(0,i.Wm)("table",{id:"conversation",class:"table table-striped"},[(0,i.Wm)("thead",null,[(0,i.Wm)("tr")]),(0,i.Wm)("tbody",{id:"greetings"})])],-1),T={id:"send"},B={onsubmit:"sendChat($(this).find('input').eq(0).val(), $(this).find('input').eq(1).val(), $(this).find('input').eq(2).val()); return false;","accept-charset":"UTF-8"},S=(0,i.Wm)("input",{id:"chatMessage",style:{display:"inline-block","margin-top":"-5px",height:"52px",width:"390px"},class:"form-control",placeholder:"메세지 입력"},null,-1),V=(0,i.Wm)("button",{id:"chatSend",class:"btn btn-default",type:"submit"},"보내기",-1),_={id:"btDiv"},O={class:"form-inline",onsubmit:"disconnect(); return false;","accept-charset":"UTF-8"},Z={style:{display:"inline-block"},onsubmit:"rtcMute($(this).find('input').eq(0).val()); return false;"},$=(0,i.Wm)("button",{id:"bt1",type:"submit",value:"mute"},null,-1),G={style:{display:"inline-block"},onsubmit:"rtcVideoVision($(this).find('input').eq(0).val()); return false;"},Q=(0,i.Wm)("button",{id:"bt2",type:"submit",value:"mute"},null,-1),A=(0,i.Wm)("input",{type:"button",id:"button-leave",onmouseup:"leaveRoom();"},null,-1),H=(0,i.Wm)("div",{id:"room",style:{display:"none"}},[(0,i.Wm)("h2",{id:"room-header"}),(0,i.Wm)("div",{id:"participants"}),(0,i.Wm)("input",{type:"button",id:"button-leave",onmouseup:"leaveRoom();",value:"Leave room"})],-1),K=(0,i.Wm)("div",{id:"room",style:{display:"none"}},[(0,i.Wm)("h2",{id:"room-header"}),(0,i.Wm)("div",{id:"participants"}),(0,i.Wm)("input",{type:"button",id:"button-leave",onmouseup:"leaveRoom();",value:"Leave room"})],-1);function P(e,t,o,a,P,Y){const J=(0,i.up)("q-img"),X=(0,i.up)("q-card-actions"),ee=(0,i.up)("q-card"),te=(0,i.up)("q-btn"),oe=(0,i.up)("q-avatar");return(0,i.wg)(),(0,i.j4)(i.HY,null,[(0,i.Wm)("div",m,[(0,i.Wm)("div",d,[(0,i.Wm)("div",r,[0===e.rooms.length?((0,i.wg)(),(0,i.j4)("div",c," 현재 개설된 회의가 없습니다. ")):(0,i.kq)("",!0),(0,i.Wm)("form",u,[(0,i.Wm)("p",null,[(0,i.wy)((0,i.Wm)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.state.roomName=t),style:{"margin-top":"10px"},type:"text",name:"room",id:"roomName",placeholder:"Room",required:""},null,512),[[n.F8,!1],[n.nr,e.state.roomName]])]),(0,i.Wm)("p",null,[(0,i.wy)((0,i.Wm)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.state.id=t),type:"text",name:"name",id:"rtcName",placeholder:"Username",required:""},null,512),[[n.F8,!1],[n.nr,e.state.id]])]),(0,i.Wm)("p",p,[(0,i.Wm)("input",{id:"submit",type:"submit",name:"commit",value:"회의생성",onClick:t[3]||(t[3]=t=>e.getRoomName(e.state.roomName))})])]),(0,i.Wm)("div",g,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.rooms,(t=>((0,i.wg)(),(0,i.j4)(ee,{key:t.id,class:"my-card",style:{"margin-top":"100px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(J,{src:s(),style:{}},{default:(0,i.w5)((()=>[(0,i.Wm)("div",f,[(0,i.Wm)("div",v,(0,l.zw)(t.roomName),1),(0,i.Wm)("div",h,(0,l.zw)(t.id),1)])])),_:2},1024),(0,i.Wm)(X,null,{default:(0,i.w5)((()=>[(0,i.Wm)("form",y,[(0,i.Wm)("input",{id:"joinUser",value:e.id,style:{display:"none"}},null,8,["value"]),(0,i.Wm)("input",{id:"joinConferenceRoom",style:{display:"none"},value:t.roomName},null,8,["value"]),(0,i.Wm)("input",{class:"enter",type:"submit",name:"commit",value:"회의입장",onClick:o=>e.getRoomName(t.roomName)},null,8,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))])]),(0,i.Wm)("div",W,[b,e.downMode?((0,i.wg)(),(0,i.j4)("div",w,[(0,i.Wm)(te,{onClick:e.reRtcFileList,round:"",style:{"background-color":"#249752",color:"white",float:"right","margin-right":"5px","margin-top":"5px",width:"10px"},icon:"refresh"},null,8,["onClick"]),(0,i.Wm)("div",x,[e.form.images?((0,i.wg)(),(0,i.j4)("div",{key:0,class:"margin-auto file-mounted",onDrop:t[4]||(t[4]=(0,n.iM)((t=>e.dropInputTag(t)),["prevent"])),onDragover:t[5]||(t[5]=(0,n.iM)((()=>{}),["prevent"]))},[(0,i.Wm)("div",F,[(0,i.Wm)("img",{src:e.form.images,alt:"image",class:"present-image"},null,8,["src"]),k]),(0,i.Wm)("div",L,(0,l.zw)(e.form.image.name),1),(0,i.Wm)("div",R,(0,l.zw)(e.fileSizeFilter),1)],32)):((0,i.wg)(),(0,i.j4)("div",{key:1,id:"unSelectFileFrame",class:"margin-auto file-frame",onClick:t[6]||(t[6]=t=>e.clickInputTag()),onDrop:t[7]||(t[7]=(0,n.iM)((t=>e.dropInputTag(t)),["prevent"])),onDragenter:t[8]||(t[8]=t=>e.dragEnter()),onDragleave:t[9]||(t[9]=t=>e.dragLeave()),onDragover:t[10]||(t[10]=(0,n.iM)((()=>{}),["prevent"]))},[N],32)),(0,i.Wm)("div",C,[(0,i.Wm)("div",null,[(0,i.Wm)(te,{onClick:e.regist,class:"upload-btn "},{default:(0,i.w5)((()=>[j])),_:1},8,["onClick"])]),(0,i.Wm)("div",q,[(0,i.Wm)(te,{onClick:e.reset,class:"reset-btn"},{default:(0,i.w5)((()=>[U])),_:1},8,["onClick"])])])]),(0,i.Wm)("div",D,[((0,i.wg)(!0),(0,i.j4)(i.HY,null,(0,i.Ko)(e.rtcFileList,(t=>((0,i.wg)(),(0,i.j4)("div",{class:"col-3",key:t.id},[(0,i.Wm)(oe,{size:"70px",class:"shadow-10",style:{cursor:"pointer","margin-top":"40px","margin-left":"27px"},onClick:o=>e.downloadFile(t.id)},{default:(0,i.w5)((()=>[(0,i.Wm)("img",{src:t.imageLocation},null,8,["src"])])),_:2},1032,["onClick"]),(0,i.Wm)("div",E,(0,l.zw)(t.fileName),1)])))),128))])])):(0,i.kq)("",!0),(0,i.Wm)("div",I,[z,M,(0,i.Wm)("div",T,[(0,i.Wm)("form",B,[(0,i.Wm)("input",{type:"text",id:"guest",class:"form-control",value:e.name,style:{display:"none"}},null,8,["value"]),S,(0,i.wy)((0,i.Wm)("input",{type:"text",id:"roomName",class:"form-control",style:{display:"none"},"onUpdate:modelValue":t[11]||(t[11]=t=>e.rName=t)},null,512),[[n.nr,e.rName]]),V])])]),(0,i.Wm)("div",_,[(0,i.Wm)("form",O,[(0,i.Wm)("form",Z,[(0,i.Wm)("input",{value:e.id,style:{display:"none"}},null,8,["value"]),$]),(0,i.Wm)("form",G,[(0,i.Wm)("input",{value:e.id,style:{display:"none"}},null,8,["value"]),Q]),(0,i.Wm)("input",{type:"button",id:"downBt",onClick:t[12]||(t[12]=(...t)=>e.downView&&e.downView(...t))}),A])])])])]),H,K],64)}o(7280),o(7965);var Y=o(1959),J=o(7874);const X=(0,i.aZ)({computed:{fileSizeFilter(){const e=this.form.image.size;let t="";return t=e/1e6>=1?(e/1e6).toFixed(2)+"MB":e/1e3>=1?(e/1e3).toFixed(2)+"KB":e+"B",t}},setup(){const e=o(1770);function t(t){e.fire({title:'<span style="font-family:NEXON Lv1 Gothic OTF; font-size:16px;">'+t+"</span>",confirmButtonColor:"#19CE60",confirmButtonText:'<span style="font-family:NEXON Lv1 Gothic OTF; font-size:14px;">확인</span>'})}const n=(0,J.oR)(),l=(0,Y.qj)({id:localStorage.getItem("id"),roomName:localStorage.getItem("id")+"님의 회의방"}),a=(0,Y.qj)({image:null,tmp:"",images:"",subSdieVisible:!1}),s=n.getters["module/getLoginUser"],m=s.id,d=s.name,r=(0,i.Fl)((()=>n.getters["module/getRooms"])),c=(0,i.Fl)((()=>n.getters["module/getRoomName"])),u=function(e){n.commit("module/setRoomName",e)},p=(0,i.Fl)((()=>n.getters["module/getDownMode"])),g=(0,i.Fl)((()=>n.getters["module/getRtcFileList"])),f=(0,i.Fl)((()=>n.getters["module/getFileImage"])).value;var v=[];(0,i.bv)((()=>{n.dispatch("module/getRooms",{}).then((function(e){for(let o=0;o<e.data.length;o++){var t={roomName:e.data[o][0],id:e.data[o][1]};v.push(t)}n.commit("module/setRooms",v),v=[],console.log(r)})),n.commit("module/setDownMode",!1)}));const h=function(){const e=document.getElementById("chatchat"),t=document.getElementById("chatDiv"),o=n.getters["module/getDownMode"];o?(e.style.height="909px",e.style.top="0px",t.style.height="795px"):(e.style.height="449px",e.style.top="428px",t.style.height="375px"),n.commit("module/setDownMode",!o),n.dispatch("module/loadFileData").then((function(e){var t=0,o=[];for(let i=e.data.length-1;i>=0;i--){const n=e.data[i].fileExtension.substring(1,e.data[i].fileExtension.length);if(e.data[i].imageLocation=void 0===f[n]?f.other:f[n],4===t)break;o.push(e.data[i]),t++}n.commit("module/setRtcFileList",o),console.log(e.data),o=[]}))},y=function(){n.dispatch("module/loadFileData").then((function(e){var t=0,o=[];for(let i=e.data.length-1;i>=0;i--){const n=e.data[i].fileExtension.substring(1,e.data[i].fileExtension.length);if(e.data[i].imageLocation=void 0===f[n]?f.other:f[n],4===t)break;o.push(e.data[i]),t++}n.commit("module/setRtcFileList",o),o=[]}))};function W(e){console.log(e),n.dispatch("module/downloadFile",e).then((function(e){const t=e.headers["content-disposition"],o=t.split("''")[1];console.log(e.headers["content-type"]),console.log(t);const i=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=i,n.setAttribute("download",o),document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(i)})).catch((function(e){console.log(e)}))}function b(e){console.log("영역안에 파일이 지정됨");const t=Array.from(e.dataTransfer.files,(e=>e))[0],o=t.name.split(".")[1],i=["jpg","JPG","jpeg","JPEG","png","PNG","gif","GIF"];i.includes(o)?a.images=URL.createObjectURL(t):a.images=void 0===f[o]?f.other:f[o],a.image=t,console.log("영역안에 파일이 지정됨 end")}function w(){console.log("영역 안을 클릭함"),console.log("영역 안을 클릭함 end")}function x(){const e=document.getElementById("unSelectFileFrame");e.classList.add("file-mounted","margin-auto")}function F(){const e=document.getElementById("unSelectFileFrame");e.classList.remove("file-mounted"),e.classList.add("file-frame")}function k(){a.image=null,a.images=null}function L(){if(null==a.image)return void t("업로드할 파일을 지정해주세요.");const e=new FormData;e.append("file",a.image),n.dispatch("module/uploadFile",e).then((function(e){if(console.log(e.data),200===e.status)return n.dispatch("module/loadFileData").then((function(e){var t=0,o=[];for(let i=e.data.length-1;i>=0;i--){const n=e.data[i].fileExtension.substring(1,e.data[i].fileExtension.length);if(e.data[i].imageLocation=void 0===f[n]?f.other:f[n],4===t)break;o.push(e.data[i]),t++}n.commit("module/setRtcFileList",o),o=[]})),t("파일이 정상적으로 업로드 됐습니다."),!0})).catch((function(e){console.log(e),t("파일 업로드 중 문제가 발생했습니다.")}))}return{rooms:r,state:l,id:m,name:d,rName:c,getRoomName:u,downView:h,downMode:p,rtcFileList:g,reRtcFileList:y,downloadFile:W,form:a,dropInputTag:b,clickInputTag:w,dragEnter:x,dragLeave:F,reset:k,regist:L}}});var ee=o(151),te=o(4027),oe=o(9367),ie=o(2165),ne=o(5096),le=o(4554),ae=o(7518),se=o.n(ae);X.render=P;const me=X;se()(X,"components",{QCard:ee.Z,QImg:te.Z,QCardActions:oe.Z,QBtn:ie.Z,QAvatar:ne.Z,QIcon:le.Z})},4297:(e,t,o)=>{e.exports=o.p+"img/office.9513d12d.jpg"}}]);