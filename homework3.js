// Exercise 1

const func1 = function (number1,number2,number3){
	return number1 + number2 - number3;
}
const bomb = func1 (1,2,3);
console.log (bomb);

//Exercise 2

const func2 = function(){
	return 555;
}
const flower = func2();
console.log (flower);

// Exercise 3

const func3 = function( number1,number2){
	const e = number1 * number2;
}
const sum = func3(4,5);
console.log (sum);

 //Exercise 4
 const func4 = function(string1,string2,string3){
 	if (string1.length > string2.length && string1.length > string3.length){
 		return string1;
 	}
 	else if (string1.length < string2.length && string2.length > string3.length){
 		return string2;
 	}
 	else {
 		return string3;
 	}
 }
     const chap = func4 ("bar", "karch", "amenaerkar");
  console.log (erkar);

  //Exercise 5
  const func5 = function (number1, number2)
  {
          if (number1 === number2) {
			return "0";
}
       else if (number1 > number2) {
              return "1";
		}
            else if (number1 < number2) {
                 return "-1";
		} 
}

const d = func5(122,852);
console.log(d);

 // Exercise 6
 const func6 = function (number1, number2)
   {
     const result = number1 * number2;
     return result;
   }
const l = func6(120,10)
console.log(l)
//Exercise 7
 const func7 = function(number1, number2)
{ 
  const life = number1/number2;
  return life
}
const k= func7(45,5)
console.log(k)
//Exercise8
const triangleArea = function (height,base) {
  const a = func6(height,base);
  return func7(a,2)
}
console.log(triangleArea(4,2));
// Exercise9
const numlenght = function(number)
{
const  aragac = number + "";
return aragac.length;
}
const jp = numlenght(1520);
console.log(jp);
//Exercise10
const girl = function ( line1, line2, tiv)
{
   const boy= line1 + line2;
if (boy.length > tiv) {
   return 1;
 } else
    {
       return -1;
     }
}

const father = girl("mama","hayrik", 260);

console.log(father);
//Exercise11
const runstaff = function (base, height, shape)
  {
     if (shape === "rectangle")
{
      const s = func (base, height);
          return s;
}
       else if (shape === "triangle")
{
    const e = funcy (base, height);
      return e;
 }
     else 
  {
    return -1;
}
 } 
const b = runstaff(20,20,"triangle");
console.log (b);


