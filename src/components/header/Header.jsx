import React from "react";
import BudgetNumber from "../BudgetNumber";
import CartModal from "../modal/CartModal";

const Header = ({ myBudget, userCart, handleRemove }) => {
  return (
    <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl">
      <div className="flex justify-around items-center gap-4">
        <BudgetNumber myBudget={myBudget} />
        <CartModal handleRemove={handleRemove} userCart={userCart} />
      </div>
    </header>
  );
};

export default Header;
