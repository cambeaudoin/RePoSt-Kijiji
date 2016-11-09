var links = document.getElementsByTagName("a");

var getData = function(id) {
    
    httpGetAsync('http://www.kijiji.ca/v-view-details.html?requestSource=b&adId=1214209247');
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.kijiji.ca/v-view-details.html?requestSource=b&adId=1214766051", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = new DOMParser().parseFromString(xhr.responseText, "text/xml")
        console.log("I'm here ->", response);
    }
}
xhr.send();



Array.prototype.forEach.call(links, function (link, index) {
    if (link.id && link.id.indexOf("delete-ad-") === 0) {
        var repost = document.createElement("button");
        repost.appendChild(document.createTextNode("RePoSt Ad"));
        
        var adId = link.id.slice(10);
        repost.id = adId;
        repost.addEventListener("click", getData(adId));

        link.parentNode.appendChild(repost);
    }
})
