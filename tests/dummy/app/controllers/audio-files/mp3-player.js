import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  audio: service(),
  selectedTrack: null,
  trackIsLoading: false,

  tracks: [
    {
      name: 'barely-there',
      trackInstance: null,
      description: `I used to play bass and sing ("clean" vocals) in a metalcore
        band called "Bringing Down Broadway" and this is one of our songs.
        This is from like 10 years ago (I'm sooooo oooooollldddd).
        The album is titled, "It's all Gone South", I recorded it myself, and it
        was a commercial falure. I think it's awesome.`,
    },
    {
      name: 'do-wah-diddy',
      trackInstance: null,
      description: `My friend David Denison and I recorded this song in a living
        room with a laptop and a broken logitech PC mic, for fun. This
        is from about 8 years ago (please see comment on "Barely There" about
        being old). David is "rapping" and I'm singing. Please
        keep in mind that this is from a time when "autotune" was in it's
        infancy. Also, "autotune" is for assholes.`,
    },
  ],

  actions: {
    selectTrack(track) {
      const audio = this.audio;

      this.set('selectedTrack', track);
      this.set('trackIsLoading', true);
      audio.pauseAll();

      audio
        .load(`/ember-audio/${track.name}.mp3`)
        .asTrack(track.name)
        .then((trackInstance) => {
          this.set('selectedTrack.trackInstance', trackInstance);
          this.set('trackIsLoading', false);
        });
    },
  },
});
