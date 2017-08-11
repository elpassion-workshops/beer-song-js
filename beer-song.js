module.exports = function(){
  return {
    verse: function(verse){
      return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse - 1} bottles of beer on the wall.\n`;
    }
  };
};
