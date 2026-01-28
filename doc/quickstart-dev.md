# Quickstart for Developers

1. Install [NodeJS 20](https://nodejs.org/en/download) (scroll down for MSI installers)
2. `npm i -g npm@latest`
   > [!NOTE]
   > Ensures we have the latest version
3. `npm i -g yarn`
   > [!NOTE]
   > yarn is faster than npm
4. `yarn install`
   > [!NOTE]
   > To install all dependencies
5. Install extension Rest Client for VS Code: [humao.rest-client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
6. `yarn build`
   > [!NOTE]
   > which exucutes the script "build" in the `package.json`
7. `yarn start -h`
   > [!NOTE]
   > To verify yarn can read our commands. If we get a help menu, we are done.
8. Change `reposyd.json` to point the database location to your specific path. For e.g. `mkdir reposyd-data/database`
9. `yarn start repository init <your-database-path>`
   > [!NOTE]
   > Inits the database
   
   > [!TIP]
   > If this fails try step 4 again
10. Set the path to the `reposyd.json` in the `.env` file
11. `yarn start`
    > [!NOTE]
    > Service is ready now