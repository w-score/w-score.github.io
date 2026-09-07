/* アクセス解析（Google アナリティクス GA4）
   Google アナリティクスで発行される測定ID（G-XXXXXXXXXX）を下の GA_ID に書き込むと、
   全ページで計測が始まります。空のままなら何もしません。 */
var GA_ID = "G-CLNR9WGSGN";
if (GA_ID) {
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", GA_ID);
}
