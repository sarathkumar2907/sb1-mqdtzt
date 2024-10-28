import React from 'react';
import { agents } from '../data/agents';

export const AgentList: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 border-l">
      <h2 className="text-lg font-semibold mb-4">Active Agents</h2>
      <div className="space-y-4">
        {agents.map((agent) => {
          const Icon = agent.avatar;
          return (
            <div key={agent.id} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
              <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                <Icon size={16} />
              </div>
              <div>
                <h3 className="font-medium text-sm">{agent.name}</h3>
                <p className="text-xs text-gray-500">{agent.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};