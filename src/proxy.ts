import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Redirection pour forcer HTTPS
  if (url.protocol === "http:" && process.env.NODE_ENV === "production") {
    url.protocol = "https:";
    return NextResponse.redirect(url);
  }

  // Redirection des anciennes URLs si nécessaire
  const redirects: Record<string, string> = {
    "/about": "/#atouts",
    "/about-us": "/#atouts",
    "/a-propos": "/#atouts",
    "/portfolio": "/nos-realisations",
    "/work": "/nos-realisations",
    "/services": "/",
    "/vitrine": "/projets",
    "/e-commerce": "/projets",
  };

  const pathname = url.pathname;
  if (redirects[pathname]) {
    const [target, hash] = redirects[pathname].split("#");
    url.pathname = target;
    url.hash = hash ? `#${hash}` : "";
    return NextResponse.redirect(url, 301); // Redirection permanente
  }

  // Supprimer les trailing slashes sauf pour la page d'accueil
  if (pathname !== "/" && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
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
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
