"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stockInformation_1 = __importDefault(require("./stockInformation"));
const router = express_1.default.Router();
router.use('/', stockInformation_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map