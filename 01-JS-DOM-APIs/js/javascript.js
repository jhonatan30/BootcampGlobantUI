//Page loaded
window.onload = function()
{
  setTimeout(function() {
    document.getElementById('section').className = '';
    }, 1000);

  var btnJoke, btnRepo;
  flag = true;

  btnJoke = document.getElementById("btn-joke");
  btnJoke.onclick = getJoke;  

  btnRepo = document.getElementById("btn-repo");
  btnRepo.onclick = getRepo; 

  btnTable = document.getElementById("btn-table");
  btnTable.onclick = createTable; 
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


function createTable (  ) 
{
  var matrixData = new Array();
  
  //name
  matrixData[0] = document.getElementById("in-one").value;
  //twitter
  matrixData[1] = document.getElementById("in-two").value;
  //Facebook
  matrixData[2] = document.getElementById("in-three").value;
  //github
  matrixData[3] = document.getElementById("in-four").value;

  for (var i = 0; i < 4; i++) 
  {
    if (matrixData[i] == 0) 
    {
      console.log(matrixData[i]);
      alert("Please fill all fields.");
      break;
    }
  }

  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];
  
  // Crea un elemento <table> y un elemento <tbody>
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");

  console.log(flag);

  if (flag == true) 
  {
    //Create Head
    var headTable = document.createElement("tr");

    var celda1 = document.createElement("td");
    var celda2 = document.createElement("td");
    var celda3 = document.createElement("td");
    var celda4 = document.createElement("td");

    var textoCelda1 = document.createTextNode("Name");
    var textoCelda2 = document.createTextNode("Twitter User");
    var textoCelda3 = document.createTextNode("Facebook user")
    var textoCelda4 = document.createTextNode("GitHub User");

    celda1.appendChild(textoCelda1);
    celda2.appendChild(textoCelda2);
    celda3.appendChild(textoCelda3);
    celda4.appendChild(textoCelda4);

    headTable.appendChild(celda1);
    headTable.appendChild(celda2);
    headTable.appendChild(celda3);
    headTable.appendChild(celda4);

    tblBody.appendChild(headTable);
    //Create Head

    flag = false;
  }
 

 
  //Creates row
  for (var i = 0; i < 1; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
 
    for (var j = 0; j < 4; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(matrixData[j]);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }
 
  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("class", "table");

}




