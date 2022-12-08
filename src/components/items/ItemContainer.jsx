import React from "react";
import { motion } from "framer-motion";
const ItemContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col justify-between text-ellipsis md:flex-row"
    >
      {children}
    </motion.div>
  );
};

export default ItemContainer;
