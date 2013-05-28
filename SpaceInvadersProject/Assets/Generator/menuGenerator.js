#pragma strict
var x:int;
var y:int;
var theme:GUISkin;

function Start() 
{
	x= Screen.width/2;
	y = Screen.height/2;
}

function Update () {

}


function OnGUI()
	{
		GUI.skin = theme;
		GUI.color = Color.white;

		if (GUI.Button(Rect(x-50,y+35,100,30),"New Game"))
		{
			Application.LoadLevel(8);
		}
		if (GUI.Button(Rect(x-50,y+75,100,30),"Exit"))
		{
			Application.Quit();
		
		}
	}
	