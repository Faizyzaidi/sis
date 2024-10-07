
// src/appwrite.js
import { Client, Account, Databases, Permission, Role } from 'appwrite';

// Initialize the Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite API endpoint
    .setProject('670136be0002793ac774'); // Replace with your Appwrite project ID

// Create instances of Account and Databases services
const account = new Account(client);
const databases = new Databases(client);

// Exporting Permission and Role as well for use in other parts of your app
export { client, account, databases, Permission, Role };

