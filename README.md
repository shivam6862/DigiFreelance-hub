# DigiFreelance Hub

<div align="center">
  <img src="./image/logo.png" alt="DigiFreelance-hub Logo" style="border-radius: 50%;">
</div>

## Overview

DigiFreelance-hub stands as an innovative decentralized freelance platform, seamlessly integrating Next.js for the frontend, Solidity for smart contracts, MongoDB for the database, and Node.js for the backend. This multifaceted approach provides users with a robust ecosystem for creating and completing jobs. The platform facilitates a collaborative environment, allowing freelancers to showcase their skills and undertake diverse tasks. With transparent and secure transactions powered by Solidity smart contracts, DigiFreelance-hub ensures a trustworthy marketplace. Users can explore, create, and accomplish jobs efficiently, fostering a dynamic community where talent thrives. This convergence of technologies sets the stage for a user-friendly and inclusive freelancing experience on DigiFreelance-hub.

## Features

### 1. User-Friendly Interface

DigiFreelance-hub boasts an intuitive and aesthetically pleasing design to enhance the overall user experience. The interface is carefully crafted to make navigation seamless, allowing users to easily explore job opportunities and manage their freelance activities.

### 2. Decentralized Job Creation

The platform enables users to create job opportunities in a decentralized manner. This unique feature empowers individuals and businesses to post job listings, specifying their requirements and expectations. Freelancers can then browse and take up these jobs, fostering a dynamic and diverse job marketplace.

### 3. Smart Contracts for Secure Transactions

Security is a top priority on DigiFreelance-hub. All transactions, including job creation, acceptance, and reward distribution, are executed through Solidity smart contracts. This ensures a tamper-proof and transparent process, building trust between users on the platform.

### 4. MongoDB Database for Efficient Data Management

The use of MongoDB as the backend database ensures efficient storage and retrieval of data. This NoSQL database accommodates the dynamic and varied nature of freelance job listings, providing scalability as the platform grows.

### 5. Node.js Backend for Seamless Communication

The Node.js backend of DigiFreelance-hub serves as the communication bridge between the frontend and the blockchain. This ensures smooth interactions, real-time updates, and efficient handling of requests, contributing to the overall responsiveness of the platform.

## Pages

### **Home:** Overview of the platform, featured jobs, and user statistics.

![Home Page](/image/home.png)

### **Services:** Explore the services offered by freelancers.

![Services Page](/image/services.png)

### **Categories:** Browse jobs based on categories.

![Categories Page](/image/categories.png)

### **All Works:** Display all completed works on the platform.

![All Works Page](/image/all-works.png)

### **See Work:** Visualize the completed work before accepting it.

![See Work Page](/image/seework.png)

### **Reviews:** View and leave reviews for completed jobs.

![Reviews Page](/image/reviews.png)

### **Give Reward:** Reward freelancers for completing jobs.

![Give Reward Page](/image/give-reward.png)

### **Create New Job:** Allow users to create new job opportunities.

![Create New Job Page](/image/createNewJob.png)

### **User Profile:** A personalized space for each user on DigiFreelance-hub.

![User Profile Page](/image/profile.png)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/shivam6862/DigiFreelance-hub.git
   cd DigiFreelance-hub
   ```

2. Install dependencies in all folders:

   ```bash
   npm install
   ```

3. Set up the MongoDB database and configure the connection in the `.env` file.

4. Run the application:

   ```bash
   npm run dev
   ```

5. Access the application at [http://localhost:3000](http://localhost:3000).

## Usage

### 1. **Explore Job Opportunities:**

- **Visit the Homepage:**
  - Navigate to the homepage to get an overview of the platform. Here, you'll find featured jobs, user statistics, and recent success stories. This section aims to provide users with a snapshot of the current job market trends and high-demand skills.

### 2. **Create and Browse Jobs:**

- **Create a New Job Listing:**

  - If you're an employer or individual looking to hire freelancers, use the "createNewJob" page. Provide detailed information about the job, including the title, description, required skills, and the offered reward. This step ensures that your job listing is clear and attractive to potential freelancers.

- **Browse Jobs by Categories:**

  - Explore job opportunities based on categories. Whether it's web development, graphic design, writing, or any other skill, users can efficiently filter and find jobs that match their expertise.

- **Preview Services Offered:**
  - Visit the "Home" page to discover a comprehensive list of skills and services offered by freelancers on the platform. This can help users understand the diversity of talents available and find the right fit for their job requirements.

### 3. **Complete Jobs and Receive Rewards:**

- **Preview Completed Work:**

  - Before accepting a job, users can utilize the "/categories/[job]/allwork/seework/[id]" page to preview the completed work. This feature allows employers to assess the quality of the work and ensure that it aligns with their expectations.

- **Accept Jobs and Give Rewards:**
  - Once satisfied with the completed work, employers can accept the job and release the agreed-upon reward. The platform ensures secure and transparent transactions through the use of Solidity smart contracts, providing a trustworthy environment for both employers and freelancers.

### 4. **Freelancer Interaction:**

- **Job Discovery and Application:**

  - Freelancers can explore available jobs on the homepage and in specific categories. When finding a suitable job, they can apply or express interest in the task, showcasing their skills and qualifications.

- **Manage Ongoing Jobs:**

  - The platform provides a centralized dashboard for freelancers to manage ongoing jobs. This includes tracking the status of their applications, viewing accepted jobs, and submitting completed work.

- **Build a Reputation:**
  - The Reviews allows users to leave feedback for completed jobs. This creates a reputation system, helping freelancers build credibility and employers make informed decisions when selecting freelancers.

### 5. **Contribute to the Community:**

- **Explore All Completed Works:**
  - The "/categories/[job]/allwork" page serves as a gallery showcasing all completed works on the platform. This feature not only allows users to appreciate the diverse talents within the community but also fosters a sense of community engagement.

## Contribution Guidelines

We welcome contributions to enhance the DigiFreelance-hub platform. Please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.

2. Make your changes and ensure that the code is properly formatted.

3. Write unit tests if applicable.

4. Submit a pull request with a clear description of your changes.
