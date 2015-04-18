Template.classesShow.helpers({
  "classDetail": function(){
    return ClassesList.findOne({_id: Session.get('_id')});
  }
})