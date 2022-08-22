function popup(){
    var input;
    input= document.getElementById("myinput").value
    console.log("helloo from popup func");

      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {     
        var activeTab = tabs[0];
        console.log(activeTab);
        console.log("message sent");
        chrome.tabs.sendMessage(activeTab.id, {"message": "start", input : input});
  });
}

let button=document.getElementById("btn");
button.addEventListener('click', popup)