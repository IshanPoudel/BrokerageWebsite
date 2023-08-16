import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Agents = () => {
  const [agentsData, setAgentsData] = useState([]);

  const fetchAgentsData = async () => {
    try {
      const response = await fetch('https://rapiddb.link/_get_agents_a8166da05c');
      const data = await response.json();
      setAgentsData(data.result);
    } catch (error) {
      console.error('Error fetching agents data:', error);
    }
  };

  useEffect(() => {
    fetchAgentsData();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 text-gray-800">
          MEET OUR AGENTS
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-600">
          <span className="text-purple-500">Quality</span> over{' '}
          <span className="text-purple-500">Quantity</span>.
        </p>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          The Agency carefully selects our real estate partners ensuring our agents are the best
          experts, <span className="text-purple-500">advocates</span>, and{' '}
          <span className="text-purple-500">advisors</span> in the business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {agentsData.map(agent => (
          <Link
            key={agent.id}
            to={`/agent/${agent.id}`}
            className="border p-6 rounded-lg hover:shadow-md transition duration-300 ease-in-out text-center"
          >
            <img src={agent.image} alt={agent.name} className="w-full h-80 object-cover mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-purple-500 mb-2">{agent.name}</h2>
            <p className="text-gray-600 mb-1">{agent.email}</p>
            <p className="text-gray-600">{agent.Liscence}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Agents;
