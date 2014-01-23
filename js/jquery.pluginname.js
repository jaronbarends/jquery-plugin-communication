;(function($) {

	$.fn.pluginName = function(options) {

		var defaults = {
			text: "default plugin value for text",
			message: "default plugin value for message"
		},
		config,
		pluginName = 'pluginNumberOne';

		options = options || {};
		config = $.extend({}, defaults, options);


		/**
		* handle a click event
		* @param {event} e The original click event
		* @param {object} data Additional event data
		* @returns {undefined}
		*/
		var clickHandler = function(e) {
			e.preventDefault();

			var eventName = 'click.'+pluginName,
				data = {
				message: config.message
			};

			$(document).trigger(eventName, data);

			console.log(pluginName+' says:\n'+config.message);
		};
		
	
		/**
		* initialize a plugin instance
		* @param {jQuery object} obj The element to initialize the plugin on
		* @returns {undefined}
		*/
		var init = function(obj) {
			$(obj).html(config.text+' <a href="#">click me!</a>')
				.on('click', 'a', clickHandler);
		};
		
		//do stuff with every element of the wrapped set, and return the set for chaining
		return this.each(function() {
			init(this);
		});

	};
	//End of plugin definition


	/**
	* initialize all plugin instances
	* @returns {undefined}
	*/
	var initPluginInstances = function() {
		var efcs = window.EFCS;
		if (efcs && efcs.plugins && efcs.plugins.pluginName && efcs.plugins.pluginName.instances) {
			var instances = efcs.plugins.pluginName.instances;
			for (var i=0; i<instances.length; i++) {
				var instance = instances[i];
				$(instance.selector).pluginName(instance.options);
			}
		}
	};
	
	//Initialise all plugin instances on dom ready
	$(document).ready(initPluginInstances);

})(jQuery);