class AwButtonModel {
	constructor() {
		this.type = 'default';
		this.variant = 'secondary';
    this.text = 'click';
  }
}

AwButtonModel.prototype.onClick = function () {
	console.log(this.text);
} 

export default AwButtonModel;