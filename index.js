// Code your solutions in this file
// helpers.js
function writeCards(names, event) {
    return names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Export functions for testing
  module.exports = {
    writeCards,
    countDown,
  };
  