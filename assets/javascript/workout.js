

var eng = [];
var id = 0;
var queryURL = 'https://wger.de/api/v2/exercise/?format=json'
var size = 0;



console.log("workouts loaded");
function workout() {

    console.log("workouts query");
    
    for (let i = 1; i<2; i++)
    {
        GetMyResourceData(queryURL)
        var res = queryURL.substring(0, 44) + "&page="+i;
        queryURL = res;
    }

    function GetMyResourceData(queryURL){

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            for (i = 0; i<20; i++)
            {
                if(response.results[i].language === 2)
                    { 
                        id++
                        eng[id] = new Object;
                        eng[id].language = response.results[i].language;
                        eng[id].name = response.results[i].name;
                        eng[id].id = response.results[i].id;
                        eng[id].description = response.results[i].description;
                        eng[id].category = response.results[i].category;
                    }     
            }
        });

    }
}

function searchWorkout(){

console.log(eng[1])

}



