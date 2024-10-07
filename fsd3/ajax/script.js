//var text= document.getElementById("text1");
function change() {
  //console.log("button clicked");

  //step 1
  var xhttp = new XMLHttpRequest();
  //step2
  xhttp.open("GET", "data.txt", true);
  //step3
  xhttp.send();
  //step4
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //console.log(this.responseText)
      document.getElementById("text1").innerText = this.responseText;
    }
  };
}
