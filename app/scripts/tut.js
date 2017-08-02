/*jslint node: true */
/*jshint esversion: 6 */

'use strict';
$(function() { // the wrapper makes sure the dom loads before KO, which is mandatory. this is not gone over in tutorial!
	function viewModel() {
		this.amount = ko.observable(5); // observable allows auto ui refresh on var refresh
		this.dblAmount = function() {
			var currentAmount = this.amount() * 2; // note the funny function notation
			this.amount(currentAmount); // this is a set! not a function call
		};
	}
	ko.applyBindings(new viewModel); // new is important! why?
});
