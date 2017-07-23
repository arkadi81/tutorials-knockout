/*jslint node: true */
/*jshint esversion: 6 */
'use strict';

$(function() { // the wrapper is super important - binding wont work before dom is loaded
  function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");

    // computed properties - can be built of observables, do notify on change
    this.fullName = ko.computed(function() {
      return this.firstName() + " " + this.lastName();    
    }, this);

    // to read or write observable value, call it as a function
    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };

  }

  // Activates knockout.js
  ko.applyBindings(new AppViewModel());
})

// text for unchanging data in ui
// use input + value for changing stuff both ways

// observables - automatically issue notifications when they change


console.log('\'Allo \'Allo!');
