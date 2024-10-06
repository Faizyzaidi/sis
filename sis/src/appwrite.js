// src/appwrite.js
import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('670136be0002793ac774'); // Your project ID

// Create instances for Account and Database
const account = new Account(client);
const databases = new Databases(client);

export { account, databases };
