import { Pipe, PipeTransform } from '@angular/core';
import { Clientes } from '../gymnasio/models/clientes';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroClientePipe implements PipeTransform {

  transform(cliente: Clientes[], searchText: string): any {
    if (searchText == null) { return cliente; }
    return cliente.filter(p => p.nombreCliente.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      );
  }

}
