/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var memory = 0;
  var total = 0;
  var calculator = {
    load : _load,
    getTotal : _getTotal,
    add : _add,
    subtract : _subtract,
    multiply : _multiply,
    divide : _divide,
    recallMemory : _recallMemory,
    saveMemory : _saveMemory,
    clearMemory : _clearMemory
  };

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function _load(num) {
    if (validation(num)) {
      total = num;
      return total;
    } else {
      return 'Enter a Number';
    }
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _getTotal() {
    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } num
   */
  function _add(num) {
    if (validation(num)) {
      total += num;
    } else {
      return 'Enter a Number';
    }
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } num
   */
  function _subtract(num) {
    if (validation(num)) {
      total -= num;
    } else {
      return 'Enter a Number';
    }
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } num
   */
  function _multiply(num) {
    if (validation(num)) {
      total *= num;
    } else {
      return 'Enter a Number';
    }
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } num
   */
  function _divide(num) {
    if (validation(num)) {
      total /= num;
    } else {
      return 'Enter a Number';
    }
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function _recallMemory() {
    return memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */
  function _saveMemory() {
    memory = total;
  }


  /**
   * Clear the value stored at `memory`
   */
  function _clearMemory() {
    memory = 0;
  }
  /**
   * Validation
   */
  function validation(num) {
    if ( typeof (num) === 'number' ) {
      return true;
    }
  }

  return calculator;
}