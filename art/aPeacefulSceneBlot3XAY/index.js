/*
@title: aPeacefulScene
@author: 3XAY (Ayan Bindal)
@snapshot: [enter thumbnail file name later]
*/

//Set width and height for the blot, max is 125x125
const width = 100; //I am setting 100x100 to leave a bit of space in the margins for framing or anything else
const height = 100;
setDocDimensions(width, height)

//Store final lines here
const finalLines = [];

//Create a turtle object
const t = new bt.Turtle();

/*
Basic turtle commands:
t.up(); == lift the pen
t.down(); == lower the pen
t.left(x); / t.right(x); == rotate the turtle left/right by x degrees
t.goTo([x,y]); == go to a certain coordinate, this can draw a line if the pen is down
t.jump([x,y]); == go to a certain coordinate, WITHOUT drawing a line even if the pen is down
t.step([dx,dy]); == move the turtle left/right, up/down to a certain coordinate
t.setAngle(x); == set the turtle's angle
t.arc(ang, rad); == draw an arc with an angle and radius from the current position

The following are properties
t.pos == the current position of the turtle, returned as an [x, y] array
t.angle == the current angle of the turtle
t.drawing == a boolean that tells if the turtle is drawing or not
*/

//Goal 1: Draw a sun in the top left corner (this never changes)
t.jump([0,100]); //Brings the turtle to the top left
t.up();
t.step([0, -10]);
t.down();
t.arc(90, 10);
//Draw rays
t.jump([2, 90]);
t.step([1, -7]);
t.jump([6, 92]);
t.step([4,-8]);
t.jump([9, 96]);
t.step([4,-4]);
t.jump([10, 99]);
t.step([8,-4]);


//Add turtle to final lines
bt.join(finalLines, t.lines());

//Draw the lines
drawLines(finalLines);