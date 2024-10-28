import React from 'react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { AgentList } from './components/AgentList';
import { useAgentChat } from './hooks/useAgentChat';

function App() {
  const { messages, isProcessing, sendMessage } = useAgentChat();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Multi-Agent Chat System</h1>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-4">
          <div className="col-span-3 flex flex-col h-[800px]">
            <div className="flex-1 overflow-y-auto">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isProcessing && (
                <div className="p-4 text-gray-500 italic">
                  Agents are processing your message...
                </div>
              )}
            </div>
            <ChatInput onSendMessage={sendMessage} disabled={isProcessing} />
          </div>
          
          <AgentList />
        </div>
      </div>
    </div>
  );
}

export default App;