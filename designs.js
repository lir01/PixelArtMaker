

let h = 0;
let w = 0;

// When size is submitted by the user, call makeGrid()

function makeGrid() { 

    // Select color input
    let color = document.getElementById('colorPicker').value;

    if( h != 0 || w != 0)
        document.getElementById('pixelCanvas').innerHTML = "";

    // Select size input
    h = document.getElementById('inputHeight').value;
    w = document.getElementById('inputWidth').value;

    for(var x = h; x > 0; x--){
        let row = document.createElement('tr');
        let elm = document.getElementById('pixelCanvas');
        elm.appendChild(row);

        for(var y = w; y >0; y--){
            let c = document.createElement('td');
            row.appendChild(c);
            c.onclick = function(event){event.target.style.backgroundColor = color;};
        }
    }

}
