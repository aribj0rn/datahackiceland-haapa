import Component from '@glimmer/component';
import ScreenState from '../../../utils/enums/ScreenState';

export default class LoadingScreen extends Component {

    private updateState: Function;

    constructor(options) {

        super(options);

        this.updateState = options.args.update;

        setTimeout(() => {
            this.updateState('screen', ScreenState.Login);
        }, 1500);

    }

};
