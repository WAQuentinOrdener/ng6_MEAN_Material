# ng6_MEAN_Material
Complete app with 5 technology used (MongoDB, Express, Angular6, NodeJs, Material design)

# Some useful commands

ng g m path/to/module --module nameOfParentModule

ng g c path/to/myCompoment --module nameOfTheModuleToAttach

ng g s path/to/service 

Maybe others and convention architecture:
https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1

# Remembers

## Material 
=> don't forget to import the theme in styles.css

## Angular 
=> don't forget to add providers module ex:
someservice.ts is using Http ==> need to import and affect HttpModule from @angular/http in app.module.ts

## Backend
=> don't forget to use cors when doing http request between to different domain

.../backend/server.js
import cors from 'cors';
...
app.use(cors());

=> don't forget to install mongodb and run the instance => mongod in terminal (access through localhost:27017)

=> when using postman to interact with db
 IF post request:
 => don't forget body is in raw option and select JSON(application/json)
