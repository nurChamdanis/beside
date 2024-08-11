"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'https://beside-amber.vercel.app/',
        methods: '*',
    });
    await app.init();
    return app.getHttpAdapter().getInstance();
}
exports.default = async (req, res) => {
    const server = await bootstrap();
    server(req, res);
};
//# sourceMappingURL=main.js.map