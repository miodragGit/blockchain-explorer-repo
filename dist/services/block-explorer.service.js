"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockExplorerService = void 0;
const block_info_model_1 = require("../models/block-info.model");
const tx_info_model_1 = require("../models/tx-info.model");
const axios_1 = require("axios");
class BlockExplorerService {
    constructor() { }
    blockInfo(block_hash) {
        return axios_1.default.get(BlockExplorerService.URLS.BLOCK_HASH + block_hash)
            .then(function (response) {
            let blockInfoModel = new block_info_model_1.BlockInfoModel(response.data);
            return blockInfoModel;
        })
            .catch(function (error) {
            return error.message;
        });
    }
    transactionInfo(tx_hash) {
        return axios_1.default.get(BlockExplorerService.URLS.TX_HASH + tx_hash)
            .then(function (response) {
            let txInfoModel = new tx_info_model_1.TxInfoModel(response.data);
            return txInfoModel;
        })
            .catch(function (error) {
            return error.message;
        });
    }
}
exports.BlockExplorerService = BlockExplorerService;
BlockExplorerService.URLS = {
    BLOCK_HASH: 'https://blockchain.info/rawblock/',
    TX_HASH: 'https://blockchain.info/rawtx/'
};
//# sourceMappingURL=block-explorer.service.js.map