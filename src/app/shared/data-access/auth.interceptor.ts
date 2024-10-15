import { HttpInterceptorFn } from "@angular/common/http";
import { CacheService } from "./cache.service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const cacheSrv = inject(CacheService);
    const token = cacheSrv.get('accessToken');
    request = request.clone({
        setHeaders: {
            Authorization: token ? `Token ${token}` : ''
        },
    })
    return next(request)
    
} 