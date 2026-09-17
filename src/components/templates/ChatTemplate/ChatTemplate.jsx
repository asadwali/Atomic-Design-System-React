// components/templates/ChatTemplate.jsx
import { useState } from "react";
import ChatMessage from "../../molecules/Chat/Chat"; // Assuming ChatMessage is in molecules/Chat

const initialMessages = [
  {
    id: 1,
    name: "Lana Steiner",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    message: "Hey Olivia, can you please review the latest design when you can?",
    avatar: "https://i.pravatar.cc/300",
    isCurrentUser: false,
    dateString: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Phoenix Baker",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    message: "",
    attachment: {
      name: "Latest design screenshot.jpg",
      size: "1.2 MB",
    },
    avatar: "https://i.pravatar.cc/300",
    isCurrentUser: false,
    dateString: new Date().toISOString(),
  },
  {
    id: 3,
    name: "You",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    message: "Sure thing, I’ll have a look today.",
    avatar: "https://i.pravatar.cc/300",
    isCurrentUser: true,
    dateString: new Date().toISOString(),
  },
  {
    id: 4,
    name: "David Baker",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    message: "Hey Olivia, can you please review the latest design when you can?",
    avatar: "https://i.pravatar.cc/300",
    isCurrentUser: false,
    dateString: new Date().toISOString(),
  },
  {
    id: 5,
    name: "Ali Abbas",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    message: "Sure thing, I’ll have a look today.",
    avatar: "https://i.pravatar.cc/300",
    isCurrentUser: true,
    dateString: new Date().toISOString(),
  },
];

const ChatTemplate = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: "You",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      message: text,
      avatar: "https://i.pravatar.cc/300",
      isCurrentUser: true,
      isToday: true,
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  const uniqueParticipants = Array.from(
    new Map(
      messages.map(m => [
        m.name,
        { name: m.name, imageUrl: m.avatar }
      ])
    ).values()
  );

  const handleAttach = () => {
    alert("📎 Open file picker here!");
  };

  // emoji picker
  const handleEmoji = () => {
    alert("😀 Open emoji picker here!");
  };

  return (
    <>
      <ChatMessage
        messages={messages}
        currentUser="You"
        onSend={handleSend}
        chatTitle="Group Chat"
        chatSubtitle=""
        showTabs
        participants={uniqueParticipants}
        onAttach={handleAttach}
        onEmoji={handleEmoji}
      />
    </>
  );
};

export default ChatTemplate;
