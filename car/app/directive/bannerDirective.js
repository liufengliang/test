app.directive('bannerDirective',function(){
    return {
        restrict:'E',
        replace:true,
        templateUrl:'./views/bannerShow.html',
        scope:{
            bannerData:"="
        },
        link:function(scope,element,attr){
            new Swiper('.swiper-container',{
                pagination:'.swiper-pagination',
                autoplay:1000
            })
        }
    }
});