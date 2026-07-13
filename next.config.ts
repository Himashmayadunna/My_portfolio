import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Auto-copy generated images from artifact directory to public folder during build/dev startup
const artifactDir = "C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\81c81f4b-ac19-4344-8573-a45e0a5538e6";
const filesToCopy = [
  { src: "bordlanka_1783950069984.png", dest: "bordlanka.png" },
  { src: "dailyscope_1783950083874.png", dest: "dailyscope.png" },
  { src: "carrent_1783950095643.png", dest: "carrent.png" },
  { src: "api_gateway_1783950109680.png", dest: "api-gateway.png" },
];

const publicDir = path.join(process.cwd(), "public");

filesToCopy.forEach((f) => {
  const srcPath = path.join(artifactDir, f.src);
  const destPath = path.join(publicDir, f.dest);
  try {
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Successfully copied ${f.src} to public/${f.dest}`);
    } else {
      console.warn(`Source file not found: ${srcPath}`);
    }
  } catch (err) {
    console.error(`Failed to copy ${f.src} to public/${f.dest}:`, err);
  }
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
