"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nightMission = void 0;
const Mission_1 = require("./Mission");
const moment = require("moment");
class NightMission extends Mission_1.Mission {
    setName(name) {
        if (name.indexOf("-na-night") !== -1) {
            super.setName(name);
        }
        else {
            super.setName(name + "-na-night");
        }
    }
}
exports.nightMission = new NightMission('1', moment('18/02/2020', 'DD/MM/YYYY'), moment('18/08/2020', 'DD/MM/YYYY'), [], []);
//# sourceMappingURL=NightMission.js.map