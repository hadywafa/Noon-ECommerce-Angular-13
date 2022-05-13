import { NameStringLengthPipe } from './name-string-length.pipe';

describe('NameStringLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new NameStringLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
