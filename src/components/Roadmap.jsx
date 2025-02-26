import React from 'react';
import useLocalStorage from 'use-local-storage';
import { FaCheck } from 'react-icons/fa';

const Roadmap = ({ steps }) => {
  const [completedSteps, setCompletedSteps] = useLocalStorage('roadmapProgress', Array(steps.length).fill(false));

  const toggleStep = (index) => {
    const newCompleted = [...completedSteps];
    newCompleted[index] = !newCompleted[index];
    setCompletedSteps(newCompleted);
  };

  return (
    <div className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-caveat font-bold text-purple-400 mb-4">Your Robotics Roadmap</h2>
      <p className="text-lg font-poppins text-gray-300 mb-4">Check off steps as you go!</p>
      <ul className="space-y-3">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`flex items-center p-3 rounded-md cursor-pointer transition-colors duration-200 ${
              completedSteps[index] ? 'bg-green-800 text-gray-200' : 'bg-gray-800 text-gray-400'
            }`}
            onClick={() => toggleStep(index)}
          >
            <FaCheck className={`mr-3 ${completedSteps[index] ? 'text-green-400' : 'text-gray-600'}`} />
            <span className="text-base font-poppins">{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;