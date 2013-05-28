#pragma strict

function Start ()
{
	transform.position.x = Random.Range(BordersCalculator.rightmost,BordersCalculator.leftmost);
	transform.position.y = -9;
}
 
function Update ()
{
	BordersCalculator.EnableBorders(this.transform);
}
