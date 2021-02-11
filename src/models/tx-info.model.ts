export class TxInfoModel {
    ver: string;
    weight: string;
    relayed_by: string;
    lock_time: string;
    size: string;
    rbf: string;
    time: string;
    tx_index: string;
    vin_sz: string;
    hash: string;
    vout_sz: string;

    constructor(data: any) {
        this.ver = data.ver;
        this.weight = data.weight;
        this.relayed_by = data.relayed_by;
        this.lock_time = data.lock_time;
        this.size = data.size;
        this.rbf = data.rbf;
        this.time = data.time;
        this.tx_index = data.tx_index;
        this.vin_sz = data.vin_sz;
        this.hash = data.hash;
        this.vout_sz = data.vout_sz;
    }
}