import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import CartContent from "./CartContent";

const CartModal = ({ userCart, handleRemove }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // NUMBER OF ITEMS IN THE CART
  const cartItemCount = userCart.reduce((currentAmount, item) => {
    return currentAmount + item.quantity;
  }, 0);
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onOpen}
        className="bg-slate-900 text-slate-100 px-2 py-3 rounded-md md:px-10"
      >
        Spendings
        <span
          className="bg-green-600 px-3 py-1 rounded-full ml-2"
          data-testid="spendings-number"
        >
          {cartItemCount}
        </span>
      </motion.button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader>Spendings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CartContent userCart={userCart} handleRemove={handleRemove} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartModal;
