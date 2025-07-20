import { motion } from 'framer-motion';

const FramerMotionTest = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold">Framer Motion Test Component</h2>
      
      {/* Test 1: Simple opacity animation */}
      <motion.div
        className="w-20 h-20 bg-blue-500 rounded"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-white text-center pt-6">Test 1</p>
      </motion.div>

      {/* Test 2: Simple transform animation */}
      <motion.div
        className="w-20 h-20 bg-green-500 rounded"
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-white text-center pt-6">Test 2</p>
      </motion.div>

      {/* Test 3: Scale animation */}
      <motion.div
        className="w-20 h-20 bg-red-500 rounded"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-white text-center pt-6">Test 3</p>
      </motion.div>

      {/* Test 4: Rotate animation */}
      <motion.div
        className="w-20 h-20 bg-purple-500 rounded"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-white text-center pt-6">Test 4</p>
      </motion.div>

      {/* Test 5: Combined animations */}
      <motion.div
        className="w-20 h-20 bg-yellow-500 rounded"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -50, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <p className="text-black text-center pt-6">Test 5</p>
      </motion.div>
    </div>
  );
};

export default FramerMotionTest;