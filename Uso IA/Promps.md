## Uso de la IA
Durante el desarrollo del proyecto se utilizó inteligencia artificial como herramienta de apoyo. En cada consulta realizada se solicitó una explicación detallada del código generado, con el objetivo de comprender su funcionamiento y poder adaptarlo a las necesidades del proyecto.

## Prompt 1 
Estoy desarrollando una página web que genera paletas de colores. 
¿Podrías explicarme cómo se puede generar un color aleatorio en JavaScript 
y qué lógica se utiliza para crear un código de color en formato HEX?

- Resultado obtenido

La IA explicó la lógica para generar números aleatorios en JavaScript y cómo utilizarlos para construir un color en formato HEX. Con esta explicación se implementó una función que permite generar colores aleatorios para la paleta.

## Prompt 2
En mi proyecto necesito que cuando el usuario haga clic en un color se copie automaticamente el nombre del color en portapapeles 
¿Que metodo de javaScript puedo utilizar ?

- Resultado obtenido
La IA sugirió utilizar la Clipboard API del navegador, específicamente el método navigator.clipboard.writeText().
Con esta información se implementó la funcionalidad que permite copiar el código del color al portapapeles cuando el usuario hace clic en él.

## Prompt 3 
Dentro del mismo proyecto necesito que una vez se genera la paleta, al seleccionar otro formato de color me genere el codigo de ese formato pero sin cambiar los colores de cada uno

- Resultado obtenido
La IA sugirió almacenar el color generado en un formato base y luego utilizar funciones de conversión para mostrar el mismo color en distintos formatos como HEX, RGB o HSL.
Con esta recomendación se implementó una lógica que permite cambiar el formato del color sin alterar la apariencia de la paleta generada.