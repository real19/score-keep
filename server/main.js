import { Meteor } from 'meteor/meteor';
import {Players} from './../imports/api/players'



Meteor.startup(() => {
  // code to run on server at startup

  console.log("Log from /server/main.js");



  //console.log(Players.find().fetch());

  class Person{
    constructor(name = 'Anonymous', age = 0){
      this.name = name
      this.age = age 
    }

    getGreeting(){
      return `Hi! ${this.name}!`
    }


    getPersonDescription(){
      return `${this.name} is ${this.age} years old!`
    }

  }

  class Employee extends Person{

    constructor(name, age, title){
      super(name, age)
      this.title = title
    }
    hasJob(){
      return !!this.title
    }

    getGreeting(){
      let job = this.hasJob()
      if (job){
        return `${this.name} is ${this.age} years old working here as ${this.title}!`
      }else {
        return super.getPersonDescription()
      }
    }

  }


  let me = new Employee('Mike', 10);
  console.log(me.getGreeting());

  let me2 = new Employee('Andrew', 20, 'Architect');
  console.log(me2.getGreeting());


  class Programmer extends Person{
    constructor(name, age, preferredLanguage = 'Assembly'){
      super(name, age)
      this.preferredLanguage = preferredLanguage
    }

    getGreeting(){
      return `${this.name} is ${this.age} years old and ma fav language is ${this.preferredLanguage}!`
    }

  }


  let me4 = new Programmer('Andrew', 20, 'Javascrpt');
  console.log(me4.getGreeting());

  let me5 = new Programmer('Andrew1', 20, 'Swift');
  console.log(me5.getGreeting());


  let me6 = new Programmer('Andrew2', 20, 'C++');
  console.log(me6.getGreeting());

  let me7 = new Programmer('Andrew22', 20);
  console.log(me7.getGreeting());


  let house = {
    bedrooms:2,
    bathrooms:1.5
  }

  let yearbuilt = 1995

  let home = {
    ...house,
    yearbuilt,
    flooring:'Carpet',
    bedrooms:3
    
  }

  console.log(home);


});


