"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const db_1 = require("./startup/db");
const routes_1 = require("./startup/routes");
class App {
    constructor() {
        this.app = express();
        this.app.listen(3000, 'localhost', () => {
            console.log('>>>Server Started on port 3000>>>');
        });
        this.ConfigBodyParser();
        db_1.Database.ConnectDb();
        routes_1.Routes.registerRoutes(this.app);
    }
    ConfigBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
const myCardApp = new App();
//user Card CRUD operations
//# sourceMappingURL=server.js.map