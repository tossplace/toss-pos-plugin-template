import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname } from "path";

import test from "@tossplace/pos-plugin-test"; // default import

// ESM에서 __dirname, require 대체
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ESM에서는 export default로 내보내야 함
export default test.createWebpackConfig(
    require(path.join(__dirname, "package.json"))
);
