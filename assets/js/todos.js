
$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});




$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete 

$("ul").on("click", "span", function(evt){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	evt.stopPropagation();
});


$("input[type = 'text']").keypress(function(evt){
	if(evt.which === 13){
		// grabbing new todo text that was entered 
		var todoText = $(this).val();
		// empty the input after hitting enter
		$(this).val("");
		// create a new li to the ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>"); 
	} 
});

