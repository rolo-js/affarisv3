'use strict';

(function() {

class AdminController {

  constructor(User, Modal) {
    // Use the User $resource to fetch all users
    this.users = User.query();
    this.Modal = Modal;
  }

  delete(user) {
    let confirmDelete = this.Modal.confirm.delete(function(user, users){
      user.$remove();
      users.splice(users.indexOf(user), 1);
    });
    confirmDelete(user.name ,user,  this.users);
  }
}

angular.module('v3App.admin')
  .controller('AdminController', AdminController);

})();
