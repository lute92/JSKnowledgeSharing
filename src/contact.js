var Contact = function(){
  this.phoneNos= [];
  this.name = "";
};

Contact.prototype = function(){
  var addContact = function(contact){
    this.name = contact.name;
    this.phoneNos = contact.phoneNos.map(function(phNo){
      return `+95${phNo}`;
    });
  }
  return{
    addContact : addContact
  }
}();
