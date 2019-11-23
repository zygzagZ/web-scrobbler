'use strict';

Connector.playerSelector = '#player';

Connector.getTrackArt = () => {
	let trackArtUrl = $('#playerBarArt').attr('src');
	if (trackArtUrl) {
		return trackArtUrl.replace('=s90-c-e100', '');
	}

	return null;
};

Connector.artistSelector = '#player-artist';

Connector.trackSelector = '#currently-playing-title';

Connector.albumSelector = '.player-album';

Connector.currentTimeSelector = '#time_container_current';

Connector.durationSelector = '#time_container_duration';

Connector.isPlaying = () => {
	return $('#player *[data-id="play-pause"]').hasClass('playing');
};

Connector.isPodcast = () => $('#player .now-playing-actions').hasClass('podcast');

Connector.isScrobblingAllowed = () => Connector.getArtist() !== 'Subscribe to go ad-free';
