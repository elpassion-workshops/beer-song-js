module.exports = function(){
  var pluralize = function(bottles){
    var bottles_pluralized;
    switch(bottles){
      case 0:
        bottles_pluralized = "no more bottles";
        break;
      case 1:
        bottles_pluralized = "1 bottle";
        break;
      default:
        bottles_pluralized = `${bottles} bottles`;
    }
    return bottles_pluralized;
  }

  var first_line = function(bottles){
    return `${pluralize(bottles)} of beer on the wall, ${pluralize(bottles)} of beer.`;
  }

  var second_line = function(bottles){
    return `\nTake ${bottles > 0 ? "one" : "it"} down and pass it around, ${pluralize(bottles)} of beer on the wall.\n`;
  }

  return {
    verse: function(verse){
      return first_line(verse) + second_line(verse - 1);
    }
  };
};
