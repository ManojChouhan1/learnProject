//   You can covert Javascript string into Json object

var text = '{"name": "manoj", "city": "indore"}';  // text is a js string

var person = JSON.parse(text);                    // person is a json object

console.log("js STRING--> " ,text);
console.log("JSON OBJECT--> " ,person);

//   You can covert Json object into Javascript 

var text = JSON.stringify(person);           // text is a js string

console.log("js STRING--> " ,text);
