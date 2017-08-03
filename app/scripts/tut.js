/*jslint node: true */
/*jshint esversion: 6 */

'use strict';
$(function() { // the wrapper makes sure the dom loads before KO, which is mandatory. this is not gone over in tutorial!

	/* doesnt work, figure out why later
	var vM = {
		amount: ko.observable(5),
		dblAmount: function() {
			var currentAmount = amount() * 2; // note the funny function notation
			amount(currentAmount); // this is a set! not a function call
		},
		amtSQR: ko.computed(function() {
			//return amount() * amount();
		});
	}
	ko.applyBindings(vM);
	*/
	function addRecord(info) {
    	var self = this;
    	self.user = ko.observable(info);
    	//return ko.observable(info);
	};



	function viewModel() {
		var self = this; // handy to avoid screwing up this

		// Non-editable catalog data - would come from the server
    	self.users = ko.observableArray([
	        new addRecord({ name: "bob", age: 25 }), // this way all entries are also observables
	        new addRecord({ name: "sam", age: 27 }),
	        new addRecord({ name: "connor", age: 23 })
    	]);

    	self.folders = ['inbox', 'spam', 'sent','starred']; // simulating navigation + SPA
    	self.selectedFolder = ko.observable();

    	self.selectFolder = function(folder) {
    		self.selectedFolder(folder);
    	}    

    	self.chgName = function() {
    		
    		console.log(self.users()[0].name);
    		//self.users()[0].name('bob2');
    	};

    	self.addName = function() {
    		self.users.push(new addRecord({name: "don", age: 34})); // this is how you add obs values to obs array
    		//self.users.push(ko.observable({name: "don", age: 34})); // this works sorta
    	};

    	self.removeRecord = function(id) {
    		self.users.remove(id); // and this is how you remove from the obs array
    	};

    	self.totalRecords = ko.computed(function() {
    		// returns and tracks total records in 'users' obs array
    		return self.users().length;
    	});

		self.amount = ko.observable(5); // observable allows auto ui refresh on var refresh
		self.dblAmount = function() {
			var currentAmount = self.amount() * 2; // note the funny function notation
			self.amount(currentAmount); // this is a set! not a function call
		};
		self.amtSQR = ko.computed(function() {
			return self.amount() * self.amount();
		}); // no need for 'this' second parameter here since we usef 'self'
	};

	ko.applyBindings(new viewModel); // new is important! why?

	
});

// let's test having this as an object

