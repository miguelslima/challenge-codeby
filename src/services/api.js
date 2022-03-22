/**
 *  This file is responsible to connect front-ent to back-end.
 *  I'm using a fixed url provide by a fake data server (JSON server),
 *  but in a real application I highly recommend use a .env file.
 */

import axios from "axios";

const getListUnderTen = async () => {
  try {
    const url = `http://localhost:3333/under-ten`;

    const result = await axios.get(url);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log("error when getListUnderTen => ", error);
  }
};

const getListOverTen = async () => {
  try {
    const url = `http://localhost:3333/over-ten`;

    const result = await axios.get(url);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log("error when getListOverTen => ", error);
  }
};

export { getListUnderTen, getListOverTen };
