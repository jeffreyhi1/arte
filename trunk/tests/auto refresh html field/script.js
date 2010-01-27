$(document).ready(function(){
	$.arte({'ajax_url':'ajax.php', 'on_success':update_tick, 'ajax_type':'xml'});
	$("#test1").arte("tests test1");
	$("#test2").arte("tests test2");
});

function run_test()
{
	$.arte().toogle();
}

var tick = 0;
function update_tick(data)
{
	tick++;
	$("#test").text(tick);
	$("#test_nb").text($.arte().get("nb_elt"));
}