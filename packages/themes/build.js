import run from "@h0onnn/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
