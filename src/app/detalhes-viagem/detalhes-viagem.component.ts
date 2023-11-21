import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViagemService } from '../service/viagem.service';

@Component({
  selector: 'app-detalhes-viagem',
  templateUrl: './detalhes-viagem.component.html',
  styleUrls: ['./detalhes-viagem.component.css']
})
export class DetalhesViagemComponent implements OnInit {

  viagem : any;
  viagens: Array<any> = [];

  constructor(private route : ActivatedRoute, private service : ViagemService) { }

  ngOnInit() {
    this.service.buscarPorId(this.route.snapshot.paramMap.get("id")).subscribe(e => this.viagem = e);
}
}
