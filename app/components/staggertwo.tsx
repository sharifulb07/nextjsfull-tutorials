"use client";
import { useState } from "react";
import { motion } from "motion/react";

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1727114413087-cf1a8020fcb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "1",
  },
  {
    src: "https://images.unsplash.com/photo-1760101313986-5be60ffec522?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "2",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1759432613790-1b36095b72da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "3",
  },
  {
    src: "https://images.unsplash.com/photo-1759841747211-614e904a542b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "4",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1760131843176-2df6e8b13183?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "5",
  },
  {
    src: "https://images.unsplash.com/photo-1760081860009-c91f769ba517?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "6",
  },
  {
    src: "https://images.unsplash.com/photo-1760071840954-1a8f2865ec2a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "7",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1759802329709-e4ffbf791bdf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "8",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1759414754048-6ae705e6b1b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
    caption: "9",
  },
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StaggerTwo() {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => {
    setShowImages((prev) => !prev);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="mb-[2rem] p-4 rounded-lg bg-yellow-300 text-black font-bold"
      >
        {showImages ? "Show Images" : "Hide Images"}
      </button>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate={showImages ? "hidden" : "visible"}
        className="flex"
      >
        {images.map((image, index) => (
          <motion.img
            variants={childVariants}
            src={image.src}
            alt={image.caption}
            key={index}
            className="ml-[2rem] h-auto w-[300px] rounded"
          />
        ))}
      </motion.div>
    </div>
  );
}
