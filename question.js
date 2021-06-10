const myQuestions = [
  {
    id: 1,
    question: `What's the output?
    <code>
    function a(x) {
    x++;
    return function () {
      console.log(++x);
    };
  }
  
  a(1)();
  a(1)();
  a(1)();
  
  let x = a(1);
  x();
  x();
  x();
  </code>`,
    answers: {
      a: "1, 2, 3 and 1, 2, 3",
      b: "3, 3, 3 and 3, 4, 5",
      c: "3, 3, 3 and 1, 2, 3",
      d: "1, 2, 3 and 3, 3, 3",
    },
    correctAnswer: "b",
    userAnswer: null,
  },
  {
    id: 2,
    question: `What's the output?
 <code>
 function Name(a, b) {
  this.a = a;
  this.b = b;
}

const me = Name("Vuong", "Nguyen");

console.log(!(a.length - window.a.length));
</code>`,
    answers: {
      a: "undefined",
      b: "NaN",
      c: "true",
      d: "false",
    },
    correctAnswer: "c",
    userAnswer: null,
  },
  {
    id: 3,
    question: `What's the output?
    <code>
const x = function (...x) {
let k = (typeof x).length;
let y = () => "freetut".length;
let z = { y: y };

return k - z.y();
};

console.log(Boolean(x()));
</code>`,
    answers: {
      a: "true",
      b: 1,
      c: -1,
      d: "false",
    },
    correctAnswer: "a",
    userAnswer: null,
  },
  {
    id: 4,
    question: `What's the output?
    <code>
(function js(x) {
  const y = (j) => j * x;

  console.log(y(s()));

  function s() {
    return j();
  }

  function j() {
    return x ** x;
  }
})(3);
</code>`,
    answers: {
      a: "undefined",
      b: 18,
      c: 81,
      d: 12,
    },
    correctAnswer: "c",
    userAnswer: null,
  },
  {
    id: 5,
    question: `What's the output?
    <code>
var tip = 100;

(function () {
  console.log("I have $" + husband());

  function wife() {
    return tip * 2;
  }

  function husband() {
    return wife() / 2;
  }

  var tip = 10;
})();
</code>`,
    answers: {
      a: "I have $10",
      b: "I have $100",
      c: "I have $50",
      d: "I have $NaN",
    },
    correctAnswer: "d",
    userAnswer: null,
  },
];
