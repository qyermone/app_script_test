function doGet() {
    // Serve the HTML file named 'converter.html'
    return HtmlService.createHtmlOutputFromFile('index');
}

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function convertTemperature(input, conversionType) {
  if (conversionType === 'celsiusToFahrenheit') {
    return celsiusToFahrenheit(input).toFixed(2);
  } else if (conversionType === 'fahrenheitToCelsius') {
    return fahrenheitToCelsius(input).toFixed(2);
  }
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Temperature Converter')
    .addItem('Open Converter', 'openConverter')
    .addToUi();
}

function openConverter() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('converter')
    .setWidth(400)
    .setHeight(300);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Temperature Converter');
}
