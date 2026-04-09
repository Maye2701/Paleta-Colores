/*busca el elemento paletteForm en el html*/
const form = document.getElementById("paletteForm");

/*buscan el elemnto que tiene el id*/
const mensaje = document.getElementById("mensaje-copiado");

/*arreglo donde se guardan los colores base*/
let colorBase=[];

function rgbAhex(r,g,b){
    return "#"+
    r.toString(16).padStart(2,"0")+
    g.toString(16).padStart(2,"0")+
    b.toString(16).padStart(2,"0");

}
function rgbAHsl(r,g,b){

    r/=255;
    g/=255;
    b/=255;

    const max = Math.max(r,g,b);
    const min = Math.min(r,g,b);

    let h,s,l;

    /*luminosidad*/
    l=(max+min)/2;

    if(max===min){
        h=0;
        s=0;
    }else{

        const d=max-min;

        s=l>0.5 ? d/(2-max-min) : d/(max+min);

        switch(max){

            case r:
                h=(g-b)/d+(g<b?6:0);
                break;

            case g:
                h=(b-r)/d+2;
                break;

            case b:
                h=(r-g)/d+4;
                break;
        }

        h/=6;
    }

    h=Math.round(h*360);
    s=Math.round(s*100);
    l=Math.round(l*100);

    return `hsl(${h}, ${s}%, ${l}%)`;
}

function pintarPaleta(format){
 const paletteContainer = document.getElementById("palette");

    paletteContainer.innerHTML="";

    for(let i=0;i<colorBase.length;i++){

        const base = colorBase[i];

        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");

        let color;

        if(format==="rgb"){

            color=`rgb(${base.r}, ${base.g}, ${base.b})`;

        }else if(format==="hex"){

            color=rgbAhex(base.r,base.g,base.b);

        }else if(format==="hsl"){

            color = rgbAHsl(base.r,base.g,base.b);
        }

        

        colorBox.style.background = color;

        const span = document.createElement("span");
        span.textContent=color;

        colorBox.appendChild(span);
        paletteContainer.appendChild(colorBox);

        colorBox.addEventListener("click", function(){

            navigator.clipboard.writeText(color);

            mensaje.textContent = color + " copiado ✔";

            mensaje.classList.add("mostrar");

            setTimeout(function(){
                mensaje.classList.remove("mostrar");
            },1500);

        });

    }

}


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

    colorBase = [];

    for(let i = 0; i< size; i++){

        const colorBox = document.createElement("div");
        colorBox.classList.add("color-box");

        let color;

        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);

        colorBase.push({r,g,b});
        const base = colorBase[i];

        if(format==="rgb"){

            color=`rgb(${base.r}, ${base.g}, ${base.b})`;

        }else if(format === "hex"){

            color = rgbAhex(base.r,base.g,base.b);

        }else if(format === "hsl"){

            color=`rgb(${base.r}, ${base.g}, ${base.b})`;
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

const formatos = document.querySelectorAll('input[name="format"]');

formatos.forEach(function(radio){

    radio.addEventListener("change",function(){

        pintarPaleta(this.value);

    });

});