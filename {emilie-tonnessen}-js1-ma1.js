//  QUESTION 1
    const cat = {
        complain: function(){
            console.log("Meow!");
        }
    };


//  QUESTION 2
    document.querySelector("h3");

    const heading = document.querySelector("h3");
    console.dir(heading);


//  QUESTION 3
    heading.style.fontSize = "2em";


//  QUESTION 4
    heading.classList.add("subheading");


//  QUESTION 5
    const paragraphs = document.querySelectorAll("p");


//  QUESTION 6
    const resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = `<p>
                                New paragraph
                                 </p>`;


//  QUESTION 7
    const cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold",
        },
        {
            name: "Blurt",
            age: 21
        }
    ]; 

    function catNames(catArray) {
        for (let i = 0; i < catArray.length; i++) {
            console.log(catArray[i].name);
        }
    }

    catNames(cats);


//  QUESTION 8
    function catNames(catArray) {
        let newCatHTML = "";

        for (let i = 0; i < catArray.length; i++) {
            newCatHTML += `<h5>${catArray[i].name}</h5>\n`;
        }

        return newCatHTML;
    }

    
//  QUESTION 9
    resultsContainer.innerHTML = catNames(cats);


//  QUESTION 10
    function catNames(catArray) {
        let newCatHTML = "";

        for (let i = 0; i < catArray.length; i++) {
            let ageValue = "Age unknown";
            if (catArray[i].age) {
                ageValue = catArray[i].age;
            }

            const nameAndAge = `<div>             
                            <h5>${catArray[i].name}</h5>
                            <p>${ageValue}</p>                                  
                    </div>\n`;
            newCatHTML += nameAndAge;
        }

        return newCatHTML;
    }

 

