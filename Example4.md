## Explanations ##

This demo is an extension of the Exemple 3.
It call a PHP file to get two custom values: a random integer and the time server value.
On the Client side, the script parse the xml response automatically to refresh new values.

<u>The particularity of this method is that we will using a single call the arte function and will return only one type of xml node.</u>

Here we go:

## Sources ##

The PHP server side file:
```
<?php
	header("content-type: application/xml");
?><?xml version="1.0" encoding="ISO-8859-1"?>
<content>
	<tests>
		<test><?php echo rand(); ?></test>
		<test><?php echo time(); ?></test>
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
					$(".cl_test").arte("tests test");
			});
		</script>
	</head>
	<body>
		<a href="..">back to the demo index</a>
		<h2>Demo3: Using automatically HTML fields selector</h2>
        field 1 (random):
		<div class="cl_test"></div>
		<br>
		field 2 (date time tick):
		<div class="cl_test"></div>
	</body>
</html>
```

**It is more and more easy to use real time function on an HTML page !**

(you can get an example in the 'Download' section: dl the [demo.zip](http://arte.googlecode.com/files/demo_arte.zip))