## Explanations ##

This demo read an XML file in the server, and display users & groups in it.
After each turn, a confirmation popup is launched to be able to stop the loop.

## Sources ##

The xml server side file:
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<content>
	<users>
		<user>toto</user>
		<user>titi</user>
	</users>
	<groupes>
		<groupe>groupe 1</groupe>
		<groupe>groupe 2</groupe>
	</groupes>
</content>
```

The html file:
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Demo Arte - xml file</title>
		<script src="../jquery.js" type="text/javascript"></script>
		<script src="../../jquery-plugin-arte.js" type="text/javascript"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				$.arte({'ajax_url':'test.xml', 'on_success': check_continue}).add_action("users user", fct_1)
				                               				     .add_action("groupes groupe", fct_2)
											     .start();
			});
			
			function fct_1(data){
				alert("new user: " + $(data).text());
			}
			
			function fct_2(data){
				alert("new group: " + $(data).text());
			}
			
			function check_continue(data){
				if (confirm("Do you want to stop the demo loop ?")) $.arte().stop();	
			}
		</script>
	</head>
	<body>
		<a href="..">back to the demo index</a>
		<h2>Demo2: Using a XML formatted file</h2>
        <h3>make some alerts if the xml contains user tags or group tags.
	</body>
</html>
```

(you can get an example in the 'Download' section: dl the [demo.zip](http://arte.googlecode.com/files/demo_arte.zip))