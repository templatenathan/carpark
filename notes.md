t# Notes

**Labels**  
✅ done  
🚧 WIP  
❌ ERROR  
TODO:

## Pomodoro 1

✅ WIP given a single floor building with 10 spaces, an exit on the far right and a far left starting position

# 10 0ctober 2022

N: D
D: N

Nav: Luis
Driver: Nathan
✅create a Backlog.md file
✅create a techdebt.md file
✅ write our domain and entities
✅ move notes content to backlog
✅TEST a single scenario where there is one floor and the ✅expected result its [right]
✅git push

## Pomodoro 2

update domain with exception handling
a ground floor, starting position is 2 spaces from the exit
Pass the parking lot structure

#1 5 min D: Nathan, N: Drag

✅ 1. fix broken test for 2 spaces where input is false, false, true

3x
✅ 2. improve tests by marking the parked space

3. one floor, but

❌3. 2 floors car park, floor 1 starting, startingPosition 3 out of 5

4x

5x 4. 2 floors car park, floor 1 starting, starting position is 0 out of 1

Pomodoro 3
Two stories car park, each story two spaces
Any size floor
push for stairs are anywhere

<!-- [X 1 1 0 1]
[1 1 1 1 E] -->

DN ND -
DR NN -
DD NR -
DN ND -
DR NN -
DR ND -
DN NR -
DD NN

Todo:

✅ 1. fix current test and have 100% coverage
❌ 2. write a test and functionality for: 2 floors car park, 5 parking spaces each, starting point: 1:5
1 2 3 4 5
Floor 1 [false true false false false]
Floor 0 [false false false false true]

driver navigator
N R
R D
D N
===
N D
R N

## Pomodoro 3

✅ TODO Rename the output variable name into exitInstructions
✅ use a function to get directon, number of moves, and putting moves into the exitInstructions

Pomodoro #5

🚧 Write tests for helper functions and move helper functions on separate file:
✅ create helper.js
✅ write tests for getDirections

✅ GIVEN car park
WHEN exit index is more than position index
THEN function returns "right"

GIVEN car park
WHEN exit index is less than position index
THEN function returns "left"

✅move getDirections into helper.js
