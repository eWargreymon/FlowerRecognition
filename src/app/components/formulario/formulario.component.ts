import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {  
    window.onscroll=function(){};
    this.principal();
    if(screen.width <= 650){
      $('nav').attr('style','display:none !important');
    }
  }

  public principal() {  
    $("#pic").on('change', function (e) {
      var isimage= addImage(e);
      if(isimage == true){
        document.getElementById("imagepreview").style.display = "flex";
        document.getElementById("submit").style.display = "block";
        document.getElementById("error").style.display = "none";
      }else{
        document.getElementById("error").style.display = "block";
        document.getElementById("imagepreview").style.display = "none";
        document.getElementById("submit").style.display = "none";
      }
    });
  
    function addImage(e) {
      var file = e.target.files[0],
        imageType = /image.*/;
        if (!file.type.match(imageType)){
          return false;
        }else{
          var reader = new FileReader();
          reader.onload = fileOnload;
          reader.readAsDataURL(file);
          //var name = $('#pic').val().split('\\').pop();
          //nombre del archivo
          return true;
        }
          
    };
  
    function fileOnload(e) {
      var result = e.target.result;
      localStorage.setItem('img', result);
      $("#imgSalida").attr("src", result);
      var image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        var height = image.height;
        var width = image.width;
        if (height > width+50){
          document.getElementById("imgSalida").classList.add('imgver');
          document.getElementById("imgSalida").classList.remove('imghor');
        }else{
            document.getElementById("imgSalida").classList.add('imghor');
            document.getElementById("imgSalida").classList.remove('imgver');
        }
      };
    }

  } 


}
