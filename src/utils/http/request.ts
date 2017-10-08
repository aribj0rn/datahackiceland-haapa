import 'regenerator-runtime/runtime';

export default class Request {

    private url: string;
    private data: any;
    private prefix: string = 'http://130.208.244.7:1234/';

    constructor(url: string) {

        this.url = url;

    }

    get() {

        return new Promise((resolve, reject) => {

            this.url = this.prefix + this.url;

            let req = fetch(this.url)
                .then( request => resolve(request.json()) )
                .catch( (err) => {
                    reject(err)
                });

        });

    }

}
