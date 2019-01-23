$(document).ready(function(){
  $("#fortuneSurvey").submit(function(event){
    event.preventDefault();

    var goodOmens = [];
    var badOmens = [];
    var superBadOmens = [];

    $("input:checkbox[name=luck]:checked").each(function(){
      var luckInput = $(this).val();
      goodOmens.push(luckInput);
    });


    $("input:checkbox[name=omen]:checked").each(function(){
      var omenInput = $(this).val();
      badOmens.push(omenInput);
    });


    $("input:checkbox[name=wildcard]:checked").each(function(){
      var wildcardInput = $(this).val();
      superBadOmens.push(wildcardInput);
    });

  if (superBadOmens.length > 1 || goodOmens.length === badOmens.length) {
    $("#wildcardResult").show();
    $("#fortuneSurvey").hide();
  } else if (goodOmens.length > badOmens.length) {
    $("#luckResult").show();
    $("#fortuneSurvey").hide();
  } else {
    $("#omenResult").show();
    $("#fortuneSurvey").hide();
  }

  });
});
