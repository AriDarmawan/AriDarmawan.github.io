$(document).ready(function () {
	$("#tombolAbout").hide();
	$("#tombolPortfolio").hide();
	$("#tombolResume").hide();

	$("#resume").mouseleave(function(){
		$("#tombolResume").hide();
	})
	$("#resume").mouseenter(function(){
		$("#tombolResume").show();
	})

	$("#about").mouseleave(function(){
		$("#tombolAbout").hide();
	})
	$("#about").mouseenter(function(){
		$("#tombolAbout").show();
	})

	$("#portfolio").mouseleave(function(){
		$("#tombolPortfolio").hide();
	})
	$("#portfolio").mouseenter(function(){
		$("#tombolPortfolio").show();
	})




})

// Auto type text
var kata = "Want to be a Web Programmer ";
var inkata = 0; 
var kecepatanKataMuncul = 120; 

   setInterval(function(){
      var target = $("#target");      
         target.append(kata[inkata]);
      inkata++; 
   }, kecepatanKataMuncul);


// Skills bar
