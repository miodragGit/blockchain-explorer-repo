export class BlockInfoModel {
    ver: string;
    time: string;
    bits: string;
    fee: string;
    nonce: string;
    n_tx: string;
    size: string;
    block_index: string;
    main_chain: string;
    height: string;
    weight: string;
    hash: string;
    prev_block: string;
    mrkl_root: string;

    constructor(data: any) {
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