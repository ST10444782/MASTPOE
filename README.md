# MASTPOE
Menu App


1. Separation of Concerns
Initial Issue:
The initial code placed most logic and UI components in a single screen or combined functionality on the HomeScreen and ChefScreen, which resulted in a lack of modularity.
Improvement:
Separated functionality into different screens:
HomeScreen: Displays averages and full menu.
ChefScreen: Handles adding and removing dishes.
FilterScreen (new): Allows users to filter menu items by course.
2. Centralized State Management
Initial Issue:
State management logic was missing in the original code. Data flow (e.g., adding/removing dishes) was not well-defined between components.
Improvement:
Centralized menuItems state in App.js.
Passed down addDish and removeDish functions to the relevant screens via props.
Ensured all screens update the central state.
3. Modularization and Multi-file Refactor
Initial Issue:
All functionality was coded in a single file or combined into two screens.
Improvement:
Divided the codebase into multiple files:
HomeScreen.js: Handles displaying the menu and averages.
ChefScreen.js: Handles dish addition/removal.
FilterScreen.js: Allows filtering of menu items by course.
App.js: Manages navigation and global state.
Improved reusability and readability.
4. Code Quality Enhancements
Initial Issue:
Code lacked DRY (Don’t Repeat Yourself) principles. For example, logic for filtering or calculating averages wasn’t encapsulated in reusable functions.
Improvement:
Created reusable helper functions:
getAveragePrice(course) in HomeScreen to calculate average prices for each course.
Removed redundant code and consolidated logic for better maintainability.
5. Styling Improvements
Initial Issue:
Initial styling was basic and lacked consistency.
Improvement:
Updated styles for all screens with consistent themes:
Background Color: Black theme across all screens.
Text Styling: Improved readability with bold headings and spacing.
Button Styling: Used consistent colors for buttons.
6. Feature Additions
Initial Features Missing:
Separate functionality for viewing filtered menu items based on course.
Improvement:
Added FilterScreen:
Allows users to select a course (e.g., Starters, Mains, Desserts) and view only items in that course.
7. UX Improvements
Initial Issue:
No feedback for invalid inputs.
Improvement:
Added input validation in the ChefScreen:
Alerts the user if required fields (dish name, course, price) are missing.
8. Reusability and Extensibility
Initial Issue:
Code was tightly coupled and difficult to extend.
Improvement:
Refactored the app for better modularity:
Screens can be updated or extended without impacting others.
For example, FilterScreen can now use the same menuItems state without duplicating logic.
