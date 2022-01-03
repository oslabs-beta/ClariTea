import subject from '../src2/reducers/renderReducer';


describe('', () => {
  let state;

  beforeEach(() => {
    state = {

    };
  });
  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });
});