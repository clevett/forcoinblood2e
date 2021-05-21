export default class ForCoinBloodItemSheet extends ItemSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 520,
      height: 520,
      classes: ["fcb2", "sheet", "item"]
    })
  }

  get template() {
    return `systems/forcoinblood2e/templates/${this.item.data.type}.html`
  }

  getData() {
    const data = super.getData()
    data.config = CONFIG.forcoinblood2e
    return data
  }
}