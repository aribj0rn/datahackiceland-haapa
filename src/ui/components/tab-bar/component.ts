import Component from '@glimmer/component';
import ScreenState from '../../../utils/enums/ScreenState';

export default class TabBar extends Component {

    private updateState: Function;

    constructor(options) {

        super(options);

        this.updateState = options.args.update;

    }

    changeState(state) {

        switch(state) {
            case 'medicine':
                this.updateState('screen', ScreenState.Prescription);
            break;
            case 'vaccines':
                this.updateState('screen', ScreenState.Vaccines);
            break;
            case 'information':
                this.updateState('screen', ScreenState.Travel);
            break;
        }

    }

};
