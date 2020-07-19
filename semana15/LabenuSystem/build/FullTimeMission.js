"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullTimeMission = void 0;
const Mission_1 = require("./Mission");
const moment = require("moment");
class FullTimeMission extends Mission_1.Mission {
}
exports.fullTimeMission = new FullTimeMission('1', moment('18/01/2020', 'DD/MM/YYYY'), moment('18/07/2020', 'DD/MM/YYYY'), [], [], 5);
//# sourceMappingURL=FullTimeMission.js.map