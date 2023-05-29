
# Prueba Técnica Lepton

## Sección 1: HTML y CSS

1. Crea una estructura HTML básica que incluya una barra de navegación
superior, un panel lateral izquierdo y un área de contenido principal
con un canvas.

2. Utilizando CSS, estiliza la barra de navegación para que tenga un
fondo gris oscuro, texto blanco y esté fija en la parte superior de la
página. Asegúrate de que la barra de navegación tenga un espacio de
padding de 10px.

3. Estiliza el panel lateral izquierdo para que tenga un fondo gris
claro, un ancho de 300px y se muestre al lado izquierdo de la página.
Asegúrate de que el panel lateral tenga un espacio de padding de 20px.

## Sección 2: TypeScript y JavaScript

1. Escribe una función en TypeScript que se ejecute cuando se haga clic
en un botón y cierre el panel lateral izquierdo. Utiliza JavaScript para
manipular el DOM y ocultar el panel lateral.

2. Agrega un evento de mouseover a un elemento en el área de contenido
principal (canvas) utilizando TypeScript. Cuando el mouse esté sobre ese
elemento, muestra una alerta con el mensaje "¡El mouse está encima!".

3. Implementa un diálogo emergente utilizando TypeScript y CSS. Cuando
se haga clic en un botón en la barra de navegación, el diálogo deberá
aparecer en el centro de la página con un fondo semitransparente y
mostrar el mensaje "¿Estás seguro que deseas cerrar la aplicación?".

## Sección 3: Desarrollo web front-end

1. Explica cómo estructurarías el código HTML y CSS para crear una lista
desplegable en la barra de navegación superior. La lista desplegable
deberá mostrarse cuando se haga clic en un elemento de menú específico.

### Respuesta : Con la ayuda de un Script, a través de un getElementById se obtiene la informacion del dialogo que se quiere mostrar, en el css como valor inicial tendrá display: "none", dentro la funcion que se va a realizar en el script se le colocar display: "block", esa funcion va a ser llamada en un onmouseover en la lista que le corresponda mostrar y con un onmouseout volvera a su estado inicial cuando el usuario quite el mouse, el resto del Css se adecua a las especificaciones del cliente.

2. Describe cómo utilizarías CSS para hacer que el contenido del área
principal (canvas) ocupe todo el espacio disponible, incluso si el
tamaño de la ventana del navegador cambia.

### Respuesta : Se coloca en el css en el contenedor canvas width: 100% height: 100dvh sin utilizar ningun margin ni padding.

3. Explica la importancia de la optimización de imágenes en el
desarrollo web. Menciona al menos dos técnicas o formatos de compresión
de imágenes que se pueden utilizar para mejorar el rendimiento de una
página web.

### Respuesta: Existe una relacion tamañoImg-tiempo. Mientras mas grande y de mejor calidad sea la imagen mas tarda la pagina web en cargar, lo cual hace que el usuario quede insatisfecho con el tiempo de respuesta de la pagina. Las dos técnicas mas conocidas son: 
#### Compresión sin pérdida: Esta técnica de compresión reduce el tamaño de archivo de una imagen sin perder calidad perceptible. Acá se utiliza el formato PNG. Los archivos PNG conservan detalles y colores nítidos, lo que los hace ideales para imágenes con elementos gráficos, logotipos y capturas de pantalla. Esta es ideal para mantener la calidad de la imagen original. 
#### Compresión con pérdida: Esta técnica de compresión reduce el tamaño de archivo sacrificando una pequeña cantidad de calidad visual. El formato JPEG es ampliamente utilizado en este caso. Los archivos JPEG son ideales para fotografías y otras imágenes con gradientes suaves o colores continuos. Es posible ajustar el nivel de compresión para equilibrar el tamaño del archivo y la calidad visual. Reducir el nivel de compresión puede mejorar la calidad de la imagen, pero también aumentará el tamaño del archivo.