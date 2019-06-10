import  * as express from 'express'
import  * as bodyParser from "body-parser"
import { Database } from './startup/db'
import { Routes } from "./startup/routes"
import * as cors from "cors"


class App {
    app: express.Application;   

    constructor() {
        this.app = express();
        this.app.use(cors())
        this.app.listen(3000, 'localhost', () => {
            console.log('>>>Server Started on port 3000>>>')
        });


        this.ConfigBodyParser();
        Database.ConnectDb();

        Routes.registerRoutes(this.app)


    }

    private ConfigBodyParser() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

}

const myCardApp = new App()

//user Card CRUD operations

