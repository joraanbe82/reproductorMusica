function Top(bandName) {
    this.bandName = bandName;
    this.appearance = 1;
    this.songLists = new Array();


    Top.prototype.getBand = function(){
        return this.bandName;
    }

    Top.prototype.getAppearance =  function(){
        return this.appearance;
    }

    Top.prototype.addAppearance = function(){
        this.appearance++;
    }
   
}