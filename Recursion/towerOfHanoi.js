// Rules we should follow 
// a)  toh(1, a, b, c) if one disk ==>move from a to c
// b)  toh(2, a, b, c) if two disks ==> call toh(1, a, c, b) move first disk from a to b , second disk from a to c , then call toh(1,b,a,c)
// c)  toh(3, a, b, c) if three disks ==>
//           first step ===> we need this structure of the disks
//                :first:          : :      : :         : :
//                :second: ====>>> : :      :first:     : :
//                :third:          : :      :second:    :third:
//                   A             A          B          C
// move first to A, second to C, finally first from A to C 
// This is realized like in case b) toh(2, b, a, c);

function toh(n, a, b, c) {
  if (n > 0) {
    toh(n - 1, a, c, b);
    console.log(`Move disk from ${a} to ${c}`);
    toh(n - 1, b, a, c);
  }
}

toh(3, "A", "B", "C");
