/* 
10. Seguridad en una clave Crea un plugin que realice lo siguiente. Tendremos un formulario
con un campo input password. Con jQuery mostraremos dinámicamente un mensaje al lado del
campo con la fortaleza de la clave que haya escrita. A medida que el usuario cambie el
contenido del campo, se actualizará el mensaje del lado, mostrando la fortaleza de la nueva
clave. (<5 no segura, >5 y <8 medianamente segura, >8 segura)
*/

function main(){

    $("input").keydown(function(){
        if($(this).val().length < 5)
            $("span").text("No segura");
        else if($(this).val().length < 8)
            $("span").text("Medianamente segura");
        else 
            $("span").text("Segura");
    })
}

window.addEventListener('load',main);