//Angular Controller App

const app = angular.module('BookmarkApp', []);

app.controller('bookmarksController', ['$http', function($http){

const controller = this;
//====================================CREATE====================================
  this.createBookmark = function(){
    $http({
      method: 'POST',
      url: '/bookmarks',
      data: {
        title: this.title,
        url: this.url
      }
    }).then(function(response){
      controller.getBookmarks();
      //automatically updates displayed items only
    }, function(){
      console.log('post error');
    });
  }// end createdBookmark();
//=====================================READ=====================================
  this.getBookmarks = function(){
    $http({
      method: 'GET',
      url: '/bookmarks'
    }).then(function(response){
      controller.bookmarks = response.data
    }, function(){
      console.log('get error');
    });
  }// end getBookmarks();
//===================================UPDATE===================================
  this.editBookmark = function(bookmark){
      $http({
          method:'PUT',
          url: '/bookmarks/' + bookmark._id,
          data: {
              title: this.updatedTitle,
              url: this.updatedUrl
          }
      }).then(
          function(response){
              controller.getBookmarks();
          },
          function(error){
            console.log('update/edit error');
          }
      );
  }//end edit bookmark
//===================================DELETE=====================================
  this.deleteBookmark = function(bookmark){
      $http({
          method:'DELETE',
          url: '/bookmarks/' + bookmark._id
      }).then(
          function(response){
              controller.getBookmarks();
          },
          function(error){
          }
      );
  }// end delete bookmark


this.getBookmarks();
//auto runs the function

}]); //end app.controller
