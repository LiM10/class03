function slider(image){
	var attr=image.getAttribute("src");
	document.getElementsByClassName("slider")[0].setAttribute("style", "background-image: url("+attr+")")
}
