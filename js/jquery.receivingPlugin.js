;(function($) {

	$.fn.receivingPlugin = function(options) {

		var defaults = {
			text: "default plugin value for text",
			message: "default plugin value for message"
		},
		config,
		pluginName = 'receivingPlugin';

		options = options || {};
		config = $.extend({}, defaults, options);


		/**
		* handle a click event
		* @param {event} e The original click event
		* @param {object} data Additional event data
		* @returns {undefined}
		*/
		var clickHandler = function(e) {

			console.log(pluginName+' says:\n'+config.message);
		};
		
	
		/**
		* initialize a plugin instance
		* @param {jQuery object} obj The element to initialize the plugin on
		* @returns {undefined}
		*/
		var init = function(obj) {
			$(document).on('clicky.sendingPlugin', clickHandler);
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
		if (efcs && efcs.plugins && efcs.plugins.receivingPlugin && efcs.plugins.receivingPlugin.instances) {
			var instances = efcs.plugins.receivingPlugin.instances;
			for (var i=0; i<instances.length; i++) {
				var instance = instances[i];
				$(instance.selector).receivingPlugin(instance.options);
			}
		}
	};
	
	//Initialise all plugin instances on dom ready
	$(document).ready(initPluginInstances);

})(jQuery);