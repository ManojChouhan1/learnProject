/* set input from commond line.
create and delete file with input   */

// console.log(process.argv);

/*  process.argument vectore has to property:  1 file save address 2. file where is run directory .
PS C:\PROJECT\NodeLearn\Node-Tut> node input.js hello
[
 0   'C:\\Program Files\\nodejs\\node.exe',
 1   'C:\\PROJECT\\NodeLearn\\Node-Tut\\input.js',
 2   'hello'
]*/ 

const fs = require('fs');
const input = process.argv;
// fs.writeFileSync(input[2], input[3])         /* 2 input1.txt is make and 3 text index.txt me likha*/

if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4])        /* node input.js "add" apple.txt "juicies apple"    commond to add file */
}else if(input[2]=='remove') {                  /* node index.js "romove" apple.txt   commond to dlelet appletxt file */
    fs.unlinkSync(input[3])
}else{
    console.log("invalid input")
}

