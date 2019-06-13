function cargarDatosIniciales(){
    playlist = StoreManager.retrieveplaylist();

    if(playlist == null){
        playlist = new playlist(null,"Rocking /w Charles : ");
    }
}



function addSong(){
    let title = document.getElementById("title").value;
    let band = document.getElementById("banda").value;
    let duration = document.getElementById("duration").value;
    let rating = document.getElementById("rating").value;
    // Aqui paro y compruebo que lo anterior funciona y continuo

    let song = new Song(null, new Date().getTime(), title, band, duration, rating);
    

    //Esta playlist hace referencia a la creada en el HTML
    playlist.addSong(song);
    StoreManager.saveplaylist(playlist);
    pintarplaylist(title,band,duration,rating);
}

function pintarplaylist(){
    document.getElementById('playlistName').innerHTML = playlist.getName();
 
    let div =  document.getElementById('songList');
    div.innerHTML = ""; // antes del for para que reescriba lo anterior y no se duplique

    let canciones = playlist.getSongs();
    console.log(canciones);

    for(let i = 0; i < canciones.length; i++){
        let cancion = canciones[i];
    
        let p = document.createElement("p");
        p.innerHTML = cancion.getTitle() + "-" + cancion.getBanda() + "-" +
        cancion.getDuration() + "-" + cancion.getRating();
        //encampusalmiento, info que esta metida dentro de mas info etc etc
        //es cuando usas un metodo para llamar un objeto y otro metodo seguido
        //para obtener la info dentro, mas y mas
        let butt = document.createElement("input");
        butt.setAttribute("type", "button");
        butt.setAttribute("onclick", "deleteSong("+cancion.getId()+");");
        butt.value="Eliminar cancion";
        p.appendChild(butt);
        butt = null;



        div.appendChild(p);
    }
        
}

function deleteSong(id){
    playlist.removeSong(id);
    StoreManager.saveplaylist(playlist)
    pintarplaylist();
}

function ver(){
    //paso la lista a objeto json
    let jPlaylist = playlist.toJSONObject();
    console.log(jPlaylist);
    // convierto el objeto json en un json string
    jPlaylist = JSON.stringify(jPlaylist);
    console.log(jPlaylist);

    //guardo la info en el sesion storage
    sessionStorage.setItem("lista canciones", jPlaylist);

}

//funcion para que cuando cargue la web, muestre los datos
function recuperarDatos(){
    let jPlaylist = sessionStorage.getItem("lista canciones");
    if(jPlaylist) {
        jPlaylist = JSON.parse(jPlaylist) // de string a JSON
        let list = new playlist(jPlaylist);
        pintarplaylist(list);
    }


}

