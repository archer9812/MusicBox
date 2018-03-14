var musiclist = ['gbqq.mp3','cq.mp3','zzlfz.mp3'];
var nowplay = 0;
function play(){
    var muscibox = document.getElementById("musicbox");
    muscibox.play();
}
function pause(){
    var muscibox = document.getElementById("musicbox");
    muscibox.pause();
}
function up(){
    var muscibox = document.getElementById("musicbox");
    if(muscibox.volume < 1){
        muscibox.volume = musicbox.volume + 0.1;
    }else{
        alert("Voice is max!");
    }
}
function down(){
    var muscibox = document.getElementById("musicbox");
    if(muscibox.volume > 0.1){
        muscibox.volume = musicbox.volume - 0.1;
    }else{
        alert("Voice is min!");
    }
}
function next(){
    var musicbox = document.getElementById("musicbox");
    if(nowplay == musiclist.length - 1){
        alert("This is the last music!");
    }else{
        nowplay = nowplay + 1;
        var source = document.getElementById('musicsource')
        musicbox.src = 'audio/' + musiclist[nowplay];
        source.src = 'audio/' + musiclist[nowplay];
        musicbox.play();
    }
    musiclists();
}
function nextleft(){
    var musicbox = document.getElementById("musicbox");
    if(nowplay == 0){
        alert("This is the first music!");
    }else{
        nowplay = nowplay - 1;
        var source = document.getElementById('musicsource')
        musicbox.src = 'audio/' + musiclist[nowplay];
        source.src = 'audio/' + musiclist[nowplay];
        musicbox.play();
    }
    musiclists();
}
function musiclists(){
    var showmusic = document.getElementById("showmusic");
    showmusic.innerHTML = "";
    for(var i=0; i<musiclist.length; i++){
        if(nowplay==i){
            showmusic.innerHTML = showmusic.innerHTML + '<li class="able" onclick="goto(' + i +  ')">' + musiclist[i] + '</li>'
        }else{
            showmusic.innerHTML = showmusic.innerHTML + '<li class="unable" onclick="goto(' + i +  ')">' + musiclist[i] + '</li>'
        }    
    }
    if(showmusic.style.display == "none"){
        showmusic.style.display = "";
    }else{
        showmusic.style.display = "none";
    }
}
function goto(wangtoplay){
    nowplay = wangtoplay;
    var source = document.getElementById('musicsource')
    musicbox.src = 'audio/' +  musiclist[nowplay];
    source.src = 'audio/' + musiclist[nowplay];
    musicbox.play();
    var showmusic = document.getElementById("showmusic");
    showmusic.innerHTML = "";
    //list show
    for(var i=0; i<musiclist.length; i++){
        if(nowplay==i){
            showmusic.innerHTML = showmusic.innerHTML + '<li class="able" onclick="goto(' + i +  ')">' + musiclist[i] + '</li>'
        }else{
            showmusic.innerHTML = showmusic.innerHTML + '<li class="unable" onclick="goto(' + i +  ')">' + musiclist[i] + '</li>'
        }    
    }
}
function f5loading(){
    document.getElementById("pg").max = document.getElementById("musicbox").duration;
    document.getElementById("pg").value = document.getElementById("musicbox").currentTime;
    document.getElementById("musictime").innerHTML = Math.ceil(document.getElementById("musicbox").currentTime)  + "/" + Math.ceil(document.getElementById("musicbox").duration);
}



