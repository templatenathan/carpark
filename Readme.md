# Domain

- Parking lot with multiple floors
- Each floor has cars parked in 1 line
- Exit at bottom right
- Each movement is 1 step - eg down one floor, or to the next parking space
  -once you land on the exit you achieved the goal

## Entities

Car Park

- has a fixed number of parking spots per level
- has multiple Levels
- has multiple parking spaces
- has one Stairwell, unless ground floor
- ground floor has one exit

Level

- can be multiple levels in a car park
- either has a stairwell in any location when above the ground floor, or an exit on the far right if ground floor

Parking Position

- starting position is the space index on a floor
- starting floor is the index of starting floor where car is parked

  Moves

- takes 1 step
- can be 'right', 'left', or 'down'

  Exit

- bottom right
