module.exports = function(){
  
  function first_verse(verse) {
    if (verse === 1){
      return `${verse} bottle of beer on the wall, ${verse} bottle of beer.`;
    } else 
      return `${verse} bottles of beer on the wall, ${verse} bottles of beer.`;
  }

  function secound_verse(verse) {
    if (verse === 1) {
      return `Take one down and pass it around, ${verse} bottle of beer on the wall.\n`;
     } else if (verse === 0) {
        return `Take it down and pass it around, no more bottles of beer on the wall.\n`;
     } else {
        return `Take one down and pass it around, ${verse} bottles of beer on the wall.\n`;
        }
  }

  return {
    verse: function(verse){
      return `${first_verse(verse)}\n${secound_verse(verse - 1)}`;
    }
  };
};
