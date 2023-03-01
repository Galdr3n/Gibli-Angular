import { Component, OnInit } from '@angular/core';
import { AppGibli } from '../app.interface';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-spisok',
  templateUrl: './spisok.component.html',
  styleUrls: ['./spisok.component.css']
})
export class SpisokComponent implements OnInit{
  spisok:AppGibli[] = [];

  constructor(private servissService: ServisService) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms():void {
   this.servissService.getgiblifilms()
   .subscribe(responseData => this.spisok = responseData);
  }
}
