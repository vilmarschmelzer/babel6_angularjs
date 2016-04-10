/**
 * Provides access to the JSON endpoint which contains the data about the items.
 */


export default class ItemsService {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
        //this.config = config;
    }

    getItems() {
        //var apiUrl = this.config.apiUrl;

        return this.$http
            .get('/task/')
            .then((result) => {
                /*// prepend the API url to the images
                return result.data.map((item) => {

                    item.image = apiUrl + item.image;
                    item.thumb = apiUrl + item.thumb;
                    return item;

                });*/

                return result.data;
            });
    }

}

//export { ItemsService }
//register('app').service('itemsService', ItemsService);
