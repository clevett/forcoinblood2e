import ForCoinBloodItemSheet from './js/ForCoinBloodItemSheet.js';
import { forcoinblood2e } from "./js/config.js"

Hooks.once("init", function () {
  const message = "Initialize For Coin and Blood 2nd Edition"
  console.log(`%c forcoinblood2e | ${message}`, "color:purple; font-weight:bold;");

  CONFIG.forcoinblood2e = forcoinblood2e

  Items.unregisterSheet("core", ItemSheet)
  Items.registerSheet("forcoinblood2e", ForCoinBloodItemSheet, { makeDefault: true })
})