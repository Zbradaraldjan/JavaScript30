const endpoint = "https://raw.githubusercontent.com/Zbradaraldjan/JavaScript30/master/day6/color.json"

const colors = [];

fetch(endpoint)
    .then(d => d.json())
    .then(data => colors.push(...data))
    .catch(error => console.error(error));


function find(input){
    if(input){
        const exp = new RegExp(input, 'gi');
        return colors.filter(c =>{
            return c.name.match(exp) || c.hexa.match(exp);
        });
    }else{
        return [];
    }
}

//https://www.rapidtables.com/convert/color/rgb-to-hsv.html
function getColorValue(rgb){
    r=rgb.r/255;
    g=rgb.g/255;
    b=rgb.b/255;
    return Math.max(r,g,b);
}

function hexaToRGB(hexa){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexa);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function displayHexa(){
    const hexaDiv = document.querySelector('.hexa');
    hexaDiv.innerHTML = this.id;
    hexaDiv.style.setProperty("color", this.id + "99");
}

function displayColors(){
    const match = find(this.value);
    const html = match.map(c => {
        rgb = hexaToRGB(c.hexa);
        textColor = getColorValue(rgb) > 0.75 ? "#000" : "#FFF"
        return `
            <li class="color" id="${c.hexa}" style="background:rgb(${rgb.r}, ${rgb.g}, ${rgb.b}); color:${textColor}"> 
                ${c.name}
            </li>
        `;
    }).join('');
    const suggestions = document.querySelector('.colors');
    suggestions.innerHTML = html;
    const color = document.querySelectorAll('.color');
    color.forEach(d => d.addEventListener('click', displayHexa));
}

const searchInput = document.querySelector('.search');

searchInput.addEventListener('keyup', displayColors);
