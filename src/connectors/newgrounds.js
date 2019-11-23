'use strict';

const globalArtistSelector = '.ng-apg-media-artist';
const globalTrackSelector = '.ng-apg-media-title';
const embeddedArtistSelector = '.item-user h4';
const embeddedTrackSelector = '.pod-head h2';

function setupConnector() {
	if (isEmbeddedPlayer()) {
		setupEmbeddedPlayer();
	} else {
		setupGlobalPlayer();
	}
}

function isEmbeddedPlayer() {
	return $('#audio-listen-player').length > 0;
}

function setupGlobalPlayer() {
	Connector.getArtistTrack = () => {
		let { artist, track } = Util.splitArtistTrack(Util.getTextFromSelectors(globalTrackSelector), '-');

		if (!artist) {
			artist = Util.getTextFromSelectors(globalArtistSelector);
			track = Util.getTextFromSelectors(globalTrackSelector);
		}

		return { artist, track };
	};
	Connector.playerSelector = '#_ngHiddenAudioPlayer';

	Connector.playButtonSelector = '#global-audio-player-play';

	Connector.trackArtSelector = '.ng-apg-media-icon';

	Connector.currentTimeSelector = '#global-audio-player-progress';

	Connector.durationSelector = '#global-audio-player-duration';
}

function setupEmbeddedPlayer() {
	Connector.getArtistTrack = () => {
		let { artist, track } = Util.splitArtistTrack(Util.getTextFromSelectors(embeddedTrackSelector), '-');

		if (!artist) {
			artist = Util.getTextFromSelectors(embeddedArtistSelector);
			track = Util.getTextFromSelectors(embeddedTrackSelector);
		}

		return { artist, track };
	};
	Connector.playerSelector = '#audio-listen-player';

	Connector.playButtonSelector = '#audio-listen-play';

	Connector.currentTimeSelector = '#audio-listen-progress';

	Connector.durationSelector = '#audio-listen-duration';
}

setupConnector();
