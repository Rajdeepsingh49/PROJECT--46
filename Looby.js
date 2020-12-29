class Looby{
    constructor(){
      this.character = createSelect("CHOOSE CHARACTER");
      this.character.option("Nobita");
      this.character.option("Sizuka");
      this.character.option("Doraemon");
      this.character.option("Suneo");
      this.character.option("Takeshi");

     this.backgroundtrack = createSelect("CHOOSE BACKGROUND");
     this.backgroundtrack.option("CHOOSE BACKGROUND");
      this.backgroundtrack.option("Desert");
      this.backgroundtrack.option("Ice Age");
      this.backgroundtrack.option("City Evening");
      this.backgroundtrack.option("Farm");
      this.backgroundtrack.option("Foggy Lake");
     
     this.liveRace = createButton("LIVE RACE");
     this.buy = createButton("BUY");
     this.buy2 = createButton("BUY");
     this.buy3 = createButton("BUY");
     this.buy4 = createButton("BUY");
     this.racewithai = createButton("RACE WITH AI");
     this.back = createButton("BACK");
     this.buttion1 = createButton("CHOOSE CHARACTER");
     this.back2 = createButton("BACK");
     this.title = createElement('h2');
     this.title2 = createElement('h3');
     this.title3 = createElement('h4');
     this.title4 = createElement('h5');
     this.title5 = createElement('h6');
     this.title6 = createElement('h7');
     this.title7 = createElement('h8');
     this.title8 = createElement('h9');
     this.title9 = createElement('h10');
     this.title10 = createElement('h11');
     this.title11 = createElement('h12');
    }
    display(){
            background(loobyimg,width,height);
            form.hide();
            
            this.title.html("WELCOME TO YOUR LOOBY");
            this.title.position(300, 10);
            this.title.style('font-size', '70px');
            this.title.style('color', 'yellow');
            
            this.title2.html("NOBITA");
            this.title2.position(200, 60);
            this.title2.style('font-size', '30px');
            this.title2.style('color', 'yellow');
            this.title2.hide();
            
            this.title3.html("SIZUKA");
            this.title3.position(520, 50);
            this.title3.style('font-size', '30px');
            this.title3.style('color', 'yellow');
            this.title3.hide();

            this.title4.html("Coins=1003");
            this.title4.position(500, 70);
            this.title4.style('font-size', '30px');
            this.title4.style('color', 'yellow');
            this.title4.hide();
            
            this.title6.html("COINS=1800");
            this.title6.position(780, 120);
            this.title6.style('font-size', '30px');
            this.title6.style('color', 'yellow');
            this.title6.hide();
            
            this.title5.html("SUNEO");
            this.title5.position(800, 20);
            this.title5.style('font-size', '30px');
            this.title5.style('color', 'yellow');
            this.title5.hide();

            this.title7.html("TAKESHI");
            this.title7.position(1100, 90);
            this.title7.style('font-size', '30px');
            this.title7.style('color', 'yellow');
            this.title7.hide();
            
            this.title8.html("COINS=3000");
            this.title8.position(1090, 120);
            this.title8.style('font-size', '30px');
            this.title8.style('color', 'yellow');
            this.title8.hide();
            
            this.title9.html("DOREAMON");
            this.title9.position(600, 400);
            this.title9.style('font-size', '40px');
            this.title9.style('color', 'yellow');
            this.title9.hide();
            
            this.title10.html("COINS=10000");
            this.title10.position(590, 450);
            this.title10.style('font-size', '40px');
            this.title10.style('color', 'yellow');
            this.title10.hide();

            this.title11.html("PLEASE CHOOSE YOUR CHARACTER");
            this.title11.position(400, 10);
            this.title11.style('font-size', '40px');
            this.title11.style('color', 'lightgreen');
            this.title11.hide();

            this.character.position(width-220,height/2-0);
            this.character.style('width', '200px');
            this.character.style('height', '40px');
            this.character.style('background', 'orange');
            this.character.hide();

            this.backgroundtrack.position(width-350,height/2-100);
            this.backgroundtrack.style('width', '200px');
            this.backgroundtrack.style('height', '40px');
            this.backgroundtrack.style('background', 'orange');
            
            this.buy.position(width-1000,height/2-220);
            this.buy.style('width', '90px');
            this.buy.style('height', '40px');
            this.buy.style('background', 'orange');
            this.buy.hide();
             
            this.buy2.position(width-720,height/2-220);
            this.buy2.style('width', '90px');
            this.buy2.style('height', '40px');
            this.buy2.style('background', 'orange');
            this.buy2.hide();
             
            this.buy3.position(width-400,height/2-220);
            this.buy3.style('width', '90px');
            this.buy3.style('height', '40px');
            this.buy3.style('background', 'orange');
            this.buy3.hide();

            this.buy4.position(width-870,height-250);
            this.buy4.style('width', '90px');
            this.buy4.style('height', '40px');
            this.buy4.style('background', 'orange');
            this.buy4.hide();

            this.buttion1.position(width-350,height/2-200);
            this.buttion1.style('width', '200px');
            this.buttion1.style('height', '40px');
            this.buttion1.style('background', 'orange');

            this.back2.position(width-100,height-750);
            this.back2.style('width', '70px');
            this.back2.style('height', '40px');
            this.back2.style('background', 'orange');
            this.back2.hide();

            this.liveRace.position(width-350,height/2);
            this.liveRace.style('width', '200px');
            this.liveRace.style('height', '40px');
            this.liveRace.style('background', 'orange');

            this.racewithai.position(width-350,height/2+100);
            this.racewithai.style('width', '200px');
            this.racewithai.style('height', '40px');
            this.racewithai.style('background', 'orange');

            this.back.position(width-150,height-100);
            this.back.style('width', '100px');
            this.back.style('height', '40px');
            this.back.style('background', 'orange');
            this.back.hide();

            

            this.buttion1.mousePressed(()=>{
                console.log("Check3");
                this.character.show();
                this.buttion1.hide();
                this.backgroundtrack.hide();
                this.liveRace.hide();
                this.racewithai.hide();
                this.title.hide();
                this.title2.show();
                this.title3.show();
                this.title4.show();
                this.title5.show();
                this.title6.show();
                this.title7.show();
                this.title8.show();
                this.title9.show();
                this.title10.show();
                this.title11.show();
                this.buy.show();
                this.buy2.show();
                this.buy3.show();
                this.buy4.show();
                background(characterimg,width,height);
                this.back.show();
            }) 
            /*
            this.backgroundtrack.mousePressed(()=>{
                console.log("Check9");
                this.character.hide();
                this.backgroundtrack.hide();
                this.liveRace.hide();
                this.racewithai.hide();
                this.back.show();
                this.title.hide();
                background(characterimg,width,height);
            }) */

            this.liveRace.mousePressed(()=>{
                console.log("Check8");
                this.character.hide();
                this.backgroundtrack.hide();
                this.liveRace.hide();
                this.racewithai.hide();
                this.back2.show();
                this.title.hide();
                this.buttion1.hide();
                background("white");
            }) 

            this.racewithai.mousePressed(()=>{
                console.log("Check7");
                this.character.hide();
                this.backgroundtrack.hide();
                this.liveRace.hide();
                this.racewithai.hide();
                this.back2.show();
                this.title.hide();
                this.buttion1.hide();
                gameState = 2;
               

            }) 

            this.back.mousePressed(()=>{
                console.log("Check10");
                this.character.hide();
                this.backgroundtrack.show();
                this.liveRace.show();
                this.racewithai.show();
                this.back.hide();
                this.title.show();
                this.title2.hide();
                this.title3.hide();
                this.title4.hide();
                this.title5.hide();
                this.title6.hide();
                this.title7.hide();
                this.title8.hide();
                this.title9.hide();
                this.title10.hide();
                this.title11.hide();
                this.buy.hide();
                this.buy2.hide();
                this.buy3.hide();
                this.buy4.hide();
                this.buttion1.show();
                background(loobyimg,width,height);
               
            }) 

            this.back2.mousePressed(()=>{
                console.log("Check11");
                this.character.hide();
                this.backgroundtrack.show();
                this.liveRace.show();
                this.racewithai.show();
                this.title.show();
                this.back2.hide();
                this.buttion1.show();
                background(loobyimg,width,height);
               
            }) 
            
            
            
            

    }
}