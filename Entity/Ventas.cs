using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Ventas
    {
         [Key]
        public string id;
        public DateTime fecha;
        public Cliente cliente;
        public List<Producto> productos;
        public double total;
    }
}