import { ethers } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

// Replace with your deployed contract address
const CONTRACT_ADDRESS = "0xYourNFTContractAddressHere";

// ABI (only the functions we need)
const ABI = [
  "function mint(address to, string memory tokenURI) external",
  "function owner() view returns (address)"
];

// Example metadata URI (after uploading to IPFS/Arweave)
const TOKEN_URI = "ipfs://Qm.../metadata.json";

async function main() {
  // Load wallet private key from .env
  const privateKey = process.env.PRIVATE_KEY!;
  if (!privateKey) {
    throw new Error("Please set PRIVATE_KEY in your .env file");
  }

  // Connect to Base Sepolia
  const provider = new ethers.JsonRpcProvider("https://sepolia.base.org");
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log(`Connected as: ${await wallet.getAddress()}`);

  // Contract instance
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

  // Mint NFT
  console.log("Minting NFT...");
  const tx = await contract.mint(await wallet.getAddress(), TOKEN_URI);
  console.log("Tx submitted:", tx.hash);

  const receipt = await tx.wait();
  console.log("✅ NFT Minted! Block:", receipt.blockNumber);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
