(function(){

  angular.module('app')
  .service('modalService', ['$uibModal', modalService])

    function modalService($uibModal){

      this.openViewProjectsModal = (user, userBooks) => {
        return $uibModal.open({
          animation: true,
          templateUrl: '/app/shared/modals/viewProjectsModal.html',
          controller: 'viewProjectModalCtrl',
          resolve: {
            user: function() { return user },
            userBooks: function() { return userBooks }
          }
        })
      }

      this.openCreateProjectModal = () => {
        return $uibModal.open({
          animation: true,
          templateUrl: '/app/shared/modals/createProjectModal.html',
          controller: 'createProjectModalCtrl',
          resolve: {
            
          }
        })
      }

    }
})()