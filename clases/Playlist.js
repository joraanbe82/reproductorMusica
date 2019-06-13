function Playlist(jPlaylist, name) {
   
    this.songs = new Array();
    this.cancionActual = 0;

    if(jPlaylist){
        this.name = jPlaylist.name;
        for(let jSong of jPlaylist.songs){
            let song = new Song(jSong);
            this.songs.push(song);
        }
    }
    else{
        this.name = name;
    }


    Playlist.prototype.top = function () {
        /*Recorre el array de canciones, si encuentro un grupo nuevo
        lo añado, si encuentro un grupo que ya existe, incremento aparicion*/
        let tops = new Array();// array de objetos top
        for (let i = 0; i < this.songs.length; i++) {
            if (this.checkGroup(this.songs[i], tops)){// el grupo ya existe, lo incremento
                this.addAppearance(this.songs[i], tops);//aqui llamo al metodo incluido en esta clase
            }
            else { //el grupo no existe lo creo
                this.createGroup(this.songs[i], tops);
            }
        }

        tops.sort(function (a, b) { //Este tipo de funciones se llaman callback
            return b.getAppearance() - a.getAppearance();
        });

        tops = tops.splice(0,5);

        console.log(tops);
        
        return tops;
       
    }

    Playlist.prototype.addAppearance = function(song, tops){
        let encontrado = false;
        for (let i = 0; i < tops.length && !encontrado; i++) {
            if (song.getBanda() == tops[i].getBand()) {
                tops[i].addAppearance();// aqui llamo a la clase Top para aumentar el contador
                encontrado = true;
            }
            return encontrado;
        }
    }

    Playlist.prototype.createGroup = function(song, tops){
        let nuevoGrupo = new Top(song.getBanda());
        tops.push(nuevoGrupo);
    }

    Playlist.prototype.checkGroup = function (song, tops) {
        let yaExiste = false;
        for (let i = 0; i < tops.length && !yaExiste; i++) {
            if (song.getBanda() == tops[i].getBand()) {
                yaExiste = true;
            }
            return yaExiste;
        }
    }

    Playlist.prototype.getSongs = function () {
        return this.songs;
    }

    Playlist.prototype.getName = function () {
        return this.name;
    }


    Playlist.prototype.addSong = function (song) {
        this.songs.push(song);

    };

    Playlist.prototype.getDuration = function () {
        let durationTotal = 0;
        for (let i = 0; i < this.songs.length; i++) {
            durationTotal += this.songs[i].getDuration();
        };
        return durationTotal;
    };

    // array.splice(index, cuantos eliminamos incluyendo el index)
    Playlist.prototype.removeSong = function (id) {
        let indice = null;
        for (let i = 0; i < this.songs.length && indice == null; i++) {
            if (this.songs[i].getId() == id) {
                indice = i;
            }
        }
        if (indice != null) {
            this.songs.splice(indice, 1);
        };
    };

    Playlist.prototype.print = function () {
        for (let i = 0; i < this.songs.length; i++) {
            console.log(this.song[i].print());
        };
    };

    Playlist.prototype.shuffle = function () {
        let nuevo = new Array();
        let originalSize = this.songs.length;
        let i = 0;
        while (i < originalSize) {
            let alea = obtenerNumeroAleatorio(0, (originalSize - 1));
            let song = this.songs.splice(alea, 1);
            song = song[0];
            nuevo.push(song);
            i++;
        }
        this.songs = nuevo;
        this.cancionActual = 0;
    };

    Playlist.prototype.nextSong = function () {
        this.cancionActual++;
        if (this.songsLists.length == this.cancionActual) {
            this.cancionActual = 0;
        }
    };



    Playlist.prototype.orderByDuration = function (valor) {
        this.songs.sort(function (a, b) { //Este tipo de funciones se llaman callback
            return b.getDuration() - a.getDuration();
        });

        return this.songs[this.cancionActual];
    };


    Playlist.prototype.toJSONObject = function (){
        let jplaylist = {}

        jplaylist.name = this.name;
        
        let jSongs = new Array();
        for(let song of this.songs){
            let jSong = song.toJSONObject();
            jSongs.push(jSong);
        }
        jplaylist.songs = jSongs

        return jplaylist;
    }


};


function obtenerNumeroAleatorio(min, max) {
    return parseInt(Math.random() * ((max + 1) - min) + min);
    };