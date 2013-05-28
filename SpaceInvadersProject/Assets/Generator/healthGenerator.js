#pragma strict

var healthboost:Rigidbody;
 
function Start () 
{
	//invoke repeating
	//wait 10 second before generating a powerup and then create a powerup every 20 seconds
	InvokeRepeating("createHealthboost",8.0,15.0);
}
 
function createHealthboost()
{
	//position of powerup. rightmost,y=0,z=1,rotation 0
	Instantiate(healthboost,Vector3(BordersCalculator.bottommost,0,1),Quaternion.identity);
}
 
function Update () {
 
}