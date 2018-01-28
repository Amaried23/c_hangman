var Letter = function(lt) {
    
    this.letter = lt;
    
    this.appear = false;

    this.letterRender = function() {
     
        if (this.appear) return " " + this.letter + " ";
        else return ' _ '
       
    };
};

module.exports = Letter;