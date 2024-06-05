# server

This is the server side of the project. It is a RESTful API that serves the client side of the project.

## Installation
```bash
mkdir Task-Management

cd Task-Management

git clone https://github.com/REp007/Task-Management .

cd server

cp .env.example .env

```
in `./env`
```ts
PORT = 3000
HOST = http://localhost
MONGO_URI = Database URI
ACCESS_TOKEN_SECRET = Generate a scret token
```
```bash
npm i
or 
bun install

bun run dev
```

## API Endpoints

> [!TIP]
> ###  For check all end Point : [api-docs](http://localhost:3000/api-docs/)




