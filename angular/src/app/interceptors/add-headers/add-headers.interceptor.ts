import { HttpInterceptorFn } from '@angular/common/http';

export const addHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedRequest = req.clone({
    setHeaders: {
      Accept: 'application/json',
    },
    // withCredentials: true, à activer pour une authentification par cookies
  });

  return next(modifiedRequest);
};
