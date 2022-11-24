"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const finnhubClient_1 = __importDefault(require("../../../utils/finnhubClient"));
const router = express_1.default.Router();
router.get("/", 
// [
//   check("StockSymbol", "StockSymbol is Required").exists().not().isEmpty(),
// ],
(req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stockSymbol = req.query.stockSymbol;
    const quote = yield finnhubClient_1.default.getQuote("AAPL");
    res.send("What's up doc ?!");
}));
exports.default = router;
//# sourceMappingURL=stockInformation.js.map