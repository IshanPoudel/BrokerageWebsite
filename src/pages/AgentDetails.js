import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaInstagram , FaYoutube , FaFacebook , FaLinkedin  } from 'react-icons/fa';

const AgentDetails = () => {
  const { agentId } = useParams();
  const [agentData, setAgentData] = useState(null);

  const fetchAgentData = async () => {
    try {
      const response = await fetch('https://rapiddb.link/_get_agents_a8166da05c');
      const data = await response.json();
      const agent = data.result.find(agent => agent.id === parseInt(agentId));
      setAgentData(agent);
    } catch (error) {
      console.error('Error fetching agent data:', error);
    }
  };

  useEffect(() => {
    fetchAgentData();
  }, [agentId]);

  if (!agentData) {
    return null; // Handle loading state or error
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 flex">
      <div className="flex-none mr-8">
        <img src={agentData.image} alt={agentData.name} className="w-64 h-auto rounded-lg shadow-lg" />
        <a href={agentData.social} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <div className="flex space-x-4">
              <FaInstagram className="text-purple-500 text-2xl hover:text-purple-600 duration-300" />
              <FaFacebook className="text-blue-500 text-2xl hover:text-blue-600 duration-300" />
              <FaYoutube className="text-red-500 text-2xl hover:text-red-600 duration-300" />
              <FaLinkedin className="text-blue-500 text-2xl hover:text-blue-600 duration-300" />
            </div>
                    

          



        </a>
      </div>
      <div className="flex-grow">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">{agentData.name}</h2>
        <p className="text-gray-600 mb-1">{agentData.email}</p>
        <p className="text-gray-600 mb-4">{agentData.Liscence}</p>
        <div className="border-t pt-4">
          <p className="font-semibold mb-2 text-gray-800">Description:</p>
          <p className="text-gray-600">{agentData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AgentDetails;
