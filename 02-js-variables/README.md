# Variables

In life, we remember the names of things (objects, people, places) which we use later on to help us communicate with others. Imagine you are in a room with a table, a blue chair and a red chair and you needed to instruct someone else to rearrange the furniture, but you could only describe the position of the objects, not anything about the objects themselves.

A pretty efficient approach might be something like “pick up the object which is 10cm away from the west wall and place it next to the object which is 30cm away from the east wall”. This would require you to measure everything, figure out the direction the walls are facing and the person you are instructing to do the same thing.

Therefore we give _descriptive names_ to things to make it easier to refer to those objects. “Pick up the blue chair and place it next to the red chair” is so much simpler.

This is a bit like variables in programming. A variable is a _name_ given to a _value_. Under the hood, variables are actually specific _memory addresses_ which are storing something in the memory of the application, so it’s a bit like a description of the exact location of those objects in the room.

Look at this pseudo-code (pseudo-code is not a specific language, but is written a little like real code):

```(javascript)
the eastWall is the wall which faces east
the westWall is the wall which faces west

the redChair is the object which is 10cm away from the westWall
the blueChair is the object which 30cm away from the eastWall
the table is the object which is 90cm away from the eastWall

move the blueChair next to the redChair and move both chairs next to the table

```

We’re describing the parameters of the room and the objects in the room, which allows us to easily describe what we want to happen with to those objects.
