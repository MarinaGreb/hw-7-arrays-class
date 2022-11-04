class Button {
  constructor(width, height, type, color) {
    this.width = width;
    this.height = height;
    this.type = type;
    this.color = color;
    this.props = [this.width, this.height, this.type, this.color];
  }
  onClick() {
    console.log(this.props);
  }
}

function testButton(button) {
  if (
    button.color == "green" &&
    button.width == 10 &&
    button.height == 15 &&
    button.type == "button"
  ) {
    console.log("Соответсвует");
  } else {
    console.log("Несоотвествует");
  }
}

let greenBtn = new Button(10, 15, "button", "green");
greenBtn.onClick();
testButton(greenBtn);

let blueBtn = new Button(10, 15, "button", "blue");
blueBtn.onClick();
testButton(blueBtn);