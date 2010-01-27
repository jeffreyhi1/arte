/*
 * plugin jquery: Ajax Real Time Extension
 *
 * @author arthur.obriot
 * 
 * @version 1.0
 * project site: http://plugins.jquery.com/project/Arte
 * developing website: http://code.google.com/p/arte/
 *
 */

(function() {

	var _config 	= null;
	var _is_started = false;
	var _list_xml_actions = new Array();

	// manage parameters
	// this function test if parameters are not already initialized
	function _manage_parameter(setting) {
		var config = {
			'time':				1000,	// int			Timer tick beetwen each round
			'ajax_mode':		'POST',	// GET|POST		like the jquery ajax data_mode
			'ajax_type':		'text',	// text|xml 	like the jquery ajax data_type
			'ajax_url':			'',		// url of the ajax request
			'on_data_set':		null,	// routine which has to be called before the ajax request (usefull to set ajax parameter). It has to return a string like "arg1=toto&arg2=titi"
			'on_success':		null	// routine(text, xml) which will be called when the loop end a round
		};
		
		// is it the first time we have called arte ?
		if (_config == null)
		{
			// if the user has custom options, update ours
			if (setting)	$.extend(config, setting);
			
			// set the options of configuration as definitly set
			_config = config;
		}
	}
	
	// start the action loop
	function _start()
	{
		if (_is_started == false)
		{
			_is_started = true;
			_launch_loop();
		}
		return this;
	}
	
	// stop the action loop
	function _stop()
	{
		if (_is_started == true)	_is_started = false;
		return this;
	}
	
	// start or stop the action loop, with alternance
	function _toogle()
	{
		if (_is_started == true)
			_is_started = false;
		else
		{
			_is_started = true;
			_launch_loop();
		}
	}
	
	// used to manage parameters after the initialisation of arte
	function _set(key, value)
	{
		if (_config[key])
			_config[key] = value;
		return this;
	}
	
	// main routine, used to execute one round more
	function _launch_loop()
	{
		// verify we are allowed to launch a new round
		if (_is_started == false) return;
		
		// create the next package to send
		var ajax_data = (_config['on_data_set']) ? _config['on_data_set']() : "";
		
		// set the ajax request
		$.ajax({
			type: 		_config['ajax_mode'],
			url: 		_config['ajax_url'],
			data: 		ajax_data,
			dataType: 	_config['ajax_type'],
			success: 	function(data, textStatus){
				if (_config['on_success'])	_config['on_success'](data);
				if (_config['ajax_type']) _execute_custom_xml_actions(data);
			}
		});
		
		// launch automatically a new cycle
		setTimeout("$.arte().launch()", _config['time']);
	}
	
	// this function, which takes the xml response from the ajax query, parse the response
	// to execute user action
	function _execute_custom_xml_actions(data_xml)
	{
		for (i = 0; i < _list_xml_actions.length; i++)
			$(data_xml).find(_list_xml_actions[i].node_name).each(function (){
				if (_list_xml_actions[i].fct)
					_list_xml_actions[i].fct(this);
			});
	}
	
	// this function is used to add a custom action to be executed after a success ajax request
	// 'node_name' is name of the xml node we want to get the value
	// 'fct' the function which will be called if we find this node
	function _add_custom_xml_actions(node_name, fct)
	{
		_list_xml_actions.push(new _XmlItem(node_name, fct));
		return this;
	}

	$.arte = (function (settings)
	{
		// manage parameters
		_manage_parameter(settings);
		
		// make public links with hidden functions
		return {
			start:		_start,
			is_started:	_is_started,
			stop:		_stop,
			toogle:		_toogle,
			set:		_set,
			launch:		_launch_loop,
			add_action:	_add_custom_xml_actions
		};
	});
	
	// the following class is just a container to join a string with a function
	// it will be used for ths xml actions
	function _XmlItem(node_name, fct)
	{
		this.node_name = node_name;
		this.fct = fct;
	}
})(jQuery);