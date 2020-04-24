/* 

Function Description

Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

n: the number of steps Gary takes
s: a string describing his path
Input Format

The first line contains an integer , the number of steps in Gary's hike.
The second line contains a single string , of  characters that describe his path.

Constraints

Output Format

Print a single integer that denotes the number of valleys Gary walked through during his hike.

Sample Input

8
UDDDUDUU
Sample Output

1
Explanation

If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

_/\      _
   \    /
    \/\/
He enters and leaves one valley.

*/


//FIRST PASS
function countingValleys(n, s) {
    let count = 0;
    let valleys = 0;
    for(let i = 0; i <= n; i++) {
        if(s[i - 1] === "U") {
            count += 1;
            if(count === 0) {
                valleys ++
            }
        } else if(s[i - 1] === "D") {
            count -= 1;
        }
    }
    return valleys;
}