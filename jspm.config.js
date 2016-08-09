SystemJS.config({});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json"
  ],
  map: {
    "angular": "github:angular/bower-angular@1.5.5"
  },
  packages: {}
});
