# 🎨 MyNFT on Base (with TypeScript)

A simple ERC721 NFT collection deployed on the [Base Network](https://base.org).  
Includes a TypeScript tutorial for minting NFTs.

---

## 📌 Features
- ERC721 Standard (unique NFTs)
- Metadata stored via tokenURI (IPFS/Arweave links)
- Minting restricted to contract owner
- Deployed on **Base Sepolia Testnet** or **Base Mainnet**

---

## 🛠️ Deploy with Remix

1. Open [Remix IDE](https://remix.ethereum.org).
2. Create a new file `MyNFT.sol` and paste in the contract code.
3. Compile with Solidity `^0.8.20`.
4. Deploy on Base Mainnet or Sepolia using MetaMask.

---

## ▶️ Run Script with TypeScript

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with your wallet key:
   ```env
   PRIVATE_KEY=your_wallet_private_key_here
   ```

3. Deploy your NFT contract on Base, then update the contract address inside `scripts/mint-nft.ts`.

4. Run the script:
   ```bash
   npm run mint
   ```

✅ This will mint a new NFT with your IPFS metadata to your wallet.

---

## 🌐 Add Base to MetaMask

### Base Mainnet
- **RPC URL**: `https://mainnet.base.org`
- **Chain ID**: `8453`
- **Explorer**: [https://basescan.org](https://basescan.org)

### Base Sepolia (Testnet)
- **RPC URL**: `https://sepolia.base.org`
- **Chain ID**: `84532`
- **Explorer**: [https://sepolia.basescan.org](https://sepolia.basescan.org)

---

## 📜 License
MIT License © 2025
