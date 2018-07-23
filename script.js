function copyTextToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val('gautier.jousset@epitech.eu').select();
	document.execCommand("copy");
	$temp.remove();
	alert("Copied into clipboard");
}
