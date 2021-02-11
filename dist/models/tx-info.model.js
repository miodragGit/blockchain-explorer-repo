"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxInfoModel = void 0;
class TxInfoModel {
    constructor(data) {
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
exports.TxInfoModel = TxInfoModel;
//# sourceMappingURL=tx-info.model.js.map