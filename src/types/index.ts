export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  role: 'user' | 'agent';
  agentType?: AgentType;
}

export type AgentType = 'researcher' | 'analyst' | 'critic' | 'coordinator';

export interface Agent {
  id: string;
  name: string;
  type: AgentType;
  avatar: string;
  description: string;
}