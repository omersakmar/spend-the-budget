import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import React from "react";
import AnimatedNumber from "react-animated-number/build/AnimatedNumber";
import { dollarFormatter } from "../utils";

const BudgetNumber = ({ myBudget }) => {
  return (
    <div>
      <Stat>
        <StatLabel>Budget</StatLabel>
        <StatNumber>
          <AnimatedNumber
            value={Number(myBudget)}
            formatValue={(v) => dollarFormatter(v)}
            duration={300}
            stepPrecision={0}
            className="cursor-default font-bold text-xl"
          />
        </StatNumber>
      </Stat>
    </div>
  );
};

export default BudgetNumber;
