export interface Checkup{
    id:number;
    patient_id:number;
    payment_id:number;
    name:string;
    date:Date;
    time:string;
    symptoms:string;
    diagnosis: string,
    treatment: string,
    prescriptions: string,
    bp: string,
    thyroid: string,
    diabetes: string,
    spo: string,
    pulse: string,
    tests: string,
    followup: string,
    fbs: string,
    hb: string,
    hba1c: string,
    plbs: string,
    t_four: string,
    t_three: string,
    tsh: string,
    dose: string,
    medicine: string,
    fam_hist: string,
    past_hist: string,
    personal_hist: string
}