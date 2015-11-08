function User(title, name) {
  this.title = title;
  this.name = name;
  console.info('NEW USER: ' + this);
}



User.prototype.displayName = function() {
  return this.title + ' ' + this.name;
}



User.prototype.toString = function() {
  return '[User:'+this.displayName()+']';
}

function upgradeUser(User) {

  // EDIT THESE AS NECESSARY
  function BetterUser() {
  	User.apply(this, arguments);
  }

  BetterUser.prototype = Object.create(User.prototype);

  BetterUser.prototype.toString = function() {
  return '[BetterUser:'+this.displayName()+']';
}
  return BetterUser;
}


upgradeUser(User);

var joe = new BetterUser('Mr.', 'Joe Smith'); // передаем заголовок и имя.
console.log('Hello ' + joe); // 'Hello [BetterUser: Mr. Joe Smith]'

