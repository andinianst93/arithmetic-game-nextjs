export const generateRandomMathProblem = (type: string) => {
  switch (type) {
    case 'addition':
      const add1 = Math.floor(Math.random() * 99) + 2;
      const add2 = Math.floor(Math.random() * 99) + 2;
      return { problem: `${add1} + ${add2}`, answer: add1 + add2 };
    case 'subtraction':
      const sub1 = Math.floor(Math.random() * 499) + 99;
      const sub2 = Math.floor(Math.random() * 99) + 2;
      return { problem: `${sub1} - ${sub2}`, answer: sub1 - sub2 };
    case 'multiplication':
      const mul1 = Math.floor(Math.random() * 11) + 2;
      const mul2 = Math.floor(Math.random() * 99) + 2;
      return { problem: `${mul1} x ${mul2}`, answer: mul1 * mul2 };
    case 'division':
      let div1, div2, answer;
      do {
        div1 = Math.floor(Math.random() * 1000) + 1; // div1 between 1 and 1000
        div2 = Math.floor(Math.random() * 11) + 2; // div2 between 2 and 12
        answer = div1 / div2;
      } while (!Number.isInteger(answer)); // Ensure answer is an integer
      
      return { problem: `${div1} / ${div2}`, answer };
    default:
      throw new Error('Invalid problem type');
  }
}
