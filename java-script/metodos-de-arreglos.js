const datos = [
  { id: "1", nombre: "Documento_Final.pdf", extension: "pdf", tamanoMB: 15.5 },
  { id: "2", nombre: "Foto_Evento.png", extension: "png", tamanoMB: 4.2 },
  { id: "3", nombre: "Backup_BD.sql", extension: "sql", tamanoMB: 120.0 },
  { id: "4", nombre: "Presentacion_Avance.pptx", extension: "pptx", tamanoMB: 38.6 },
  { id: "5", nombre: "Notas_Reunion.txt", extension: "txt", tamanoMB: 0.8 },
  { id: "6", nombre: "Video_Demo.mp4", extension: "mp4", tamanoMB: 450.0 }
];

// 1. Filtrados
const filtrados = datos.filter(({ tamanoMB }) => (tamanoMB?.valueOf() ?? 0) > 20);

// 2. Total 
const total = datos.reduce((acc, { tamanoMB }) => acc + (tamanoMB ?? 0), 0);

// 3. Promedio
const promedio = total / datos.length;

// 4. Ordenados
const ordenados = [...datos].sort((a, b) => b.tamanoMB - a.tamanoMB);

console.log({ filtrados, total, promedio, ordenados });