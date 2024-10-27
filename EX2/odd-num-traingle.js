
const n = parseInt(prompt("Enter the Height of the Triangle: "));

var printing_str = '';
var num = 1;

for(let k=1; k<=n;k++){
    printing_str = printing_str + num + ' ';
    num = num+2;
    console.log(printing_str);
}