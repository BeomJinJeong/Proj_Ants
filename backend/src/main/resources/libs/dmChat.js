var dmStompClient = null;

function dmSetConnected(connected) {
    console.log("setConnected");
    $('#connect').prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function dmConnect(room, name) {
    console.log("room: " + room);
    var dmSocket = new SockJS('/websocket');
    dmStompClient = Stomp.over(dmSocket);
    dmStompClient.connect({}, function (frame) {
        dmSetConnected(true);
        console.log('Connected: ' + frame);
//        dmStompClient.subscribe('/topic/greetings', function (greeting) {
//            dmShowGreeting(JSON.parse(greeting.body).content);
//        });
        dmStompClient.subscribe('/topic/dm/' + room, function (chat) {
        	dmShowChat(JSON.parse(chat.body), name);
        });
    });
}

function dmDisconnect() {
    if (dmStompClient !== null) {
        dmStompClient.disconnect();
    }
    dmSetConnected(false);
    console.log("Disconnected");
}

function dmSendName() {
    dmStompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
    dmSendChat();
}

function dmSendChat(room, name, message) {
	dmStompClient.send("/app/dm/" + room, {}, JSON.stringify({'user': name, 'message': message, 'roomId': room}));
}

function dmShowGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}
function dmShowChat(dm, myname) {
    $("#dmChatWindow").append("<div class=\"test\">" + dm.name + " :text=" + dm.message + "</div>");
}

//$(function () {
//    $('form').on('submit', function (e) {
//        e.preventDefault();
//    });
//    console.log("hi");
//    connect();
//    sendName();
//    sendChat();
//    $("#connect").click(function() {
//        console.log("connect");
//        connect();
//    });
//    $("#disconnect").click(function() { disconnect(); });
//    $("#chatSend").click(function() { sendName(); });
//    $("#chatSend").click(function(){ sendChat(); });
//});