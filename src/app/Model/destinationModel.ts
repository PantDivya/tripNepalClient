import { FormGroup,FormBuilder, Validators } from "@angular/forms";

export class Destination{
    public Photo:string="";
    public Name:string="";
    public Description:string[]=[];
    public Latitude:string="";
    public Longitude:string="";
    public DestinationForm: FormGroup;

    constructor(){
    let formBuilder = new FormBuilder();
    this.DestinationForm = formBuilder.group({
        Photo:['',[Validators.required]],
        Name:['',[Validators.required]],
        Description:['',[Validators.required]],
        Latitude:['',[Validators.required]],
        Longitude:['',[Validators.required]],
        
    });
    }
}