function setColor(event) //sets the color of the clicked element to the color choosen if it has a "TD" node name
{
    if(event.target.nodeName == "TD")
    {
        event.target.style.backgroundColor = document.getElementById("colorPicker").value
    }
}

function makeGrid() {
    var thisUrl = window.location.href;
    const hBox = document.querySelector('#inputHeight');
    const wBox = document.querySelector('#inputWidth');
    var height = 1;
    var width = 1;
    if(thisUrl.includes("?")) //checks if user has already submitted values. If so, parses URL for those and sets height and width values to generate table. If not, keeps height and width set to 1
    {
        hIndex = thisUrl.indexOf("?height=") + "?height=".length;
        andIndex = thisUrl.indexOf("&", hIndex);
        wIndex = thisUrl.indexOf("width=") + "width=".length;
        endIndex = thisUrl.length;
        height = thisUrl.substring(hIndex, andIndex);
        width = thisUrl.substring(wIndex, endIndex);
        hBox.value = height;
        wBox.value = width;
    }
    const table = document.querySelector('#pixelCanvas');
    for(i=0; i<height; i++)//generates table
    {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for(j=0; j<width; j++)
        {
            var td = document.createElement('TD');
            tr.appendChild(td);
        }
    }
}
document.querySelector('#sizePicker').addEventListener("submit", makeGrid()); // When size is submitted by the user, call makeGrid()
document.querySelector('#pixelCanvas').addEventListener('click', setColor); //adds event listener for setting color
