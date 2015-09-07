

var Core = {

    init: function() {
        
        this.createNames();
        this.createNamesOnChange();

    },

    createNames: function() {
        
        var cssAttr = $('select.cssAttr option:selected').val();
        var rank = $('select.rank option:selected').val();
        var emotion = $('select.emotion option:selected').val();
        var state = $('select.state option:selected').val();
        var type = $('select.type option:selected').val();

        // console.log(cssAttr);
        // console.log(rank);
        // console.log(emotion);
        // console.log(state);
        // console.log(type);

        $('.semanticName h2').html(cssAttr + 'For' + rank + emotion + state + type);    

    }, 

    createNamesOnChange: function() {
        $( ".watch" ).change(function() {
            Core.createNames();
        });
    }

}