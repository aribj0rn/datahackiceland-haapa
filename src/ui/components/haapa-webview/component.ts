import Component, { tracked } from '@glimmer/component';
import ScreenState from '../../../utils/enums/ScreenState';

export default class HaapaWebview extends Component {

    public screenState: any;
    private defaultAuthenticatedScreen: ScreenState = ScreenState.Prescription;

    @tracked state = {
        screen: ScreenState.Loading,
        isAuthenticated: false,
        error: ''
    };

    constructor(options) {

        super(options);

        this.screenState = ScreenState;

    }

    updateState(key, value) {

        // Clone the tracked object
        let cloned = Object.assign({}, this.state);
        cloned[key] = value;

        if( key == 'isAuthenticated' ) {
            cloned.screen = this.defaultAuthenticatedScreen;
        }

        // Update the state.
        this.state = cloned;

    }

    @tracked('state', 'error')
    get shouldShowError() {
        return this.state.error.length > 0;
    }

}
