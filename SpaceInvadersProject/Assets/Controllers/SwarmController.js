#pragma strict
//left margin in world coordinates
var leftborder:float=-12.0;
var rightborder:float=6;

var touchedrightwall:boolean=false;
var touchedleftwall:boolean=false;

//the instance of the alien I am going to generate.

/*var numberOfAliens:int;
	numberOfAliens = GameObject.FindGameObjectsWithTag("enemy").Length;*/
	
//a coroutine that is run in sequence in conjunction with the update function
function moveDown()
{
	//move down by one step
	transform.position.y--;
}




function Start () {
touchedrightwall=true;
for(var counter=0;counter<5;counter++)
	{
		//wait for five seconds
		yield WaitForSeconds(5);
		//move the aliens down
		moveDown();
	}
}

function Update () {
	
	
	
	
	
	if (transform.position.x > rightborder)
	{
		touchedrightwall=true;
	}
	
	if (transform.position.x < leftborder)
	{
		touchedleftwall = true;
	}
	
	if (touchedrightwall == false)
	{
		//move to the right
		touchedleftwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
	//
	if (touchedrightwall == true)
	{
		transform.Translate(Vector3.left * 10 * Time.deltaTime);
	}
	
	if (touchedleftwall == true)
	{
		touchedrightwall = false;
		transform.Translate(Vector3.right * 10 * Time.deltaTime);
	}
}
		

	
	
