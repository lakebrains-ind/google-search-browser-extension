      
    document.getElementById("btn").onclick = function() {myFunction()}
    function myFunction(){
     var input;
      input= document.getElementById("myinput").value
      chrome.tabs.create({
        url: `https://www.google.com/search?q=${input}`
      })
    }