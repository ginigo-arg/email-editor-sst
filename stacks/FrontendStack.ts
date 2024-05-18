import { StackContext, Api, EventBus, StaticSite } from "sst/constructs";

export function FrontendStack({ stack }: StackContext) {
  const web = new StaticSite(stack, "Vite-site", {
    path: "packages/email-frontend",
    buildOutput: "/dist",
    buildCommand: "npm run build",
  });
  stack.addOutputs({
    Msg: "Frontend email-editor already",
    Stack: "Stack frontend",
    Web: web.url,
  });
}
