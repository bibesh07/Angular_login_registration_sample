import {Injectable} from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})

export class SharedServices{
  constructor(private location: Location){}

  goBack():void {
    this.location.back();
  }
}