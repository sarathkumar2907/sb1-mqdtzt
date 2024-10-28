import { Agent } from '../types';
import { Brain, LineChart, Shield, Users } from 'lucide-react';

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Research Agent',
    type: 'researcher',
    avatar: Brain,
    description: 'Gathers and provides relevant information'
  },
  {
    id: '2',
    name: 'Analysis Agent',
    type: 'analyst',
    avatar: LineChart,
    description: 'Analyzes data and provides insights'
  },
  {
    id: '3',
    name: 'Critic Agent',
    type: 'critic',
    avatar: Shield,
    description: 'Evaluates proposals and identifies potential issues'
  },
  {
    id: '4',
    name: 'Coordinator',
    type: 'coordinator',
    avatar: Users,
    description: 'Manages conversation flow and synthesizes conclusions'
  }
];