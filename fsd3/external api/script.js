function get() {
    //coliole.log("button clicked");
  
    //step 1
    var xhttp = new XMLHttpRequest();
    //step2
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    //step3
    xhttp.send();
    //step4
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var json=JSON.parse(this.responseText);
        let val="";
        for (let i = 0; i <json.length; i++) {
          val +=`<tr><td>${json[i].name}</td><td>${json[i].username}</td><td>${json[i].address.city}</td></tr>`;
          document.getElementById("table").innerHTML = val;    
        } 
      }
    };
    function show() {
        var x = document.getElementById("table");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
  }
  