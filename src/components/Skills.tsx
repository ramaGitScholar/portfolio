"use client";
import { FaReact, FaNodeJs, FaPython, FaLaravel,  } from "react-icons/fa";
import { SiTypescript, SiMysql, SiTailwindcss, SiScikitlearn, SiTensorflow } from "react-icons/si";

const stacks = [
  { icon: <FaReact size={30} color="#61DBFB" />, name: "React" },
  { icon: <FaNodeJs size={30} color="#3C873A" />, name: "Node.js" },
  { icon: <SiTypescript size={30} color="#3178C6" />, name: "TypeScript" },
  { icon: <FaPython size={30} color="#FFD43B" />, name: "Python" },
  { icon: <SiMysql size={30} color="#00618A" />, name: "MySQL" },
  { icon: <FaLaravel size={30} color="#00618A" />, name: "Laravel" },
  { icon: <SiTailwindcss size={30} color="#00618A" />, name: "Tailwind" },
  { icon: <SiScikitlearn size={30} color="#f05330 " />, name: "Scikit Learn" },
  { icon: <SiTensorflow size={30} color="#00618A" />, name: "TensorFlow" },
];

export default function Skills() {
  return (
    <div className="overflow-hidden w-full py-7 flex justify-between items-center absolute">
      {/* Isi yang bergerak */}
      <div className="flex gap-32 animate-scroll">
        {[...stacks, ...stacks].map((stack, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-20 h-20 scale-125 rounded-full shadow-lg hover:scale-150 transition-all duration-75"
          >
            {stack.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
