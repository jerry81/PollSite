Feature: User opens page and sees buttons

    
    Scenario: User sees buttons
      When user opens page
      Then user should see create button
      And user should see refresh button
      When user clicks create button
      Then user should see create panel