
//Don't bomcbard the API call with multiple calls at once, it will throw an error. Use setTimeout to space out multiple calls


var search = "";
var startyear = "";
var endyear = "";

//numpages determines results pulled from API. Results available in groups of 10, with 0 representing the first 10 results
//numresults defined by user, numpages will be calculated based on how many results are needed
var numresults=0;
var numpages = 0;

function getdata(search, startyear, endyear) {

	var newurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

newurl += '?' + $.param({
  'api-key': "c0949bb3b7884f94a405208d81633cf4",
  'q': search,
  'begin_date': startyear + "0101",
  'end_date': endyear + "0101",
  'page': 0
});

$.ajax({
  url: newurl,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

}

//May need to update id tag calls
$("#go").on("click", function() {

	usersearch = $("#search").val();
	userstart = $("#start").val();
	userend = $("#end").val();
	getdata(usersearch,userstart,userend);


})




