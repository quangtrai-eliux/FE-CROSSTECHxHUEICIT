$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
}
);

$(document).ready(function(){
    $("#logout").click(function(){
      $("#sign-out").fadeToggle("slow");
    });
  });
