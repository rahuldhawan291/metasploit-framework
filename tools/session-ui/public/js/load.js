
function postModule() {
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:3000/post";
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = function () {
        var postJson = xhr.response;
        var postData = JSON.parse(postJson);
        if (xhr.readyState === 4 && xhr.status === 200) {
            var arr = Object.keys(postData);
            for (var i = 0; i < arr.length; i++) {

                var text = document.createElement("li");
                var myList = document.createElement("ul");
                myList.setAttribute("class","list-unstyled navbar__sub-list js-sub-list");
                text.setAttribute("class","active has-sub");
                var anchor= document.createElement("a");
                anchor.setAttribute("class","js-arrow");
                anchor.setAttribute("href","#");


                anchor.textContent = arr[i];

                var post_mod = postData[arr[i]]; 		// content inside windows,linux
                var postmod_key = Object.keys(post_mod);

                if (postmod_key[i] != 0) {
                    for (var j = 0; j < postmod_key.length; j++) {
                        var subList = document.createElement("li");
                        subList.setAttribute("class","active has-sub");
                        var anchor1=document.createElement("a");
                        anchor1.setAttribute("class","js-arrow");
                        anchor1.setAttribute("href","#");
                        subList.appendChild(anchor1);
                        anchor1.textContent = postmod_key[j];
                        var value= post_mod[postmod_key[j]];
                        if(value!=0){
                            for(var k=0;k<value.length;k++){
                                var valueSubList=document.createElement("ul");
                                valueSubList.setAttribute("class","list-unstyled navbar__sub-list-2 js-sub-list");
                                var valueList=document.createElement("li");
                                valueList.setAttribute("class","active has-sub");
                                var anchor2=document.createElement('a');
                                anchor2.setAttribute("class","js_arrow");
                                anchor2.setAttribute("href","#");
                                anchor2.textContent = value[k];
                                valueList.appendChild(anchor2);
                                valueSubList.appendChild(valueList);

                                subList.appendChild(valueSubList);
                                myList.appendChild(subList);
                            }
                        }
                    }
                }
                text.appendChild(anchor);
                text.appendChild(myList);
                document.getElementById("post").appendChild(text);
            }

        }
    }
}

function ExtensionCommand() {
    var xhr2 = new XMLHttpRequest();
    var url = "http://127.0.0.1:3000/exten";
    xhr2.open("GET", url);
    xhr2.send();

    xhr2.onload = function () {
        var extenJson = xhr2.response;
        var extenData = JSON.parse(extenJson);
        if (xhr2.readyState === 4 && xhr2.status === 200) {
            var val = Object.values(extenData);
            for (var i = 0; i < val.length; i++) {

                var list = document.createElement("li");
                list.setAttribute("class", "active");
                var ancr = document.createElement("a");
                ancr.setAttribute("class", "js-arrow");
                ancr.setAttribute("href", "#");
                ancr.textContent = val[i];
                list.appendChild(ancr);
                document.getElementById("exten").appendChild(list);
            }

        }
        else
            alert("Unable To load Extension Command");
    }

}







/*----------------- Implementation of web socket for Browser shell.-------------

var wsuri = "ws://127.0.0.1:3000/soc";
var output;

function init()
{
output=document.getElementById("add");
testWebSocket();
}

function testWebSocket()
{
websocket=new WebSocket(wsuri);
websocket.onopen=function(evt){ onOpen(evt) };
websocket.onclose=function(evt){ onClose(evt) };
websocket.onmessage=function(evt){ onMessage(evt) };
websocket.onerror=function(evt) { onError(evt) };

}

function onOpen(evt)
{
writeToScreen("CONNECTED !");
doSend("WebSocket rocks");
}

function onClose(evt)
{
writeToScreen("DISCONNECTED");
}

function onMessage(evt)
{
writeToScreen('<span style="color: blue;"> Response : ' + evt.data + '</span>');
websocket.close();
}

function onError(evt)
{
writeToScreen('<span style="color:red;">ERROR: </span>' + evt.data)
}

function doSend(message)
{
writeToScreen("SENT: " + message);
websocket.send(message);
}

function writeToScreen(message)
{
var pre=document.createElement("p");
pre.style.wordWrap = 'break-word';
pre.innerHTML=message;
output.appendChild(pre);
}

window.addEventListener("load",init,false)

--------------------------End Of Web Socket Section ------------------------*/
