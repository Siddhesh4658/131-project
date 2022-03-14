img = "";

function preload()
{
    img = loadimage("dog_cat.jpg");
}

function setup()
{
    canvas = CreateCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#52697d");
    Text("Dog", 45, 75);
    noFill();
    stroke("#52697d");
    rect(30, 60, 450, 350 ); 
}