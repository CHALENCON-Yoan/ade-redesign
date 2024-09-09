export default async (req, context) => {
    const url = new URL(req.url);
    url.host = "ade-uga-ro-vs.grenet.fr";
    url.pathname = "/jsp/webapi"
    
    const res = await fetch(url);
    res.headers.set("Access-Control-Allow-Origin", "*");
    return res;
  };
  
  export const config = {
    path: "/request",
  };