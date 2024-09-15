import React from "react";
import Products from "./Products";
import Purchase from "./Purchase";
import Wallet from "./Wallet";

const Page = () => {
  return (
    <div className="min-w-[1200px]">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Online Vending Machine
      </h1>
      <div className="flex w-full">
        <div className="flex-1 w-[75%] border border-black mx-8 p-8">
          <Products />
          <Purchase />
        </div>
        <div className="flex-initial w-[25%] border border-black mx-8 p-8 h-fit">
          <Wallet />
        </div>
      </div>
    </div>
  );
};

export default Page;
