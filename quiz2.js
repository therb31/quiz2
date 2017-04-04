
$(document).ready(function(){
  $("#dialog").click(function(){
    $("#dialog1").dialog({
      modal:true
    });
  });
});

/*console log usually used for debugging purposes..not sure how else to use stylistically so I added
a different JS function

$(document).ready(function(){
console.log('welocme to quiz town, population...YOU!'){
};
};

moved transition for dynamic to css file
@('.dynamic').hmtl('<div p>HI THERE, I\'M FROM JAVASCRIPT</p></div>').fadeIn('slo')
