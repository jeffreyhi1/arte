## Explanations ##

This demo call a PHP file to get two different values: a random integer, and the time.
Then, we get this two value by auto parsing the xml result.

## Sources ##

The PHP server side file:
```
<?php
	header("content-type: application/xml");
?><?xml version="1.0" encoding="ISO-8859-1"?>
<content>
	<tests>
		<test1><?php echo rand(); ?></test1>
		<test2><?php echo time(); ?></test2>
	</tests>
</content>
```

The html file:
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Demo Arte - html auto refresh</title>
		<script src="../jquery.js" type="text/javascript"></script>
		<script src="../../jquery-plugin-arte.js" type="text/javascript"></script>
		<script type="text/javascript">
			$(document).ready(function(){
					$.arte({'ajax_url':'ajax.php', 'ajax_type':'xml'}).start();
					$("#test1").arte("tests test1");
					$("#test2").arte("tests test2");
			});
		</script>
	</head>
	<body>
		<a href="..">back to the demo index</a>
		<h2>Demo3: Using automatically HTML fields selector</h2>
        field 1 (random):
		<div id="test1"></div>
		<br>
		field 2 (date time tick):
		<div id="test2"></div>
	</body>
</html>
```

(you can get an example in the 'Download' section: dl the [demo.zip](http://arte.googlecode.com/files/demo_arte.zip))