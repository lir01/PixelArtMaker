

let h = 1;
let w = 1;



function makeGrid() { 

    event.preventDefault();
    
    //whenever the submit button is pressed, a new grid is created
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
            c.addEventListener("click", function(event){
            	// Select color input
    		let color = document.getElementById('colorPicker').value;
            	event.target.style.backgroundColor = color;
            });
        }
    }

}


