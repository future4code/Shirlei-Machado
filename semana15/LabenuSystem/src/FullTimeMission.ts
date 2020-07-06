import { Mission } from "./Mission";
import * as moment from 'moment';

class FullTimeMission extends Mission{}


export const fullTimeMission = new FullTimeMission('1', moment('18/01/2020', 'DD/MM/YYYY'), moment('18/07/2020', 'DD/MM/YYYY'), [], [], 5);