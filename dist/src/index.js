"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes"));
const app = (0, express_1.default)();
// declare a route with a response
// app.use(cors({ origin: '*' }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
app.use('/api/v1', Routes_1.default);
// start the server
app.listen(8081, () => {
    console.log(`server running : http://localhost:8081`);
});
//# sourceMappingURL=index.js.map