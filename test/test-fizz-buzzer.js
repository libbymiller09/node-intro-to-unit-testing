// import chai, declare expect variable
const expect = require('chai').expect;

// import fizz-buzz
const fizzBuzzer = require('../fizzBuzzer');

//divisible by 15 = fizzbuzz
describe('fizzBuzzer', function() {
  it('should show if divisible by 15', function() {
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

//divisible by 5 = buzz
  it('should show if divisible by 5', function() {
    [5, 10].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  })

//divisible by 3 = fizz
  it('should show if divisible by 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

//not divisible by any = num
  it('should show if divisible by 5', function() {
    [1, 2, 4, 7, 11, 13].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

//edge case
  it('should raise an error if args are not numbers', function() {
    const badInputs = [
      ['b'],
      ['false']
    ];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});

