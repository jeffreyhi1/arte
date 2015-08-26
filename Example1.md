**The more simple example we can demonstrate is a field refreshed in real time**.
(you can go to the source tab to download the 'demo' folder which contains the following example)

file ajax.php:
```
<?php
  echo rand();
?>
```

file index.html:
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<title>Demo Arte - simple text</title>
		<script src="../jquery.js" type="text/javascript"></script>
		<script src="../../jquery-plugin-arte.js" type="text/javascript"></script>
		<script type="text/javascript">
			$(document).ready(function(){
				$.arte({'ajax_url':'ajax.php', 'on_success':update_field}).start();
			});
			function update_field(data)
			{
				$("#test").text(data);
			}
		</script>
	</head>
	<body>
		<a href="..">back to the demo index</a>
		<h2>Demo1: Simple text from server</h2>
		<h3>Display every second a random value given by the server</h3>
		<br />
		"number of online users on my website:"<div id="test">0</div>
	</body>
</html>
```