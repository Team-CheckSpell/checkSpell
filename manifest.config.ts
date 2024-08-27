import packageJson from "./package.json";
import { defineManifest } from "@crxjs/vite-plugin";

export default defineManifest(async () => ({
  manifest_version: 3,
  name: `__${packageJson.name}__`,
  version: packageJson.version,
  description: `__${packageJson.description}__`,
  //options_page: 'src/pages/options/index.html',
  // background: {
  //   service_worker: 'src/pages/background/index.js',
  //   type: 'module',
  // },
  action: {
    default_popup: "src/pages/popup/index.html",
    //default_icon: "icon-34.png",
  },
  permissions: ["storage"],
  //   icons: {
  //     "128": "icon-128.png",
  //   },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/main.tsx"],
      //css: ["assets/css/contentStyle.chunk.css"],
    },
  ],
  //   web_accessible_resources: [
  //     {
  //       resources: [
  //         "assets/js/*.js",
  //         "assets/css/*.css",
  //         "icon-128.png",
  //         "icon-34.png",
  //       ],
  //       matches: ["*://*/*"],
  //     },
  //   ],
}));