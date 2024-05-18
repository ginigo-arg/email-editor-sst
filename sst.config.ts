import { SSTConfig } from "sst";
import { FrontendStack } from "./stacks/FrontendStack";
import { IAM } from "./stacks/OpenIDConnectStack";

export default {
  config(_input) {
    return {
      name: "email-editor-sst",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(FrontendStack);
  },
} satisfies SSTConfig;
