import L from 'leaflet';

export default function(selector) {
	const mapContainer;
	function init(selector) {
		mapContainer = document.querySelector(selector);
		if (!mapContainer) {
			return;
		}
		mapContainer.innerText = 'hello world';
	}

	init(selector);
}
