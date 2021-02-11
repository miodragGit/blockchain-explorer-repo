import {BlockInfoModel} from "../models/block-info.model";
import {TxInfoModel} from "../models/tx-info.model";
import axios from "axios";


export interface IBlockExplorerService {
    blockInfo(block_hash: string) : any;
    transactionInfo(tx_hash: string) : any;
}

export class BlockExplorerService implements IBlockExplorerService {
    static URLS = {
        BLOCK_HASH: 'https://blockchain.info/rawblock/',
        TX_HASH: 'https://blockchain.info/rawtx/'
    }

    constructor() {}

    blockInfo(block_hash: string): Promise<BlockInfoModel> {
        return axios.get( BlockExplorerService.URLS.BLOCK_HASH + block_hash)
            .then(function (response) {
                let blockInfoModel = new BlockInfoModel(response.data);

                return blockInfoModel;
            })
            .catch(function (error) {

                return error.message;
            });
    }

    transactionInfo(tx_hash: string): Promise<TxInfoModel> {
        return axios.get( BlockExplorerService.URLS.TX_HASH + tx_hash)
            .then(function (response) {
                let txInfoModel = new TxInfoModel(response.data)

                return txInfoModel;
            })
            .catch(function (error) {

                return error.message;
            });
    }

}
