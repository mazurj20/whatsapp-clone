import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import Login from "./Login";

function App() {
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("/messages/sync").then((res) => {
      setMessages(res.data);
    });
  }, []);

  console.log(messages);

  useEffect(() => {
    const pusher = new Pusher("d178400321556bd83beb", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="app__body">
            <Sidebar />
            <Chat messages={messages} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
