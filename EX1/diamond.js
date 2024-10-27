const diamond_size = prompt("Enter the size of the diamond: ");

for(let i=1; i<=diamond_size+1; i++){
    console.log("  "*(diamond_size-i))
    console.log("*")
}

