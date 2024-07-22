import React from 'react';

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("Chatapp"));
  const itsMe = message.senderId === authUser?.user?._id;

  const chatAlignment = itsMe ? "chat-end" : "chat-start";
  const chatBubbleColor = itsMe ? "bg-blue-500" : ""; // Assuming default color for received messages
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-4">
      <div className={`chat ${chatAlignment}`}>
        <div className={`chat-bubble text-white ${chatBubbleColor}`}>
          {message.message}
        </div>
        <div className="chat-footer">{formattedTime}</div>
      </div>
    </div>
  );
};

export default Message;
