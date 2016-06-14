'use strict';
const {ActionButton} = require('sdk/ui/button/action');
const {Panel} = require('sdk/panel');
const tabs = require("sdk/tabs");

const panel = Panel({
  contentURL: './popup.html',
  width: 450,
  height: 350
});

const button = ActionButton({
  id: "clairvoyance-popup",
  label: "Clairvoyance - 求職天眼通",
  icon: './icon.png',
  onClick() {
    panel.show({
      position: button
    });
  }
});