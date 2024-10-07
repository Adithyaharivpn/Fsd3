function get() {
    //console.log("button clicked");
  
    //step 1
    var xhttp = new XMLHttpRequest();
    //step2
    xhttp.open("GET", "data.json", true);
    //step3
    xhttp.send();
    //step4
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var json=JSON.parse(this.responseText);
        let val="";
        for (let i = 0; i <json.length; i++) {
          val +=`<li>${json[i].name}</li><li>${json[i].age}</li>`
          document.getElementById("txt").innerHTML = val;    
        } 
      }
    };
  }