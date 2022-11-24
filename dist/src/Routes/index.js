"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getStock_1 = __importDefault(require("./getStock"));
const router = express_1.default.Router();
router.use('/getStock', getStock_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map