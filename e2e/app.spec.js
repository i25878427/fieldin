describe('Testing monitoring screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('screen should have a container', async () => {
    await expect(element(by.id('monitoring'))).toBeVisible();
  });

  it('switch between tab by index', async () => {
    //  await elementById(TestIDs.SWITCH_TAB_BY_INDEX_BTN).tap();
    // await expect(elementByLabel('First Tab')).toBeNotVisible();
    // await expect(elementByLabel('Second Tab')).toBeVisible();
    // await expect(element(by.id('monitoring'))).toBeVisible();
  });



  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
