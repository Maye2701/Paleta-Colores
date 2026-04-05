/*busca el elemento paletteForm en el html*/
const form = document.getElementById("paletteForm");

/*buscan el elemnto que tiene el id*/
const mensaje = document.getElementById("mensaje-copiado");

/*cuando se envie el formulario se ejecutael codigo*/
form.addEventListener("submit", function(e) {

    /*evita que la pagina recargue*/
    e.preventDefault();

    /*obtiene el tipo de color*/
    const format =document.querySelector('input[name="format"]:checked').value;

    /*obtiene el tamaño*/
    const size =document.querySelector('input[name="size"]:checked').value;

    const paletteContainer = document.getElementById("palette");

    paletteContainer.innerHTML="";

    for(let i = 0; i< size; i++){

        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");

        let color;

        if(format==="rgb"){

            const r = Math.floor(Math.random()*256);
            const g = Math.floor(Math.random()*256);
            const b = Math.floor(Math.random()*256);

            color=`rgb(${r}, ${g}, ${b})`;

        }else if(format === "hex"){

            const hex= Math.floor(Math.random()*16777215);
            color = "#" + hex.toString(16).padStart(6, "0");

        }else if(format === "hsl"){

            const h = Math.floor(Math.random()*360);
            const s= Math.floor(Math.random()*100);
            const l=Math.floor(Math.random()*100);

            color=`hsl(${h}, ${s}%, ${l}%)`;
        }
    
            colorBox.style.background = color;

            const span = document.createElement("span");
            span.textContent=color;

            colorBox.appendChild(span);
            paletteContainer.appendChild(colorBox);

            /*copiar el color*/
            colorBox.addEventListener("click", function(){

            navigator.clipboard.writeText(color);

            mensaje.textContent = color + " copiado ✔";

            mensaje.classList.add("mostrar");

            setTimeout(function(){
                mensaje.classList.remove("mostrar");
            },1500);
            });
    }


});


