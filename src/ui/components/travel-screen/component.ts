import Component, { tracked } from '@glimmer/component';
import Request from '../../../utils/http/request';
import CurrentVaccines from '../../../utils/data/CurrentVaccines';

export default class TravelScreen extends Component {

    private updateState: Function;

    @tracked countries: Array<string> = [];
    @tracked requiredVaccines: any = null;
    @tracked prescriptionDayLength: any = null;

    constructor(options) {

        super(options);

        this.updateState = options.args.update;

        let request = new Request('countries').get()
            .then((data: Array<string>) => {
                this.countries = data;
            }).catch((e) => {
                this.updateState('error', 'Villa kom upp við að sækja lönd, heyrðí Palla!');
            });

    }

    updateCountry(e) {

        let country = e.target.value;

        let request = new Request('vaccination/' + country).get()
            .then((data: Array<string>) => {

                this.matchWithCurrentVaccineData(data);
                this.getPrescriptionsByCountry(country);

            }).catch((e) => {
                console.log(e)
                this.updateState('error', `Villa kom upp við að sækja bólusetningar í ${country}`);
            });

    }

    matchWithCurrentVaccineData(data) {

        let current: Array<any> = CurrentVaccines;

        this.removeKeys(current, '_meta');

        // Cross reference with current vaccines
        if(data.length > 0) {

            this.requiredVaccines = [];

            data.forEach((vaccine) => {

                let vObj = { hasVaccine: false, name: vaccine };

                if(this.removeCircularObjects(current).includes(vaccine.toLowerCase())) {
                    vObj.hasVaccine = true;
                }

                this.requiredVaccines.push(vObj);

            });

        }

    }

    getPrescriptionsByCountry(country) {

        let request = new Request('prescription/' + country).get()
            .then((numberOfDays: string) => {
                this.prescriptionDayLength = numberOfDays;
            }).catch((e) => {
                this.updateState('error', `Villa kom upp við að sækja lyfseðlaupplýsingar í ${country}`);
            });

    }

    /**
    *   This method is required to clean up objects generated from Glimmer elements
    *   In this case we are removing [_meta] objects so we can revive the state on
    *   refreshing and re-visiting the website.
    */
    removeKeys(object, key) {

        for(let prop in object) {

            if(prop === key) {
                delete object[key];
            } else if( typeof object[prop] === 'object') {
                this.removeKeys(object[prop], key);
            }

        }

    }

    /**
    *   This method is required to remove circular references in the stored objects
    *   JSON will not be able to parse or stringify circular references.
    */
    removeCircularObjects(object) {

        let cache = [];

        let storage = JSON.stringify(object, function(key, value) {

            if (typeof value === 'object' && value !== null) {

                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return false;
                }

                // Store value in our collection
                cache.push(value);
            }

            return value;

        });

        cache = null;

        return storage;

    }

};
