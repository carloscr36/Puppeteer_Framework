Feature: Logging in

  Scenario: Login in the page
    Given Im on the right page
    When I fill in the form with my email and password
    Then I should see dashboard page


  @probando
  Scenario Outline: Scenario Outline Login in page
    Given Im on the right page
    When I fill in the form with my <Email> and <Password>
    Then I should see dashboard page

    Examples:
        | Email | Password | 
        | agent | 123456 |
        | agent@phptravels.com | demoagent |
      