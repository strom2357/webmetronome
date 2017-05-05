import {Metronome} from './metronome';

describe('Metronome', () => {
  it('should create an instance', () => {
    expect(new Metronome()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let metronome = new Metronome({
      bpm: 60,
    });
    expect(metronome.bpm).toEqual(60);
    expect(metronome.running).toEqual(false);
  });
});
