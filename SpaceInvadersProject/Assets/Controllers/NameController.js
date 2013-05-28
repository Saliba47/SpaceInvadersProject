#pragma strict

static var username="";
var checkname: boolean = false;
var style:GUISkin;

function Start () {

}

function Update () {

}

function OnGUI()
{
	GUI.skin = style;

	GUILayout.BeginArea(Rect(Screen.width/2-100,Screen.height/2-50,200,200));

	if(checkname == true)
	{
		SpaceshipController.level = 1;
		SpaceshipController.score=0;
		SpaceshipController.health=100;
		SpaceshipController.levelcount=1;
		LaserController.healthboss = 50;
		Application.LoadLevel(1);
	
	}
	else
	{
		GUILayout.BeginHorizontal();
		GUILayout.Label("Enter Name: ");
		GUILayout.FlexibleSpace();
		username = GUILayout.TextField(username);
		GUILayout.FlexibleSpace();
		GUILayout.EndHorizontal();
	
	}
	
	if(GUILayout.Button("New Game"))
	{
		if(username == "")
		{
			checkname = false;
		
		}
		else
		{
		 checkname = true;
		
		}
	
	}
	
	GUILayout.EndArea();
}

