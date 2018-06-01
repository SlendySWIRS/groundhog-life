var n = require('./70'), r = require('./124'), i = require('./25'), o = require('./55');
import { createLevelLock } from "./locks";
import { LevelAddMultModifier } from "./modifiers/modifier";

export let dmScanner = new i.Area('area_dmScanner', 'Dark Matter Scanning', []);
export let anomaly = new i.Area('area_investigateAnomaly', 'Investigate Anomaly', []);
export let mirrorMatter = new i.Area('area_mirrorMatter', 'Mirror Matter Theory', []);
export let demirrorAnomaly = new i.Area('area_demirror', 'Unmirror Anomaly', []);
export let studyMirroredShip = new i.Area('area_studyMirroredShip', 'Study Mirrored Ship', []);
export let laserGun = new i.Area('area_constructPowerPlant', 'Laser Gun', []);
laserGun.effect = '+10% Laser Gun Damage';
export let loopTrapResearch = new i.Area('area_loopTrap', 'Loop Trap Device', []);
loopTrapResearch.effect = 'Increases Loop Trap Device efficiency';
let m = [
    r.qm,
    dmScanner,
    anomaly,
    mirrorMatter,
    demirrorAnomaly,
    studyMirroredShip,
    laserGun,
    loopTrapResearch
];
for (let i = 1; i < m.length - 2; i++) {
    let g = new LevelAddMultModifier(m[i].id + '_level_mod', 'Research: ' + m[i].name, 2, m[i].xp, 0.01);
    m[i + 1].xp.xpPerHourStat.addModifier(g);
    m[i].effect = '+1% ' + m[i + 1].name + ' Research';
    createLevelLock(m[i], m[i + 1], 50 * i);
}
createLevelLock(o.lambdaComplexTrainee, dmScanner, 1);
createLevelLock(studyMirroredShip, loopTrapResearch, 250);
createLevelLock(o.darkPlateauCeo, laserGun, 10);
createLevelLock(o.darkPlateauCeo, loopTrapResearch, 10);
export let physics = new n.Field('physics', 'Physics', m);
