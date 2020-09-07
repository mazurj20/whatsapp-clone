import React, { useState } from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  Message,
  InsertEmoticon,
  SettingsInputAntenna,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";
import { useStateValue } from "./StateProvider";

function Chat({ messages }) {
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();
  console.log(user);

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/messages/new", {
      message: input,
      name: user.displayName,
      timestamp: new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(Date.now()),
      recieved: false,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={user.photoURL} />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__reciever"
            }`}
          >
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            send a Message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
