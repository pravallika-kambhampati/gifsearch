/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click',function(){

    var input = document.querySelector("input").value;
    console.log(input);
    apiCall(input);
  
});
  

  document.querySelector(".js-userinput").addEventListener('keyup',function(e){
  
    var input = document.querySelector("input").value;
  
    // if the key ENTER is pressed...
    if(e.which === 13) {
      apiCall(input);
    }
  
});
  
  /* 2. do the data stuff with the API */
 
  
function apiCall(input){

    newinput = ""
    for(let i=0; i<input.length; i++){
        if(input[i]=== " ")
        {
            newinput += "+";
        }
        else{
            newinput += input[i];
        }
    }
    console.log(newinput);
    api_key = "UkE3eVPMEGi0AqbfuGtaCWPuJd7Ah4T3";
    url = `http://api.giphy.com/v1/gifs/search?q=${newinput}&api_key=${api_key}&limit=25`;

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
  
    GiphyAJAXCall.addEventListener('load',function(e){
      var data = e.target.response;
      console.log(data);
       pushToDOM(data);
    });
} 

  /* 3. Show me the GIFs */
  
  
  function pushToDOM(input) {
  
    var response = JSON.parse(input);
  
    var imageUrls = response.data;
  
    imageUrls.forEach(function(image){
  
      var src = image.images.fixed_height.url;
      console.log(src);
  
      var container = document.querySelector(".js-container");
      container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";
  
    });
    
  
  }
  
