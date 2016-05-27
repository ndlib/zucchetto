'use strict'
var Colors = require('material-ui/lib/styles/colors');
var ColorManipulator = require('material-ui/lib/utils/color-manipulator');
var Spacing = require('material-ui/lib/styles/spacing');

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#224048',
    primary2Color: '#D5B117',
    primary3Color: Colors.white,
    accent1Color: '#2c5882',
    accent2Color: '#224048',
    accent3Color: Colors.grey300,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    showcaseTextCardColor: Colors.white,
  },
};
