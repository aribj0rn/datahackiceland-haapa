import Component, { tracked } from '@glimmer/component';
import CurrentVaccines from '../../../utils/data/CurrentVaccines';

export default class VaccinesScreen extends Component {

    @tracked items = [];

    constructor(options) {

        super(options);

        // Load data
        this.items = CurrentVaccines;

    }

};
