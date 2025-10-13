"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { ChangeEvent } from "react";

export const MotionCard = () => {
  // const scale=useMotionValue(1);
  const scale = useSpring(1);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };

  return (
    <div>
      <motion.div className="box" style={{ scale }} />
      <div className="mt-[12rem]">
        <input
          type="range"
          min={1}
          max={5}
          step={0.1}
          defaultValue={1}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};
