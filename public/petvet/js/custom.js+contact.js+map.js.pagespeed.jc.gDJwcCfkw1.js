var mod_pagespeed_OFpQ46Wcku = "(function($){\"use strict\";$(window).load(function(){$('#loader').delay(300).fadeOut('slow');$('#loader-container').delay(200).fadeOut('slow');$('body').delay(300).css({'overflow':'visible'});})\nnew WOW({boxClass:'wow',animateClass:'animated',offset:0,mobile:true,live:true}).init();$('body').tooltip({selector:\"[data-tooltip=tooltip]\",container:\"body\"});$('#owl-team').owlCarousel({loop:true,margin:30,nav:true,dots:false,responsive:{0:{items:1},600:{items:2},1000:{items:4}}})\n$(\".rotate\").textrotator({animation:\"fade\",speed:1000});function toggleChevron(e){$(e.target).prev('.panel-heading').find(\"i.indicator\").toggleClass('fa-minus fa-plus');}$('#accordion').bind('hidden.bs.collapse',toggleChevron);$('#accordion').bind('shown.bs.collapse',toggleChevron);$(\".js-height-full\").height($(window).height());$(\".js-height-parent\").each(function(){$(this).height($(this).parent().first().height());});$('#quote-carousel').carousel({pause:true,interval:4000,});})(jQuery);";
var mod_pagespeed_dE_1WRKGcf = "jQuery(document).ready(function(){$(\"#contactform\").submit(function(){var e=$(this).attr(\"action\");return $(\"#message\").slideUp(750,function(){$(\"#message\").hide(),$(\"#submit\").after('<img src=\"images/loading.gif\" class=\"loader\" />').attr(\"disabled\",\"disabled\"),$.post(e,{name:$(\"#name\").val(),email:$(\"#email\").val(),comments:$(\"#comments\").val(),verify:$(\"#verify\").val()},function(e){document.getElementById(\"message\").innerHTML=e,$(\"#message\").slideDown(\"slow\"),$(\"#contactform img.loader\").fadeOut(\"slow\",function(){$(this).remove()}),$(\"#submit\").removeAttr(\"disabled\"),null!=e.match(\"success\")&&$(\"#contactform\").slideUp(\"slow\")})}),!1})});";
var mod_pagespeed_9GFjDb6KwW = "(function($){\"use strict\";var locations=[['<div class=\"infobox\"><h3 class=\"title\"><a href=\"about1.html\">OUR USA OFFICE</a></h3><span>NEW YORK CITY 2045 / 65</span><br>+90 555 666 77 88</p></div></div></div>',-37.801578,145.060508,2]];var map=new google.maps.Map(document.getElementById('map'),{zoom:13,scrollwheel:false,navigationControl:true,mapTypeControl:false,scaleControl:false,draggable:true,center:new google.maps.LatLng(-37.801578,145.060508),mapTypeId:google.maps.MapTypeId.ROADMAP});var infowindow=new google.maps.InfoWindow();var marker,i;for(i=0;i<locations.length;i++){marker=new google.maps.Marker({position:new google.maps.LatLng(locations[i][1],locations[i][2]),map:map,icon:'images/marker.png'});google.maps.event.addListener(marker,'click',(function(marker,i){return function(){infowindow.setContent(locations[i][0]);infowindow.open(map,marker);}})(marker,i));}})(jQuery);"