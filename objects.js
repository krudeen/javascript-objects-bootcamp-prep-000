

var playlist = { artistName: "songTitles" };

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = 'songTitle'; 
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  copy = playlist
  delete playlist["artistName"];
  return playlist;
}
