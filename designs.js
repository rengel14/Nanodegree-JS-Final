// Select color input
// Select size input
function setColor(event)
{
    if(event.target.nodeName == "TD")
    {
        event.target.style.backgroundColor = document.getElementById("colorPicker").value
        console.log(document.getElementById("colorPicker").value)
    }
    
}
// When size is submitted by the user, call makeGrid()
function makeGrid() {
    var thisUrl = window.location.href;
    hIndex = thisUrl.indexOf("?height=") + "?height=".length;
    andIndex = thisUrl.indexOf("&", hIndex);
    wIndex = thisUrl.indexOf("width=") + "width=".length;
    endIndex = thisUrl.length;
    height = thisUrl.substring(hIndex, andIndex);
    width = thisUrl.substring(wIndex, endIndex);
    const hBox = document.querySelector('#inputHeight');
    const wBox = document.querySelector('#inputWidth');
    hBox.value = height;
    wBox.value = width;
    const table = document.querySelector('#pixelCanvas');
    for(i=0; i<height; i++)
    {
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for(j=0; j<width; j++)
        {
            var td = document.createElement('TD');
            tr.appendChild(td);
        }
    }
    document.querySelector('#pixelCanvas').addEventListener('click', setColor);
}
document.querySelector('#sizePicker').addEventListener("submit", makeGrid());