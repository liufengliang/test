var app = angular.module('app',['ui.router']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider.
        state('home',{
            url:'/home',
            templateUrl:'./views/home.html',
            controller: ['$scope',function($scope){
                new Swiper('.swiper-container',{
                    pagination:'.swiper-pagination',
                    autoplay:1000
                });
                new IScroll('.iscrollwrap',{
                    scrollX:true,
                    scrollY:false
                })
            }]
        }).
        state('forum',{
            url:'/forum',
            templateUrl:'./views/forum.html',
            controller:'forumCtrl'
        }).
        state('select',{
            url:'/select',
            templateUrl:'./views/select.html',
            controller:'selectCtrl'
        }).
        state('find',{
            url:'/find',
            templateUrl:'./views/find.html',
            controller:'findCtrl'
        }).
        state('user',{
            url:'/user',
            templateUrl:'./views/user.html',
            controller:'userCtrl'
        })
    $urlRouterProvider.otherwise('/home')
}]);