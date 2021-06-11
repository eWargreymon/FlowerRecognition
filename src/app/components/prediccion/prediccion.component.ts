import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Flower, FlowerServiceService } from 'src/app/services/flower-service.service';
import { FloresComponent } from '../flores/flores.component';
import * as $ from "jquery";
declare function loadModel(): any
@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent implements OnInit {
  
  imagen: any;
  flores: Flower[];
  predictedFlower: Flower;
  prediction: any;
  prob: any;
  show: boolean = false;
  
  constructor(private flowerService: FlowerServiceService) { 
    this.flores = [];
    this.imagen=localStorage.getItem('img');
  }
  
  async ngOnInit() {   

    window.onscroll=function(){window.scrollTo(0,0);};
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });

    loadModel();

    this.getAllFlowers();

    document.getElementById("loadingtext").innerHTML = "Cargando Modelo...";
    await this.delay(2500);
    document.getElementById("loadingtext").innerHTML = "Identificando Imagen...";
    await this.delay(2000);
    document.getElementById("loadingtext").innerHTML = "Obteniendo Datos de la Imagen...";
    await this.delay(1000);
    document.getElementById("loadingtext").innerHTML = "Listo";
    await this.delay(500);
    document.getElementById("loading").style.display = "none";
    this.prediction = document.getElementById("salida").innerHTML;
    this.prob = document.getElementById("prob").innerHTML;
    (this.prob>0.9) ? this.show=true : this.show=false;
    console.log(this.show)
    window.onscroll=function(){};
    this.getPrediction();
  }


  getAllFlowers(){
    this.flowerService.getAll().subscribe((res) =>{
      this.flores = res.map((flor) => 
          flor.payload.doc.data() as Flower
      );
    });
  }

  getPrediction(){
    this.flores.forEach(element => {
      if(element.Name === this.prediction){
        this.predictedFlower = element;
      }
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }
}
