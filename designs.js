function SetColor(event) //sets the color of the clicked element to the color choosen if it has a "TD" node name
{
    if(event.target.nodeName == "TD")
    {
        event.target.style.backgroundColor = document.getElementById("colorPicker").value
    }
}

function MakeGrid(heightBox, widthBox) //gets values for the height and width of grid from the URL/filepath, then generates grid via adding "td" and "tr" elements
{
    var thisUrl = window.location.href;
    var height;
    var width;
    if(thisUrl.includes("?")) //checks if user has already submitted values. If so, parses URL for those and sets height and width values to generate table. If not, keeps height and width set to 1
    {
        heightIndex = thisUrl.indexOf("?height=") + "?height=".length;
        andIndex = thisUrl.indexOf("&", heightIndex);
        widthIndex = thisUrl.indexOf("width=") + "width=".length;
        endIndex = thisUrl.length;
        height = thisUrl.substring(heightIndex, andIndex);
        width = thisUrl.substring(widthIndex, endIndex);
        heightBox.value = height;
        widthBox.value = width;
    }
    else
    {
        width = 1
        height = 1
    }
    const table = document.querySelector('#pixelCanvas');
    for(i=0; i<height; i++)//generates table
    {
        var tr = document.createElement('TR');
        table.appendChild(tr);
        for(j=0; j<width; j++)
        {
            var td = document.createElement('TD');
            tr.appendChild(td);
        }
    }
}

function Initialize() //gets elements for event listener functions, and sets up event listeners
{
    heightBox = document.querySelector('#inputHeight'); 
    widthBox = document.querySelector('#inputWidth');
    document.querySelector('#sizePicker').addEventListener("submit", MakeGrid(heightBox, widthBox));// When size is submitted by the user, call makeGrid()
    document.querySelector('#pixelCanvas').addEventListener('click', SetColor); //adds event listener for setting color
}

Initialize()
