import React from "react";

export default function MainContent09Trade({ wood }: { wood: number }) {
  const sellWood = (wood: number) => {
    const min = wood * 100;
    const max = wood * 500;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div>
      <h3>{wood}個木頭拿去交易</h3>
      <div data-testid="sell">賣完，得到 ${sellWood(wood)}</div>
    </div>
  );
}
