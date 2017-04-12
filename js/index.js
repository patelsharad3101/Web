function fnChangeBorder(index) {
   if(index == 1){
		$('#img1').addClass('zoom');
		$('#img2').removeClass('zoom');
		$('#img3').removeClass('zoom');
	}
	else if(index == 2){
		$('#img2').addClass('zoom');
		$('#img1').removeClass('zoom');
		$('#img3').removeClass('zoom');
	}
	else if(index == 3){
		$('#img3').addClass('zoom');
		$('#img2').removeClass('zoom');
		$('#img1').removeClass('zoom');
	} 
}
function change_title(option){
	if (option == 1) {
		document.getElementById("demo").innerHTML ="<strong>Option A</strong>";
	}
	else if (option == 2) {
		document.getElementById("demo").innerHTML ="<strong>Option B</strong>";
	}
	else if(option == 3){
		document.getElementById("demo").innerHTML ="<strong>Option C</strong>";
	}
	

}

function change_button_color(btn_num) {
	if (btn_num == 1) {
		$("#button1").addClass("btnChange");
		$("#button2").removeClass("btnChange");
		$("#button3").removeClass("btnChange");
	}
	if (btn_num == 2) {
		$("#button2").addClass("btnChange");
		$("#button1").removeClass("btnChange");
		$("#button3").removeClass("btnChange");
	}
	if (btn_num == 3) {
		$("#button3").addClass("btnChange");
		$("#button1").removeClass("btnChange");
		$("#button2").removeClass("btnChange");
	}
}