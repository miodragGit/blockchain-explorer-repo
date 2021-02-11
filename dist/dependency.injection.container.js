"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyInjectionContainer = void 0;
const block_explorer_controller_1 = require("./controllers/block-explorer.controller");
const block_explorer_service_1 = require("./services/block-explorer.service");
class DependencyInjectionContainer {
    constructor() {
        this.createServices();
    }
    createControllers() {
        let controllers = [];
        const blockExplorerController = new block_explorer_controller_1.default(this.blockExplorerService);
        controllers.push(blockExplorerController);
        return controllers;
    }
    createServices() {
        this.blockExplorerService = new block_explorer_service_1.BlockExplorerService();
    }
}
exports.DependencyInjectionContainer = DependencyInjectionContainer;
//# sourceMappingURL=dependency.injection.container.js.map