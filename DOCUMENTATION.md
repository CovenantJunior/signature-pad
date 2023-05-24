# Signature Pad Documentation

![Signature Pad](https://repository-images.githubusercontent.com/640015149/94c4e46e-10b0-453f-a2bf-57a0c45a5f26)

Signature Pad is a lightweight JavaScript library for adding a signature pad functionality to your web applications. It provides an intuitive interface for users to draw their signatures using a mouse, touch, or stylus input. This documentation will guide you through the installation, usage, and customization of Signature Pad.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Reference](#api-reference)
4. [Customization](#customization)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

You can install Signature Pad or include it directly in your HTML file by:

### Git Installation

To install Signature Pad using your terminal/HTTPS:
1. Open your command line or terminal.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:
```bash
git clone https://github.com/CovenantJunior/signature-pad
```

4. Once the cloning process is complete, navigate into the cloned repository using the following command:
```bash
cd signature-pad
```


### SSH Installation

To install Signature Pad using SSH:
1. Open your command line or terminal.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:
```bash
git clone https://github.com/CovenantJunior/signature-pad
```

4. Once the cloning process is complete, navigate into the cloned repository using the following command:
```bash
cd signature-pad
```

### GitHub CLI Installation

To install Signature Pad using your GitHub CLI:
1. Open your command line or terminal.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:
```bash
gh repo clone CovenantJunior/signature-pad
```

4. Once the cloning process is complete, navigate into the cloned repository using the following command:
```bash
cd signature-pad
```

Now, you have successfully cloned the Signature Pad repository. To open it, you can use any text editor or integrated development environment (IDE) of your choice.

For example, to open the repository in Visual Studio Code:
```bash
code .
```

## Usage
To use Signature Pad, an HTML canvas element was created and initialize with the SP class. Here's an example of how to use Signature Pad:

```bash
<!DOCTYPE html>
<html>
  <head>
    <title>Signature Pad Demo</title>
    <script src="path/to/signature_pad.js"></script>
  </head>
  <body>
    <canvas id="signature-pad" width="400" height="200"></canvas>

    <script>
      // Get the canvas element
      var canvas = document.getElementById('signature-pad');

      // Create a new instance of SP
      var signaturePad = new SP(canvas);

      // Do something with the signature
      function saveSignature() {
        var dataURL = signaturePad.toDataURL();
        // You can now send the dataURL to your server or process it further
      }
    </script>
  </body>
</html>
```
In the example above, we create a canvas element with the ID "signature-pad" and initialize it with SP. We also define a saveSignature function that can be called to get the signature data as a base64-encoded PNG image.


## API Reference
Signature Pad provides a simple API to interact with the signature pad. Here are the main methods available:

* `new SP(canvas [, options])`
* `signaturePad.isEmpty(): boolean`
* `signaturePad.clear()`
* `signaturePad.fromDataURL(dataURL [, options [, callback]])`
* `signaturePad.toDataURL([type [, encoderOptions]])`
* `signaturePad.toData()`
* `signaturePad.fromData(pointGroupArray)`
* `signaturePad.off()`
* `signaturePad.on()`
* `signaturePad.onBegin(event)`
* `signaturePad.onEnd(event)`

Here are the main methods available:

### `new SP(canvas [, options])`

Creates a new instance of SP and attaches it to the specified canvas element.

* `canvas`: The HTML canvas element.
* `options` (optional): An object containing additional configuration options for SP ([see Customization](#customization)).

### `signaturePad.isEmpty(): boolean`
Checks whether the signature pad is empty (no drawn signature).

Returns:

* `true` if the signature pad is empty.
* `false` otherwise.

### `signaturePad.clear()`
Clears the signature pad, removing any drawn signature.

`signaturePad.fromDataURL(dataURL [, options [, callback]])`
Loads a signature from a data URL and displays it on the signature pad.

* `dataURL`: The base64-encoded data URL of the signature image.
* `options` (optional): An object containing additional options for loading the signature.
* `callback` (optional): A callback function to be called after the signature has been loaded.

### `signaturePad.toDataURL([type [, encoderOptions]])`
Converts the drawn signature into a data URL representing a base64-encoded image.

* `type` (optional): The image format to use (e.g., "image/png", "image/jpeg").
* `encoderOptions` (optional): The quality of the image encoding (0-1).

Returns:

* A data URL representing the signature image.

### signaturePad.toData()
Retrieves the signature data as an array of objects representing each point on the signature path.

Returns:

* An array of objects with the following properties:
    - `x`: The x-coordinate of the point.
    - `y`: The y-coordinate of the point.
    - `time`: The timestamp of the point.

### `signaturePad.fromData(pointGroupArray)`
Loads a signature from an array of point groups.

* pointGroupArray: An array of point groups, where each group is an array of points.

### `signaturePad.off()`
Disables the signature pad, preventing further drawing.


### `signaturePad.on()`
Enables the signature pad, allowing drawing.


### `signaturePad.onBegin(event)`
A callback function triggered when drawing begins.

* event: The event object associated with the drawing.

### `signaturePad.onEnd(event)`
A callback function triggered when drawing ends.

* event: The event object associated with the drawing.

## Customization
Signature Pad provides several options for customizing its behavior. These options can be passed as an object when creating a new instance of SP. Here are the available options:

* `backgroundColor` (default: `"rgb(255, 255, 255)"`)
* `penColor` (default: `"rgb(0, 0, 0)"`)
* `velocityFilterWeight` (default: `0.7`)
* `minWidth` (default: `0.5`)
* `maxWidth` (default: `2.5`)
* `throttle` (default: `16`)
* `minDistance` (default: `5`)

Example Usage:

```bash
    var signaturePad = new SP(canvas, {
        backgroundColor: 'rgb(245, 245, 245)',
        penColor: 'rgb(0, 0, 255)',
        minWidth: 1,
        maxWidth: 3,
        throttle: 10,
    });
```


## Contributing

If you would like to contribute to Signature Pad, you can find the source code and contribution guidelines on the [GitHub repository](https://github.com/CovenantJunior/signature-pad). Contributions such as bug fixes, feature enhancements, and documentation improvements are welcome.

## License

Signature Pad is released under the MIT License. See the [LICENSE](https://github.com/CovenantJunior/signature-pad/blob/master/LICENSE) file for more details.

## Compatibility

Signature Pad is compatible with modern web browsers that support the HTML5 Canvas element and JavaScript. It works well on desktop and mobile devices, including touchscreens.

## Examples and Demos

To see Signature Pad in action and explore different usage scenarios, you can check out the examples and demos provided in the [GitHub repository](https://github.com/CovenantJunior/signature-pad). These examples demonstrate various features and customization options available with Signature Pad.

## Additional Resources

If you need further assistance or have specific questions about Signature Pad, you can refer to the following resources:

- [GitHub Repository](https://github.com/CovenantJunior/signature-pad)
- [GitHub Discussions](https://github.com/CovenantJunior/signature-pad/discussions)
- [GitHub Wiki](https://github.com/CovenantJunior/signature-pad/wiki)

Remember to keep an eye on the repository for any updates or announcements related to Signature Pad.

Thank you for choosing Signature Pad! We hope it brings a seamless signature capture experience to your web applications. If you have any further questions or need assistance, feel free to reach out to the community or the project maintainers. Happy coding!