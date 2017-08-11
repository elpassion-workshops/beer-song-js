module.exports = function(){
  return {


    verse: function(verse){
      switch(verse) {
        case 2:
          return "2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n";
          break;
        default:
          return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${verse - 1} bottles of beer on the wall.\n`
      }
    }
  };
};
