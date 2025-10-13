import * as motion from "motion/react-client";

const boxes = Array.from({ length: 10 }, (_, index) => index + 1);

export default function Two() {
  return (
    <div className="min-h-screen mt-[300rem] flex-col flex items-center justify-center">
      <h2 className="text-4xl font-bold mb-10 flex-col text-white">Scroll To Animate </h2>
      <div className="space-y-6">
        {boxes.map((box) => (
          <motion.div
            key={box}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{duration:1}}
            className="w-64 h-64 bg-blue-500 text-white text-xl rounded-lg shadow-lg"
          >
            Box {box}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
