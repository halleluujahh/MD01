let std1 = {
    name:"hoa",
    sdt:123
}
// constructor
function Student(name,sdt){
    this.name = name;
    this.sdt = sdt;
}
let std2 = new Student("ngọc",124);
console.log(std2);


const student1 = {};
let userName = "Nam";
student1.userName = userName;
student1.age = 20;
student1["address"] = "Hà Nội";
for (const key in student1) {
    console.log("value", student1[key]);
}
student1.age = 21;
