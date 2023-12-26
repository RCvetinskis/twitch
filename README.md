This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Second, go to https://dashboard.ngrok.com/cloud-edge/endpoints and copy the endpoint;

Third, in  the new terminal run the command: ngrok http -(copied endpoint) 3000
4,  open a new terminal and run npx prisma studio

if the application is live  paste the copied endpoint to the browser. 
