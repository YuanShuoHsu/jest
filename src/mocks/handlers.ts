// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.get("/fake-data", (req, res, ctx) => {
    return res(ctx.json(["1", "2", "3"]));
  }),
];
