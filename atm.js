// As a user, I want to deposit money into one of the bank accounts
// As a user, I want to withdraw money from one of the bank accounts
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// As a user, I want overdraft protection
// What happens when the user wants to withdraw more money from the checking account than is in the account?
// If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)
// Are there ways to refactor your code to make it DRYer or more Object-Oriented?// your code goes here!

// CHECKING
//Checking Account Balance : div class .balance.zero id #checkingBalanceDiv
//Checking Account Input field: id #checkingAmount
//Checking Account Deposit button: id #checkingDepositButton
//Checking Account Withdraw button: id #checkingWithdrawalButton

// SAVINGS
//Savings Account Balance : class balance.zero id #savingsBalanceDiv
//Savings Account Input field: id #savingsAmount
//Savings Account Deposit button: id #savingsDepositButton
//Savings Account Deposit button: id #savingsWithdrawalButton
//
document.getElementById('checkingDepositButton').addEventListener('click', depositChecking);
document.getElementById('checkingWithdrawalButton').addEventListener('click', withdrawalChecking);
document.getElementById('savingsDepositButton').addEventListener('click', depositSavings);
document.getElementById('savingsWithdrawalButton').addEventListener('click', withdrawalSavings);

function depositChecking() {
      var newAmount = parseInt(document.getElementById('checkingBalanceDiv').innerHTML.replace('$','')) + parseInt(document.getElementById('checkingAmount').value);
      document.getElementById('checkingBalanceDiv').innerHTML="$"+newAmount;
}
function withdrawalChecking() {
      var newAmount = parseInt(document.getElementById('checkingBalanceDiv').innerHTML.replace('$','')) - parseInt(document.getElementById('checkingAmount').value);

      if (newAmount<0 && parseInt(document.getElementById('savingsBalanceDiv').innerHTML.replace('$',''))>0) {

          var newNewAmount = (parseInt(document.getElementById('savingsBalanceDiv').innerHTML.replace('$','')) + parseInt(document.getElementById('checkingBalanceDiv').innerHTML.replace('$',''))) - parseInt(document.getElementById('checkingAmount').value);

              if(newNewAmount<0) {
                alert("Your savings balance would be below $0, enter a different amount!");
                return;
              }
              else {
                document.getElementById('checkingBalanceDiv').innerHTML="$0"
                document.getElementById('savingsBalanceDiv').innerHTML="$" + newNewAmount;
                return;
                }
              }

      document.getElementById('checkingBalanceDiv').innerHTML="$"+newAmount;
}

function depositSavings() {
      var newAmount = parseInt(document.getElementById('savingsBalanceDiv').innerHTML.replace('$','')) + parseInt(document.getElementById('savingsAmount').value);
      document.getElementById('savingsBalanceDiv').innerHTML="$"+newAmount;
}

function withdrawalSavings() {
      var newAmount = parseInt(document.getElementById('savingsBalanceDiv').innerHTML.replace('$','')) - parseInt(document.getElementById('savingsAmount').value);

      if (newAmount<0){
        alert("Your savings balance would be below $0, enter a different amount!");
        return;
      }

      document.getElementById('savingsBalanceDiv').innerHTML="$"+newAmount;
}
