class HomeCtrl {
    constructor($scope, $http) {
        this._default = 'world';
        this.name = 'Alessandro';
        this.$http = $http;
        this.scope = $scope;

        console.log('im a the constructor');
    }

    $onInit() {
        console.log('im a init');
        this.scope.$watch(() => this.name, newVal => console.log('im the watch', newVal));
    }

    changeName() {
        this.name = this._default;
        this.$http.get('/').then(res => console.log('It workd', res));
    }


    transformed() {
        return this.name.split('').map(x => x + '_').join('');
    }
}

HomeCtrl.$inject = ['$scope', '$http'];

export default HomeCtrl;