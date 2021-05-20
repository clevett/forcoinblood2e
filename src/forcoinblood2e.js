import ForCoinBloodItemSheet from './js/ForCoinBloodItemSheet.js';

Hooks.once("init", function () {
  const message = "Initialize For Coin and Blood 2nd Edition"
  console.log(`%c forcoinblood2e | ${message}`, "color:purple; font-weight:bold;");

  Items.unregisterSheet("core", ItemSheet)
  Items.registerSheet("forcoinblood2e", ForCoinBloodItemSheet, { makeDefault: true })
})