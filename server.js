import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import { Server } from "socket.io";
import formatMessage from "./utils/messages.js";
import { getCurrentUser, userJoin, userLeave, getRoomUsers } from "./utils/users.js";

const port = 3000 || process.env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//set static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/",(req,res)=>{
//     res.render("index.html");
// })

const botName = "ChatCord Bot";

//Run when client connects
io.on("connection", (socket) => {
  //console.log("new web socket connection");
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);
    //Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to Chat Cord")); // to user that is connecting

    //broadcast when a user connects to  everybody excpet the user that is connecting
    socket.broadcast.to(user.room).emit(
      "message",
      formatMessage(botName, `${user.username} has joined the chat`)
    );

    //send user and room info
    io.to(user.room).emit("roomUsers",{
        room: user.room,
        users: getRoomUsers(user.room)

    });
  });

  //listen chat message on server side
  socket.on("chatMessage", (msg) => {
    const user=getCurrentUser(socket.id);
    if(user){
        io.to(user.room).emit("message", formatMessage(user.username, msg));
    }else{
        console.error(`User not found for socket id ${socket.id}`);
    }
    
  });
  //run when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});


server.listen(port, () => {
  console.log(`server running on http://localhost:${port}/`);
});
