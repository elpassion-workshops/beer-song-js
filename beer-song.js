module.exports = function(){
  
  var _format = function(number){
    switch(number){
      case 1:
        return number+" bottle"
        break;
      default:
        return number+" bottles"
        break;
    }
  }

  return {
    verse: function(verse){
      return _format(verse) + " of beer on the wall, " + _format(verse) +" of beer.\nTake one down and pass it around, "+_format(verse - 1)+" of beer on the wall.\n"
    }
  };
};
