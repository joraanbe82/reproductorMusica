function addSong(){
	let title = document.getElementById("title").value;
	let band = document.getElementById("band").value;
	let duration = document.getElementById("duration").value;
	let rating = document.getElementById("rating").value;
	
	let song = new Song(new Date().getTime(), title, band, duration, rating);
	
	playlist.addSong(song);
	
	pintarPlaylist();
}



function pintarPlaylist(){
	document.getElementById("playlistName").innerHTML = playlist.getName();
	
	let div = document.getElementById("songList");
	div.innerHTML = "";
	
	let canciones = playlist.getSongs();
	
	for (let i = 0; i < canciones.length; i++){
		let cancion = canciones[i];
		
		let p = document.createElement("p");
		p.innerHTML = cancion.getTitle() + " - " + cancion.getBand();
		
		
		div.appendChild(p);
	}
}