function Song(jSong, id, title, band, duration, rating) {
    if(jSong){
    this.id = jSong.id;
    this.title = jSong.title;
    this.band = jSong.band;
    this.duration = jSong.duration; // usaremos en seg, pero la medida oficial es ms
    this.rating = jSong.rating;
    }
    else {
        this.id = id;
        this.title = title;
        this.band = band;
        this.duration = duration; // usaremos en seg, pero la medida oficial es ms
        this.rating = 0;
        if (rating >= 0 && rating <= 5) {
            0
            this.rating = rating;
        };
    }

    Song.prototype.getTitle = function () {
        return this.title;
    }

    Song.prototype.getBanda = function () {
        return this.band;
    }

    Song.prototype.getDuration = function () {
        return this.duration;
    }

    Song.prototype.getRating = function () {
        return this.rating;
    }

    Song.prototype.getId = function () {
        return this.id;
    }

    Song.prototype.print = function () {
        return "El ID: " + this.id + " de la canción " + this.title + " me encanta y en Apple sólo le dan " +
            this.rating + " estrellas";
    };

    Song.prototype.toJSONObject = function () {
        let jSong = {};

        jSong.id = this.id;
        jSong.this = this.title;
        jSong.band = this.band;
        jSong.duration = this.duration; 
        jSong.rating = this.rating;

        return jSong;
    }




}