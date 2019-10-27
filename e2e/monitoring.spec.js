describe('Testing monitoring screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('screen should have a container', async () => {
    await expect(element(by.id('monitoring'))).toBeVisible();
  });
  it('switch between tabs', async () => {
    await element(by.label('traps')).tap()
    await expect(element(by.text('trap 1'))).toBeVisible();
  });
});
