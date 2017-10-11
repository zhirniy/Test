
window.onload = function () {
	 
      var a0 = document.querySelectorAll( 'a[href="#/Sun"]' )[0];
      var a1 = document.querySelectorAll( 'a[href="#/Mercur"]' )[0];
      var a2 = document.querySelectorAll( 'a[href="#/Venera"]' )[0];
      var a3 = document.querySelectorAll( 'a[href="#/Zemlia"]' )[0];
      var a4 = document.querySelectorAll( 'a[href="#/Mars"]' )[0];
      var a5 = document.querySelectorAll( 'a[href="#/Jupiter"]' )[0];
      var a6 = document.querySelectorAll( 'a[href="#/Saturn"]' )[0];
      var a7 = document.querySelectorAll( 'a[href="#/Uran"]' )[0];
      var a8 = document.querySelectorAll( 'a[href="#/Neptun"]' )[0];
      var a9 = document.querySelectorAll( 'a[href="#/Karlik"]' )[0];

      var arr  =[a0,a1,a2,a3,a4,a5,a6,a7,a8,a9];
       document.getElementsByTagName("body")[0].style.backgroundImage = "none";
     
      
	 a0.addEventListener("click",
                function () {abc(0);},false);

	 a1.addEventListener("click",
	 	        function () {abc(1);},false);

	 a2.addEventListener("click",
                function () {abc(2);}, false);

	 a3.addEventListener("click",
                function () {abc(3);}, false);

	 a4.addEventListener("click",
                function () {abc(4);}, false);

	 a5.addEventListener("click",
                function () {abc(5);},  false);

	 a6.addEventListener("click",
                function () {abc(6);}, false);
	 a7.addEventListener("click",
                function () {abc(7);},  false);

	 a8.addEventListener("click",
                function () {abc(8);}, false);

	 a9.addEventListener("click",
                function () {abc(9);}, false);

	

	function abc(a){
     for(var i =0; i < arr.length; i++){
    arr[i].style.color = "white";}
    arr[a].style.color = "lightblue";
    arr[a].style.fontSize = "large";
    if (a==0){
    	 document.getElementsByTagName("body")[0].style.backgroundImage = "none"; 
         document.getElementsByTagName("body")[0].style.backgroundColor = "black";
    }
    else{
       document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    	 getElementsByTagName("body")[0].style.backgroundImage = "url(img/body.jpg)";
    }

}
}
