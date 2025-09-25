import React from 'react';

const SkillCard = ({ title, icon }: { title: string, icon: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-2 bg-gray-700 rounded-full h-32 w-32 md:h-40 md:w-40 transform transition-transform hover:scale-105">
      <div className="text-4xl text-white">
        {icon}
      </div>
      <p className="mt-2 text-sm text-center text-white">{title}</p>
    </div>
  );
};

export default SkillCard;