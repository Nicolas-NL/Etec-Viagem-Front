import { ActivatedRoute } from '@angular/router';
import { ViagemService } from './../service/viagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exclusao-viagem',
  templateUrl: './exclusao-viagem.component.html',
  styleUrls: ['./exclusao-viagem.component.css']
})
export class ExclusaoViagemComponent implements OnInit {

  viagem : any;
  viagens: Array<any> = [];

  constructor(private service: ViagemService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.service.buscarPorId(this.route.snapshot.paramMap.get("id")).subscribe(e => this.viagem = e);
  }

}
