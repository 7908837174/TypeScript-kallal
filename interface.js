"use strict";
const mySong = {
    stringName: "nurmal",
    stringerName: "Imigen Drigon",
    printSongInfo: function (songName, singerName) {
        return `Song Name: ${songName}, Singer Name: ${singerName}`;
    }
};
console.log(mySong.printSongInfo(mySong.stringName, mySong.stringerName));
