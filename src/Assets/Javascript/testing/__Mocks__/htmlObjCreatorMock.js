export default class CreateElement {
  constructor(type, value = null, child = []) {
    this.type = type;
    this.value = value;
    this.childs = child;
  }

  appendChild(object) {
    this.childs.push(object);
  }
}
