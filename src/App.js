import Particles from "./components/Particles.jsx";
import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
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
          <div className="absolute right-10 top-10">
            <ConnectKitButton />
          </div>
          <div className="absolute translate-y-8">
            <Card />
          </div>
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
