$( function() {
    var availableTags = [
     "Usabilidade",
     "UI Pattern",
     "Padrão de interface",
     "IHC",
     "Interface humano computador",
     "IFTM",
     "Sistemas para Internet"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );