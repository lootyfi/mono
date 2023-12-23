// generate me a route for the login api endpoint with params: walletAddress, signature, timestamp just as a proxy call to the nestjs backend
// this is the route that the frontend will call to login
// the backend will then verify the signature and return a jwt token
// the frontend will then store the jwt token in local storage and use it for all future requests

// import { LoginRequest, LoginResponse } from "./types";

// export const loginRoute = new Route<LoginRequest, LoginResponse>({
//   method: "POST",
//   url: "/api/login",
//   authenticated: false,
// });