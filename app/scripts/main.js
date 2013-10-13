var App = Ember.Application.create();

App.Router.map(function () {
    this.resource('home'         , { path: '/' });
    this.resource('vote'         , { path: '/vote' });
    this.resource('help'         , { path: '/help' });
    this.resource('about'        , { path: '/about' });
    this.resource('certificates' , { path: '/certificates' });
});
