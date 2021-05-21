export default class Fcb2CharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["fcb2", "sheet", "actor"],
      template: `systems/forcoinblood2e/templates/character.html`
    })
  }
}