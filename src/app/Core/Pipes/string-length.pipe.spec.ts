import { StringLengthPipe } from './string-length.pipe';

describe('StringLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StringLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
