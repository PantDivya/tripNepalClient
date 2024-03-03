import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class Login{
    public UserName:string="";
    public Password:string="";
    public LoginFormGroup:FormGroup;
    constructor(){
        let formBuilder = new FormBuilder();
        this.LoginFormGroup= formBuilder.group({
            UserName:['',[Validators.required]],
            Password:['',[Validators.required]]
    });
}
}