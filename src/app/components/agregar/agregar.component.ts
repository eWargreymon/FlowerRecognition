import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Flower, FlowerServiceService } from 'src/app/services/flower-service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formulario: FormGroup;
  flores: Flower[];

  constructor(private flowerService: FlowerServiceService) { 
    this.formulario = new FormGroup({
      Description: new FormControl('',[
        Validators.required
      ]),
      Image: new FormControl('',[
        Validators.required
      ]),
      Location: new FormControl('',[
        Validators.required
      ]),
      Name: new FormControl('',[
        Validators.required
      ]),
      ScName: new FormControl('',[
        Validators.required
      ])
    });
  }

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
    });
  }

  submit(){
    if(this.formulario.valid){
      this.flowerService.addFlower(this.formulario.value);
      this.formulario.reset();
    }
  }

  eliminarFlor(id: string){
    this.flowerService.deleteFlower(id);
  }

}
