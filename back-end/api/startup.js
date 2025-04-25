import { db } from "./connect.js";
import { insertMany } from "./insertMany.js";

// Função para verificar se o banco já tem dados
async function checkAndInsertData() {
  try {
    // Verificar se já existem documentos nas coleções
    const artistCount = await db.collection("artists").countDocuments();
    const songCount = await db.collection("songs").countDocuments();

    // Se não existirem dados, insere
    if (artistCount === 0 && songCount === 0) {
      console.log("Database is empty. Inserting initial data...");
      await insertMany();
    } else {
      console.log("Database already has data. Skipping insertion.");
      console.log(`Artists: ${artistCount}, Songs: ${songCount}`);
    }
  } catch (error) {
    console.error("Error during data initialization:", error);
  }
}

export { checkAndInsertData };
