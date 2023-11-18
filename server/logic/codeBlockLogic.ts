import dal_mysql from "../utils/dal_mysql";
import { OkPacket } from "mysql";

const getAllCodeBlocks = async () => {
  const SQLcommand = `
      SELECT * FROM online_coding.code_blocks;
      `;
  return await dal_mysql.execute(SQLcommand);
};
