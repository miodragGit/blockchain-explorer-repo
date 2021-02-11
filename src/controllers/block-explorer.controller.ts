import express = require("express");
import {Request, Response} from "express";
import {BlockInfoModel} from "../models/block-info.model";
import {TxInfoModel} from "../models/tx-info.model";
const path = require("path");
import {IBlockExplorerService} from "../services/block-explorer.service";

class BlockExplorerController {

    blockExplorerService: IBlockExplorerService;

    public router = express.Router();

    constructor(blockExplorerService: IBlockExplorerService) {
        this.blockExplorerService = blockExplorerService;
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get('/index', this.index)
        this.router.post('/block-info', this.blockInfo)
        this.router.post('/transaction-info', this.transactionInfo)
    }

    index = (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../', 'views', 'Index.html'));
    }

    blockInfo = (req: Request, res: Response) => {

        return this.blockExplorerService.blockInfo(req.body['block_hash'])
            .then( (blockInfoModel: BlockInfoModel) => {
                res.render(path.join(__dirname, '..', 'views', 'block-info'), {blockInfo: blockInfoModel});
            })
            .catch( err => {
                res.status(400);
            })
    }

    transactionInfo = (req: Request, res: Response) => {

        return this.blockExplorerService.transactionInfo(req.body['tx_hash'])
            .then( (txInfoModel: TxInfoModel) => {
                res.render(path.join(__dirname, '..', 'views', 'transaction-info'), {txInfo: txInfoModel});
            })
            .catch( err => {
                res.status(400);
            })
    }
}

export default BlockExplorerController