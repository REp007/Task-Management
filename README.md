Here is the updated README file for your MERN application with all `bun` commands removed and focusing on Node.js:

---

# MERN Application

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application. The server side is a RESTful API that serves the client side of the project.

## Table of Contents

- [MERN Application](#mern-application)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [install bun](#install-bun)
      - [I prefer to use `bun` to manage my project.](#i-prefer-to-use-bun-to-manage-my-project)
    - [Server Setup](#server-setup)
    - [Client Setup](#client-setup)
  - [Environment Variables](#environment-variables)
  - [Scripts](#scripts)
    - [Server](#server)
  - [API Endpoints](#api-endpoints)

## Installation
### install bun
#### I prefer to use `bun` to manage my project.
To install `bun`, run the following command:
```bash
npm install -g bun
```

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Copy the example environment variables file and update it with your configuration:
   ```bash
   cp .env.example .env
   ```

3. Install the dependencies:
   ```bash
   bun install
   ```
### Client Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install the dependencies:
   ```bash
   bun install
   ```

3. Build the client for production:
   ```bash
   bun run build
   ```

## Environment Variables

Create a `.env` file in the `server` directory with the following content:

```ini
PORT=3000
MONGO_URI=your_database_uri
ACCESS_TOKEN_SECRET=your_secret_token
```

## Scripts

### Server

- **Start Development Server**:
  ```bash
  bun run dev
  ```


## API Endpoints

> [!TIP]: 
> For a full list of API endpoints and their documentation, visit: [API Docs](https://task-app-047s.onrender.com/api-docs/)

> **http://localhost:{yourPort}/api-docs/**
