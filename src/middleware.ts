import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { formatHostname } from './utils'

export function middleware(request: NextRequest) {
  // let schoolName = formatHostname(request.nextUrl.hostname)
  // console.log('School Name', schoolName)
  // if (schoolName === 'localhost')
  //   schoolName = process.env.NEXT_PUBLIC_SCHOOL_NAME as string
  // const cookie = request.cookies.get('registeredStudent')
  const response = NextResponse.next()
  // response.cookies.set('schoolName', `${schoolName}`)
  // if (typeof cookie === 'undefined') {
  //   response.cookies.set('registeredStudent', 'true')
  // }
  console.log(request.nextUrl.hostname);
  console.log(request.url)
  console.log(request.nextUrl)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
