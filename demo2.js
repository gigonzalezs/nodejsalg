/**
 * @param {string} string1
 * @param {string} string2
 * @return {string}
 */
 export default function (string1, string2) {
    
    const s1 = [...string1];
  
    let matchFound = false;
    let lastMatch = {
      value: '',
      length: 0
    };
    let matches = [];

    for (let pos = 0; pos < s1.length; pos += 1) {
      
      let matchedPos = string2.indexOf(s1[pos]);
      
      if(matchedPos >= 0) {
        matchFound = true;
        lastMatch.value = lastMatch.value + s1[pos];
        lastMatch.length = lastMatch.value.length;
      } else {
        matchFound = false;
        matches.push(lastMatch);
        lastMatch = {
          value: '',
          length: 0
        };
      }
    }
    matches.push(lastMatch);

    if (matches.length > 0){
      matches.sort((a,b) => a.length > b.length ? -1 : 0);
      return matches[0].value;
    } else 
    return '';
  }

  