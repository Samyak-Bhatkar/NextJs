// //type inference
// let b;
// b = 33;
// b = 'Suresh';

// //type annotation

// let a: number;

// type ayush = number | string;

// let c: ayush;
// c = "Sentimental";
// c = 33;

// type result = string | boolean;
// let d:result;
// d = false;
// d = "Galat";

// type status = 'success'|'failure'|'pending'|any[];
// let e:status ;
// e = 'failure';
// e = 'pending';
// e = ["RajMahal","Kanchana",34];

// let obj ={
//     name:'ayush',
//     age:34
// }

// type user = {
//     name:string,
//     age:number,
//     birthDate ?: string[]
   
// }


// let f:user;
// f ={
//     age:34,
//     name:"Vicky Brother",
//     birthDate:["1990-7-26"]

// }



// interface post{
//     description: string,
//     image?:string,
//     likes:number

// }

// let Ayush:post;
// Ayush = {
//     description:"Hi My name is Ayush",

//     likes: 23232
// }


// type Mathfunc = (a:number,b:number)=> number;

// const divide:Mathfunc = (a,b)=>a;

// divide(34,23);


// let add:Mathfunc ;
// add = (a,b)=> (a+b);

// add(34,23)


// type f = {a:number};

// let g:f = {
//     a:3
// }

// type h = {b:string};


// type hrx = f&h;


// let j:hrx={
//      b:"34",
//     a:45,
   
// }


// type A = {
//     a:number
// }

// type B = {
//     b:string
// }

// type AB= A&B

// const obj:AB={
//     a:43,
//     b:" "
// }

// interface A {
//     a:number
// }
// interface B extends A{
//     b:string
// }
// const obj:B={
// a:34,
// b:'KanNchana'
// }

// type Responsed =  "ok"|'not-ok';
// let res:Responsed = "ok";

// function hello<T>(a:T,b:T):T{
// return a;
// }

// hello<number>(3244,34231231323);


// function goodbye<Ayush>(a:number,b:Ayush):Ayush{
// return b;
// }

// goodbye(34,"String");

// interface user<T>{
//    a:T,
//    b:T,
//    c:T,
//    d:T
// }

// const obj:user<number> = {
//     a:35,
//     b:34,
//     c:334,
//     d:90
// }


// function hello<T>(a:T,b:T){
// return "Shyam";
// }
// let a;
// let b;

// hello<number>(a=10,b=34);


interface user<T>{
    name:string;
    age:T;
}


const obj:user<number> = {
    name:"Suresh",
    age:35
}



let a:ayush={
name:"Piyush"
};

let b:shazam=78;

b= "Spiderman";

let c:admin;























