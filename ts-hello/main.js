"use strict";
exports.__esModule = true;
var likes_component_1 = require("./likes.component");
var component = new likes_component_1.LikeComponent(10, false);
component.onClick();
console.log("number of likes " + component.likesCount + " and is selected state " + component.isSelected);
