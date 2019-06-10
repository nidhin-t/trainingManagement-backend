"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const usercontrollerObj = new UserController();
class Routes {
    static registerRoutes(app) {
        app.get('/', (req, res) => {
            res.send("It Works!!");
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map