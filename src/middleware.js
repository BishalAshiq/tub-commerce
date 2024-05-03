import { NextResponse } from 'next/server'

// Limit the middleware to paths starting with `/api/`
export const config = {
    matcher: ['/customer-dashboard'],
}

export function middleware(request) {
    // console.log(request.cookies.getAll().length);
    if (request.cookies.getAll().length == 0) {
        return NextResponse.redirect(new URL('/login', request.url).toString(), { status: 307 });
    }
    else {
        // console.log(request.cookies.get('refreshToken')?.value);
        if (request.cookies.get('token')?.value != undefined) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/login', request.url).toString(), { status: 307 });
        }
    }
}