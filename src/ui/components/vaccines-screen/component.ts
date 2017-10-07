import Component, { tracked } from '@glimmer/component';

export default class VaccinesScreen extends Component {

    @tracked items = [
        {
        	"code": "J07AE01",
        	"codename": "Dukoral kólera / cholera, inactiv, whole cell",
        	"codes": "KÃ³lera:A",
        	"codingsystem": "ATC",
        	"createddate": 1088640000000,
        	"senderdescription": "SÃ¶gu dev skema",
        	"sendergateway": "SAGA_DEV",
        	"senderid": "RAxx0761",
        	"sendersystem": "SAGA.NET",
        	"entityid": "16_3112754029_106_J07AE01"
        }
    ];

};
