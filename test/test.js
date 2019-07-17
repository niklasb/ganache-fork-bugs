const Test = artifacts.require('Test');

contract('Test', ([acc1, acc2]) => {
  it('works', async () => {
    const test = await Test.new();
    await test.deploy();
  });
});
