import { Component, OnInit, ViewChild } from '@angular/core';
import { Destination } from 'src/app/Model/destinationModel';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit{
  
  destination: Destination = new Destination();
  destinationList: any;
  destinationRow : Destination = new Destination();
  destinationId : number = 0;
  isDestinationSelected:boolean=false;
  @ViewChild('closebutton') closebutton:any;
  @ViewChild('closeupdate') closeupdate:any;
  @ViewChild('closedelete') closedelete:any;

  
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.listDestination();
  }

  addDestination(){
    let destinationData = this.destination.DestinationForm.value;
   this.apiService.postDestination(destinationData).subscribe(
    res=>{
      alert("Success");
      this.listDestination();
      this.destination.DestinationForm.reset();
      this.closebutton.nativeElement.click();
    },
    err=>{
      alert("Failed");
    }

   );
  }
  
  listDestination(){

    this.apiService.getDestination().subscribe(
      res=>{
        this.destinationList=res;
       
      },
      err=>{
        console.log(err);
      }
    )
  }

  selectedDestination(id:number){
    this.isDestinationSelected=true;
    this.fetchDestinationId(id);
    this.apiService.getDestinationById(id).subscribe(
      res=>{
        this.destinationRow=res;
       
           
        this.destination.DestinationForm.controls['Photo'].setValue(this.destinationRow.Photo);
        this.destination.DestinationForm.controls['Name'].setValue(this.destinationRow.Name);
        this.destination.DestinationForm.controls['Description'].setValue(this.destinationRow.Description);
        this.destination.DestinationForm.controls['Latitude'].setValue(this.destinationRow.Latitude);
        this.destination.DestinationForm.controls['Longitude'].setValue(this.destinationRow.Longitude);   
    
      },
      err=>{
        console.log(err);
      }
    );
  }

  editDestination(){
    let destinationRowData = this.destination.DestinationForm.value;
    this.apiService.updateDestination(this.destinationId, destinationRowData).subscribe(
      res=>{
        alert("Updated Successfully.");
        this.destination.DestinationForm.reset();
        this.closeupdate.nativeElement.click();
        
      },
      err=>{
        console.log(err);
      }
    );
  }
  fetchDestinationId(id:number){
     this.destinationId = id;
  }

  removeDestination(){
    this.apiService.deleteDestination(this.destinationId).subscribe(
      res=>{
        this.listDestination();
        this.closedelete.nativeElement.click();
      },
      err=>{
        console.log(err);
      }
    );
  }

  resetDestinationForm(){
    this.destination=new Destination();
    this.destination.DestinationForm.reset();
  }

}

