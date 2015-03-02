angular.module('MemberService', []).factory('Nerd', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/members');
        },
        // call to get all nerds
        getById : function(id) {
            return $http.get('/api/members/'+id);
        },
        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new member
        create : function(memberData) {
            return $http.post('/api/members', memberData);
        },
        // these will work when more API routes are defined on the Node side of things
        // call to PUT and update a member
        update : function(id,memberData) {
            return $http.put('/api/members/'+id, memberData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/members/' + id);
        }
    }

}]);