export default class ForCoinAndBlood extends ItemSheet {
  get template() {
    return `systems/forcoinblood2e/src/templates/${this.item.data.type}.html`
  }
}