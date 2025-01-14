Spreadsheet Clone

This project is a basic implementation of a web-based spreadsheet application. It features a customizable grid with basic formatting, formula handling, and row/column operations.

Features

Interactive Grid:

A resizable grid with 50 rows and 26 columns by default.

Cells are editable, allowing text input directly.

Toolbar Functionalities:

Bold and italic formatting.

Adjustable font sizes (12px, 14px, 16px).

Functions for inserting/deleting rows and columns.

Predefined functions such as SUM, AVERAGE, MAX, MIN, COUNT, TRIM, UPPER, and LOWER.

Formula Bar:

Displays the content or formula of the selected cell.

Allows users to input or edit formulas directly.

Column Resizing:

Resize columns using a draggable handle on the cell edge.

Dynamic Header and Row Numbering:

Alphabetic column headers (A-Z).

Numeric row headers starting from 1.

Technologies Used

HTML5: For the structure of the application.

CSS3: For styling the grid, toolbar, and other components.

JavaScript: For grid interactivity, formula evaluation, and DOM manipulation.

Installation and Setup

Clone the repository:

git clone https://github.com/your-username/spreadsheet-clone.git

Navigate to the project directory:

cd spreadsheet-clone

Open index.html in your web browser:

open index.html

How to Use

Editing Cells:

Click on any cell to select it.

Start typing to input text.

Press Enter to save the input.

Formatting:

Use the toolbar buttons to apply bold or italic styles.

Change font size using the dropdown menu.

Row and Column Operations:

Insert or delete rows and columns using the respective toolbar buttons.

Formulas:

Select a cell, type a formula starting with = in the formula bar, and press Enter.

Example: =SUM(10,20) will compute the sum of 10 and 20.

Functions:

Select a function from the dropdown (e.g., SUM, AVERAGE) to apply it to the selected cell.

Resizing Columns:

Hover over the right edge of a column to see the resize handle.

Drag the handle to adjust the column width.

Formula Syntax

Formulas must start with =.

Supported functions include:

SUM(range): Calculates the sum of values.

AVERAGE(range): Calculates the average of values.

MAX(range): Finds the maximum value.

MIN(range): Finds the minimum value.

COUNT(range): Counts numeric values.

TRIM(range): Trims whitespace from strings.

UPPER(range): Converts text to uppercase.

LOWER(range): Converts text to lowercase.

Limitations

Basic formula parsing is implemented; advanced cell reference handling is not yet supported.

Real-time cell dependency tracking is not implemented.

No data persistence (changes are lost on page reload).

Future Enhancements

Cell References:

Allow referencing other cells in formulas (e.g., =SUM(A1:A5)).

Data Persistence:

Save and load grid data using local storage or a backend service.

Advanced Functions:

Add more complex spreadsheet functions and support for nested formulas.

Improved UI/UX:

Add drag-and-drop functionality for reordering rows and columns.

Mobile Responsiveness:

Enhance the design for better usability on mobile devices.

License

This project is open-source and available under the MIT License.

Contribution

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request with your changes.

Contact

For any questions or suggestions, please reach out to [tarukomlika01@gmail.com].

