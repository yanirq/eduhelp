
var li = "<div class='timeline-badge'><i class='fa fa-check'></i></div><div class='timeline-panel'><div class='row1'>";
var div = "<div class='col-lg-5 col-md-6'><div class='panel panel-primary'><div class='row1'>";
var preLi = "<li>" + li;
var preLiInvert = "<li class='timeline-inverted'>" + li;
var buttons = "<div class='eventClicks'><button type='button' class='btn btn-warning'>להרשמה</button><button type='button' class='btn btn-info'>לפרטים</button></div>";
var invert=true;
var html="";
var userId="1";
(fillData)
();
function fillData(){
    var jsonData = "events.json";
    $.getJSON(jsonData, {
        format: "json"
    })
        .done(myData,upcomingEvents);

}
function upcomingEvents(data) {
    html="";
    $.each(data.events, function (i, event) {
        console.log("upcoming:"+event.name);
        if (invert) {
            html += preLi;
            invert=false;
        } else {
            html += preLiInvert;
            invert=true;
        }
        html += "<h3>" + event.name + "</h3></div>" + "<div class='row2'><img src=" + event.image + "><div class='eventData'><p class='eventDetails'>" + event.creator + "</p><p class='eventDetails'>" + event.date + "</p><p class='eventDetails'>" + event.location + "</p></div>";
        html += "<div class='eventClicks'><button type='button' class='btn btn-warning'>להרשמה</button><a href='events.html?eventId=" + event.id + "' class='btn btn-info'>לפרטים</a></div></div>";
        html += "<div class='row3'>";
        $.each(event.skills, function(i,skill) {
            html += "<button type='button' class='btn btn-primary'>" + skill + "</button>";
        });
        html+="</div></div>";
    });
    //console.log(html);
    $(html).appendTo("#timeline");
}
function myData(data){
    html="";
    $.each(data.events, function (i, event) {
        console.log("my: "+event.name);
        if (event.users.indexOf("2") > -1) {
            html += div;
            html += "<h3>" + event.name + "</h3></div>" + "<div class='row2'><img src=" + event.image + "><div class='eventData'><p class='eventDetails'>" + event.creator + "</p><p class='eventDetails'>" + event.date + "</p><p class='eventDetails'>" + event.location + "</p></div>";
            html += "<div class='eventClicks'><button type='button' class='btn btn-warning'>להרשמה</button><a href='events.html?eventId=" + event.id + "' class='btn btn-info'>לפרטים</a></div></div>";
            html += "<div class='row3'>";
            $.each(event.skills, function (i, skill) {
                html += "<button type='button' class='btn btn-primary'>" + skill + "</button>";
            });
            html += "</div></div></div>";
        }
    });
    //console.log(html);
    $(html).appendTo("#eventCard");
}