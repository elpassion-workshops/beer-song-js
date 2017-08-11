module.exports = function(){
	function format(verse) {
		if (verse == 1) {
			return `${verse} bottle`;
		} else {
			return `${verse} bottles`;
		}
	}

  return {
    verse: function(verse){
      return `${verse} bottles of beer on the wall, ${verse} bottles of beer.\nTake one down and pass it around, ${format(verse - 1)} of beer on the wall.\n`;
    }
  };
};
