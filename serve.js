
var http = require("http");
var qs = require("querystring");
var url = require('url');

http.createServer(function(req,res){
  res.write("server running!");
  var q = url.parse(req.url,true);
  var qdata = q.query;
  var mobile_number = qdata.mobile;
  var check = qdata.check;
  

  if(check == "1")
  {
  //res.setHeader("Access-Control-Allow-Origin","*");

var options = {
  "method": "POST",
  "hostname": "control.msg91.com",
  "port": null,
 "path": "http://control.msg91.com/api/sendotp.php?template=SMSOTP&otp_length=4&authkey=233707AEKyP16DxJHa5b825699&sender=OTPSMS&otp_expiry=1440&mobile="+mobile_number,
  "headers": {}
};
  }
  else
  {
    var verify_otp= qdata.otp;
    var options = {
      "method": "POST",
      "hostname": "control.msg91.com",
      "port": null,
      "path": "/api/verifyRequestOTP.php?authkey=233707AEKyP16DxJHa5b825699&mobile="+mobile_number+"&otp="+verify_otp,
      "headers": {
        "content-type": "application/x-www-form-urlencoded"
      }
    };
  }

var request = http.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

  response.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    
  });
});

request.end();
res.end();
}).listen(7000);


//verification code goes here
//checking in progress
