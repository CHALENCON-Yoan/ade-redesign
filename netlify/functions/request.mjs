export default async (req, context) => {
  try {
    const url = new URL(req.url);
    url.host = "ade-uga-ro-vs.grenet.fr";
    url.pathname = "/jsp/webapi";
    
    const res = await fetch(url);
    
    return new Response(res.body, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
    });
  } catch (e) {
    console.error(e);
    return new Response("Une erreur est survenue", { status: 400 });
  }
};

export const config = {
  path: "/test",
};
