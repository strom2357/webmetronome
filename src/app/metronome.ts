export class Metronome {
  bpm: number;
  running: boolean = false;
  // TODO:
  // [] add volume/silent mode
  // [] accommodate different time signatures
  // [] accommodate accent on different beats

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
