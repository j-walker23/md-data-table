SystemJS.config({
  packages: {}
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json"
  ],
  map: {
    "angular": "github:angular/bower-angular@1.5.5",
    "angular-material": "github:angular/bower-material@1.0.8"
  },
  packages: {
    "github:angular/bower-angular-animate@1.5.5": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.5"
      }
    },
    "github:angular/bower-angular-aria@1.5.5": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.5"
      }
    },
    "github:angular/bower-material@1.0.8": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.5",
        "angular-animate": "github:angular/bower-angular-animate@1.5.5",
        "angular-aria": "github:angular/bower-angular-aria@1.5.5",
        "css": "github:systemjs/plugin-css@0.1.21"
      }
    }
  }
});
