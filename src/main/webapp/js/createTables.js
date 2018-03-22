var flickerAPI = "temp.json";

    var iterator= 0;
    var itemNumber = 0;
    var createTableBody = '';

    $.getJSON( flickerAPI, {
        format: "json"
    }).done(function( data ) {
        $.each( data.items, function( i, item ) {

        if(iterator % 2 == 0 ){
            createTableBody+='<tr class="odd gradeA">';
        }else{
            createTableBody+='<tr class="even gradeC">';
        }

        var itemId='';
        iterator ++;
        itemNumber =0;

        $.each( item, function( paramName, itemName ) {

            if(paramName=="Id"){
            itemId = itemName;
             return;
            }
            if(paramName=="Comments" || paramName == "Image"){
               return;
            }
                          createTableBody+='<td class="center">';
                         if(paramName  == "Creator"){
                            createTableBody+='<a href="users.html?name='+itemName+'">';
                          }

                          if(paramName  == "Matching Percentage"){
                                  createTableBody +=  '<div class="progress">';
                                   createTableBody +=  '<div class="progress-bar" role="progressbar" style="width:'+itemName+'%" aria-valuenow="'+itemName+'" aria-valuemin="0" aria-valuemax="100">'+itemName+'%</div>';
                                   createTableBody += '</div>';
                          }else{
                            createTableBody+=itemName;
                          }
                          itemNumber++;

                           if(paramName  == "Creator"){
                                createTableBody+='</a>';
                           }
                          createTableBody+='</td>';
                          });

      createTableBody+='<td class="center">';
      createTableBody+='<a href="events.html?id='+itemId+'">';
      createTableBody+=' <button type="button" class="btn btn-primary btn-circle"><i class="fa fa-list"></i></button>';
      createTableBody+='</a>';
      createTableBody+='</td>';
      createTableBody+='</tr>';

      $("#bodyTable").html(createTableBody);
     });
});
