import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "src");

const EXPORT_ROOTS = [
  { name: "components", dir: "components" },
  { name: "hooks", dir: "hooks" },
];

const IGNORE_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "__tests__",
  "__mocks__",
]);

const exportMap = {
  ".": {
    import: "./dist/index.js",
    types: "./dist/index.d.ts",
  },
};

/* ---------------- utilities ---------------- */

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

function hasIndexFile(dir) {
  return (
    fs.existsSync(path.join(dir, "index.ts")) ||
    fs.existsSync(path.join(dir, "index.tsx"))
  );
}

/* ---------------- core logic ---------------- */

function walk(dir, basePath) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items
    .filter((i) => i.isDirectory())
    .filter((i) => !IGNORE_DIRS.has(i.name))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((item) => {
      const absPath = path.join(dir, item.name);
      const exportPath = path.posix.join(basePath, toKebabCase(item.name));
      if (hasIndexFile(absPath)) {
        const key = `./${exportPath}`;

        exportMap[key] = {
          import: `./dist/${exportPath}/index.js`,
          types: `./dist/${exportPath}/index.d.ts`,
        };
      }

      walk(absPath, exportPath);
    });
}

/* ---------------- run ---------------- */

EXPORT_ROOTS.forEach(({ name, dir }) => {
  const absDir = path.join(SRC_DIR, dir);
  if (fs.existsSync(absDir)) {
    walk(absDir, name);
  }
});

const pkgPath = path.join(ROOT, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
pkg.exports = exportMap;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log("✅ Exports generated:");
console.log(Object.keys(exportMap));
