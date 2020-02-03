import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  serverId: number = 10;
  clicavel: number = 0;
  serverStatus: string = 'offline';
  name:string;
  serverCreated:boolean;

  constructor() { }

  ngOnInit() {
  }

  getServerId(){
    return this.serverId;
  }

  getServerStatus(){
    return this.serverStatus;
  }

  clickStatus(){
    this.clicavel = this.clicavel + 1;
    this.serverCreated = true;
  }

  inputEscrito(status: string){
    this.serverStatus = status;
    this.serverCreated = false;
  }

}
