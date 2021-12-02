//check off specific todos by clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete todos
$("ul").on("click", "span", function(event){
	//clicked on this
	$(this).parent().fadeOut(500, function(){
		//the parent this i.e the li not the span
		$(this).remove();
	});
	event.stopPropagation();
});


//entering into input for new todo
$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//grabbing text from input
		var todoText = $(this).val();
		$(this).val = ("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
});

$(".fa-edit").click(function() {
	$("input[type='text']").fadeToggle();
});