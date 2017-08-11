module.exports = function(){
  
  var _format = function(number){
    switch(number){
      case 1:
        return number+" bottle"
      default:
        return number+" bottles"
    }
  }

  var _first_verse = function(number){
    return _format(number) + " of beer on the wall, " + _format(number) +" of beer.\n"
  }

  var _last_verse = function(number){
    switch(number){
      case 1:
        return "Take it down and pass it around, no more bottles of beer on the wall.\n"
      default:
        return "Take one down and pass it around, "+_format(number - 1)+" of beer on the wall.\n"
    }
  }

  return {
    verse: function(verse){
      return _first_verse(verse) + _last_verse(verse)
    }
  };
};
