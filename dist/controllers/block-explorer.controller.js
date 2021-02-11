"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class BlockExplorerController {
    constructor(blockExplorerService) {
        this.router = express.Router();
        this.index = (req, res) => {
            res.sendFile(path.join(__dirname, '../', 'views', 'Index.html'));
        };
        this.blockInfo = (req, res) => {
            return this.blockExplorerService.blockInfo(req.body['block_hash'])
                .then((blockInfoModel) => {
                res.render(path.join(__dirname, '..', 'views', 'block-info'), { blockInfo: blockInfoModel });
            })
                .catch(err => {
                res.status(400);
            });
        };
        this.transactionInfo = (req, res) => {
            return this.blockExplorerService.transactionInfo(req.body['tx_hash'])
                .then((txInfoModel) => {
                res.render(path.join(__dirname, '..', 'views', 'transaction-info'), { txInfo: txInfoModel });
            })
                .catch(err => {
                res.status(400);
            });
        };
        this.blockExplorerService = blockExplorerService;
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/index', this.index);
        this.router.post('/block-info', this.blockInfo);
        this.router.post('/transaction-info', this.transactionInfo);
    }
}
exports.default = BlockExplorerController;
//# sourceMappingURL=block-explorer.controller.js.map