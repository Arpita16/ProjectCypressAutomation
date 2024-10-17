# ProjectCypressAutomation

**Introduction**

This is a test automation project for Swag Labs, built using Cypress, a JavaScript End-to-End testing framework.

**Prerequisites**

List of software and versions required to run the project (Node.js, npm, Cypress).
Node.js >= v12.x.x
npm >= 6.x.x or yarn
Cypress (this project is configured to use Cypress)

**Installation**

# Clone the repository
git clone https://github.com/Arpita16/cypressautomation.git

# Navigate to the project directory
cd cypressautomation

# Install dependencies

Install Node.js-Visit the official Node.js website: https://nodejs.org.(if not installed in the system)
Install npm latest version:npm install -g npm@latest(if not installed in the system already)
# Check Versions
node -v
npm -v
# Install Cypress
npm init -y
npm install --save-dev cypress



**Project Structure**

cypressautomation/
│
├── cypress/
│   ├── fixtures/          # Test data
│   ├── integration/       # Test cases (end-to-end specs)
│   ├── plugins/           # Plugins and custom commands
│   ├── support/           # Helper files (e.g., commands.js)
│
├── cypress.json           # Cypress configuration
├── package.json           # Dependencies and scripts


**Run Cypress Tests in GUI mode:**
npx cypress open

**Configuration**
Cypress configuration options in cypress.json
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false, //Don't run testcases automatically after save it 

