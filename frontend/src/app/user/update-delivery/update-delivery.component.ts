import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-update-delivery',
  templateUrl: './update-delivery.component.html',
  styleUrls: ['./update-delivery.component.css']
})
export class UpdateDeliveryComponent implements OnInit {
  registerData: any;
  message: string = '';
  status: string = '';
  email:string ='';

  constructor(
    private _userService: UserService,
    private _router: Router,
  ) {
    this.registerData = {};
   }

  ngOnInit(): void {
  }
  upUser():void{
    if (
      !this.registerData.name ||
      !this.registerData.email ||
      !this.registerData.password
    ) {
      
    } else {
      this.email="elmonocorreo";//Dato prueba
      this.registerData.idUser="12"//Dato prueba
      this.registerData.idRole="31";
      this.registerData.status=this.status;
      this.registerData.phone=this.registerData.phone.toString();
      console.log(this.registerData);
      
      this._userService.updateUser(this.registerData,this.email).subscribe({
        next:(v)=>{  
          
          //this._router.navigate(['/home/list-users'])
          this.registerData={}
          console.log("Actualizado");
          console.log(v);          
          
        },
        error:(e)=>{ 
          console.log(e.error.message);
          console.log("error");
          
          
         }
      });
    }

  }

}
