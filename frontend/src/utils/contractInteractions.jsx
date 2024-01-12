import { ethers } from "ethers";

class ContractInteractions {
  constructor(config) {
    this.contractAddress = config.contractAddress;
    this.Task = config.Task;
    this.TaskHub = config.TaskHub;
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    this.TaskHubcontract = new ethers.Contract(
      this.contractAddress.localhost,
      this.TaskHub,
      this.provider.getSigner()
    );
    this.Taskcontract = new ethers.Contract(
      this.contractAddress.localhost,
      this.Task,
      this.provider.getSigner()
    );
  }

  wallet(account) {
    this.accountAddress = account;
  }
}

export default ContractInteractions;
