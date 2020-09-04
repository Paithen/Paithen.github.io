window.addEventListener('DOMContentLoaded', (event) => {
	function once(){
		document.cookie = "clicked=yes"
		location.reload();
	}

	if(document.cookie == "clicked=yes"){
		document.body.innerHTML = '';
	}
});
