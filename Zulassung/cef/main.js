function zulassungClicked(){
	var kennzeichen = document.getElementById("text").value;
	mp.trigger("client:zulassung:zulassung",kennzeichen);
};
