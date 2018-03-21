(function() {
  var flickerAPI = "temp.json";
  $.getJSON( flickerAPI, {
    format: "json"
  })
  .done(function( data ) {

  $.each( data.items, function( i, item ) {
          console.log(item.errorDomain);
          $( "<tr>" ).attr( "class", "odd gradeX" )
  .appendTo( "#temp" );

        $.each( item, function( i, itemsss ) {
            $( "<td>" ).attr( "class", "center" ).html(itemsss)
        .appendTo( "#temp" );
            });
        });
        });
    })
();