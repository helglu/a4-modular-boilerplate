interface Roles {
  admin:string[];
  af:string[];
  all:string[];
  ce:any;
  op:string[];
  history:any;
  menu:string[];
}

interface AppCookies {
 appAuthCookie: string;
}


interface BConfigInterface {
  roles:Roles;
  appCookies: AppCookies;
}
