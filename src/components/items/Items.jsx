import React from "react";
import { dollarFormatter } from "../../utils";
import BuyButton from "./BuyButton";
import Span from "./Span";
import ItemContainer from "./ItemContainer";
import LazyLoad from "react-lazy-load";
import "./Items.css";
const Items = ({ handleAdd, item, userBudget }) => {
  return (
    <ItemContainer>
      <div className="flex items-center" data-testid="item-container">
        <LazyLoad>
          <img
            src={item.image}
            alt=""
            className="w-10 h-10 object-cover rounded-lg"
          />
        </LazyLoad>
        <div className="w-full flex-col ml-5 mt-2">
          <h2 className="mb-2 break-words overflow-hidden">{item.name}</h2>
          <h2 className="font-bold text-ellipsis overflow-hidden">
            {dollarFormatter(item.cost)}
          </h2>
        </div>
      </div>
      <div className="flex items-center">
        {userBudget < item.cost ? (
          <Span />
        ) : (
          <BuyButton handleAdd={handleAdd} item={item} />
        )}
      </div>
    </ItemContainer>
  );
};

export default Items;
