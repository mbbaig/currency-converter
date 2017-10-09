The project uses the [Fixer.io](fixer.io) API to convert between CAD, USD, and EUR.

This project is built using React, SASS, and the Ligthning Desing System by Salesforce. 

## Getting started

Follow the steps to get project dependancies:

1. `git clone https://github.com/mbbaig/currency-converter.git`
1. `cd currency-converter`
1. `npm install`

## Serving in Development mode

To serve the project in development mode:

* `npm start`

A window should open in your default browser.

## Serving in Production mode

To serve the project in productoin mode:

1. `sudo npm instal -g serve`
1. `npm run build`
1. `serve -s build`
1. Navigate to **localhost:5000** in your browser

## Future Improvements

* [ ] Add I18n
* [ ] Add unit tests
* [ ] Add support for more currencies
* [ ] Add Redux for state management
* [ ] Add efficient way to reverse-convert value entered into the converted input box
