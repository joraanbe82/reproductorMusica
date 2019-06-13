function StoreManager(){}//clases staticas se usan cuando no tiene datos almacenados
//se usan directamente, no se crea una variable y se llama a los metodos

StorageManager.playlist = "playlist" //constante de clase estatica,

StoreManager.saveplaylist = function(playlist){
    let jPlaylist = playlist.toJSONObject();
    jPlaylist = JSON.stringify(jPlaylist);

    localStorage.setItem(StorageManager.playlist, jPlaylist);
}

StoreManager.retrieveplaylist = function(){
    let jPlaylist = localStorage.getItem(StorageManager.playlist);
    let pl = null;

    if(jPlaylist){
        jPlaylist = JSON.parse(jPlaylist);
        pl = new Playlist(jPlaylist);
    }
    return pl;
}


