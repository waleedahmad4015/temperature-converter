# Temperature Converter

This is a simple web-based temperature conversion program built with HTML, CSS, and JavaScript. It allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin.

## Features

- Input field for temperature value
- Dropdown menu to select the input temperature scale (Celsius, Fahrenheit, or Kelvin)
- Dropdown menu to select the output temperature scale
- Convert button to perform the conversion
- Display area for the converted temperature
- Clear button to reset all fields

## Technologies Used

- HTML
- CSS
- JavaScript

## Getting Started

### Prerequisites

- Git installed on your local machine
- A web browser

### Cloning the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

   ```
   git clone https://github.com/waleedahmad4015/temperature-converter.git
   ```

   Replace `waleedahmad4015` with your actual GitHub username if you've hosted the project on GitHub.

4. Once the cloning is complete, navigate into the project directory:

   ```
   cd temperature-converter
   ```

## Usage

1. After cloning the repository, open the `index.html` file in your web browser.
2. Enter the temperature value you want to convert in the input field.
3. Select the current temperature scale (Celsius, Fahrenheit, or Kelvin) from the first dropdown menu.
4. Select the desired output temperature scale from the second dropdown menu.
5. Click the "Convert" button to see the result.
6. The converted temperature will be displayed below the button.
7. Use the "Clear" button to reset all fields and start a new conversion.

## File Structure

```
temperature-converter/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## How It Works

The temperature converter uses JavaScript to perform the necessary calculations for converting between Celsius, Fahrenheit, and Kelvin. The HTML provides the structure for input and output, the CSS styles the appearance, and the JavaScript handles the conversion logic.

### Conversion Formulas

- Celsius to Fahrenheit: (C * 9/5) + 32
- Celsius to Kelvin: C + 273.15
- Fahrenheit to Celsius: (F - 32) * 5/9
- Fahrenheit to Kelvin: (F - 32) * 5/9 + 273.15
- Kelvin to Celsius: K - 273.15
- Kelvin to Fahrenheit: (K - 273.15) * 9/5 + 32

## Customization

Feel free to modify the styles in `styles.css` to change the appearance of the converter. You can also extend the functionality by editing the `script.js` file, such as adding more temperature scales or implementing real-time conversion as the user types.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

## Author

Waleed Ahmad

---

Enjoy using the Temperature Converter!
