/**
 * Created with JetBrains PhpStorm.
 * User: rbole
 * Date: 22.05.13
 * Time: 15:39
 * To change this template use File | Settings | File Templates.
 */
'use strict';

function BlogDetailCtrl($scope,$routeParams,$http){
    $scope.params = $routeParams;
    // auf die JSON Daten zugreifen

    // auf das MD zugreifen
    var converter = new Showdown.converter();
    $http.get('markdown/'+$scope.params.blog_id+'.md').success(function(data, status, headers, config){

        // HTML kann nicht einfach in den View geschrieben werden ?
        // ng-bind-html-unsafe="blogDetail" muss fuer den einbindenden Tag gesetzt werden
       $scope.blogDetail = converter.makeHtml(data);

    });


}