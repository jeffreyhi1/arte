# Introduction #
This project is a plug-in for the JQuery library. http://arte.googlecode.com/files/jquery_logo.PNG

This plug-in extend Ajax functionality of your web page. It brings the possibility to execute custom and repetitive actions in background of the page, so you can dialog with the server in real time.
It manages a continuous connection with the server. It create a **customizable loop** with an action queue to add some actions and **parse automatically** the XML response of the server to execute your appropriate/custom actions.
Some interesting examples/ideas which can now be made easily:

  * Sessions management (warn when session will expire, auto reload it)
  * Add a simple chat
  * Display message when a user receives a new mp

And all of this in real time
Doing a extended website with Ajax has never been such easier.

For explanations to use it, please visit the [wiki\_pages](http://code.google.com/p/arte/wiki/Index)
All those who want to participate are welcome. Else, thank to leave a comment or suggestion.

# Current Version : 1.6 #

# Quick Overview #
To refresh automatically an html field, just type:
```
/* init the arte engine */
$.arte({'ajax_url':'remote_xml_file_url', 'ajax_type':'xml'});

/* add an auto refresh on the 'html_element' */
$("html_element").arte("xml_node");
```

To receive some custom value in real time, just type:
```
/* init the arte engine */
$.arte({'ajax_url':'remote_xml_file_url'}).add_action("xml_node", my_fct);

/* the function which will be called every tick with the new node */
function my_fct(data){
  alert("voila la valeur du noeud: " + $(data).text());
}
```