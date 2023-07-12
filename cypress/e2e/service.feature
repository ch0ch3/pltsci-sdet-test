Feature: Cleaning Sessions

  Scenario: Perform a cleaning session and verify the result
    Given the room size is [5, 5]
    And the hoover is initially at [1, 2]
    And there are patches of dirt at [[1, 0], [2, 2], [2, 3]]
    When the hoover follows the instructions "NNESEESWNWW"
    Then the final coordinates should be [1, 3]
    And the number of cleaned patches should be 1

  Scenario: Test for potential bugs or defects
    Given the room size is [5, 5]
    And the hoover is initially at [1, 2]
    And there are patches of dirt at [[1, 0], [2, 2], [2, 3]]
    When the hoover follows the instructions "ABCDE"
    Then the final coordinates should be [1, 2]
    And the number of cleaned patches should be 0
