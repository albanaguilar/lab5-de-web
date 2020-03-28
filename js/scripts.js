$(document).ready( function( ){
    $("#addItem").on('click', function(event){
        event.preventDefault();
        
        var item = $("#item").val();
        $("#lista").append("<li><p>" + item + "</p><input type='button' value='check'/><input class='delete' type='button' value='delete'/></li>");
    });

    $("#lista").on( 'click', 'li', function( event ){
        event.preventDefault( );

        if (event.target.value == 'check') {
            $(this).find('p').css('text-decoration','line-through');
        } 
        else if (event.target.value == 'delete') {
            $(this).remove( );
        }
    });
});