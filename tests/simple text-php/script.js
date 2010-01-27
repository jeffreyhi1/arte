$(document).ready(function(){
	$.arte({'ajax_url':'ajax.php', 'on_data_set':set_post_data, 'on_success':success});
});

function run_test()
{
	$.arte().toogle();
}
var nb = 0;

function set_post_data()
{
	nb++;
	return "arg="+nb;
}

function success(arg)
{
	$("#test").html("current nb: " + nb + "<br>ajax result: " + arg);
}