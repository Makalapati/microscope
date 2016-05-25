//https://www.eventbriteapi.com/v3/users/me/owned_events/?token=GRMKL6M535BLYEEF72RE
// Meteor.http.call('OPTIONS', 'https://www.eventbrite.com/json/events_search/?token=GRMKL6M535BLYEEF72RE&organizer.id=10618084925',
//     {
//         headers:{
//             'Content-Type':'application/json',
//             'Authorization': 'Bearer GRMKL6M535BLYEEF72RE'
//         }
//     }, function(error, response){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(response);
//     }
// });
// var EVENTBRITE_ACCESS_TOKEN = 'GRMKL6M535BLYEEF72RE';
// var ORGANIZER_ID = '10618084925';
// var Nbrite = require('nbrite');
// var nbrite = new Nbrite(EVENTBRITE_ACCESS_TOKEN);

// var events = nbrite.events('');

// events.info(function(err, data){
//     if(!err){
//         console.log(data);
//     }
// });


// var EventbriteAPI = require('eventbrite');
// try {
//         api = EventbriteAPI({
//         token : EVENTBRITE_ACCESS_TOKEN,
//         version : 'v3'
//     });
// }catch(error) {
//     console.log(error.message);
// }

// api.event_search({
//         'organizer.id': ORGANIZER_ID,
//         'token' : EVENTBRITE_ACCESS_TOKEN
//     }, function(error, data){
//     if(error) {
//         console.log(error.message);
//     } else {
//         console.log(JSON.stringify(data));
//     }
// });
// var EventbriteClient = EventbriteAPI({
//     'token' : EVENTBRITE_ACCESS_TOKEN,
//     'organizer.id' : ORGANIZER_ID
// });

// EventbriteClient.event_search(function(error, data){
//     if(error) {
//         console.log(error.message);
//     } else {
//         console.log(data);
//     }
// });

// if(Meteor.isServer) {
//     Meteor.methods({
//         eventBrite: function() {
//             this.unblock();
//             return Meteor.http.call("GET", "https://www.eventbrite.com/json/events_search/?token=GRMKL6M535BLYEEF72RE&organizer.id=10618084925");
//         }
//     });
// }

// if(Meteor.isClient) {
//     Meteor.call('eventbrite',function (error, result) {
//         console.log(results.content);
//     });
// }

// if (Meteor.isServer) {
//     Meteor.methods({
//         checkTwitter: function () {
//             this.unblock();
//             return Meteor.http.call("GET", "https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=734717590686334976&screen_name=BlackStaar0");
//         }
//     });
// }

// //invoke the server method
// if (Meteor.isClient) {
//     Meteor.call("checkTwitter", function(error, results) {
//         console.log(results.content); //results.data should be a JSON object
//     });
// }

// Meteor.http.call("GET", "https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=734717590686334976&screen_name=BlackStaar0",
//     {}, function(err, response){
//         console.log(response.content);
//     });
Template.http.helpers({
    flux : function(){
        Meteor.http.get('https://www.eventbriteapi.com/v3/events/search/?token=GRMKL6M535BLYEEF72RE&organizer.id=10618084925&format=json',
        {
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer GRMKL6M535BLYEEF72RE'
            }
        }, function(error, response){
                if(error){
                    console.log(error);
                } else { 
                    console.log(response.content);
                }
            })
    }
});
