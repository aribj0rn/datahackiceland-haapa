import Component from '@glimmer/component';

export default class ErrorModal extends Component {

    private updateState: Function;

    constructor(options) {

        super(options);
        this.updateState = options.args.update;

    }

    closeMessage() {

        this.updateState('error', '');

    }

};
