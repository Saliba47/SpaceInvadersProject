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

		GUI.Label(Rect(x-30,y-30,100,60),"Game Over");
		
		if (GUI.Button(Rect(x-50,y+35,100,30),"Main Menu"))
		{
			Application.LoadLevel(0);
		}
	
	}
	