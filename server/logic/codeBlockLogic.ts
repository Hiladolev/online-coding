import dal_mysql from "../utils/dal_mysql";
import { OkPacket } from "mysql";

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
