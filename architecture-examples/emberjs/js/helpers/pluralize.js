/*global Todos, Ember */
'use strict';

Ember.Handlebars.helper('pluralize', function (singular, count) {
	var text = singular,
			/* From Ember-Data */
			inflector = new Ember.Inflector(Ember.Inflector.defaultRules);

	if (count !== 1) {
		text = inflector.pluralize(singular);
	}

	return text;
});

/* vim: set tabstop=2 softtabstop=2 shiftwidth=2 noexpandtab : */
