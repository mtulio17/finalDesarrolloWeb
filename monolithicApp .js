// MonolithicApp 

class MonolithicApp {
    constructor() {
      this.data = [];
    }
  
    addData(item) {
      this.data.push(item);
    }
  
    processData() {
      // Función para procesar los datos
      this.data.forEach(item => {
        console.log(`Procesando: ${item}`);
      });
    }
  
    displayData() {
      // Función para mostrar los datos
      this.data.forEach(item => {
        console.log(item);
      });
    }
  }
  
  // Uso de la aplicación monolítica
  const app = new MonolithicApp();
  app.addData("Dato 1");
  app.addData("Dato 2");
  app.processData();
  app.displayData();
  
  