$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(280,420,20,500)
    createPlatform(230,680,20,10)
    createPlatform(20,570,20,10)
    createPlatform(230,450,20,10)
    createPlatform(280,410,100,10)
    createPlatform(380,410,100,10)
    createPlatform(480,410,100,10)
    createPlatform(500,410,100,10)
    createPlatform(580,410,100,10)
    createPlatform(620,410,100,10)
    createPlatform(680,410,100,10)
    createPlatform(780,410,100,10)
    createPlatform(880,410,100,10)
    createPlatform(900,560,100,10)
    createPlatform(800,560,100,10)
    createPlatform(700,560,100,10)
    createPlatform(600,560,100,10)
    createPlatform(500,560,100,10)
    createPlatform(400,560,100,10)
    createPlatform(350,560,100,10)
    createPlatform(1000,560,100,10)
    createPlatform(1080,190,20,190)
    createPlatform(280,200,20,120)
    createPlatform(280,190,820,10)
    createPlatform(190,190,600,10)
    createPlatform(90,190,-10,10)
    createPlatform(1350,700,20,10)
    createPlatform(1150,580,20,10)
    createPlatform(1080,300,20,340)
    createPlatform(1380,500,20,10)
    createPlatform(1150,400,20,10)
    createPlatform(1380,300,20,10)
    createPlatform(1130,200,40,10)
    createPlatform(1080,1,20,80)
    createPlatform(280,110,20,80)
    createPlatform(500,300,100,110)
    createPlatform(340,350,100,60)
    createPlatform(800,290,100,120)
    createPlatform(970,200,20,130)
    createPlatform(650,350,100,60)
    createPlatform(350,520,100,50)
    createPlatform(560,520,100,50)
    createPlatform(770,520,100,50)
    createPlatform(950,520,100,50)
    createPlatform(470,540,70,30)
    createPlatform(680,540,70,30)
    createPlatform(400,300,70,60)
    
  
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)



    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon('left', 650, 1000)
    createCannon('right',600,1000)
    createCannon('top',200,1050)


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
