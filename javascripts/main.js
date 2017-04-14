$(document).ready(function(){

	var explosives = [];

	function writeDom(){
		console.log("explosives", explosives);
		var domString = "";
		for (var i = 0; i < explosives.length; i++) {
			domString += `<h1>${explosives[i].type}</h1>`;
		}
		$("#promises").append(domString);
	}

		

	var firstExplosivesJSON = function() {
		return new Promise(function(resolve, reject) {
			$.ajax("./db/categories.json").done(function(data1){
				resolve(data1.categories);
			}).fail(function(error1){
				reject(error1);
			});
		});	
	};

	var secondExplosiveJSON = function() {
		return new Promise(function(resolve, reject){
			$.ajax("./db/types.json").done(function(data2){
				resolve(data2.types);
			}).fail(function(error2){
				reject(error2);
			});
		});
	};

	var thirdExplosiveJSON = function() {
		return new Promise(function(resolve, reject){
			$.ajax("./db/products.json").done(function(data3){
				resolve(data3.products);
			}).fail(function(error3){
				reject(error3);
			});
		});
	};


Promise.all([firstExplosivesJSON()])
	.then(function(results){
		console.log("results", results);
		results.forEach(function(ajaxCalls){
			ajaxCalls.forEach(function(boom){
				explosives.push(boom);
			})
		})
			writeDom();
	});







});
