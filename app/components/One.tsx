import * as motion from "motion/react-client";

export default function One() {
  return (
    <div className="mt-[100rem] flex justify-center items-center">
      <div className="h-[200vh] flex items-center justify-center">
        <motion.div 
        initial={{scale:0.5, opacity:0}}
        whileInView={{scale:1.1, opacity:1}}
        transition={{duration:2}}
        
        className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold  text-black mb-2">Amazing Card</h2>
          <p className="text-gray-600">
            This is animated beautifully into view{" "}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
