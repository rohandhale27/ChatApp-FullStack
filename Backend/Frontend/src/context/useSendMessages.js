import { useState, useEffect } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  query: { userId: localStorage.getItem("userId") }, // Make sure to adjust this according to how you store the user ID
});

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    if (selectedConversation && selectedConversation._id) {
      socket.emit('join_conversation', selectedConversation._id);
    }

    socket.on('receive_message', (newMessage) => {
      if (newMessage.conversationId === selectedConversation._id) {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    });

    return () => {
      socket.off('receive_message');
    };
  }, [selectedConversation, setMessages]);

  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessages([...messages, res.data]);
      socket.emit('send_message', { ...res.data, conversationId: selectedConversation._id });
    } catch (error) {
      console.log("Error in sending messages", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessages };
};

export default useSendMessage;
