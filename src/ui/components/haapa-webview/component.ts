import Component, { tracked } from '@glimmer/component';
import ScreenState from '../../../utils/enums/ScreenState';

export default class HaapaWebview extends Component {

    public screenState: any;
    private defaultAuthenticatedScreen: ScreenState = ScreenState.Prescription;

    @tracked state = {
        screen: ScreenState.Prescription,
        isAuthenticated: true,
        error: ''
    };

    @tracked user = {
        id: 'demo',
        name: 'Demo Account',
        subtitle: 'Icelandic'
    };

    constructor(options) {

        super(options);

        this.screenState = ScreenState;

    }

    updateState(key, value) {

        // Clone the tracked object
        let cloned = Object.assign({}, this.state);
        cloned[key] = value;

        if(key=='isAuthenticated' && value === true) {
            cloned.screen = this.defaultAuthenticatedScreen;
        }

        // Update the state.
        this.state = cloned;

    }

    logout() {

        this.state = {
            screen: ScreenState.Login,
            isAuthenticated: false,
            error: ''
        };

    }

    @tracked('state')
    get shouldShowError() {
        return this.state.error.length > 0;
    }

    @tracked('state')
    get isAuthenticated() {
        return this.state.isAuthenticated;
    }

}
