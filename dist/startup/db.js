"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class Database {
    static ConnectDb() {
        mongoose.connect(this.MongoDbUrl, { useNewUrlParser: true })
            .then(() => {
            console.log(">>>Database connection successful!");
        })
            .catch((err) => {
            console.log("Database connection Failed");
            console.error(err);
        });
    }
}
Database.MongoDbUrl = "mongodb://localhost:27017/mainproject";
exports.Database = Database;
//# sourceMappingURL=db.js.map