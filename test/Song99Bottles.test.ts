import Song99Bottles from "../src/Song99Bottles";
const Song99BottlesClass = new Song99Bottles();

describe('sample test set', function (): void {

  it('sample test', (): void => {

    var result: boolean = Song99BottlesClass.handle();

    var expected = true;
    expect(result).toBe(expected);
  });

});