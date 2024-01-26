const name = "amit";
const repoCount = 50;
console.log(name + repoCount + "  value");
console.log(`hello my name is ${"name"} and my repocount is${repoCount}`);

const gameName = new String("amit-yadav");
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("m"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 4);
console.log(anotherString);
const anotherString1 = gameName.slice(-8, 4);
console.log(anotherString1);

const newString2 = "        amit";
console.log(newString2);
console.log(newString2.trim());
const url = "https://amit.com?hitesh choudary";
console.log(url);
console.log(url.replace("?", "-"));
console.log(url.includes("amit"));
