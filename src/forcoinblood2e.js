import { forcoinblood2e } from "./js/config.js"
import Fcb2ItemSheet from './js/Fcb2ItemSheet.js';
import Fcb2CharacterSheet from './js/Fcb2CharacterSheet.js';

Hooks.once("init", function () {
  const message = "Initialize For Coin and Blood 2nd Edition"
  console.log(`%c forcoinblood2e | ${message}`, "color:purple; font-weight:bold;");

  CONFIG.forcoinblood2e = forcoinblood2e

  Items.unregisterSheet("core", ItemSheet)
  Items.registerSheet("forcoinblood2e", Fcb2ItemSheet, { makeDefault: true })

  Actors.unregisterSheet("core", ActorSheet)
  Actors.registerSheet("forcoinblood2e", Fcb2CharacterSheet, { makeDefault: true })
})