import React from "react";
import { motion } from "framer-motion";
import { Box, useToast } from "@chakra-ui/react";
const Button = ({ handleAdd, item }) => {
  const toast = useToast();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="cursor-pointer mb-1 mt-3 min-w-full"
      onClick={() => {
        handleAdd(item);
        toast({
          position: "bottom-right",
          render: () => (
            <Box
              className="rounded-md shadow-md"
              color="white"
              p={3}
              bg="green.500"
            >
              1 {item.name} bought
            </Box>
          ),
        });
      }}
    >
      <span className="py-1 px-3 bg-green-600 text-slate-100 rounded-full">
        Buy
      </span>
    </motion.button>
  );
};

export default Button;
