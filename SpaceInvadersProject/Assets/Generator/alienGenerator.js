#pragma strict
var alien:Rigidbody;

var rows:int;
var cols:int;
static var aliennumber:int;

//the instance of the alien I am going to generate.
function Start () {
	aliennumber=0;
	createAliens(rows,cols);
//	print(rows);
	//print(cols);

}

function Update () {

}

function createAliens(rows:int,cols:int)
{
	
	var ypos=transform.position.y;
	transform.position.x=0;
	//for all the rows of aliens
	for(var rowcounter=0;rowcounter<rows;rowcounter++)
	{
	
		var tempAlien:Rigidbody;
		//creates the aliens as required
		for(var counter=0;counter<cols;counter++)
		{
			
			//create instances of the alien in these positions
			tempAlien = Instantiate(alien,Vector3(counter*2,ypos-(rowcounter*1.5),1),Quaternion.identity);
			//the parent of the alien is the swarm
			tempAlien.transform.parent = this.transform;
			aliennumber++;
	
		}
	}
	
//	print(aliennumber);
	
}

