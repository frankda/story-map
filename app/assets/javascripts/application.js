// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require map
//= require popper
//= require bootstrap-sprockets
//= require_tree .

let current_location;

$(document).ready(function(){
    // If any element with id "create-favorite" appears in dom tree, bind onclick function to it
   $('body').on('click', '#create-favorite', function(){
    L.marker([current_location[0], current_location[1]]).addTo(mymap);
   });

   // bind event for navigation buttons
   $('#show-current-user').on('click',function(){
    clearExistingMarkers();
    showCurrentUserMarks()
   });
   $('#show-all-user').on('click', function(){
    clearExistingMarkers();
    showAllUsersMarks();
   });
});