var  url = window.location.href;

var getEventId = getParameterByName("id", url);

var jsonPath = "temp.json";

$.getJSON( jsonPath, {
    format: "json"
}).done(function( data ) {
    $.each( data.items, function( i, item ) {
             if(item.Id == getEventId){
                 $("#eventImage").attr("src", item.Image);
                 $("#eventNameInput").attr("placeholder", item.Description);
                 $("#creatorInput").attr("placeholder", item.Creator);
                 $("#participants").attr("placeholder", item.ParticipantsNumber);
                 $("#address").attr("placeholder", item.Address);
                 $("#costs").attr("placeholder", item.Costs +" שח");
                 $("#eventName").html(item.Description);
                 $("#comments").val(item.Comments);
                 $("#description").val(item.Description);
             }
   });
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
