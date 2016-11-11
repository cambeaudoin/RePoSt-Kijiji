/**
 * Possible parameters for request:
 *  action: "xhttp" for a cross-origin HTTP request
 *  method: Default "GET"
 *  url   : required, but not validated
 *  data  : data to send in a POST request
 *
 * The callback function is called upon completion of the request */
// chrome.runtime.onMessage.addListener(function(request, sender, callback) {
//     if (request.action == "xhttp") {
//         var xhttp = new XMLHttpRequest();
//         var method = request.method ? request.method.toUpperCase() : 'GET';

//         xhttp.onload = function() {
//             callback(xhttp.responseText);
//         };
//         xhttp.onerror = function() {
//             // Do whatever you want on error. Don't forget to invoke the
//             // callback to clean up the communication port.
//             callback();
//         };
//         xhttp.open(method, request.url, true);
//         if (method == 'POST') {
//             xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         }
//         xhttp.send(request.data);
//         return true; // prevents the callback from being called too early on return
//     }
// });

var clickDelete = function () {
    link.click();
    var survey = document.getElementById("DeleteSurveyOK");
    survey.click();
};

var links = document.getElementsByTagName("a");

Array.prototype.forEach.call(links, function (link, index) {

    if (link.id && link.id.indexOf("delete-ad-") === 0) {
        // console.log(link, link.className, );


        var repost = document.createElement("a");
        repost.className = link.className;
        repost.href = "";
        repost.appendChild(document.createTextNode("RePoSt Ad"));
        repost.addEventListener("click", function () {
            
            // clickDelete();
        }, false);

        // var adId = link.id.slice(10);
        // repost.id = adId;

        link.parentNode.appendChild(repost);
    }
})