import WeaponItemSheet from './module/sheets/WeaponItemSheet';

Hooks.once("init", () => {
  const message = "Initialize For Coin and Blood 2nd Edition"
  console.log(`%c forcoinblood2e | ${message}`, "color: green; font-weight:bold");

  Items.unregisterSheet("core", ItemSheet)
  Items.registerSheet("forcoinblood2e", WeaponItemSheet, { makeDefault: true })
})