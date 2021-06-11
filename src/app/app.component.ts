import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  async ngOnInit() {   
    $(document).ready(main);
    var contador = 0;
    function main (){

      $(window).resize(function() {
        if(screen.width <= 650){
          contador = 1;
          $('nav').attr('style','display:none !important');
        }else{
          $('nav').attr('style','display:flex !important'); 
          contador = 0;
        }
      })
      $('.nav-link').click(function(){
        if(screen.width <= 650){
          contador = 1;
          $('nav').attr('style','display:none !important');
        }
      })

	    $('.menu_bar').click(function(){
        if (contador == 1){
          $('nav').attr('style','display:flex !important'); 
          contador = 0;
        } else {
          contador = 1;
          $('nav').attr('style','display:none !important');
        }
          
      });
}
  }

}
