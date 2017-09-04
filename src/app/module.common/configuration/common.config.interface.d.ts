interface Alerts {
  dismissOnTimeout:number;
}
interface Delay {
  timer:number;
}

interface ApiBaseUrls {
  baseUrl:string;
}

interface Logout {
  timer:number
}

interface DefaultHeaders{
  'Content-type':string
}

interface CommonConfigInterface {
  alerts:Alerts;
  logout:Logout;
  delay:Delay;
  apiBaseUrls:ApiBaseUrls;
  defaultHeaders:DefaultHeaders;
}
