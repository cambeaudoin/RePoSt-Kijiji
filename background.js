chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", request.oldAd, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                sendResponse(xhr.responseText);
                console.log(xhr.responseText);
            }
        }
        xhr.send();
        return true;
    });