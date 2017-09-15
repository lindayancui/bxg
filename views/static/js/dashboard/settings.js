define([
    'jquery',
    'ckeditor'
], function($, CKEDITOR) {
    $(function(){
        CKEDITOR.replace("tc_introduce",{
            toolbarGroups:[
                { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                { name: 'insert' },
                { name: 'tools' },
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
            ]
        })
    })
    
});