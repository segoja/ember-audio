import { computed } from '@ember/object';
import Sound from './sound';
import { zeroify } from 'ember-audio/utils';

/**
 * A class that represents a "track" of music, similar in concept to a track on
 * a CD or an MP3 player. Provides methods for tracking the play position of the
 * underlying {{#crossLink "AudioBuffer"}}{{/crossLink}}, and pausing/resuming.
 *
 * @public
 * @class Track
 * @extends Sound
 * @todo move play override to _play so that all super.play methods work
 */
const Track = Sound.extend({

  /**
   * Computed property. Value is an object containing the current play position
   * of the audioBuffer in three formats. The three
   * formats are `raw`, `string`, and `pojo`.
   *
   * Play position of 6 minutes would be output as:
   *
   *     {
   *       raw: 360, // seconds
   *       string: '06:00',
   *       pojo: {
   *         minutes: 6,
   *         seconds: 0
   *       }
   *     }
   *
   * @public
   * @property position
   * @type {object}
   */
  position: computed('startOffset', function() {
    const startOffset = this.get('startOffset');
    const minutes = Math.floor(startOffset / 60);
    const seconds = startOffset - (minutes * 60);

    return {
      raw: startOffset,
      string: `${zeroify(minutes)}:${zeroify(seconds)}`,
      pojo: { minutes, seconds }
    };
  }),

  /**
   * Computed property. Value is the current play position of the
   * audioBuffer, formatted as a percentage.
   *
   * @public
   * @property percentPlayed
   * @type {number}
   */
  percentPlayed: computed('duration', 'startOffset', function() {
    const ratio = this.get('startOffset') / this.get('duration.raw');
    return ratio * 100;
  }),

  /**
   * Plays the audio source immediately.
   *
   * @public
   * @method play
   */
  play() {
    this._super();
    this.getNodeFrom('audioSource').onended = () => this.stop();
    this._trackPlayPosition();
  },

  /**
   * Pauses the audio source by stopping without
   * setting startOffset back to 0.
   *
   * @public
   * @method pause
   */
  pause() {
    if (this.get('isPlaying')) {
      const node = this.getNodeFrom('audioSource');

      node.onended = function() {};
      node.stop();
      this.set('isPlaying', false);
    }
  },

  /**
   * Stops the audio source and sets
   * startOffset to 0.
   *
   * @public
   * @method stop
   */
  stop() {
    this.set('startOffset', 0);

    if (this.get('isPlaying')) {
      this.getNodeFrom('audioSource').onended = function() {};
      this._super();
    }
  },

  /**
   * Sets up a `requestAnimationFrame` based loop that updates the
   * startOffset as `audioContext.currentTime` grows.
   * Loop ends when `isPlaying` is false.
   *
   * @method _trackPlayPosition
   * @private
   */
  _trackPlayPosition() {
    const ctx = this.get('audioContext');
    const startOffset = this.get('startOffset');
    const startedPlayingAt = this.get('_startedPlayingAt');

    const animate = () => {
      if (this.get('isPlaying')) {
        this.set('startOffset', startOffset + ctx.currentTime - startedPlayingAt);
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }
});

export default Track;
