document.getElementById("name").style.visibility="hidden"

document.querySelector('#form').addEventListener('submit',get)

function get(e){
    document.getElementById("name").style.visibility="visible"
    const recepi = document.querySelector('#exampleInputEmail1').value

 

fetch(`https://recipe-puppy.p.rapidapi.com/?q=${recepi}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
		"x-rapidapi-key": "80e7fc15c5mshfdfdc7106275dbbp1b0d97jsn1035d1e9d040"
	}
})
.then(response => response.json())
.then(data =>{
    console.log(data)

    const {results} = data

    let output = ""
    results.forEach(res => {



        output +=`
        <div class="card">
        <div class="card-body" style="padding-bottom: 0px">
          <h5 class="card-title" style="height:25rem">${res["title"]}</h5>
        </div>
        <br>
        <br>
        <br>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Ingredients:</b> ${res["ingredients"]}</li>
        </ul>
        <div class="body">
          <a href="${res["href"]}" class=" btn-success">Recipe Link</a>
        </div>
        <br>
        <br>
      </div>
        <br>
        <br>

        `    


    })
            
    document.querySelector("#output").innerHTML = output
})
.catch(err => {
	console.log(err);
});

e.preventDefault()
}