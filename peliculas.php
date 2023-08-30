<?php
header( 'Access-Control-Allow-Origin: *' );

$movies = [
    array(
        'titulo' => 'Cadena Perpetua',
        'poster' => 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
        'director' => 'Frank Darabont',
        'protagonistas' => array( 'Tim Robbins', 'Morgan Freeman' ),
        'duration' => 142,
        'sipnosis' => '😢Acusado del asesinato de su mujer, Andrew Dufresne (Tim Robbins), tras ser condenado a cadena perpetua, es enviado a la cárcel de Shawshank. Con el paso de los años conseguirá ganarse la confianza del director del centro y el respeto de sus compañeros de prisión, especialmente de Red (Morgan Freeman), el jefe de la mafia de los sobornos. ',
        'trailer' => 'https://player.sensacine.com/19535101.html'
    ),
    array(
        'titulo' => 'El Padrino',
        'poster' => 'https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
        'director' => 'Francis Ford Coppola',
        'protagonistas' => array( 'Marlon Brando', 'Al Pacino' ),
        'duration' => 175,
        'sipnosis' => '💰🧨América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de "Il consigliere" Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. ',
        'trailer' => 'https://player.sensacine.com/19569474.html'
    ),

    array(
        'titulo' => 'El Caballero Oscuro',
        'poster' => 'https://pics.filmaffinity.com/El_caballero_oscuro-102763119-mmed.jpg',
        'director' => 'Christopher Nolan',
        'protagonistas' => array( 'Christian Bale',
        'Heath Ledger' ),
        'duration' => 152,
        'sipnosis' => '🦹‍♂️Batman/Bruce Wayne (Christian Bale) regresa para continuar su guerra contra el crimen. Con la ayuda del teniente Jim Gordon (Gary Oldman) y del Fiscal del Distrito Harvey Dent (Aaron Eckhart), Batman se propone destruir el crimen organizado en la ciudad de Gotham. El triunvirato demuestra su eficacia, pero, de repente, aparece Joker (Heath Ledger), un nuevo criminal que desencadena el caos y tiene aterrados a los ciudadanos. ',
        'trailer' => 'https://player.sensacine.com/18820390.html'
    ),

    array(
        'titulo' => 'Jaws',
        'poster' => 'https://2.bp.blogspot.com/-xJRw4z9BTv0/UeF9uYOUILI/AAAAAAAABo0/slcoQmDD2D8/s1600/jaws_dts_hires.jpeg',
        'director' => 'Steven Spielberg',
        'protagonistas' => array( 'Roy Scheider',
        'Richard Dreyfuss' ),
        'duration' => 124,
        'sipnosis' => '🦈En la costa de un pequeño pueblo del Este de los Estados Unidos, un enorme tiburón ataca a varias personas. Por temor a los nefastos efectos que este hecho podría tener sobre el negocio turístico, el alcalde se niega a cerrar las playas y a difundir la noticia. Pero un nuevo ataque del tiburón termina con la vida de un bañista. Cuando el terror se apodera de todos, un veterano cazador de tiburones, un oceanógrafo y el jefe de la policía local se unen para intentar capturar al escualo.',
        'trailer' => 'https://player.sensacine.com/19516927.html'
    ),

    array(
        'titulo' => 'Pulp Fiction',
        'poster' => 'https://www.desdelsofa.cat/wp-content/uploads/2022/06/Pulp-Fiction1.png',
        'director' => 'Quentin Tarantino',
        'protagonistas' => array( 'John Travolta',
        'Uma Thurman' ),
        'duration' => 153,
        'sipnosis' => '🔞Jules y Vincent, dos asesinos a sueldo con no demasiadas luces, trabajan para el gángster Marsellus Wallace. Vincent le confiesa a Jules que Marsellus le ha pedido que cuide de Mia, su atractiva mujer. Jules le recomienda prudencia porque es muy peligroso sobrepasarse con la novia del jefe. Cuando llega la hora de trabajar, ambos deben ponerse "manos a la obra".',
        'trailer' => 'https://player.sensacine.com/19553934.html'
    ),

    array(
        'titulo' => 'Mejor...imposible',
        'poster' => 'https://pics.filmaffinity.com/Mejor_imposible-341003514-large.jpg',
        'director' => 'James L. Brooks',
        'protagonistas' => array( 'Jack Nicholson',
        'Helen Hunt' ),
        'duration' => 138,
        'sipnosis' => '🤣Melvin Udall (Jack Nicholson), un escritor maniático que padece un trastorno obsesivo-compulsivo, es el ser más desagradable y desagradecido que uno pueda tener como vecino en Nueva York. Entre sus rutinas está la de comer todos los días en una cafetería, donde le sirve Carol Connelly (Helen Hunt), camarera y madre soltera.',
        'trailer' => 'https://player.sensacine.com/19533855.html'
    ),
    array(
        'titulo' => 'El señor de los anillos. La Comunidad del Anillo',
        'poster' => 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-comunidad-del-anillo-el-senor-de-los-anillos-pelicula-estreno-1639857066.jpg',
        'director' => 'Peter Jackson',
        'protagonistas' => array( 'Elijah Wood',
        'Viggo Mortensen' ),
        'duration' => 180,
        'sipnosis' => '🧙‍♂️En la Tierra Media, el Señor Oscuro Sauron ordenó a los Elfos que forjaran los Grandes Anillos de Poder. Tres para los reyes Elfos, siete para los Señores Enanos, y nueve para los Hombres Mortales. Pero Saurón también forjó, en secreto, el Anillo Único, que tiene el poder de esclavizar toda la Tierra Media. Con la ayuda de sus amigos y de valientes aliados, el joven hobbit Frodo emprende un peligroso viaje con la misión de destruir el Anillo Único. Pero el malvado Sauron ordena la persecución del grupo, compuesto por Frodo y sus leales amigos hobbits, un mago, un hombre, un elfo y un enano. La misión es casi suicida pero necesaria, pues si Sauron con su ejército de orcos lograra recuperar el Anillo, sería el final de la Tierra Media.',
        'trailer' => 'https://player.sensacine.com/19360378.html',
    ),

    array(
        'titulo' => 'El exorcista',
        'poster' => 'https://www.dodmagazine.es/wp-content/uploads/2020/03/el-exorcista-banda-sonora.jpg',
        'director' => 'William Friedkin',
        'protagonistas' => array( 'Linda Blair',
        'Jason Miller' ),
        'duration' => 121,
        'sipnosis' => '😨Regan, una niña de doce años, sufre fenómenos paranormales como la levitación o la manifestación de una fuerza sobrehumana. Su madre, aterrorizada, tras someter a su hija a múltiples análisis médicos que no ofrecen ningún resultado, acude a un sacerdote con estudios de psiquiatría. Éste, convencido de que el mal no es físico sino espiritual, cree que se trata de una posesión diabólica, y decide practicar un exorcismo... Adaptación de la novela de William Peter Blatty que se inspiró en un exorcismo real ocurrido en Washington en 1949.',
        'trailer' => 'https://player.sensacine.com/19374718.html',
    ),

    array(
        'titulo' => 'Terminator 2 El juicio Final',
        'poster' => 'https://pics.filmaffinity.com/t2_terminator_2_judgment_day-825143697-mmed.jpg',
        'director' => 'James Camaron',
        'protagonistas' => array( 'Arnold Schwarzenegger, Linda Hamilton' ),
        'duration' => 135,
        'sipnosis' => '🤖Sarah Connor, la madre soltera del rebelde John Connor, está ingresada en un psiquiátrico. Algunos años antes, un viajero del tiempo le había revelado que su hijo sería el salvador de la humanidad en un futuro -año 2029- dominado por las máquinas. Se convirtió entonces en una especie de guerrera y educó a su hijo John en tácticas de supervivencia. Esta es la razón por la que está recluida en un manicomio. Cuando un nuevo androide mejorado, un T-1000, llega del futuro para asesinar a John, un viejo modelo T-800 será enviado para protegerle.',
        'trailer' => 'https://player.sensacine.com/19434034.html',
    ),


];

echo json_encode( $movies );

?>
