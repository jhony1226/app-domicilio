import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router, RouteReuseStrategy } from '@angular/router';
import { Service } from 'src/app/interfaces/servicio';

import { ServiceService } from 'src/app/services/service.service';




@Component({
  selector: 'app-list-services',
  templateUrl: './list-services.component.html',
  styleUrls: ['./list-services.component.css']
})

 
export class ListServicesComponent implements OnInit { 
  displayedColumns: string[] = ['Domiciliario', 'Destino', 'Estado', 'Precio'];
  dataSource = new MatTableDataSource<any>();
  servicesData:any;

  constructor(
    private _serviceService:ServiceService,
    private _router: Router,
    private _Arouter : ActivatedRoute
    
    ) { 
      this.servicesData={};
      this.dataSource=new MatTableDataSource(this.servicesData);
    }


  ngOnInit(): void {  
    this._serviceService.listService().subscribe({
      next: (v) => {
        this.servicesData = v.servicios;
        console.log(v);
        
        // this.isPo = v.verifyPo;
        this.dataSource = new MatTableDataSource(this.servicesData);
        //this.dataSource.paginator = this.paginator;
      },
      error: (e) => {
        //this.message = e.error.message;
        //this.openSnackBarError();
      },
    });  
  }
   

}
