
angular.module('registration', [])
    .controller('mainControl', mainControl)
    .directive('avatar', avatarDirective);

function mainControl ($scope)
{
    $scope.users = [];
    $scope.addNew = function (user)
    {
	$scope.users.push({name: user.name, avatarURL: user.url});
	console.log(user.name)
	console.log(user.url)
	user.name = '';
	user.url = '';
    };
}

function avatarDirective ()
{
    return {
	scope: {
	    user: '='
	},
	restrict: 'E',
	template: (
	    '<div class="avatar">' +
		'<img ng-src="{{user.avatarURL}}">' +
		'<h4>{{user.name}}</h4>' +
		'</div>'
	),
	link: link
    };
    
    function link (scope)
    {
	if (!scope.user.avatarURL)
	{
	    console.log("Error!");
	    scope.user.avatarURL = "http://thealmanac.org/assets/img/default_avatar.png";
	}
    }
    
}
