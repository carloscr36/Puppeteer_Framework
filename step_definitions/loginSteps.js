const { I, loginPage } = inject();
// Add in your custom step files

Given('Im on the right page', () => {
  loginPage.visit()
});

/* de esta forma se puede hacer mas manual 
When('I fill in the form with my email and password', () => {
  loginPage.login('agent@phptravels.com', 'demoagent')
});
 */
// de esta forma para usar data driven
When(/^I fill in the form with my (.*) and (.*)$/, (email, password) => {
    loginPage.login(email, password)
});

Then('I should see dashboard page', () => {
    loginPage.validateLogin()
});