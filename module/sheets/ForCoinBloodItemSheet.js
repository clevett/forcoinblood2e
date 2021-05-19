export default class ForCoinBloodItemSheet extends ItemSheet {
  get template() {
    return `systems/forcoinblood2e/templates/${this.item.data.type}.html`
  }
}