(
    function(productBase){
        if(!productBase){
            productBase={};
        }
        productBase.product=function(){
            this.price=200;
            this.category="anything";
        }
    }
)(window.productBase={})