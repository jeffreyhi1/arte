<?php
	header("content-type: application/xml");
?><?xml version="1.0" encoding="ISO-8859-1"?>
<content>
	<tests>
		<test1><?php echo rand(); ?></test1>
		<test2><?php echo time(); ?></test2>
	</tests>
</content>