module.exports = function(){
  var pluralize = (bottles) => {
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

  var capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  var first_line = (bottles) => {
    return `${capitalize(pluralize(bottles))} of beer on the wall, ${pluralize(bottles)} of beer.`;
  }

  var second_line = (bottles) => {
    if(bottles == -1){
      return '\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    }
    return `\nTake ${bottles > 0 ? "one" : "it"} down and pass it around, ${pluralize(bottles)} of beer on the wall.\n`;
  }

  var song = (from, to) => {
    var song = '';
    while(from >= to){
      song = song.concat(one_verse(from) + "\n");
      from -= 1;
    }
    return song.trim() + "\n";
  }


  var one_verse = (verse) => {
    return first_line(verse) + second_line(verse - 1);
  }

  return {
    verse: (verse) => {
      return one_verse(verse);
    },
    sing: (from, to=0) => {
      return song(from, to);
    }
  };
};
