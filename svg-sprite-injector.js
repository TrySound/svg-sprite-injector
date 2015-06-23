;(function(window, document) {
	'use strict';

	var isSvg = document.createElementNS && document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect;
	var localStorage = 'localStorage' in window && window['localStorage'] !== null ? window.localStorage : false;

	window.svgSpriteInjector = function (filepath, opts) {
		opts = opts || {};

		if(isSvg) {
			injector(filepath, opts);
		} else {
			console.error('svg-sprite-injector require ie9 or greater!')
		}
	};

	function injector(filepath, opts) {
		var name = 'injectedSVGSprite' + filepath,
			revision = opts.revision,
			request;

		// localStorage cache
		if(revision !== undefined && localStorage && localStorage[name + 'Rev'] == revision) {
			return injectOnLoad(localStorage[name]);
		}

		// Async load
		request = new XMLHttpRequest();
		request.open('GET', filepath, true);
		request.onreadystatechange = function (e) {
			var data;

			if(request.readyState === 4 && request.status >= 200 && request.status < 400) {
				injectOnLoad(data = request.responseText);
				if(revision !== undefined && localStorage) {
					localStorage[name] = data;
					localStorage[name + 'Rev'] = revision;
				}
			}
		};
		request.send();
	}

	function injectOnLoad(data) {
		if(data) {
			if(document.body) {
				injectData(data);
			} else {
				document.addEventListener('DOMContentLoaded', injectData.bind(null, data));
			}
		}
	}

	function injectData(data) {
		var body = document.body;
		body.insertAdjacentHTML('afterbegin', data);
		if(body.firstChild.tagName === 'svg') {
			body.firstChild.style.display = 'none';
		}
	}

} (window, document));
