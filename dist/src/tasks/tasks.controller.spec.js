"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const tasks_controller_1 = require("./tasks.controller");
const tasks_service_1 = require("./tasks.service");
describe('TasksController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [tasks_controller_1.TasksController],
            providers: [tasks_service_1.TasksService],
        }).compile();
        controller = module.get(tasks_controller_1.TasksController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=tasks.controller.spec.js.map