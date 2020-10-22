function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
};