var deleteOldAd = function () {
    link.click();
    var survey = document.getElementById("DeleteSurveyOK");
    survey.click();
};

var newAd = {};

var copyOldAd = function (id) {
    var request = {};
    request.url = "https://www.kijiji.ca/v-view-details.html?requestSource=b&adId=" + id;

    chrome.runtime.sendMessage({ oldAd: request.url }, function (response) {
        var el = document.createElement( 'html' );
        el.innerHTML = response;

        var itemprops = el.getElementsByTagName( 'span' );
        Array.prototype.forEach.call(itemprops, function(item) {
            if (item.hasAttribute('itemprop')) {
                
                var itemprop = item.getAttribute('itemprop');
                // category is complex, get it from the landing page (where you put the link to repost)

                if (itemprop === 'name') { // Ad Title
                    newAd.title = item.textContent;
                }
            }
        })
        
    });
};

setTimeout(function () {
    var links = document.getElementsByTagName("a");

    Array.prototype.forEach.call(links, function (link, index) {

        if (link.id && link.id.indexOf("delete-ad-") === 0) {

            var adId = link.id.slice(10),
                repost = document.createElement("a");

            repost.className = link.className;
            repost.href = "";
            repost.appendChild(document.createTextNode("RePoSt Ad"));
            repost.id = adId;

            link.parentNode.appendChild(repost);
            repost.addEventListener("click", function () {
                copyOldAd(repost.id);
                // deleteOldAd();
            }, false);
        }
    })

}, 1000) 