export class Exhibitor {
    constructor(
        public id: number,
        public title: string,
        public acf: {
            scheda: boolean,
            categorie_scheda: string,
            padiglione_scheda: string,
            address_scheda: string,
            phone_scheda: string,
            fax_scheda: string,
            email_scheda: string,
            website_scheda: string,
            stand_scheda: string,
            marchi_scheda: string,
            distributor_scheda: string,
            area_scheda: string
        }
    ) {}
}
