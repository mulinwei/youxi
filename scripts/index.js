window.onload=function(){
	var games=new game();
	var kaishi=document.getElementsByClassName("kaishi");
	var cx=document.getElementsByClassName("cx");
	var zhe=document.getElementsByClassName("zhe");
	var start=document.getElementById("start");
	kaishi[0].onclick = function(){
		start.style.marginTop = '-1000px';
		setTimeout(games.play(),1000)
		document.getElementById('audio').play();
	}
	cx[0].onclick=function(){
		zhe[0].style.top="-600px";
		games.restart();

	}
};