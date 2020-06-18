/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  switch(shape){

    case "Square":
      for(i = 0; i < height; i++){
        console.log(character.repeat(height));
      }
      break;

    case "Triangle":
      for(i=0; i < height; i++){
        console.log(character.repeat(i+1));
      }
      break;

    case "Diamond":
      var space = " ";
      midpt = Math.floor(height/2);
      spaceCount = 0;
      for(i=0; i < height; i++){
        if(i == midpt){
          console.log(character.repeat(height))
        }
        else if(i < midpt){
          charCount = 1 + (2*i);
          console.log(space.repeat((height - charCount)/2) + character.repeat(charCount) + space.repeat((height - charCount)/2));
        }
        else if(i > midpt){
          spaceCount++;
          console.log(space.repeat(spaceCount) + character.repeat(height-(2*spaceCount)) + space.repeat(spaceCount));
        }
      }
      break;

    default:
      console.log("Please enter a valid shape.") 
  }

}


//testing different shapes of different sizes
printShape("Triangle", 7, "$")
printShape("Triangle", 3, "^")
printShape("Diamond", 5, "#")
printShape("Diamond", 11, "&")
printShape("Square", 9, "%")
printShape("Square", 3, "@")