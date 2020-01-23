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

/*function catNames(catArray) {
    for (var i = 0; i < cats.length; i++) {
        console.log(cats[i].name);
    }
}*/

/*catNames(cats);*/


// Question 8
/* Using the function and cats variable from the above question, 
   instead of logging the name property, wrap each name property 
   in an h5 tag, add it to a variable you declare before the 
   loop and return the variable from the function after the loop.
   The function should return the following:
   <h5>Blob</h5>
   <h5>Harold</h5>
   <h5>Blurt</h5>*/

function catNames(catArray) {
    let name = "";

    for (let i = 0; i < cats.length; i++) {
         name += `<h5>${cats[i].name}</h5>`;
    }

    return name;
}




   function catNames() {
       const name = "<h5>" + cats[i].name + "</h5>";

       for (let i = 0; i < cats.length; i++) {
           console.log(name);
       }

       return name;
   }




for (let i = 0; i < cats.length; i++) {
    const name = "<h5>" + cats[i].name + "</h5>";
    console.log(name);
}






    
    


// Question 10
/* Using the function from question 8, add a p element 
   containing the age property from each object. If the age 
   property is missing, it should display Age unknown instead.
   Wrap the h5 and p in a div.
   The function should return the following:
    <div>
        <h5>Blob</h5>
        <p>10</p>
    </div>
    <div>
        <h5>Harold</h5>
        <p>Age unknown</p>
    </div>
    <div>
        <h5>Blurt</h5>
        <p>21</p>
    </div> */


/*for (let i = 0; i < cats.length; i++) {
    let ageValue = "Age unknown";
    if (cats[i].age) {
        ageValue = cats[i].age;
    }




    const nameAndAge = `<div>              
                        <h5>${cats[i].name}</h5>
                        <p>${cats[i].age}</p>                                  
                </div>`;
    newHTML += nameAndAge;




} */


