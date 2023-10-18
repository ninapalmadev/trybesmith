const validLogin = {
  "username": "Hagar",
  "password": "terrível"
};

const loginWithoutUsername = {
  "password": "terrível"
};

const validResponse = {
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkhhZ2FyIn0sImlhdCI6MTY4OTE5MDI2NX0.sW2n4M1PB-rd5KpKM97XqOP9D73uBHD_4LgywCvI3zA"
};

const validLoginMock = {
  responseMessage:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxLCJ1c2VybmFtZSI6IkhhZ2FyIn0sImlhdCI6MTY4OTE5MDI2NX0.sW2n4M1PB-rd5KpKM97XqOP9D73uBHD_4LgywCvI3zA",
  statusCode: 200,
};

const invalidLoginMock = {
  responseMessage:"\"username\" and \"password\" are required",
  statusCode: 400,
};

const findOne:any = {
  id:1,
  userName: 'Hagar',
};

export default {
  validLogin,
  loginWithoutUsername,
  validResponse,
  validLoginMock,
  invalidLoginMock,
  findOne,
};