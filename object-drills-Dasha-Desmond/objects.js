function createMyObject() 
{return
    { foo: 'bar', 
    answerToUniverse: 42, 
    'olly olly': 'oxen free', 
    
    sayHello: function()
    { return 'hello'; } }

function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.bang = 'bang';
      
   return (obj)
      };

      function personMaker() {
        var person = {
        firstName: "Paul",
        lastName : "Jones",
        id       : 5566,
        fullName : function() {
          return `${this.firstName} ${this.lastName}`;
        }
      };
      return person;}

      const sampleObj = {
        foo: 'foo',
        bar: 'bar',
        bizz: 'bizz',
        bang: 'bang',
      };
      
      function keyDeleter(obj) {
        delete sampleObj.foo;
        delete sampleObj.bar;
      
      return obj;
      }

      function makeStudentsReport(data) {
        const results = [];
        for (let i=0; i<data.length; i++) {
          const item = data[i];
          results.push(`${item.name}: ${item.grade}`);
        }
        return results;
      };
      

const studentData = [
        {
          name: 'Tim',
          status: 'Current student',
          course: 'Biology',
        },
        {
          name: 'Sue',
          status: 'Withdrawn',
          course: 'Mathematics',
        },
        {
          name: 'Liz',
          status: 'On leave',
          course: 'Computer science',
        },
      ];
function enrollInSummerSchool(students) {
        const myArray = [];
         for (let i = 0; i < students.length; i++) {
           myArray.push({
             name: students[i].name,
             status: 'In Summer school',
             course: students[i].course,
           });
         }
         return myArray;
       }
       
       
const scratchData = [
        { id: 22, foo: 'bar' },
        { id: 28, foo: 'bizz' },
        { id: 19, foo: 'bazz' },
      ];
      function findById(items, idNum) 
      { for (let i=0;i<items.length;i++)
        { if(items[i].id===idNum)
            { return items[i]; } } }

            const objectA = {
                id: 2,
                name: 'Jane Doe',
                age: 34,
                city: 'Chicago',
              };
              
            const objectB = {
                id: 3,
                age: 33,
                city: 'Peoria',
              };
              
            const expectedKeys = ['id', 'name', 'age', 'city'];
              
               
            function validateKeys(object, expectedKeys) {
                if (Object.keys(object).length !== expectedKeys.length) {
                  return false;
                }
                for (let i = 0; i < expectedKeys.length; i++) {
                  if (!Object.keys(object).find(key => key === expectedKeys[i])) {
                    return false;
                  }
                }
                return true;
              };