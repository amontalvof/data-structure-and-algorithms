// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
// The restriction is that the characters in part1 and part2 should be in the same order as in s.
// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.
/*
'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears 
*/

const isMerge = (s, part1, part2) => {
  function inOrder(str, part) {
    var o = -1;
    return part.split("").every(function (c) {
      return (o = str.indexOf(c, o + 1)) !== -1;
    });
  }

  return (
    s.split("").sort().join("") === (part1 + part2).split("").sort().join("") &&
    inOrder(s, part1) &&
    inOrder(s, part2)
  );
};

const s = "codewars";
const part1 = "cwdr";
const part2 = "oeas";
console.log(isMerge(s, part1, part2));
