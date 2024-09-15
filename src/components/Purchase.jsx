import React, { useEffect, useState } from "react";
import { getContract, prepareContractCall } from "thirdweb";
import { client } from "../client";
import { contractAbi, contractAddress } from "../constants";
import { arbitrumSepolia } from "thirdweb/chains";
import { useSendTransaction } from "thirdweb/react";

const Purchase = () => {
  const [item, setItem] = useState(null);
  const [amount, setAmount] = useState(null);

  const contract = getContract({
    client: client,
    address: contractAddress,
    chain: arbitrumSepolia,
    abi: contractAbi,
  });

  const {
    mutate: sendTx,
    data: transactionResult,
    isPending,
  } = useSendTransaction();

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = prepareContractCall({
      contract,
      method: "purchaseItem",
      params: [Number(item), Number(amount)],
    });
    sendTx(transaction);
  };

  console.log(transactionResult);

  useEffect(() => {}, [transactionResult]);
  return (
    <div className="mx-8 p-8 flex justify-center items-center">
      <form action="" className="grid gap-y-3" onSubmit={handleSubmit}>
        <select
          className="select ring-black ring-1 w-full max-w-xs bg-white"
          onChange={(e) => setItem(e.target.value)}
        >
          <option disabled selected>
            Select Item
          </option>
          <option value="1">Drinks</option>
          <option value="2">Chips</option>
          <option value="3">Candy</option>
          <option value="4">Cookie</option>
        </select>
        <input
          type="number"
          placeholder="Select Amount"
          className="input input-bordered ring-black ring-1 w-full max-w-xs bg-white placeholder:text-black"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn btn-active text-white" type="submit">
          {isPending ? (
            <span className="loading loading-spinner loading-md mt-2"></span>
          ) : (
            "Purchase Item"
          )}
        </button>
      </form>
    </div>
  );
};

export default Purchase;
