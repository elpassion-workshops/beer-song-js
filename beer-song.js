module.exports = function(){
  var first_line = function(bottles){
    return `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`;
  }

  var second_line = function(bottles){
    var bottles_pluralized = bottles > 1 ? "bottles" : "bottle"
    return `\nTake one down and pass it around, ${bottles} ${bottles_pluralized} of beer on the wall.\n`;
  }

  return {
    verse: function(verse){
      return first_line(verse) + second_line(verse - 1);
    }
  };
};
