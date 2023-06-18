const init = () => {
   
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");
        console.log(input.value);

        //Fetch Method wait for movie id to be returned and fetch
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            //Create Movie object
          const title =  document.querySelector("#movieDetails h4");
          const description =  document.querySelector("#movieDetails p");
//Displays Movie on fetch Id
          title.innerText = data.title;
          p.innerText = data.description;
        });
      }); 

  };
  
  document.addEventListener("DOMContentLoaded", init);