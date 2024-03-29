import dal_mysql from "../utils/dal_mysql";

const createCodeBlocksTable = () => {
  const SQLcommand = `
    CREATE TABLE IF NOT EXISTS code_blocks (
      id INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(45) NOT NULL,
      code VARCHAR(256) NOT NULL,
      entrances VARCHAR(256) NULL,
      PRIMARY KEY (id));`;
  const response = dal_mysql.execute(SQLcommand);
};

const getAllCodeBlocks = async () => {
  const SQLcommand = `
      SELECT * FROM online_coding.code_blocks;
      `;
  return await dal_mysql.execute(SQLcommand);
};

const getEntrancesById = async (id: number) => {
  return await dal_mysql.execute(
    `SELECT entrances FROM online_coding.code_blocks where id=${id}`
  );
};

const addEntranceByCodeBlockId = async (id: number, timestamp: string) => {
  return await dal_mysql.execute(
    `UPDATE
    online_coding.code_blocks 
   SET
    entrances = '${timestamp}'
   WHERE
    id=${id}`
  );
};

const getCodeBlockById = async (id: number) => {
  return await dal_mysql.execute(
    `SELECT * FROM online_coding.code_blocks where id=${id}`
  );
};

export default {
  createCodeBlocksTable,
  getAllCodeBlocks,
  getEntrancesById,
  getCodeBlockById,
  addEntranceByCodeBlockId,
};
