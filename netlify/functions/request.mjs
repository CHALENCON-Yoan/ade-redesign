export default async (req, context) => {
  try {
    console.log("test");
    console.log(req);
    
    const url = new URL(req.url);
    url.host = "ade-uga-ro-vs.grenet.fr";
    url.pathname = "/jsp/webapi";
    
    const res = await fetch(url);
    res.headers.set("Access-Control-Allow-Origin", "*");

    return new Response(res.body, {
        headers: res.headers,
    });
  } catch (e) {
    console.error(e);
    return new Response("Une erreur est survenue", { status: 400 });
  }
};

// export const config = {
//   path: "/request",
// };
