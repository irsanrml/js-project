console.log("Hello, world!!");

//Membuat Heading di File Script
document.getElementById('heading').innerHTML = "Hello, JS!!"

//Membuat variable Nama
var name = "Irsn";
console.log(name);

//Membuat variable LastName
var lastName = "Ramli";
console.log(lastName);

//Membuat variable Umur
var age = 26;
console.log(age);

//Membuat variable fulname+lastname
var fullName = name + lastName; // concatenation.
console.log(fullName);

//Membuat variable Job (pekerjaan)
var job = "Peserta";
console.log(job);

//Membuat variable biografi
var bio = "My name " + name + " " + lastName + " " + " my age " + age + " my job " + job;
console.log(bio);

//Membuat variable penjumlahan
var x = 5;
var y = 7;
var z = x + y;
console.log(z)

//Membuat variable pengkalian
var a = 5;
var b = 7;
var c = a * b;
console.log(c);

//Membuat variable increment
var x = 10;
x += 5;
console.log(x);

//Membuat operator string
text1 = "Irsan";
text2 = "Ramli";
//tanda "" untuk sepasi
text3 = text1 + " " + text2;
console.log(text3);

//Membuat operator komparasi
x = 5 + 5;
y = "5" + 5;
z = "Hello" + 5;
console.log(x);
console.log(y);
console.log(z);

//Membuat if else statement 1
var name = "Irsan";
var age = 17;
var isYoung = "yes";

//Cek logika, kalau var isYoung = Yes, maka jalan console.log "is young man"
if (isYoung == "Yes") {
	
	console.log(name + " is young man")
	
} else {
//Jika tidak, isYoung di isi No, maka console.log berisi "i hope he mature soon"
	console.log("I hope he mature soon")

}

//Membuat if else statement 2
var hour = 18;
if (hour < 18) { //Jika nilai if (hour < 18 maka muncul Say Nop, jika tidak maka muncul Say Yes)

	console.log("Say Yes")

} else {

	console.log("Say Nop")

};

//Membuat if else statement 3
var time = 20; //variable ini mempengaruhi else terakhir
if (time < 10) { //Jika nilai if (time < 10) < 30 maka muncul "Say no way", jika tidak dan nilai time <=20 maka muncul "Say may be yes", jika var time = nilainya lebih dari 20 maka muncul "Good on you!!"
	console.log("Say no way")
} else if (time <= 20) {
	console.log("Say may be yes")
} else {
	console.log("Good on you!!")
}

//Tipe Data
console.log(Boolean(10 > 9));	//hasilnya true
console.log(Boolean(10 > 19));  //hasilnya false

console.log(Boolean(100));      // true
console.log(Boolean(3.14));     // true
console.log(Boolean(-15));      // true
console.log(Boolean("Hello"));  // true
console.log(Boolean("false"));  // true

console.log(Boolean(false));    // false
console.log(Boolean(true));     // true
console.log(Boolean("false"));  // true

//Semua yang tanpa nilai = false
var x = 0;
console.log(Boolean(x)); // false

var y = "";
console.log(Boolean(y)); // false

var z = "NaN";
console.log(Boolean(z)); // true

/** 
//Debugging Tools 1 (Console)
var x = 0;
console.log(Boolean(x));

//Debugging Tools 2 (Alert)
var y = "";
alert(Boolean(y));

//Debugging Tools 3 (Prompt)
prompt("What is your name");
*/

//Switch Condition
var job = 'Engineer' //Apabila variable job di isi Engineer maka muncul Irsan adalah Engineer, apabila di isi Driver/Police maka, muncul Irsan bukan driver/polisi selain 3 variable itu maka muncul Not at All

switch (job) {
	case 'Engineer':
		console.log('Irsan adalah Engineer');
		break;
	case 'Driver':
		console.log('Irsan bukan driver');
		break;
	case 'Police':
		console.log('Irsan bukan polisi');
		break;
	default:
		console.log('Not at all');
}

job = prompt("Apa profesi Irsan");