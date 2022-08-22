console.log("Chrome extension go")
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.message === "start") {
            let input = request.input
            window.location.href = `https://www.google.com/search?q=${input}`
        }
        sendResponse({received : true});
    }
);

