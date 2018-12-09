import { TweetPipe } from './tweet.pipe';

describe('TweetPipe', () => {
  it('create an instance', () => {
    const pipe = new TweetPipe(null);
    expect(pipe).toBeTruthy();
  });
});
