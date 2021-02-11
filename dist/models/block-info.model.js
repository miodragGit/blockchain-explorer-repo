"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockInfoModel = void 0;
class BlockInfoModel {
    constructor(data) {
        this.ver = data.ver;
        this.time = data.time;
        this.bits = data.bits;
        this.fee = data.fee;
        this.nonce = data.nonce;
        this.n_tx = data.n_tx;
        this.size = data.size;
        this.block_index = data.block_index;
        this.main_chain = data.main_chain;
        this.height = data.height;
        this.weight = data.weight;
        this.hash = data.hash;
        this.prev_block = data.prev_block;
        this.mrkl_root = data.mrkl_root;
    }
}
exports.BlockInfoModel = BlockInfoModel;
//# sourceMappingURL=block-info.model.js.map