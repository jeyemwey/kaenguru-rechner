var euro = $(".number#euro");
var dm = $(".number#dm");
var ostmark = $(".number#ostmark");
var schwarzmarkt = $(".number#schwarzmarkt");

function parse(elem) {
  var value = parseFloat(elem.text());
  elem.text(value);
  return value;
}

function changeNumber(f, v) {
  switch(f) {
    case "euro":
      dm.text(v * 2);
      ostmark.text(v * 4);
      schwarzmarkt.text(v * 20);
      break;
    case "dm":
      euro.text(v * .5);
      ostmark.text(v * 2);
      schwarzmarkt.text(v * 10);
      break;
    case "ostmark":
      euro.text(v * .25);
      dm.text(v * .5);
      schwarzmarkt.text(v * 5);
      break;
    case "schwarzmarkt":
      euro.text(v * .05);
      dm.text(v * .1);
      ostmark.text(v * .2);
      break;
  }
}

euro.blur(function() {
  var value = parse(euro);
  changeNumber("euro", value);
});

dm.blur(function() {
  var value = parse(dm);
  changeNumber("dm", value);
});

ostmark.blur(function() {
  var value = parse(ostmark);
  changeNumber("ostmark", value);
});

schwarzmarkt.blur(function() {
  var value = parse(schwarzmarkt);
  changeNumber("schwarzmarkt", value);
});