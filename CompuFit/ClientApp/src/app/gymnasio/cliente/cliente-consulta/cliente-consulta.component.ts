import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from '../../models/clientes';

@Component({
  selector: 'app-cliente-consulta',
  templateUrl: './cliente-consulta.component.html',
  styleUrls: ['./cliente-consulta.component.css']
})
export class ClienteConsultaComponent implements OnInit {

  clientes: Clientes[];
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.get().subscribe(result => {
      this.clientes = result;
    });
  }

}
