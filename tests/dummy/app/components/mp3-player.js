import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import $ from 'jquery';
import Component from '@ember/component';
import layout from '../templates/components/mp3-player';

export default Component.extend({
  layout,

  percentPlayed: computed('track.percentPlayed', function () {
    const percentPlayed = this.get('track.percentPlayed');
    return htmlSafe(`width: ${percentPlayed}%;`);
  }),

  percentGain: computed('track.percentGain', function () {
    const percentGain = this.get('track.percentGain');
    return htmlSafe(`height: ${percentGain}%;`);
  }),

  actions: {
    togglePlay() {
      const track = this.track;

      if (track.get('isPlaying')) {
        track.pause();
      } else {
        track.play();
      }
    },

    seek(e) {
      const width = e.target.offsetParent.offsetWidth;
      const newPosition = e.offsetX / width;
      this.track.seek(newPosition).from('ratio');
    },

    changeVolume(e) {
      const height = e.target.offsetParent.offsetHeight;
      const offset = e.pageY - $(e.target).parent().offset().top;
      const adjustedHeight = height * 0.8;
      const adjustedOffset = offset - (height - adjustedHeight) / 2;
      const newGain = adjustedOffset / adjustedHeight;

      this.track.changeGainTo(newGain).from('inverseRatio');
    },
  },
});
