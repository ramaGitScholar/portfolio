"use client";
import { FaReact, FaNodeJs, FaPython, FaLaravel,  } from "react-icons/fa";
import { SiTypescript, SiMysql, SiTailwindcss, SiScikitlearn, SiTensorflow } from "react-icons/si";

const stacks = [
  { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
  { icon: <FaNodeJs size={40} color="#3C873A" />, name: "Node.js" },
  { icon: <SiTypescript size={40} color="#3178C6" />, name: "TypeScript" },
  { icon: <FaPython size={40} color="#FFD43B" />, name: "Python" },
  { icon: <SiMysql size={40} color="#00618A" />, name: "MySQL" },
  { icon: <FaLaravel size={40} color="#00618A" />, name: "Laravel" },
  { icon: <SiTailwindcss size={40} color="#00618A" />, name: "Tailwind" },
  { icon: <SiScikitlearn size={40} color="#f05340 " />, name: "Scikit Learn" },
  { icon: <SiTensorflow size={40} color="#00618A" />, name: "TensorFlow" },
];

export default function Skills() {
  return (
    <div className="overflow-hidden w-full py-6 h-2/5 flex justify-between items-center">
      {/* Isi yang bergerak */}
      <div className="flex gap-16 animate-scroll">
        {[...stacks, ...stacks].map((stack, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-20 h-20 scale-150 rounded-full bg-gray-800 shadow-lg flex-grow-0 flex-shrink-0 basis-[5em] hover:scale-200 transition-all duration-75"
          >
            {stack.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
