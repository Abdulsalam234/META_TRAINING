// create your classes here

class firstClass {
    schoolGrade(){
        console.log("I have A");
    }
}

class secondClass extends firstClass {
    schoolGrade(){
        super.schoolGrade()
        console.log("I also have B")
    }
} 
class thirdClass extends secondClass {
    schoolGrade(){
        super.schoolGrade()
        console.log("I have C")
    }
}

var result1 = new secondClass();
var result2 = new thirdClass();
result1.schoolGrade(); 
result2.schoolGrade();