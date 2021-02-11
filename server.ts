import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './src/middleware/logger'
import TestController from './src/controllers/block-explorer.controller'
import BlockExplorerController from "./src/controllers/block-explorer.controller";
import {DependencyInjectionContainer} from './src/dependency.injection.container'

const dependencyInjectionContainer: DependencyInjectionContainer = new DependencyInjectionContainer();

const app = new App({
    port: 3000,
    controllers: dependencyInjectionContainer.createControllers(),
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()