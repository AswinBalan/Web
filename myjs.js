function myFunction()
{
 var mobile_number = document.getElementById("my text").value;
 if(mobile_number.toString().length !=12)
 {
   
   window.alert("invalid number");
   throw new Error("Something went badly wrong!");
   
 }
 window.alert("OTP sent to "+mobile_number);
  var xhttp = new XMLHttpRequest();
  //:(
  //http.setRequestHeader( 'Access-Control-Allow-Origin', '*');
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  var url ="http://localhost:7000/serve.js?mobile=" + mobile_number +"&check=1";

  xhttp.open("GET",url, true);
  xhttp.send();
}




function verifyotp()
{
  var mobile_number = document.getElementById("my text").value;
  var verify_otp = document.getElementById("verify").value;
  window.alert("Are You Sure "+verify_otp);
  var xhttp = new XMLHttpRequest();
  //:(
  //http.setRequestHeader( 'Access-Control-Allow-Origin', '*');
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     // document.getElementById("demo").innerHTML =

      windows.alert(this.responseText);
    }
  };
  var url ="http://localhost:7000/serve.js?mobile="+mobile_number+"&otp=" + verify_otp+"&check=2";
  //window.alert(url);
  xhttp.open("GET",url, true);
  xhttp.send();
}

//var script = document.createElement('script');
//script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
//script.type = 'text/javascript';
//document.getElementsByTagName('head')[0].appendChild(script);
