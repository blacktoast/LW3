import { ethers } from 'hardhat';

async function main() {
  const WhitelistContact = await ethers.getContractFactory('Whitelist');
  const deployedWhitelist = await WhitelistContact.deploy(10);

  await deployedWhitelist.deployed();

  console.log('deploy!!', deployedWhitelist.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(1))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
