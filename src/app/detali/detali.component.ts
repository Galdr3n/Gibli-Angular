import { Component, OnInit, Input } from '@angular/core';
import { AppGibli } from '../app.interface';
import { ServisService } from '../servis.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detali',
  templateUrl: './detali.component.html',
  styleUrls: ['./detali.component.css']
})
export class DetaliComponent implements OnInit{
  @Input() film?: AppGibli;
  constructor(private route: ActivatedRoute, private servis: ServisService, private location: Location){
  }

  ngOnInit(): void {
    this.getFilm();
  }
  getFilm(): void{
  const id = String(this.route.snapshot.paramMap.get('id'));
  this.servis.getgiblifilm(id)
  .subscribe(responseData => this.film = responseData);
 }

  goBack(): void {
  this.location.back();
 }
}
