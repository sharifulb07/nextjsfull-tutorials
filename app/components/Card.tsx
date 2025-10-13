import * as motion from "motion/react-client";
const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1759793984434-1ad837c2fec5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      caption: "Caption for image 1",
    },
    {
      src: "https://images.unsplash.com/photo-1738739907433-10601360cee3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      caption: "Caption for image 2",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1759772596441-0058c42178f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      caption: "Caption for image 3",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1717269891351-2ef84c3131d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500",
      caption: "Caption for image 4",
    },
  ];


export default function Card() {
  return (
    <div className="flex ">
    {images.map((image, index) => (
      <motion.div
        key={index}
        whileHover={{scale:1.05}}
        className="m-[1rem]  relative rounded-lg shadow-lg overflow-hidden"
      >
        <img src={image.src} alt={image.caption} className="w-full h-auto" />
        <motion.div whileHover={{opacity:1}} className=" absolute inset-0 bg-black flex items-center justify-center bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
          <p className="text-lg">{image.caption}</p>
        </motion.div>
      </motion.div>
    ))}

    {/* <motion.div 
    initial={{scale:1, rotate:0}}
    whileHover={{scale:1.05, rotate:4}}
    drag
    dragConstraints={{top:-50, left:-50, right:50, bottom:50}}
    transition={{type:'spring', stiffness:300}}
    dragElastic={0.3}

    className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <img
        className="w-full h-48 object-cover"
        src={
          "https://images.unsplash.com/photo-1758846182585-c37d8c2946c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500"
        }
        alt="card image"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Dynamic Card Title </h2>
        <p>
          This is my simple and amazing card built with amazing animation
          library (motion.div)
        </p>
        <button>Learn More </button>
      </div>
    </motion.div> */}

    {/* whileHover */}
    {/* whileTap */}
    {/* whileDrag */}

    {/* <motion.div  */}
    {/* // whileHover={{scale:1.4, rotate:40}}  
// whileTap={{scale:0.8, backgroundColor:'orange'}} */}
    {/* drag
whileDrag={{scale:2, backgroundColor:'blue'}}
dragConstraints={{
top:-50,
left:-50,
right:50,
bottom:50
}}
transition={{type:'spring', stiffness:300}}
className="box" /> */}

    {/* <motion.div
      initial={{ x: 0 }}
      animate={{
        x: 50,
        scale: [1, 2, 3, 4, 5, 4, 3, 2, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 0, 270, 270, 0],
      }}
      transition={{ delay: 2, duration: 5, ease: "easeIn" }}
      className="box"
    ></motion.div> */}

    {/* <motion.button animate={{
      scale:[1,1.1,1],
      backgroundColor:[""]
    }} className="px-4 py-2 text-white bg-blue-400 rounded outline-none">
      Click Me
    </motion.button> */}
  </div>
  )
}
