export const readCookie = function (name) {
  var nameEQ = name + "=";
  var ca = typeof window == "object" ? document.cookie.split(";") : "";
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};


export const getGAClientID = () => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "_ga") {
        return decodeURIComponent(value);
      }
    }
    return null;
  };


export const generateCookie = async () => {
    const { cookie, referrer, URL } = document;
    const { userAgent } = navigator;
    const payload = {};
    Object.assign(payload, {
      cookie,
      referrer,
      url: URL,
      localreferrer: (sessionStorage?.prevPath || "").trim(),
      userAgent,
    });
  
    const channelMap = {
      cloudtail: "cloudtail",
      "instamojo-vs": "instamojo-vs",
      flipkart: "flipkart",
    };
    const URLParts = URL.split("?");
    const channel = Object.keys(channelMap).find((key) => URL.includes(key));
    if (URLParts.length === 1 && channel) {
      payload["channel"] = channelMap[channel];
    }
    return payload;
  };