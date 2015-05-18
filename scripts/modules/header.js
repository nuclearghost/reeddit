/* global
 $,
 is,
 tappable,
 Menu,
 Posts,
 UI,
 ThemeSwitcher
 */

var Header = (function() {

	let el = {
		subtitle: $('#main-title'),
		subtitleText: $('#sub-title'),
		centerSection: $('#title-head'),
		postTitle: $('#title'),
		icon: $('#header-icon'),
		btnNavBack: $('#nav-back')
	};

	var initListeners = function() {

		tappable(".btn-to-main", {
			onTap: function() {
				location.hash = "#";
			},
			activeClass: 'btn-header--active'
		});

		tappable("#sub-title", {
			onTap: function() {
				if (is.mobile && Posts.areLoading()) {
					return;
				}
				Menu.move(Menu.isShowing() ? UI.Move.LEFT : UI.Move.RIGHT);
			}
		});

		el.icon.on('dblclick', ThemeSwitcher.switchTheme);
	};

	// Exports
	return {
		el: el,
		initListeners: initListeners
	};

})();
