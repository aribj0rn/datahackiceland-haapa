import Component, { tracked } from '@glimmer/component';

export default class PrescriptionScreen extends Component {

    @tracked selectedItem = null;
    @tracked items: Array<any> = [{
    	"atccode": "M01AE01",
    	"dosageinstructions": "1 tafla á dag",
    	"form": "tÃ¶flur",
    	"ismonitored": false,
    	"itemno": 0,
    	"name": "Ibuprofen",
    	"numberofpackages": 1,
    	"prescriptionid": "16_3112754029_103_273167",
    	"createddate": 1424096880000,
    	"productid": "116584",
    	"quantity": 100,
    	"strength": "400 mg",
    	"unit": "stk",
    	"entityid": "16_3112754029_109_M01AE01"
    },{
    	"atccode": "M01AE02",
    	"dosageinstructions": "2 töflur tvisvar á dag",
    	"form": "tÃ¶flur",
    	"ismonitored": false,
    	"itemno": 1,
    	"name": "Panodil",
    	"numberofpackages": 1,
    	"prescriptionid": "16_3112754029_103_273167",
    	"createddate": 1424096880000,
    	"productid": "116584",
    	"quantity": 100,
    	"strength": "400 mg",
    	"unit": "stk",
    	"entityid": "16_3112754029_109_M01AE01"
    }];

    viewPrescription(item) {
        this.selectedItem = item;
    }

    closePrescription() {
        this.selectedItem = null;
    }

};
