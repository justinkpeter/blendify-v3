import { getToken } from 'next-auth/jwt'
import { NextResponse } from "next/server";

export async function middleware(req){

    console.log('inside middleware')
    // token will exist only if user is logged in
    const token = await getToken({req, secret: process.env.JWT_SECRET})
    const {pathname} = req.nextUrl

    // allow requests if the following is true
    // 1. a request is made for next-auth session & provider fetching
    // 2. token exists (user is logged in)

    if(pathname.includes('/api/auth') || token){
        // open the golden gates and let them through
        return NextResponse.next()
    }

    // redirect them to login if they don't have a token AND are requesting a protected route
    if(!token && pathname !== "/login"){
        return NextResponse.redirect(new URL('/login', req.url))
    }


}

export const config = {
    matcher: '/',
}



// import { getToken } from 'next-auth/jwt'
// import { NextResponse } from 'next/server'
//
// export async function middleware(req) {
//     const url = req.nextUrl.clone()
//     url.pathname = '/login'
//     // token will exist if the user is logged in
//     const token = await getToken({ req, secret: process.env.JWT_SECRET })
//     const PUBLIC_FILE = /\.(.*)$/
//     const { pathname } = req.nextUrl
//
//     // ALlow the request if the following is true:
//     // 1) it's a request to next-auth session
//     // 2) the token exists
//
//     if (pathname.includes('/api/auth') || token) {
//         return NextResponse.next()
//     }
//
//     // redirect to login page if the user is not logged in and they are requesting a protected routeing a protected route
//     if (!token && pathname !== url.pathname &&
//         !PUBLIC_FILE.test(req.nextUrl.pathname)) {
//         return NextResponse.rewrite(url)
//     }
// }

