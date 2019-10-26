describe('Testing traps in monitoring screen', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
      await element(by.label('traps')).tap()
    });
 
  
    it('search for trap 3 and do not show trap 4', async () => {
        await element(by.id('searchbar_traps')).typeText('trap 3\n')
        await expect(element(by.id('trap_4'))).toBeNotVisible();
      })
    
      it('search for trap 3', async () => {
        await element(by.id('searchbar_traps')).typeText('trap 3\n')
        await expect(element(by.id('trap_3'))).toBeVisible();
      })
    
    
      it('search for trap 3 and alert is shown', async () => {
        await element(by.id('searchbar_traps')).typeText('trap 3\n')
        await element(by.id('trap_3')).tap()
        await expect(element(by.label('OK').and(by.type('_UIAlertControllerActionView')))).toBeVisible()
      })
  });