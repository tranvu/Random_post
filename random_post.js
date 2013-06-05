var rdp_numposts=2;
var rdp_snippet_length=60;
var rdp_info='no';
var rdp_comment='Comment';
var rdp_disable='';
var rdp_current=[];var rdp_total_posts=0;var rdp_current=new Array(rdp_numposts);function totalposts(json){rdp_total_posts=json.feed.openSearch$totalResults.$t}document.write('<script type=\"text/javascript\" src="/feeds/posts/default?alt=json-in-script&max-results=0&callback=totalposts\"><\/script>');function getvalue(){for(var i=0;i<rdp_numposts;i++){var found=false;var rndValue=get_random();for(var j=0;j<rdp_current.length;j++){if(rdp_current[j]==rndValue){found=true;break}};if(found){i--}else{rdp_current[i]=rndValue}}};function get_random(){var ranNum=1+Math.round(Math.random()*(rdp_total_posts-1));return ranNum};
