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

  async createTask(formData) {
    if (!this.accountAddress) {
      console.error("First Connect To Wallet");
      return "First Connect To Wallet";
    }
    const {
      title,
      description,
      reward,
      timeToComplete,
      majorTypeOfTask,
      minorTypeOfTask,
      techStack,
    } = formData;
    try {
      const tx = await this.TaskHubcontract.createTask(
        title,
        description,
        reward,
        timeToComplete,
        majorTypeOfTask,
        minorTypeOfTask,
        techStack
      );
    } catch (err) {
      console.log("Error during task creating : ", err.message);
      throw err;
    }
  }
  async getAllTasks() {
    if (!this.accountAddress) {
      console.error("First Connect To Wallet");
      return "First Connect To Wallet";
    }
    try {
      const task = await this.TaskHubcontract.getAllTasks();
      return task;
    } catch (err) {
      console.log("Error during calling all Tasks : ", err.message);
      throw err;
    }
  }

  async getTask(taskId) {
    if (!this.accountAddress) {
      console.error("First Connect To Wallet");
      return "First Connect To Wallet";
    }
    try {
      const task = await this.TaskHubcontract.getTask(taskId);
      return task;
    } catch (err) {
      console.log("Error during calling Task : ", err.message);
      throw err;
    }
  }
}

export default ContractInteractions;
