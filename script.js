/*funcion scroll*/

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("flechaScroll").style.display = "block";
    } else {
        document.getElementById("flechaScroll").style.display = "none";
    }
};

document.getElementById("flechaScroll").onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


/*creamos una variable para usar siempre como console.log*/
c = console.log.bind(console)

let xmlhttp = new XMLHttpRequest()

xmlhttp.onreadystatechange = function () {
    c(this.readyState + ' - ' + this.status + ' - ' + this.statusText)

    if (this.readyState == 4 && this.status == 200) {
        c(this.responseText)

        let botonVerPeli = document.getElementById('verPeli')

        let respuesta = JSON.parse(this.responseText)
        c(respuesta)

        let listaPeliculas = respuesta
        c(listaPeliculas)


        /*DIV CONTENEDOR*/

        let cartelera = document.createElement('div')

        /*Listado de peliculas*/

        listaPeliculas.forEach(pelicula => {
            c(pelicula.titulo)

            let card = document.createElement('div')
            card.classList.add('card')

            /* Cartelera */
            let imagen = document.createElement('img')
            imagen.setAttribute('src', pelicula.poster)
            imagen.setAttribute('alt', pelicula.titulo)
            card.appendChild(imagen)

            /*Informacion*/
            let info = document.createElement('div')
            info.classList.add('info')

            /* Titulo */
            let titulo = document.createElement('h1')
            let textoTitulo = document.createTextNode(pelicula.titulo)
            titulo.appendChild(textoTitulo)
            info.appendChild(titulo)

            /* Director */
            let director = document.createElement('p')
            let tituloDirector = document.createElement('h4')
            let textoTituloDirector = document.createTextNode('Director: ')
            let textoDirector = document.createTextNode(pelicula.director)
            tituloDirector.appendChild(textoTituloDirector)
            director.appendChild(textoDirector)
            info.appendChild(tituloDirector)
            info.appendChild(director)

            /*Protagonistas*/
            let protagonistas = document.createElement('p')
            let tituloProta = document.createElement('h4')
            let textoTituloProta = document.createTextNode('Protagonistas: ')
            let textoProtagonistas = document.createTextNode(
                pelicula.protagonistas.join(' , ')
            )
            tituloProta.appendChild(textoTituloProta)
            protagonistas.appendChild(textoProtagonistas)
            info.appendChild(tituloProta)
            info.appendChild(protagonistas)

            /*Duracion*/
            let duracion = document.createElement('p')
            let tituloDuracion = document.createElement('h4')
            let textoTituloDuracion = document.createTextNode('Duración: ')
            let textoDuracion = document.createTextNode(pelicula.duration + ' min')
            tituloDuracion.appendChild(textoTituloDuracion)
            duracion.appendChild(textoDuracion)
            info.appendChild(tituloDuracion)
            info.appendChild(duracion)

            /*Sipnosis*/
            let sipnosis = document.createElement('p')
            let tituloSipnosis = document.createElement('h4')
            let textoTituloSipnosis = document.createTextNode('Sipnosis: ')
            let textoSipnosis = document.createTextNode(pelicula.sipnosis)
            tituloSipnosis.appendChild(textoTituloSipnosis)
            sipnosis.appendChild(textoSipnosis)
            info.appendChild(tituloSipnosis)
            info.appendChild(sipnosis)

            card.appendChild(info)
            cartelera.appendChild(card)
        })

        /*SELECT DE PELICULAS*/

        botonVerPeli.addEventListener('click', () => {

            const ventanaAncho = 900;
            const ventanaAlto = 800;
            const margenHorizontal = (window.screen.width - ventanaAncho) / 2;
            const margenVertical = (window.screen.height - ventanaAlto) / 2;

            const ventanaPelicula = window.open("", "_blank", `width=${ventanaAncho}, height=${ventanaAlto}, top=${margenVertical}, left=${margenHorizontal}, resizable=no`);



            ventanaPelicula.document.titulo = 'Listado de Películas📽️';

            let select = document.createElement('select')

            /*Estilos de la ventana*/

            let estilos = ventanaPelicula.document.createElement('style')
            estilos.innerHTML = `
            body {
                background: linear-gradient(rgb(17, 24, 39), rgb(75, 85, 99));
                font-family: Verdana;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            select {
                margin: 20px auto;
                padding: 10px;
                border-radius: 10px;
                display: block;
                font-family: Verdana;
                border: 1px solid #ccc;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
                width: 500px;
            }
            
            select:hover {
                box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.2);
            }
            
            h1 {
                font-family: Verdana;
                text-align: center;
                color: whitesmoke;
                margin-top: 20px;
            }

            h2 {
                color: whitesmoke;
            }

            button {
                width: 25%;
                background: #fff; 
                color:#E50914;
                font-weight:bold; 
                border: 2px solid #E50914;
                padding: 16px 20px;
                border-radius: 15px; 
                position: relative;
                z-index: 1;
                overflow: hidden;
                display: inline-block;
                margin-bottom: 10px;
            }
            
            button:hover {
                color: #fff;
                cursor: pointer;
            }

            button::after {
                content: "";
                background: #141414; 
                position: absolute;
                z-index: -1;
                padding: 16px 20px;
                display: block;
                top: 0;
                bottom: 0;
                left: 100%;
                right: -100%;
                -webkit-transition: all 0.8s;
                transition: all 0.8s;
            }

            button:hover::after {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                -webkit-transition: all 0.8s;
                transition: all 0.8s;
            }
            
            #trailer {
                display: block;
                margin: 20px auto;
                width: 100%;
                height: 500px;
                text-align: center;
            }

            
            `;
            ventanaPelicula.document.head.appendChild(estilos);
            let titulo = document.createElement('h1');
            titulo.textContent = "LISTA PELÍCULAS✍️";


            listaPeliculas.forEach(pelicula => {
                let option = document.createElement('option')
                option.value = pelicula.titulo
                option.textContent = pelicula.titulo
                select.appendChild(option)
            })

            /*Botones mostrar y cerrar ventana*/

            let mostrarPeli = document.createElement('button')
            mostrarPeli.textContent = 'MOSTRAR✅'

            let cerrarVentana = document.createElement('button')
            cerrarVentana.textContent = 'CLOSE❌'

            /*Añadimos todos los elementos a la ventana*/

            ventanaPelicula.document.body.appendChild(titulo)
            ventanaPelicula.document.body.appendChild(select)
            ventanaPelicula.document.body.appendChild(mostrarPeli)
            ventanaPelicula.document.body.appendChild(cerrarVentana)

            cerrarVentana.addEventListener('click', () => {
                ventanaPelicula.close();
            })


            mostrarPeli.addEventListener('click', () => {
                let tarjeta = ventanaPelicula.document.querySelector('.tarjeta');
                if (tarjeta) {
                    tarjeta.remove();
                };

                let peliculaSeleccionada = listaPeliculas.find(
                    pelicula => pelicula.titulo === select.value
                );
                let div = document.createElement('div');
                div.classList.add('tarjeta');
                div.style.display = "flex";
                div.style.flexDirection = "column";
                div.style.alignItems = "center";

                let imagen = document.createElement('div');
                imagen.style.backgroundImage = `url(${peliculaSeleccionada.poster})`;
                imagen.style.backgroundSize = "cover";
                imagen.style.backgroundPosition = "center";
                imagen.style.padding = "20px";
                imagen.style.width = "400px";
                imagen.style.height = "500px";
                imagen.style.boxShadow = "0px 0px 10px #ccc";
                imagen.style.borderRadius = "10px";
                imagen.style.margin = "20px 0";
                imagen.style.filter = "grayscale(0.8)";

                let texto = document.createElement('div');
                texto.style.backgroundColor = "black";
                texto.style.color = "whitesmoke";
                texto.style.opacity = "0.8";
                texto.style.padding = "20px";
                texto.style.textAlign = "center";
                texto.style.width = "50%";
                texto.style.borderRadius = "10px";


                texto.textContent = `TITULO: ${peliculaSeleccionada.titulo}
                REPARTO: ${peliculaSeleccionada.protagonistas}
                DIRECTOR: ${peliculaSeleccionada.director}`;

                div.appendChild(imagen);
                div.appendChild(texto);

                /*Trailer*/
                let enun = ventanaPelicula.document.querySelector('h2');
                if (enun) {
                    enun.remove();
                }

                enun = document.createElement('h2')
                enun.textContent = `TRAILER ${peliculaSeleccionada.titulo} 📽️:`;
                enun.style.textAlign = "center";

                let video = ventanaPelicula.document.querySelector('#trailer');
                if (video) {
                    video.remove();
                }

                video = document.createElement("iframe");
                video.setAttribute("id", "trailer");
                video.setAttribute("src", peliculaSeleccionada.trailer);
                video.setAttribute("autoplay", "");

                ventanaPelicula.document.body.appendChild(div);
                ventanaPelicula.document.body.appendChild(enun);
                ventanaPelicula.document.body.appendChild(video);
            });


        })

        /*formulario*/

        let form = document.createElement('form')
        form.setAttribute('id', 'form-movie')
        form.setAttribute('method', 'post')
        form.setAttribute('novalidate', '')

        let tituloForm = document.createElement('h1')
        let textotituloForm = document.createTextNode('👇NUEVA PELÍCULA🎥')

        tituloForm.appendChild(textotituloForm)
        form.appendChild(tituloForm)

        let tituloF = document.createElement('input')
        tituloF.setAttribute('type', 'text')
        tituloF.setAttribute('name', 'titulo')
        tituloF.setAttribute('placeholder', 'Título')
        //tituloF.setAttribute('required', '')
        form.appendChild(tituloF)

        let directorF = document.createElement('input')
        directorF.setAttribute('type', 'text')
        directorF.setAttribute('name', 'director')
        directorF.setAttribute('placeholder', 'Director')
        //directorF.setAttribute('required', '')
        form.appendChild(directorF)

        let protagonistasF = document.createElement('input')
        protagonistasF.setAttribute('type', 'text')
        protagonistasF.setAttribute('name', 'protagonistas')
        protagonistasF.setAttribute('placeholder', 'Protagonistas')
        // protagonistasF.setAttribute('required', '')
        form.appendChild(protagonistasF)

        let duracionF = document.createElement('input')
        duracionF.setAttribute('type', 'number')
        duracionF.setAttribute('name', 'duration')
        duracionF.setAttribute('placeholder', 'Duración')
        //duracionF.setAttribute('required', '')
        duracionF.setAttribute('min', '0')
        form.appendChild(duracionF)

        let resumenF = document.createElement('textarea')
        resumenF.setAttribute('name', 'sipnosis')
        resumenF.setAttribute('placeholder', 'Sipnosis')
        //resumenF.setAttribute('required', '')
        form.appendChild(resumenF)

        let imagenF = document.createElement('input')
        imagenF.setAttribute('type', 'text')
        imagenF.setAttribute('name', 'poster')
        imagenF.setAttribute('placeholder', 'URL de la imagen')
        //imagenF.setAttribute('required', '')
        form.appendChild(imagenF)


        let trailerF = document.createElement('input')
        trailerF.setAttribute('type', 'text')
        trailerF.setAttribute('name', 'trailer')
        trailerF.setAttribute('placeholder', 'URL del trailer')
        //trailerF.setAttribute('required', '')
        form.appendChild(trailerF)


        let submit = document.createElement('input')
        submit.setAttribute('type', 'submit')
        submit.setAttribute('value', 'ENVIAR')
        form.appendChild(submit)

        document.body.appendChild(form)

        document.getElementById('abrir').addEventListener('click', function () {

            /*limpiamos formulario cada vez que se llama*/
            form.reset()
            document.getElementById('form-movie').style.visibility = 'visible'
        })

        form.addEventListener('submit', event => {
            event.preventDefault()

            let tituloValue = tituloF.value
            let directorValue = directorF.value
            let protagonistasValue = protagonistasF.value
            let duracionValue = duracionF.value
            let resumenValue = resumenF.value
            let imagenValue = imagenF.value
            let trailerValue = trailerF.value

            let formValid = true
            let mensajeError = ''
            let modal = document.querySelector('#modal')
            let contenidoModal = document.querySelector('#contenidoModal')
            let cancelarModal = document.querySelector('#cancel')

            /* expresiones regulares para el formulario*/

            const TITULO_EXP = /^[A-Z][A-Za-z\s\u00a0-\u1FFF]{1,50}$/
            const DIRECTOR_EXP = /^[A-Z][A-Za-z\s]{1,28}$/
            const PROTAS_EXP =
                /^[A-Z][A-Za-z\s]{0,58},\s*[A-Z][A-Za-z\s]{0,58}(,\s*[A-Z][A-Za-z\s]{0,58})*$/
            const DURACION_EXP = /^([6-9][0-9]|[1-9][0-9]{2,2}|[1-2][0-5][0-9]|260)$/
            const RESUMEN_EXP = /^.{20,800}$/
            const URL_EXP = /^https:\/\/.*\.(jpg|jpeg)$/
            const TRAILER_EXP = /^https:\/\/.*\.(html)$/;


            /*Controlamos que no se pueda repetir un titulo*/
            let tituloExiste = listaPeliculas.some(pelicula => pelicula.titulo === tituloValue)

            
            if (tituloValue.trim() === '' || !TITULO_EXP.test(tituloValue)) {
                formValid = false
                mensajeError +=
                    '⛔Titulo inválido/empieza en May./min. 2 y max. 50 carácteres.\n\n'
            }

            if (tituloExiste) {
                formValid = false
                mensajeError += '⛔El título ya existe en la cartelera.\n\n'
            }

            if (directorValue.trim() === '' || !DIRECTOR_EXP.test(directorValue)) {
                formValid = false
                mensajeError +=
                    '⛔Director inválido/empieza en May./min. 2 y max. 40 carácteres.\n\n'
            }

            if (protagonistasValue.trim() === '' || !PROTAS_EXP.test(protagonistasValue)) {
                formValid = false
                mensajeError +=
                    '⛔Protagonistas inválido/empieza en May./min. 3 y max. 60 carácteres/separados con (,).\n\n'
            }

            if (!DURACION_EXP.test(duracionValue)) {
                formValid = false
                mensajeError += '⛔Duración no válida/ min. 60 y max. 260 minutos.\n\n'
            }

            if (resumenValue.trim() === '' || !RESUMEN_EXP.test(resumenValue)) {
                formValid = false
                mensajeError += '⛔Resumen no válido/min. 20 y max. 600 carácteres.\n\n'
            }

            if (imagenValue.trim() === '' || !URL_EXP.test(imagenValue)) {
                formValid = false
                mensajeError += "⛔URL no válida/ 'https:// y .jpg'.\n\n"
            }

            if (trailerValue.trim() === '' || !TRAILER_EXP.test(trailerValue)) {
                formValid = false
                mensajeError += "⛔URL trailer no válida/ 'https:// y .html'.\n\n"   /* cogemos los trailer de sensacine, por que no fallan al cargar*/
            }

            if (formValid) {
                let peliNueva = {
                    titulo: tituloValue,
                    director: directorValue,
                    protagonistas: protagonistasValue.split(' y '),
                    duration: duracionValue,
                    sipnosis: resumenValue,
                    poster: imagenValue,
                    trailer: trailerValue
                }

                listaPeliculas.push(peliNueva)
                document.getElementById('form-movie').style.visibility = 'hidden'
                c('Película añadida a la cartelera')
                c(listaPeliculas)

                let card2 = document.createElement('div')
                card2.classList.add('card')
                let cover2 = document.createElement('div')
                cover2.classList.add('cover__card')

                /* Cartelera Nueva */
                let imagen2 = document.createElement('img')
                imagen2.setAttribute('src', peliNueva.poster)
                imagen2.setAttribute('alt', peliNueva.titulo)
                card2.appendChild(imagen2)

                let info2 = document.createElement('div')
                info2.classList.add('info')

                /* Titulo Nuevo */
                let titulo2 = document.createElement('h1')
                let textoTitulo2 = document.createTextNode(peliNueva.titulo)
                titulo2.appendChild(textoTitulo2)
                info2.appendChild(titulo2)

                /* Director Nuevo */

                let director2 = document.createElement('p')
                let tituloDirector2 = document.createElement('h4')
                let textoTituloDirector2 = document.createTextNode('Director: ')
                let textoDirector2 = document.createTextNode(peliNueva.director)
                tituloDirector2.appendChild(textoTituloDirector2)
                director2.appendChild(textoDirector2)
                info2.appendChild(tituloDirector2)
                info2.appendChild(director2)

                /*Protagonistas Nuevos*/
                let protagonistas2 = document.createElement('p')
                let tituloProta2 = document.createElement('h4')
                let textoTituloProta2 = document.createTextNode('Protagonistas: ')
                let textoProtagonistas2 = document.createTextNode(
                    peliNueva.protagonistas.join(' y ')
                )
                tituloProta2.appendChild(textoTituloProta2)
                protagonistas2.appendChild(textoProtagonistas2)
                info2.appendChild(tituloProta2)
                info2.appendChild(protagonistas2)

                /*Duracion Nuevo*/
                let duracion2 = document.createElement('p')
                let tituloDuracion2 = document.createElement('h4')
                let textoTituloDuracion2 = document.createTextNode('Duración: ')
                let textoDuracion2 = document.createTextNode(
                    peliNueva.duration + ' min'
                )
                tituloDuracion2.appendChild(textoTituloDuracion2)
                duracion2.appendChild(textoDuracion2)
                info2.appendChild(tituloDuracion2)
                info2.appendChild(duracion2)

                /*Sipnosis Nueva*/
                let sipnosis2 = document.createElement('p')
                let tituloSipnosis2 = document.createElement('h4')
                let textoTituloSipnosis2 = document.createTextNode('Sipnosis: ')
                let textoSipnosis2 = document.createTextNode(peliNueva.sipnosis)
                tituloSipnosis2.appendChild(textoTituloSipnosis2)
                sipnosis2.appendChild(textoSipnosis2)
                info2.appendChild(tituloSipnosis2)
                info2.appendChild(sipnosis2)

                /*Trailer Nuevo*/
                let video2 = document.createElement("iframe");
                video2.setAttribute("id", "trailer");
                video2.setAttribute("src", peliNueva.trailer);
                video2.setAttribute("width", "660");
                video2.setAttribute("height", "415");
                video2.setAttribute("autoplay", "");

                // Agregar la nueva pelicula a la cartelera
                card2.appendChild(info2)
                cartelera.appendChild(card2)

                /* MENSAJE DE EXITO */
                let modalExito = document.getElementById('modal-exito')
                let tituloModal = document.getElementById('titulo-modal-exito')
                tituloModal.textContent = `LA PELÍCULA ${peliNueva.titulo} HA SIDO AÑADIDA😉`

                // Verificar si ya existe un elemento de imagen en el modal de éxito
                let imagenExito = modalExito.querySelector('img')
                if (!imagenExito) {
                    // Si no existe, crear uno nuevo
                    imagenExito = document.createElement('img')
                    modalExito.appendChild(imagenExito)
                }

                imagenExito.src = 'http://i2.cdn.turner.com/money/dam/assets/150529160709-facebook-gif-20-custom-1.gif'
                imagenExito.alt = '😉'

                modalExito.showModal()

                setTimeout(() => {
                    modalExito.close()
                }, 7000)



            } else {
                contenidoModal.textContent = mensajeError
                modal.showModal()
                cancelarModal.addEventListener('click', () => modal.close())
            }
        })

        document.getElementById('movie-list').appendChild(cartelera)
        document.getElementById('formularioPelicula').appendChild(form)
    }
}

xmlhttp.open('GET', 'http://localhost/dwec/peliculas.php')
xmlhttp.send()
