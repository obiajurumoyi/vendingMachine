import React from "react";
import Product from "./Product";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiFrenchFries } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";
import { FaCookieBite } from "react-icons/fa";
import { getContract } from "thirdweb";
import { useReadContract } from "thirdweb/react";
import { client } from "../client";
import { contractAbi, contractAddress } from "../constants";
import { arbitrumSepolia, sepolia } from "thirdweb/chains";

const Products = () => {
  const contract = getContract({
    client: client,
    address: contractAddress,
    chain: arbitrumSepolia,
    abi: contractAbi,
  });

  const { data: data1, isLoading: isLoading1 } = useReadContract({
    contract,
    method: "itemDetail",
    params: [1], // type safe params
  });

  const { data: data2, isLoading: isLoading2 } = useReadContract({
    contract,
    method: "itemDetail",
    params: [2], // type safe params
  });

  const { data: data3, isLoading: isLoading3 } = useReadContract({
    contract,
    method: "itemDetail",
    params: [3], // type safe params
  });

  const { data: data4, isLoading: isLoading4 } = useReadContract({
    contract,
    method: "itemDetail",
    params: [4], // type safe params
  });

  console.log(data1, isLoading1);
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <RiDrinks2Fill className="text-2xl" />
          {isLoading1 ? (
            <span className="loading loading-spinner loading-md mt-2"></span>
          ) : (
            <h3 className="mt-4">{Number(data1)}</h3>
          )}
        </div>
        <div>
          <GiFrenchFries className="text-2xl" />
          {isLoading2 ? (
            <span className="loading loading-spinner loading-md mt-2"></span>
          ) : (
            <h3 className="mt-4">{Number(data2)}</h3>
          )}
        </div>
        <div>
          <LuCandy className="text-2xl" />
          {isLoading3 ? (
            <span className="loading loading-spinner loading-md mt-2"></span>
          ) : (
            <h3 className="mt-4">{Number(data3)}</h3>
          )}
        </div>
        <div>
          <FaCookieBite className="text-2xl" />
          {isLoading4 ? (
            <span className="loading loading-spinner loading-md mt-2"></span>
          ) : (
            <h3 className="mt-4">{Number(data4)}</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
