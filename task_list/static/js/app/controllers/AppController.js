/**
 * The one and only controller used in this app.
 */

export default class AppController {

    /*@ngInject*/
    constructor(ItemsService) {
        this.items = [];
        this.selection = [];

        ItemsService.getItems().then( result =>  {

        this.items = result;
        //alert(this.items[0][0]);
        });
        //$scope.tasks = this.items;



        /*$scope.$watch('vm.items', () => {
            this.selection = this.items.filter(item => item.selected);
        }, true);*/

        //this.makeThing = () => { thingFactory.newThing() };


        //this.$inject = ['$scope', 'itemsService'];
    }

}



//export { AppController }

//register('app').controller('appController', AppController);