DEVELOPMENT:

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
Second, go to https://dashboard.ngrok.com/cloud-edge/domains and copy the domain;

Third, in  the new terminal run the command: ngrok http -(copied domain) 3000


Fourth,  open a new terminal and run npx prisma studio


if the application is live  paste the copied domain to the browser. 


SETUP PRODUCTION:

First, go to https://vercel.com/ and import the repository from Git Hub.

Second, pass .env files to vercel.
Third, create the project and copy the domain URL.

Fourth, go to clerk.com dashboard/websockets and edit the domain with  the newly copied domain from Vercel.

Fifth, go to livekit.com settings/webhooks and add the production endpoint with the newly copied domain from Vercel.

Finally, visit your application with the copied domain. https://next14-twitch-clone-zeta.vercel.app/
