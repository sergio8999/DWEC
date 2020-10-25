/* 
    2. Crea una página que contenga varios enlaces, imágenes y anclas de ejemplo
    y añade una serie de enlaces que realicen lo siguiente:
        c) Muestra el número de imagenes del documento
        d) Muestra el id de la primera imagen
        e) Muestra el número de enlaces del documento
        f) Cambia el título del documento.
*/

document.write("<img id=\"1\" src=\"images/1.png\"><br>");
document.write("<img id=\"2\" src=\"images/2.png\"><br>");
document.write("<img id=\"2\" src=\"images/3.png\"><br>");
document.write("<a href=\"https://www.marca.com/\">Marca</a>");
document.write("<a href=\"https://as.com/\">As</a>");
document.write("<a href=\"https://www.ideal.es/\">Ideal</a>");

document.write("El documento tiene "+document.images.length+" imagenes<br>");
document.write("El id de la primera imagen es "+ document.images[0].id+"·<br>");
document.write("El documento tiene "+ document.links.length+" enlaces<br>");
document.title = "Worksheet 6";