const eu_steden_title = $(".eu_steden-item_title");
const eu_steden_content = $(".eu_steden_content")

eu_steden_title.click(function(){
  const this_title = $(this);
  const this_content = $(this).parent().find(eu_steden_content);
  this_content.slideToggle();
  eu_steden_content.not(this_content).slideUp();
});

$(document).ready(function() {
$("#verberg").click(function() {
$("p").hide();
});
$("#toon").click(function() {
$("p").show();
});
});
