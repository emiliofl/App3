/**
 * Created with JetBrains PhpStorm.
 * User: rbole
 * Date: 22.05.13
 * Time: 15:39
 * To change this template use File | Settings | File Templates.
 */
'use strict';

function BlogListCtrl($scope,$http,$location){

    $http.get('json/blog.js').success(function(data, status, headers, config){
        $scope.blog = data;
    });

    $scope.clickBlog = function(item) {
       $location.path('/show/'+item.blog_id);

    }

}