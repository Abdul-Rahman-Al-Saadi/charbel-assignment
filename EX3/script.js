let x = parseInt(prompt("Enter tree height"));

let div = document.createElement("div");
div.className = "container";

for (let i=0; i<=x; i++) {
    let innerDiv = document.createElement("div");
    innerDiv.className = "innerContainer";

    if (i == 0) {
        let p = document.createElement("p");
        p.innerText = "*";
        div.append(p);
        continue;
    }
    let p = document.createElement("p");
    p.innerText = "*";

    let span = document.createElement("span");
    for (let j=1; j<=(i*2-1); j++) {
        span.innerText += "|";
    }

    let pe = document.createElement("p");
    pe.innerText = "*";
    
    innerDiv.append(p);
    innerDiv.append(span);
    innerDiv.append(pe);
    
    div.append(innerDiv);
}

document.body.appendChild(div);