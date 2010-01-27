$(document).ready(function(){
	$.arte({'ajax_url':'test.xml', 'on_success':success}).add_action("users user", crier).add_action("groupes groupe", crier2);
});

function run_test()
{
	$.arte().toogle();
}
var nb = 0;

function success(arg)
{
	nb++;
	$("#test").text(nb);
}

function crier(elt)
{
}
function crier2(elt)
{
}