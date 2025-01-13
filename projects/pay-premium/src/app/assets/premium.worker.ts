/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log("Now inside worker!!!");

  setTimeout(() => {
    console.log("Applying 5% discount on premium!!")
    let new_premium = data.premiumAmount - data.premiumAmount * 0.05
    const response = { policyNumber: data.policyNumber, premiumAmount: new_premium }
    postMessage(response);
  }, 5000);

});
