(function (callback) { // localize scope

	callback(window.jQuery, window, document); // pass in global objects

})(function ($, window, document) {
	"use strict";

	// photo container elements
	var $addPhotoButton = $('#addPhoto button'),
		$photoDropDown = $('#photoDropDown'),
		$photoDropDownLink = $('#photoDropDown a'),
		$addPhotoButtonCaret = $('#addPhoto > button > img');
	
	// toggle slide menu for adding photo
	$addPhotoButton.on("click", function () {
		$addPhotoButtonCaret.toggleClass('caretUp');
		$photoDropDown.slideToggle(250);
	});

	// toggle menu closed when link is clicked
	$photoDropDownLink.on("click", function () {
		$photoDropDown.slideToggle(250);
	})

});