#pragma strict

static var score:int;
static var totalscore: int;
static var health:int; //static meaning the only one in the game
static var shotsfired:int;

var audio : AudioSource;
var laserSlot:Rigidbody;
static var level:int;
static var levelcount: int;
var SpaceshipColours:Material[];
var customSkin : GUISkin;
var checkpowerup: boolean;
var speed: int;

function Start ()
{
	health = 100;
	shotsfired = 0;
	score = 0;
	checkpowerup = false;
	//for the spaceship to have the material
	//this.renderer.material = SpaceshipColours[0];
	DontDestroyOnLoad(this.gameObject);
}

function Update ()
{
	BordersCalculator.EnableBorders(this.transform);
	transform.Translate(Vector3.right * speed * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	//shoot the laser
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
		shotsfired++;
	}
	
	if (health <= 0)
	{
		health = 0;
		Destroy(GameObject.FindGameObjectWithTag("player"));
		Application.LoadLevel(7);		
	}
	else
	{
		if (health > 100)
		{
			health = 100;
		} 
	}
		
	if (levelcount < 6){ //so it won't give an error when it'll go to the boss level
		var myAlienGenerator:alienGenerator;
		myAlienGenerator=GameObject.FindGameObjectWithTag("enemy").GetComponent(alienGenerator);
	
		if(myAlienGenerator.aliennumber<=0)
		{
			level = Application.loadedLevel;
			levelcount = level+1;
			totalscore = totalscore + score;
			Application.LoadLevel(levelcount);
			score = 0;
		}
	} else {
		if (LaserController.healthboss == 0)
		{
			Destroy(GameObject.FindGameObjectWithTag("Player"));
			Application.LoadLevel(0);
		}
	}
}

function OnGUI()
{
	var shotsmissed:int;
	shotsmissed = 0;
	shotsmissed = shotsfired - score;
	
	GUI.skin = customSkin;
	GUILayout.BeginArea(Rect(0,0,1024,40));
	GUILayout.BeginHorizontal();
	GUILayout.Label("Name: "+NameController.username);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Score: "+score);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Health: "+health); 
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Fired: "+shotsfired);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Hit: "+score);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Missed: "+shotsmissed);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Aliens: "+alienGenerator.aliennumber);
	GUILayout.FlexibleSpace();	
	GUILayout.EndHorizontal();
	GUILayout.EndArea();
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="alienlaser")
	{
		//player was hit, reduced health and changed colour
		health--;
	}
	
	if(other.gameObject.tag=="healthboost")
	{
		if (health < 100)
		{
			health = health + 5;
		}
		Destroy(GameObject.FindGameObjectWithTag("healthboost"));
	}
	
	if(other.gameObject.tag=="speedboost")
	{
		Destroy(GameObject.FindGameObjectWithTag("speedboost"));
		checkpowerup = true;
		speed = 25;
		yield WaitForSeconds(5);
		checkpowerup = false;
		speed = 15;
	}
}

//function OnTriggerExit(other:Collider)
//{
	//when the laser leaves the spaceship, set the colour back to green
	//this.renderer.material = SpaceshipColours[0];
//}