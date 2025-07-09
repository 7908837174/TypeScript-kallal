interface Song {
    stringName: string;
    stringerName: string;
    printSongInfo(songName: string, singerName: string): string;
}

const mySong: Song = {
    stringName: "nurmal",
    stringerName: "Imigen Drigon",
    printSongInfo: function(songName: string, singerName: string): string {
        return `Song Name: ${songName}, Singer Name: ${singerName}`;
    }
};
 
console.log(mySong.printSongInfo(mySong.stringName, mySong.stringerName));
 




