class ButtonModel {
  constructor() {
    this.type = 'default';
    this.className = 'btn btn-secondary';
    this.text = 'click';
    this.alternateText = null;
    this.clickAction = function () { console.log('clicked') };
  }
}

export default ButtonModel;