export const dollarFormatter = (v) =>
  `$${v.toLocaleString("en-US", {
    minimumFractionDigits: 0,
  })}`;

// The net worth of the richest person in the world according to Bloomberg (December 8th, 2022)

export const budget = 171000000000;
