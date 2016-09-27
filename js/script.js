var button = document.querySelector(".product__btn");

button.addEventListener("click", function(e){
	e.preventDefault();
	var top = window.pageYOffset;

	var scr = setInterval(function () {
	    top -= 25;
	    window.scrollTo(0, top);
	    
	    if (top < 0) {
	        clearInterval(scr);
	    }
	}, 15);
})