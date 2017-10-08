import Component, { tracked } from '@glimmer/component';
import Request from '../../../utils/http/request';
import CurrentPrescriptions from '../../../utils/data/CurrentPrescriptions';

export default class PrescriptionScreen extends Component {

    private medicine: string = '';
    private updateState: Function;

    @tracked interactionsData: any = null;
    @tracked selectedItem = null;
    @tracked items: Array<any> = CurrentPrescriptions;

    constructor(options) {

        super(options);
        this.updateState = options.args.update;

    }

    viewPrescription(item) {
        this.selectedItem = item;
    }

    closePrescription() {
        this.selectedItem = null;
    }

    medicineInput(e) {
        this.medicine = e.target.value;

        if(e.keyCode == 13) {
            this.checkInteractions();
        }
    }

    closeInteractions() {
        this.interactionsData = null;
    }

    checkInteractions() {

        this.interactionsData = null;

        if(this.medicine.length > 0) {

            this.updateState('isLoading', true);

            let queryString = '?name=' + encodeURIComponent(this.medicine);

            this.items.forEach((item) => {
                queryString += '&name=' + encodeURIComponent(item.name);
            });

            let request = new Request('interactions' + queryString).get()
                .then((response) => {
                    this.interactionsData = [];
                    this.interactionsData = response;
                    this.updateState('isLoading', false);

                }).catch((e) => {
                    this.updateState('error', 'Error came up in retrieving interactions for ' + this.medicine);
                    this.updateState('isLoading', false);
                })

        }

    }

};
