import { Response } from "express";

declare global {
  namespace Express {
    interface Response {
      htmxRedirect: (redirectPath: string) => void;
    }
  }
}