import { Component, OnInit } from '@angular/core';
import { Flower, FlowerServiceService } from 'src/app/services/flower-service.service';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styleUrls: ['./flores.component.css']
})
export class FloresComponent implements OnInit {

  flores: Flower[];
  order: number = 0;

  constructor(private flowerService: FlowerServiceService) { }

  ngOnInit(): void {
    this.getAllFlowers();
  }

  getAllFlowers(){
    this.flowerService.getAll().subscribe((res) =>{
      this.flores = res.map((flor) => {
        return {
          ...flor.payload.doc.data() as {},
          id: flor.payload.doc.id
        } as Flower;
      }
      );
      this.ordenar();
    });
  }

  ordenar(){
    if(this.order==0){
      this.flores.sort((a,b) => 
      a.Name.localeCompare(b.Name));
      this.order=1;
    } else {
      this.flores.sort((a,b) => 
      b.Name.localeCompare(a.Name));
      this.order=0;
    }
  }
}