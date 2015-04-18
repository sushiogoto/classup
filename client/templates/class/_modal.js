Template._modal.helpers({
  "className": function(){
    return ClassesList.findOne({_id: Session.get('_id')});
  }
});