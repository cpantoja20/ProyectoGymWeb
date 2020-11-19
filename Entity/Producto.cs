using System;
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Producto
    {
        [Key]
        public string id{ get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public int cantidad { get; set; }
        public decimal precio_compra { get; set; }
        public decimal precio_venta { get; set; }
    }
}