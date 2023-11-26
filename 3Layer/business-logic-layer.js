class BusinessLogic {
    constructor() {
      this.data = [];
    }
  
    addData(item) {
      this.data.push(item);
    }
  
    processData() {
      // Función para procesar los datos
      this.data.forEach(item => {
        console.log(`Procesando en business logic layer: ${item}`);
      });
    }
  
    getData() {
      return this.data;
    }
  }
  
  module.exports = new BusinessLogic();
  