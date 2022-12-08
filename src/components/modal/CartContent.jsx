import { Badge, Box, Divider, useToast } from "@chakra-ui/react";
import React from "react";
import { dollarFormatter } from "../../utils";
import { motion } from "framer-motion";
import AnimatedNumber from "react-animated-number/build/AnimatedNumber";
const CartContent = ({ userCart, handleRemove }) => {
  const toast = useToast();
  return (
    <div className="flex flex-col">
      {userCart.length < 1 ? (
        <p>You have not spent your money.</p>
      ) : (
        userCart.map((item) => (
          <div key={item.id}>
            <ul className="flex justify-between mb-2">
              <li>
                {item.name} x {item.quantity}
              </li>
              <li>
                <AnimatedNumber
                  value={item.cost * item.quantity}
                  formatValue={(v) => dollarFormatter(v)}
                  duration={300}
                  stepPrecision={0}
                  className="cursor-default"
                />
              </li>
            </ul>
            <Badge className="mb-2 shadow-lg" colorScheme="red">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-3 py-2"
                onClick={() => {
                  handleRemove(item);
                  toast({
                    position: "bottom-right",
                    render: () => (
                      <Box
                        className="rounded-md shadow-md px-1 py-3"
                        color="white"
                        bg="red.500"
                      >
                        1 {item.name} sold
                      </Box>
                    ),
                  });
                }}
              >
                SELL
              </motion.button>
            </Badge>
            <Divider orientation="horizontal" className="mb-2" />
          </div>
        ))
      )}
    </div>
  );
};

export default CartContent;
