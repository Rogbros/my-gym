import { Request, Response, NextFunction } from "express";

function customResponseHandlers(req: Request, res: Response, next: NextFunction) {

  res.htmxRedirect = function(redirectPath) {
    if(req.get("hx-request")) {
      res.set("hx-redirect", redirectPath);
      res.set("hx-refresh", "true");
      res.redirect(redirectPath);
    }
  }

  next();
}

export {
  customResponseHandlers,
}