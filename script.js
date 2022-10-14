var express = require('express');
const { stringify } = require('querystring');
var app = express();
var PORT = 3000;
var m = 16;
var n = 16;
var cors = require('cors');
app.use(cors());
app.get("/:number",function (req, res) {
  
  var aa = parseInt(req.params['number']);
  var arr = [aa, aa];

for (let i = 0; i < aa*aa; i++) {
    var a = Math.floor(Math.random() * 7 + 1);
    arr.push(a);
}
    res.send(arr.toString());

});
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});