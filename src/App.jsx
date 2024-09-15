import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "./client";
import Page from "./components/Page";

function App() {
  const [count, setCount] = useState(0);
  const account = useActiveAccount();

  return (
    <div className="bg-white w-full h-[100vh] flex justify-center items-center text-black">
      {account ? <Page /> : <ConnectButton client={client} />}
    </div>
  );
}

export default App;
