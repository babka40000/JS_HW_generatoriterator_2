export default class Team {
  constructor() {
    this.chars = [];
  }

  add(char) {
    this.chars.push(char);
  }

  * [Symbol.iterator]() {
    for (const char of this.chars) {
      yield char;
    }
  }
}
