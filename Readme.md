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
- a car park that has only one space per floor, and more than one floor is invalid, because the starting position cannot be on a stairwell

  Moves

- takes 1 step
- can be 'right', 'left', or 'down'

  Exit

- bottom right
