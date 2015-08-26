  1. [Introduction](#Introduction.md)
  1. [Getting\_Started](#Getting_Started.md)
  1. [Options](#Options.md)
  1. [Functions](#Functions.md)
  1. [Examples](#Examples.md)


# Introduction #

This plug-in extend Ajax functionality of your web page. It brings the possibility to execute custom and repetitive actions in background of the page, so you can dialog with the server in real time.
It manages a continuous connection with the server. It create a **customizable loop** with an action queue to add some actions and **parse automatically** the XML response of the server to execute your appropriate/custom actions.



# Getting Started #

First of all, we need to initialize the Arte engine:
```
  $.arte(options);
```
If you want to **send some data** in the server on each turn, you can use the 'on\_data\_set' option.
To control the engine, you have to use the start/stop functions
To analyze the received data from the server, three possibilities:
  * use the 'on\_success' option to set the function which will be called after each success of the loop. Use the data argument to manage results.
  * use the auto parsing functions: add\_action/del\_action. It analyzes automatically the xml node given in argument of the 'add\_action' function.
Ex: a server script return an xml file `'...<user>ARTHUR</user>...'` ('...' means the XML file may have something before or after the user tag). A simple call of:
```
  $.arte({...}).add_action("user", function(node){ alert("the result is: " + $(node).text()); })
               .start();
```
  * the last and more powerful way to update in real time an HTML field: using the JQuery selector system. **After having initialized Arte**, just simply type:
```
  $(my_selection_of_html_elements).arte("xml_node");
```
It will use xml return values to update the selected HTML fields.



# Options #

When we call the first time the method $.arte(), we can add some options like **$.arte(options).**

The options must have to be in the following format:
```
$.arte({'option_name_1':value, 'option_name_2': value, ...});
```

We can notice that we can get/set options after the initialization by using the 'get'/'set' method:
```
var new_var = $.arte().get('option_name');
$.arte().set('option_name', new_value);
```

**Here is now the list of available options**

  * **time**
It is an integer
It is the timer tick between each call of the loop

  * **mode**
It can be 'loop' or 'none' (default: 'loop')
It set the engine as a repetitive loop or not.
idea: The 'none' case can be used as a timer custom action (because of the 'time' option)

  * **ajax\_mode**
Can be 'GET' or 'POST'
It is used for the ajax query inside the loop.

  * **ajax\_type**
Same as the ajax type of ajax jquery standard
Most common are 'text' or 'xml'
It set the response type of the ajax request

  * **ajax\_url**
it has to be an url format (like http://google.com, ajax\_code.php or users.xml)
It is the remote file we want to access

  * **no\_cache**
don't work, coming soon

  * **on\_data\_set**
It set the function which will be called before each ajax request to build the arguement string, so this function has to return a string type.
Ex:
```
function set_post_data(){
  return "arg1=" + arg1 + "&arg2=" + arg2;
}
```

  * **on\_success**
It set the function which will be called after the ajax request
Ex:
```
/* From a text response */
function manage_text_result(data){
  alert("Response: " + data);
}

/* From a xml response */
function manage_xml_response(data){
  alert("Response: " + $(data).text() + " (attribut: " + $(data).attr('id'));
}
```

  * **success\_position**
It can be 'before' or 'after' (default 'after')
It put the function on\_success call before or after the custom function list build with 'add\_action' (see the function 'add\_Action' for more information)


# Functions #

We can use some function to manage the background loop. Here's the list:

  * **start**
Used to start the background loop.
Ex:
```
$.arte().start();
```

  * **stop**
Used to stop the background loop.
Ex:
```
$.arte().stop();
```

  * **toogle**
Like JQuery toogle, it alternate automatically start and stop.
Ex:
```
$.arte().toogle();
```

  * **set**
Change an option.
Prototype:
```
$.arte().set('option_name', new_value);
```
Ex:
```
$.arte().set('time', 5000);
```

  * **get**
Get an option value
Prototype:
```
var new_var = $.arte().get('option_name');
```
Ex:
```
var time = $.arte().get('time');
alert("ajax mode : " + $.arte().get('ajax_mode'));
```

  * **add\_action**
In the case of xml mode only, it adds a custom command to parse the xml response.
Prototype:
```
$.arte().add_action('xml_node_path', fct);
```
Ex:
```
$.arte().add_action('image', display);
$.arte().add_action('users user', add_user);
```
In the above example, we may used the following xml response:
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<content>
  <image>image 1</image>
  <users>
    <user>toto</user>
    <user>titi</user>
  </users>
</content>
```

  * **del\_action**
In the case of xml mode only, it deletes a custom command which has been added by 'add\_action'
Prototype:
```
$.arte().del_action('xml_node_path');
```


# Examples #

### Quick Overview ###
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

### More relevant examples ###
  1. basic PHP example [here](http://code.google.com/p/arte/wiki/Example1)
  1. basic XML example [here](http://code.google.com/p/arte/wiki/Example2)
  1. Auto refresh HTML fields [here](http://code.google.com/p/arte/wiki/Example3)
  1. Auto refresh HTML fields even easier [here](http://code.google.com/p/arte/wiki/Example4)