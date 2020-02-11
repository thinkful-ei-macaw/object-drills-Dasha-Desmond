const loaf = {
    flour: 300,
    water: 210,
};
    
    hydration() {
        console.log((loaf.flour / loaf.water) * 100);
    }
hydration();

const myObject = {
    foo: 'foo',
    bar: 'bar',
    fum: 'fum',
    quux: 'quux',
    spam: 'spam',
};
for (const key in myObject) {
    console.log(key);
};

let meals=['breakfast', 
'second breakfast',
'elevenses',
'lunch',
'afternoon tea', 
'dinner',
'supper'] 
console.log(meals[3]);

const personOne = [{
    name: 'Bishwash',
    jobTitle: 'technical coach'
}
const personTwo = {
    name: 'bob',
    jobTitle: 'bus driver'
}
const personThree = {
    name: 'Sally',
    jobTitle: 'Student'
};]

const myArray = [
    {
      name: 'bishwash',
      jobTitle: 'technical coach'
    },
  {
      name: 'bob',
      jobTitle: 'bus driver'
    },
    {
      name: 'Sally',
      jobTitle: 'student'
    },
  ];
  
  myArray.forEach((name, jobTitle) => {
      console.log(name); 
      console.log(jobTitle);
  });
