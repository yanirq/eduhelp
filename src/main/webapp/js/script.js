function getEventData(id) {
    var ResultHtml='';
    var resultsContainer = document.getElementById('eventCard');
    var productsCount = 0;
    $.ajax({
        url: endpoint + imageUrl,
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        proccessData: false,
        success: function(data) {

            var haveItems = false;
            console.log(data);
            if(data.hasOwnProperty('results')){
                //console.log(data.results);
                imageResultHtml = '<img src="' + imageUrl + '" ><br><p>' + data.results +'</p>';
            }
            resultsContainer.innerHTML = imageResultHtml;
        },
        error: function(error) {
            imageResultHtml = 'INVALID INPUT, CHECK LOG';
            console.log(error);
            resultsContainer.innerHTML = imageResultHtml;
        }
    });

}