//@ts-ignore
import ForCoinAndBlood from "../../module/sheets/forcoinandblood"

//@ts-ignore
Hooks.once("init", () => {
  console.log("ForCoinAndBlood | Initializing For Coin and Blood 2nd Edition")

  //@ts-ignore
  Items.unregisterSheet("core", ItemSheet)
  //@ts-ignore
  Items.registerSheet("forcoinandblood", ForCoinAndBlood, { makeDefault: true })
})