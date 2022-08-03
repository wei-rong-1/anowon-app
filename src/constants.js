const localRpcUrl = "http://" + (global.window ? window.location.hostname : "localhost") + ":8545";

export const NETWORKS = {
  // localhost: {
  //   name: "localhost",
  //   color: "#666666",
  //   chainId: 31337,
  //   blockExplorer: "",
  //   rpcUrl: localRpcUrl,
  // },
  // testnet: {
  //   name: "testnet",
  //   color: "#F60D09",
  //   chainId: 338,
  //   blockExplorer: "https://cronos.org/explorer/testnet3",
  //   rpcUrl: `https://cronos-testnet-3.crypto.org:8545/`,
  // },
  mainnet: {
    name: "mainnet",
    color: "#ff8b9e",
    chainId: 25,
    rpcUrl: `https://rpc.vvs.finance`,
    blockExplorer: "https://cronos.org/explorer/",
  },
};

export const NETWORK = chainId => {
  for (const n in NETWORKS) {
    if (NETWORKS[n].chainId === chainId) {
      return NETWORKS[n];
    }
  }
};
