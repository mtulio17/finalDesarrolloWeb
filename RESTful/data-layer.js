class DataLayer {
    constructor() {
      // Simulación de conexión a una base de datos.
      this.data = [];
    }
  
    insertData(item) {
      // Simulación de la inserción de datos en una base de datos.
      this.data.push(item);
    }
  
    fetchData() {
      // Simulación de la obtención de datos de una base de datos.
      return this.data;
    }
  }
  
  module.exports = new DataLayer();
  