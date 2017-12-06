// JavaScript Document
var glossy = function(){
	$(".glossy, .glossy-button").each(function(){
		$(this).attr("dataText",$(this).text());
	});
	$(".glossy-block").each(function(){
		$(this).html('<div class="glossy-insert">'+$(this).html()+'</div>');
	});
}
$(document).ready(function(){
	glossy();
});