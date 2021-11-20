// ------------- COERCIÓN ------------- //
//implicita
var a = 4 + "7";
typeof a;
//--D "string"

var b = 4 * "7";
typeof b;
//--D "number"

//explicita
var c = 20;
var d = c + "";
typeof c;
//--D 'number'
var e = String(c);
typeof e;
//--D 'string'
var f = Number(e);
typeof f;
//--D 'number'