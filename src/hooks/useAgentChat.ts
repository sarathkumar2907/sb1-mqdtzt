import { useState, useCallback } from 'react';
import { Message, AgentType } from '../types';

const generateResponse = (userMessage: string): Message[] => {
  const responses: Message[] = [];
  const agentTypes: AgentType[] = ['researcher', 'analyst', 'critic', 'coordinator'];
  
  agentTypes.forEach((type) => {
    let content = '';
    switch (type) {
      case 'researcher':
        content = `Based on my research, "${userMessage}" relates to several key points...`;
        break;
      case 'analyst':
        content = `Analyzing the information, I can identify the following patterns...`;
        break;
      case 'critic':
        content = `While the approach has merit, we should consider these potential challenges...`;
        break;
      case 'coordinator':
        content = `Synthesizing our findings, here's a comprehensive response to "${userMessage}"...`;
        break;
    }
    
    responses.push({
      id: Math.random().toString(36).substr(2, 9),
      content,
      sender: type,
      timestamp: new Date(Date.now() + responses.length * 1000),
      role: 'agent',
      agentType: type
    });
  });
  
  return responses;
};

export const useAgentChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const sendMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      content,
      sender: 'user',
      timestamp: new Date(),
      role: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsProcessing(true);

    // Simulate agent responses with delays
    setTimeout(() => {
      const responses = generateResponse(content);
      setMessages(prev => [...prev, ...responses]);
      setIsProcessing(false);
    }, 1000);
  }, []);

  return {
    messages,
    isProcessing,
    sendMessage
  };
};