describe('Testing pests in monitoring screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('search for block 3 and do not show block 4', async () => {
    await element(by.id('searchbar_blocks')).typeText('block 3\n')
    await expect(element(by.id('block_4'))).toBeNotVisible();
  })

  it('search for block 3', async () => {
    await element(by.id('searchbar_blocks')).typeText('block 3\n')
    await expect(element(by.id('block_3'))).toBeVisible();
  })

  it('search for block 4 and alert is not shown', async () => {
    await element(by.id('searchbar_blocks')).typeText('block 4\n')
    await element(by.id('block_4')).tap()
    expect(element(by.label('OK').and(by.type('_UIAlertControllerActionView')))).toBeNotVisible()
  })


  it('search for block 3 and alert is shown', async () => {
    await element(by.id('searchbar_blocks')).typeText('block 3\n')
    await element(by.id('block_3')).tap()
    expect(element(by.text('block 3 was monitored in the last 72 hours').and(by.type('_UIAlertControllerActionView')))).toBeVisible()
  })

});
