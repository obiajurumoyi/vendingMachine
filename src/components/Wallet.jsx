import React, { useEffect, useState } from "react";
import { getContract, prepareContractCall, toWei } from "thirdweb";
import { contractAbi, contractAddress } from "../constants";
import { client } from "../client";
import { arbitrumSepolia, sepolia } from "thirdweb/chains";
import {
  useActiveAccount,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";
import { formatEther } from "viem";

const Wallet = () => {
  const [amount, setAmount] = useState(null);
  const account = useActiveAccount();
  const contract = getContract({
    client: client,
    address: contractAddress,
    chain: arbitrumSepolia,
    abi: contractAbi,
  });

  const { data, isLoading } = useReadContract({
    contract,
    method: "balances",
    params: [account?.address], // type safe params
  });

  const {
    mutate: sendTx,
    data: transactionResult,
    isPending,
    error,
  } = useSendTransaction();

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = prepareContractCall({
      contract,
      method: "depositFunds",
      value: toWei(amount),
    });
    sendTx(transaction);
  };

  console.log(data, isLoading);
  console.log(transactionResult, error);
  useEffect(() => {}, [transactionResult]);
  return (
    <div className="grid gap-y-3">
      <h2 className="text-3xl">Wallet</h2>
      <p>
        {isLoading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          `$${formatEther(data)}.00`
        )}
      </p>
      <button
        className="btn btn-active text-white"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Fund
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-sm">
          <form action="" className="grid gap-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Select Amount"
              className="input input-bordered ring-black ring-1 w-full bg-white placeholder:text-black"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="btn btn-active text-white">
              {isPending ? (
                <span className="loading loading-spinner loading-md mt-2"></span>
              ) : (
                "Fund Account"
              )}
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Wallet;
