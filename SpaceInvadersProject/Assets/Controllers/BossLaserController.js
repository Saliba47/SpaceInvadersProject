#pragma strict

var bossenemyLaser:Rigidbody;

function shootingLaser()
{
	
	Instantiate(bossenemyLaser, transform.position, transform.rotation);
}

function Start () {

	var delay:float;
	
	for (var i = 0; i < 10; i++)
	{
		delay = Random.Range(0.5,1.0);
		InvokeRepeating("shootingLaser", delay, delay);
	}

}

function Update () {

}