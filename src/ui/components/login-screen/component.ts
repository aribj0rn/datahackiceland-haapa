import Component, { tracked } from '@glimmer/component';

export default class LoginScreen extends Component {

    private updateState: Function;

    private user: string;
    private pass: string;

    constructor(options) {

        super(options);

        this.updateState = options.args.update;

    }

    userInput(e) {
        this.user = e.target.value;
    }

    passInput(e) {
        this.pass = e.target.value;
    }

    attempt() {

        console.log(this.user);
        console.log(this.pass);

        if( this.user == 'demo' && this.pass == 'demo' ) {
            this.updateState('isAuthenticated', true);
        } else {
            this.updateState('error', 'Invalid username or password!');
        }

    }

};
