export async function GET() {
  return new Response("<h1>Hello, World!</h1>", {
    status: 200,
    headers: new Headers({
      "Content-Type": "text/html",
    }),
  });
}
