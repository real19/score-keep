import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players, calculatePlayerPositions } from './../imports/api/players';
import App from './../imports/ui/App'
import { Geolocation } from 'meteor/mdg:geolocation';
import { reverseGeocode } from 'meteor/jaymc:google-reverse-geocode';

console.log("Log from /client/main.js");


function sayHiToNativeApp() {
  
  alert("Hi!");

}

function setText(message) {

  document.getElementsByClassName("title")[0].innerHTML = message;

}


Meteor.startup(() => {


  Tracker.autorun(() => {


    let setLocation = () => {
      var latLng = new ReactiveVar();
      Tracker.autorun(function (computation) {
        latLng.set(Geolocation.latLng());
        if (latLng.get()) {
          computation.stop();
          console.log(latLng);
          var lat = latLng.curValue.lat;
          var lng = latLng.curValue.lng;
          reverseGeocode.getSecureLocation(lat, lng, function (location) {
            Meteor.users.update(Meteor.userId(), {
              $set: { "profile.location": reverseGeocode.getAddrStr() }
            });
          });
        }
      })
    }

  
    let players = Players.find({}, {
      sort:{score:-1}
    }).fetch();

    let positionedPlayers = calculatePlayerPositions(players);

    let title = "Score Keep"
    let subtitle = "Created by Suleman Imdad"

    ReactDOM.render(
                     <App title = {title} 
                          subtitle = {subtitle} 
                          players = {positionedPlayers}/>, 
                          document.getElementById('app')
                        );

  })


});
