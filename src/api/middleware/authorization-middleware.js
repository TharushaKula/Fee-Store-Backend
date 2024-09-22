import ForbiddenError from "../../domain/errors/forbidden-error.js";

function authorizationMiddleware(req, res, next) {
  if (req.auth.claims.metadata.role !== 'admin') {
    throw new ForbiddenError('You are not allowed to access this resource');
  }

  next();
}

export default authorizationMiddleware;