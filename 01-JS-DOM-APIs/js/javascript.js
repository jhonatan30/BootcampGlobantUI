//Page loaded
window.onload = function()
{
  document.getElementById('hello-world').className = 'section';

  var btnJoke = document.getElementById("btn-joke");
  btnJoke.onclick = getJoke;  

  var btnRepo = document.getElementById("btn-repo");
  btnRepo.onclick = getRepo; 

  var btnTable = document.getElementById("btn-table");
  btnTable.onclick = onClick; 
}


//Function for API Github
function getJoke()
{

  var req = new XMLHttpRequest();

  function get(url) 
  {
    // Return a new promise. Contain resolve with solution and reject with priblems
    return new Promise(function(resolve, reject) 
    {
      req.onload = function() 
      {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200 && req.readyState == 4) 
        {
          // Resolve the promise with the response text  
          resolve(req.response);
        }
        else
        {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };

      req.open('GET', url);
      

      // Make the request
      req.send();
    });
  }

    var x = document.getElementById("optionJoke").selectedIndex;

    if (x == 0) {
        var urlApi = 'https://api.icndb.com/jokes/random';
    } else {
        var urlApi = 'https://.icndb.com/jokes/random';
  }

  get(urlApi).then(function(response) {
    // console.log("Success!", response);
    var obj = JSON.parse(req.responseText);
    var spaceJoke = document.getElementById("joke");

    document.getElementById("joke").innerHTML = obj.value.joke;
    spaceJoke.style.backgroundColor="#FF9801";
    spaceJoke.style.borderStyle = "none";
    spaceJoke.style.borderColor = "transparent";
    spaceJoke.style.color = "white";
  }, function(error) {
    // console.error("Failed!", error);
    var spaceJoke = document.getElementById("joke");
    
    spaceJoke.style.backgroundColor="#E75C5C";
    spaceJoke.style.borderStyle = "double";
    spaceJoke.style.borderColor = "#FF0000";
    spaceJoke.innerHTML = error;
  });
}





//Function for API Github
function getRepo()
{
  var reqRepo = new XMLHttpRequest();
  var inSearch = document.getElementById("et-search").value;
  if (inSearch.length == 0)
  {
    alert("Please insert your search.");
  }

  function getR(url) 
  {
    // Return a new promise. Contain resolve with solution and reject with priblems
    return new Promise(function(resolve, reject) 
    {
      reqRepo.onload = function() 
      {
        // This is called even on 404 etc
        // so check the status
        if (reqRepo.status == 200 && reqRepo.readyState == 4) 
        {
          // Resolve the promise with the response text  
          resolve(reqRepo.response);
        }
        else
        {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(reqRepo.statusText));
          console.log("error1");
        }
      };

      // Handle network errors
      reqRepo.onerror = function() {
        reject(Error("Network Error"));
        console.log("Error");
      };

      reqRepo.open('GET', url);
      

      // Make the request
      reqRepo.send();
    });
  }

  getR('https://api.github.com/search/repositories?q=%27'+inSearch+'%27').then(function(response) {

    // console.log("Success!", response);    

    var objRepo = JSON.parse(reqRepo.responseText);


    document.getElementById("listRepos").innerHTML="";

    for (var i = 0; i < objRepo.items.length; i++) 
    {
      // console.log("Objeto No: " + i + " " + objRepo.items[i].full_name);

      var a = document.createElement('a');
      var ulist = document.getElementById("listRepos");
      var newItem = document.createElement("LI");  

      a.textContent = objRepo.items[i].full_name;
      a.setAttribute('href', 'https://github.com/' + objRepo.items[i].full_name);
      a.setAttribute('target', '_blank');

      newItem.appendChild(a);
      ulist.appendChild(newItem);

    }

    //var spaceRepo = document.getElementById("space-repos");
    //console.log(objRepo.items.archive_url);

  }, function(error) {
    console.error("Failed!", error);
  });
}

var table = null;
var tableContainer = document.querySelector(".table-container");

function onClick ( ){

  var count = 0; //Count to control head table creation
  var arrayData = [];  //Literal sintax
  
  arrayData[0] = document.getElementById("name").value;
  arrayData[1] = document.getElementById("twitter").value;
  arrayData[2] = document.getElementById("facebook").value;
  arrayData[3] = document.getElementById("github").value;

  for (var i = 0; i < 4; i++) 
  {
    if (arrayData[i] == "") 
    {
      alert("Please fill all fields.");
      break;
    }else{
      count += 1;
    }
  }

  if (count == 4) {
    addValues(arrayData); 
  }
    
}

function addValues (valuesList){
  if(!table){
    table = new Table();
    tableContainer.appendChild(table.create());
  }

  table.addValues(valuesList[0],valuesList[1],valuesList[2],valuesList[3]);
}




