document.title = 'Home';



Template.home.helpers({
    pageTitle: function(){
        return Session.get('pageTitle');
    }
});

// Tracker.autorun(function(){
//     alert(Session.get('pageTitle'));
// });