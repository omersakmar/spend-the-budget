import Header from "./components/header/Header";
import Items from "./components/items/Items";
import { motion } from "framer-motion";
import { data } from "./data";
import { budget } from "./utils";
import useLocalStorage from "./hooks/localStorage";

function App() {
  const [myBudget, setMyBudget] = useLocalStorage("budget", budget);
  const [userCart, setUserCart] = useLocalStorage("cart", []);

  const handleAdd = (product) => {
    const existingItem = userCart.find((item) => item.id === product.id);
    setMyBudget(myBudget - product.cost);
    if (existingItem) {
      setUserCart(
        userCart.map((item) =>
          item.id === product.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity + 1,
              }
            : item
        )
      );
    } else {
      setUserCart([
        ...userCart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };
  const handleRemove = (product) => {
    const existingItem = userCart.find((item) => item.id === product.id);
    if (existingItem.quantity > 1) {
      setUserCart(
        userCart.map((item) =>
          item.id === product.id
            ? {
                ...existingItem,
                quantity: existingItem.quantity - 1,
              }
            : item
        )
      );
    } else {
      const updatedCart = userCart.filter((item) => item !== existingItem);

      setUserCart(updatedCart);
    }
    setMyBudget(myBudget + existingItem.cost);
  };

  return (
    <>
      <Header
        myBudget={myBudget}
        userCart={userCart}
        handleRemove={handleRemove}
      />
      <div className="container p-6 flex flex-col flex-wrap sm:grid grid-cols-4 mx-auto gap-4">
        {data.map((item) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            key={item.id}
            className="col-span-2 flex flex-col bg-gray-100 border-1 rounded-md shadow-sm p-6"
          >
            <Items
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              item={item}
              userBudget={myBudget}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default App;
