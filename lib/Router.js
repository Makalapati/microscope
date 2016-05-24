Router.configure({
    layoutTemplate : 'layout',
    notFoundTemplate : 'notFound'
});

Router.route('/', {
    name : 'home'
});

Router.route('/register',{
    name : 'register'
});

Router.route('/userHome',{
    name : 'userHome'
});

Router.route('/http',{
    name : 'http'
});