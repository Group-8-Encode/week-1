import { Contract, ethers } from "ethers";
import "dotenv/config";
import * as ballotJson from "../../artifacts/contracts/Ballot.sol/Ballot.json";
// eslint-disable-next-line node/no-missing-import
import { Ballot } from "../../typechain";

const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

async function main() {
  const wallet =
    process.env.MNEMONIC && process.env.MNEMONIC.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
      : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
  console.log(`Using address ${wallet.address}`);

  const provider = ethers.providers.getDefaultProvider("rinkeby");
  const signer = wallet.connect(provider);
  console.log(`Using address ${signer.address}`);

  const ballotAddress = process.argv[2];
  const proposalIndex = process.argv[3];
  console.log(`Using address ${ballotAddress}`);

  const ballotContract: Ballot = new Contract(
    ballotAddress,
    ballotJson.abi,
    signer
  ) as Ballot;
  const tx = await ballotContract.proposals(proposalIndex);

  console.log(
    `Proposal name : ${ethers.utils.parseBytes32String(tx.name.toString())}`
  );
  console.log(`Proposals vote count : ${tx.voteCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
