import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {

    }

    private options: any = {
        observe: 'body' as const,
    }

    public getOnlyUrl(url: string): any {
        return this.http.get(url, this.options);
    }
}