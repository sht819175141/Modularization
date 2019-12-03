define(["../jq/jquery-2.1.1","lianxi"],function(){
    function ma(){
        $("#uls").on("click","li",function(){
            alert($(this).text());
        })
    }
    return {
        ma:ma
    }
});