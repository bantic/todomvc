/*global Todos, Ember */
'use strict';

Todos.TodosView = Ember.View.extend({
	focusInput: function () {
		this.$('#new-todo').focus();
	}.on('didInsertElement')
});

/* vim: set tabstop=2 softtabstop=2 shiftwidth=2 noexpandtab : */
