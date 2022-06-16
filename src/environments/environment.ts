// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseApiUrl: "http://localhost:8080",
};

export const  apiKeyConfig= {
 weatherApiKey:'https://api.openweathermap.org/data/2.5/weather?lat=35.925064&lon=-86.868889&appid=629739f6bd1c5cb13bebb03e118e7847&units=imperial',
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
