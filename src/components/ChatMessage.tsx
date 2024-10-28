import React from 'react';
import { Message } from '../types';
import { agents } from '../data/agents';
import { User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const agent = message.agentType ? agents.find(a => a.type === message.agentType) : null;
  const Icon = agent?.avatar || User;
  
  return (
    <div className={`flex gap-4 p-4 ${message.role === 'user' ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="flex-shrink-0">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          message.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'
        }`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">
            {message.role === 'user' ? 'You' : agent?.name || 'Agent'}
          </span>
          <span className="text-sm text-gray-500">
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
        <p className="mt-1 text-gray-700">{message.content}</p>
      </div>
    </div>
  );
};