window.addEventListener('DOMContentLoaded', (event) => {
    if(document.cookie == "clicked=yes"){
		document.body.innerHTML = '';
	}
});
function once(){
	document.cookie = "clicked=yes"
	location.reload();
}
