import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from '../../models/clientes';

@Component({
  selector: 'app-cliente-registro',
  templateUrl: './cliente-registro.component.html',
  styleUrls: ['./cliente-registro.component.css']
})
export class ClienteRegistroComponent implements OnInit {

  cliente: Clientes;
  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.cliente = new Clientes();
  }

  add () {
    this.clientesService.post(this.cliente).subscribe(p => {
      if (p != null) {
      alert('cliente creado!');
      this.cliente = p;
      }
    });
  }

}
