import * as motion from "motion/react-client";

const parentVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Stagger() {
  return (
    <motion.div
      className="flex space-x-4"
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      {[...Array(5)].map((_, index) => (
        <motion.div className="box" key={index} variants={childVariant} />
      ))}
    </motion.div>
  );
}
