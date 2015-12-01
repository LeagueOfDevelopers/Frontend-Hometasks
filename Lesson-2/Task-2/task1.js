//ЯННП задание
/*
 * User Constructor.
 *
 * @param title {String} Title for User, e.g. 'Mr.', 'Mrs.', 'Dr.', etc.
 * @param name {String} Name of User e.g. 'John Smith'
 */

function User(title, name) {
  this.title = title;
  this.name = name;
  console.info('NEW USER: ' + this);
}

/**
 * Creates full display name for a user.
 * @return {String} Display name
 */

User.prototype.displayName = function() {
  return this.title + ' ' + this.name;
}

/**
 * @return {String} Formatted name & title
 */

User.prototype.toString = function() {
  return '[User:'+this.displayName()+']';
}


// User is a constructor
function upgradeUser(User) {

  // EDIT THESE AS NECESSARY
  function BetterUser() {

  }

  return BetterUser;
}


//ЯННП задание.