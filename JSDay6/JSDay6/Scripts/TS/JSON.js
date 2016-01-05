//var someObj = {
//    name: 'nick',
//    color: 'blue',
//    isTodayFriday: false
//}
//var jsonObj = '{"name":"nick", "color":"blue","isTodayFriday":"false"}';
//parse() - Parses a JSON string back into a JavaScript object (deserialize)
//stringify() - Converts a JavaScript object into a JSON string (serialize)
var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather?API=&APPID=d43debb0b9a3919fef3f0f689e82583e&q=Seattle';
var flickrAPI = 'https://api.flickr.com/services/rest/?api_key=c7c96901811b7c04bbe1bae3ad27f541&format=json&nojsoncallback=1&method=flickr.photos.search&tags=tesla';
//let request = new XMLHttpRequest();
//request.open('GET', weatherAPI);
//request.addEventListener('load', function(e) {
//    //parse the data from JSON
//    let data = JSON.parse(request.responseText);
//    //dump results to the console
//    console.dir(data);
//});
//request.send();
var request1 = new XMLHttpRequest();
request1.open('GET', flickrAPI);
request1.addEventListener('load', function (i) {
    var imgArray = [];
    var data1 = JSON.parse(request1.responseText);
    var images = data1.photos.photo;
    var html = '<ul>';
    images.forEach(function (image) {
        var imageUrl = flickrImageUrl(image);
        html = html + ("<li><img src =\"" + imageUrl + "\" /></li>");
    });
    html += '</ul>';
    document.getElementById('results').innerHTML = html;
});
request1.send();
function flickrImageUrl(image) {
    return "https://farm" + image.farm + ".staticflickr.com/" + image.server + "/" + image.id + "_" + image.secret + ".jpg";
}
