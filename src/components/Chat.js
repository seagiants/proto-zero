import React from "react";

const Chat = () => {
  let so = new WebSocket("ws://localhost:9000/ws-test/123");
  let message;
  so.onmessage = (data) => {
    console.log("message received from server", data);
  };
  return (
    <div>
      <input type="text" ref={(input) => { message = input.value; }}/>
      <button
        onClick={e => {
          e.preventDefault();
          so.send(message);
        }}
      >
        S E N D
      </button>
    </div>
  );
};

export default Chat;
