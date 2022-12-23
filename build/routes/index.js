"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _getAllListings = require("./getAllListings");
var _getListing = require("./getListing");
var _addViewToListing = require("./addViewToListing");
var _getUserListings = require("./getUserListings");
var _createNewListing = require("./createNewListing");
var _updateListing = require("./updateListing");
var _deleteListing = require("./deleteListing");
var _default = [_getAllListings.getAllListingsRoute, _getListing.getListingRoute, _addViewToListing.addViewToListingRoute, _getUserListings.getUserListingsRoute, _createNewListing.createNewListingRoute, _updateListing.updateListingRoute, _deleteListing.deleteListingRoute];
exports["default"] = _default;