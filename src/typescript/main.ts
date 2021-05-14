//@ts-ignore
import ForCoinBloodItemSheet from "../../module/sheets/item"

//@ts-ignore
Hooks.once("init", () => {
  console.log("forcoinandblood2e | Initializing For Coin and Blood 2nd Edition")

  //@ts-ignore
  Items.unregisterSheet("core", ItemSheet)
  //@ts-ignore
  Items.registerSheet("forcoinandblood2e", ForCoinBloodItemSheet, { makeDefault: true })
})