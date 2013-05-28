#pragma strict

var speedboost:Rigidbody;
 
function Start () 
{
	//invoke repeating
	//wait 10 second before generating a powerup and then create a powerup every 20 seconds
	InvokeRepeating("createSpeedboost",10.0,20.0);
}
 
function createSpeedboost()
{
	//position of powerup. rightmost,y=0,z=1,rotation 0
	Instantiate(speedboost,Vector3(BordersCalculator.bottommost,0,1),Quaternion.identity);
}
 
function Update () {
 
}