let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

for (let i = 0; i < data.length; i++) {
  // console.log(data[i].pseudo);
}

let myArray = ["el-1", "el-2", "el-3", "el-4", "el-5", "el-6", "el-7"];
// console.log(myArray.slice(3, 5));
let shift = myArray.shift();
// console.log(shift);

let arrayNumber = [20, 45, 87, 4, 21, 45];
// console.log(arrayNumber.reduce((a, b) => a + b));

// DATES *****************

let date = new Date();

// console.log("date classique: " + date);
// console.log("isoString: " + date.toISOString());
