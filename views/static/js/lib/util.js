define(function() {
    return{
        getQueryobj:function(){
            var search = location.search;
            search = search.slice(1);
            search = search.split('&');
            var result ={};
            for (var i = 0; i < search.length; i++) {
                var keyvaluepair = search[i].split('=');
                result[keyvaluepair[0]] = keyvaluepair[1];     
            }
            return result;      
        }
    }
    
});