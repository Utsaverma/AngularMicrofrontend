# Microfrontend Architecture for Insurance Application

This project demonstrates a microfrontend architecture built with Angular 19+ using **Module Federation** to create a scalable and flexible insurance application. The setup consists of three applications:

- **insurance-app** (Host)
- **insurance-details** (Remote 1)
- **pay-premium** (Remote 2)

Each application operates independently but is seamlessly integrated using Angular's Module Federation. 

## Project Overview

### Host: `insurance-app` (Running on port `4200`)
The host application is responsible for loading the remote applications (`insurance-details` and `pay-premium`) and managing shared states like policy data.

### Remote 1: `insurance-details` (Running on port `4201`)
This remote application displays the insurance details for the user and fetches shared data from the host via a shared service.

### Remote 2: `pay-premium` (Running on port `4202`)
This remote application allows the user to pay insurance premiums, and it is capable of interacting with the `insurance-details` application through route parameters and shared services.

## Features

- **Module Federation:** Utilizes Angular 19+ with the `@angular-architects/module-federation` plugin for seamless integration between the host and remote applications.
  
- **Shared Services:** A shared service allows the host to provide common data (such as insurance policies) to the remote applications (`insurance-details` and `pay-premium`).
  
- **Cross-Application Navigation:** The `insurance-details` application can navigate to `pay-premium` using the policy number passed as a route parameter.

- **LocalStorage Integration:** Data such as policy details or premium calculations are stored in `localStorage` to enhance the user experience by reducing data fetching.

- **SCSS Pre-Processors:** SCSS is used for styling and is fully integrated across all three applications for a consistent look and feel.

- **SQL Injection Protection:** The application performs thorough sanitization and validation of user inputs to prevent SQL injection and ensure secure interaction with backend services.

- **Service Workers for Premium Calculation:** The application includes service workers to provide an offline-first experience, particularly for premium recalculation. Users can get a 5% discount on their premiums via a worker that recalculates the premium rate.

## Application Architecture

- **Host Application (`insurance-app`)**: 
  - Loads and integrates remote applications (`insurance-details`, `pay-premium`).
  - Shares a common service for data synchronization.
  
- **Remote 1 (`insurance-details`)**: 
  - Displays insurance policies using shared data.
  - Uses route parameters to navigate to `pay-premium` for premium payments.

- **Remote 2 (`pay-premium`)**: 
  - Allows users to make premium payments.
  - Fetches necessary data from the host and remote 1 via shared services.
  - Integrates service workers for offline calculations.

## Getting Started

### Prerequisites

- Node.js (v22 or above)
- Angular CLI (v19 or above)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Utsaverma/AngularMicrofrontend.git
   cd container-app
2. Install dependencies for all three applications:
    ```bash
    npm install
3. Configure the ports for each application in their respective `angular.json` files:
4. Run all three applications concurrently:
    ```bash
    - ng serve --port 4200 --project insurance-app
    
    - ng serve --port 4201 --project insurance-details

    - ng serve --port 4202 --project pay-premium
5. Open your browser and navigate to:
   - insurance-app: http://localhost:4200
     - This will act as a container
     - http://localhost:4200/insurance-details will point to insurance-details (remote 1)
     - http://localhost:4200/premium-payment will point to pay-premium (remote 2)
   - Related remotes are also available at:
     - insurance-details: http://localhost:4201
     - pay-premium: http://localhost:4202
### SQL Injection Protection
The project uses parameterized queries, input validation, and sanitization techniques to protect against SQL injection. Always validate and sanitize user inputs before making any interactions with the database.

### Service Workers for Premium Calculation
Service workers are implemented to offload the recalculation of premiums, allowing for a smoother and faster user experience. This feature recalculates premiums when the user interacts with the system and applies a 5% discount when eligible.

### Shared Service
A shared service is used for synchronizing data between the host and remote applications. This service ensures that both insurance-details and pay-premium can access and update data like policy information, premium amounts, and user preferences.

### Routing and Cross-Navigation
The insurance-details app can navigate to pay-premium by passing the policy number via route parameters

### Conclusion
This project demonstrates a robust microfrontend architecture using Angular and Module Federation to build an insurance application. With the integration of shared services, cross-app navigation, localStorage, and service workers, the app offers a smooth, secure, and optimized user experience.

For further questions or contributions, feel free to reach out!
