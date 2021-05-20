export default class ForCoinBloodItemSheet extends ItemSheet {
  get template() {
    return `systems/forcoinblood2e/templates/sheets/${this.item.data.type}-sheet.html`
  }
}