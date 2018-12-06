import _ from "lodash";
import { $, jQuery } from "jquery";
import Backbone from "backbone";

export default class Item extends Backbone.Model {
  initialize() {
    console.log("initializing model");
  }
}
