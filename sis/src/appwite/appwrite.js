// src/appwrite.js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('your_project_id'); // Your project ID

// Create instances for Account and Database
const account = new Account(client);
const databases = new Databases(client);

export { account, databases };
