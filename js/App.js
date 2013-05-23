/**
 * Created with JetBrains PhpStorm.
 * User: rbole
 * Date: 22.05.13
 * Time: 15:35
 * To change this template use File | Settings | File Templates.
 */

/**
 * hier legen wir die Routen und die passenden Controller fuer die
 * einzelnen Seiten fest
 */
'use strict';
angular.module('App3', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/blog',
                {   templateUrl: 'partials/blog-list.html',
                    controller: BlogListCtrl
                }).
            when('/show/:blog_id',
                {   templateUrl: 'partials/blog-detail.html',
                    controller: BlogDetailCtrl
                }).
            otherwise(
                {
                    templateUrl: 'partials/appStart.html',
                    controller: AppStartCtrl
                });
    }]);
