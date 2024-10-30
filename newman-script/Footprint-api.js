const newman = require("newman");

newman.run({
  collection: "json-collection/Footprint Solutions.postman_collection.json",
  environment: "json-env/Footprint.postman_environment.json",
  reporters: ["cli", "htmlextra"],
});
