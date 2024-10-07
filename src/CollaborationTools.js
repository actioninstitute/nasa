import React, { useState } from "react";
import { CollaborationToolsWrapper } from "./stylecomponent/StyledComponents";


const CollaborationTools = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleSendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <CollaborationToolsWrapper>
      <h2>Collaboration Tools</h2>
      <div className="messages">
        <h3>Messages</h3>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send Message</button>
      </div>
      <div className="tasks">
        <h3>Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Type a task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </CollaborationToolsWrapper>
  );
};

export default CollaborationTools;