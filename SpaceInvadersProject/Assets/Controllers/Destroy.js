
var health:int=100;
//default value for score is 0
static var score:int=0;
var shotsfired:int=0;
//var colours:Material[];
var gameOver:boolean = false;
var x:int;
var y:int;
function Start ()
{

}

function Update () {
}

function OnGUI()
{
	GUI.color = Color.green;
	//display health
	GUI.Label(Rect(0,0,100,50),"Health: "+health);
	//display the score in the HUD
	GUI.Label(Rect(0,20,100,50),"Score: "+score);
	GUI.Label(Rect(0,40,100,50),"Shots Fired: "+ shotsfired);
	GUI.Label(Rect(0,60,100,50),"Shots Hit: "+ score);
	GUI.Label(Rect(0,80,120,50),"Shots Missed: "+ (shotsfired-score));
	
	if(health <= 0)
	{
		gameOver = true;
		if(gameOver)
		{
		Destroy(GameObject.FindGameObjectWithTag("Player"));
		if (GUI.Button(Rect(x-50,y+35,100,30),"Next Level"))
		{	
			Application.LoadLevel(0);
		}
	}
	}
}