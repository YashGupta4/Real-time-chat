
const chatForm=document.getElementById("chat-form");
const chatMessage=document.querySelector(".chat-messages");
const  roomName=document.getElementById("room-name");
const  userList=document.getElementById("users");


//get username and room form query using qs libray using parse and window location search
const {username,room}=Qs.parse(location.search,{
    ignoreQueryPrefix : true
});
//console.log(username,room);

const socket=io();
 
//join chat room
socket.emit("joinRoom",{username,room});

//get room and users info
socket.on("roomUsers",({room,users})=>{
    outputRoomName(room);
    outputUsers(users);

});
//Message from server
socket.on("message",message=>{
    console.log(message);
    outputMessage(message);

    //scroll-down
    chatMessage.scrollTop=chatMessage.scrollHeight;


});

//message submit

chatForm.addEventListener("submit",e =>{
    e.preventDefault();
    //get message text
    const msg=e.target.elements.msg.value;

    //emitting a msg to server
    socket.emit("chatMessage",msg);

    //make textbox clear on submit
    e.target.elements.msg.value='';
    e.target.elements.msg.focus();
});

//outputMessage to dom
function outputMessage(message){
    const div=document.createElement('div');
    div.classList.add("message");
    div.innerHTML=`<p class="meta">${message.username} <span>${message.time}</span></p>
						<p class="text">
							${message.text}
						</p>`;
    document.querySelector(".chat-messages").appendChild(div);
}


//Add room name to dom
function outputRoomName(room){
    roomName.innerText=room;

}

//Add users to Dom
function outputUsers(users){
    userList.innerHTML=`
    ${users.map(user=>`<li>${user.username}</li>`).join('')}`;
}