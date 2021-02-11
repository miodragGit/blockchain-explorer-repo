import BlockExplorerController from './controllers/block-explorer.controller';
import {IBlockExplorerService, BlockExplorerService} from './services/block-explorer.service';

export class DependencyInjectionContainer{

    private blockExplorerService: IBlockExplorerService

    constructor() {
        this.createServices();
    }

    public createControllers(){
        let controllers : any = [];
        const blockExplorerController: BlockExplorerController = new BlockExplorerController(this.blockExplorerService);
        controllers.push(blockExplorerController);

        return controllers;
    }

    private createServices(){
        this.blockExplorerService = new BlockExplorerService();
    }
}