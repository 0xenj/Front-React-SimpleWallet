import Particles from "./components/Particles.jsx";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import TypewriterLoop from "./components/TypewriterLoop.jsx";
import DepositButton from "./components/DepositButton.jsx";
import WithdrawButton from "./components/WithdrawButton.jsx";
import StakingButton from "./components/StakingButton.jsx";
import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
  })
);

function App() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Particles />
          <div className="absolute top-10">
            <Header />
          </div>
          <div className="absolute top-12 left-10">
            <Dashboard />
          </div>
          <div className="absolute bottom-20 right-20 font-size text-2xl text-white font-bold">
            <TypewriterLoop />
          </div>
          <div className="absolute right-10 top-10">
            <ConnectKitButton />
          </div>
          <div className="absolute top-32">
            <Card />
          </div>
          <div className="absolute flex flex-row translate-y-24 space-x-4">
            <div className="">
              <DepositButton />
            </div>
            <div className="">
              <WithdrawButton />
            </div>
            <div className="">
              <StakingButton />
            </div>
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
