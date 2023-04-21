# Phone Book 
This is a demo project of a phone book using React, Typescript, NodeJS, Prisma ORM using SQLite.

## Instructions

You will find two folders in this project: "server" and "client".

To run the project you need to follow the steps bellow:

- Download the project and enter in the main folder:
```
git clone git@github.com:jabreu-soap/phone-book.git

cd ./phone-book
```

- Go to /server folder:
```
cd ./server
```
- Run the following commnads to run the server:
```
yarn
npx prisma generate
npx prisma migrate dev

yarn run dev
```

- In a new console/terminal, go back to the root folder and go the the client folder:
```
cd ./client
```
and run the commnads:
```
yarn

yarn run dev
```

Now you can access the url provided in this last step and test the app.
