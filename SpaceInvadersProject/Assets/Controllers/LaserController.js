#pragma strict

var shootingup:boolean;
var x:int;
var y:int;
	x= Screen.width/2;
	y = Screen.height/2;

var detonator:GameObject;
static var healthboss: int=50;

function Start () {

}

function Update () {
	if(shootingup)
	{
		//shoot up
		transform.Translate(Vector3.up * 10 * Time.deltaTime);
	}
	else
	{
		//shoot down
		transform.Translate(Vector3.up * -10 * Time.deltaTime);
	}
	
	if(SpaceshipController.health <= 0)
	{
		
		if (GUI.Button(Rect(x-50,y+35,100,30),"Game Over"))
		{	
			Application.LoadLevel(7);
		}
	}
	
	if(healthboss <= 0)
	{
		Application.LoadLevel(9);
	
	}


}

function OnTriggerEnter(other:Collider)
{
//laser hits something
	//check if it is the player's laser shooting UPWARDS
	if(shootingup == true)
	{
		if (other.gameObject.tag == "enemy")
		{
		//laser hits an alien
		//increment score
			SpaceshipController.score++;
		//destroy the alien
	
			alienGenerator.aliennumber--;
			
			Instantiate(detonator, transform.position, Quaternion.identity);
		
			Destroy(other.gameObject);
		//destroy the laser
			Destroy(this.gameObject);
		} else
		{
		 	if (other.gameObject.tag == "boss")
			
			{
				SpaceshipController.score++;
				healthboss--;
				Destroy(this.gameObject);
			}
		}
	}
}



function OnBecameInvisible()
{
	Destroy(this.gameObject);
	
}

