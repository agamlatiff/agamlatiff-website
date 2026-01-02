import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to dynamically import sharp
const importSharp = async () => {
  try {
    const sharp = await import("sharp");
    return sharp.default;
  } catch (err) {
    console.error("\x1b[31m%s\x1b[0m", 'Error: "sharp" library not found.');
    console.log("Please install it by running:");
    console.log("\x1b[36m%s\x1b[0m", "npm install sharp");
    process.exit(1);
  }
};

const convertImages = async () => {
  const sharp = await importSharp();
  const publicDir = path.join(__dirname, "../public");

  // Folders to scan (based on project structure)
  const folders = [
    "hiredio",
    "flyhigher",
    "sukabaca",
    "alizonstore",
    "saturday",
    "upskills",
  ];

  console.log("\x1b[36m%s\x1b[0m", "🚀 Starting WebP conversion...");

  let totalConverted = 0;
  let totalSavedBytes = 0;

  for (const folder of folders) {
    const dirPath = path.join(publicDir, folder);

    if (!fs.existsSync(dirPath)) {
      console.log(`Skipping ${folder} (directory not found)`);
      continue;
    }

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const inputPath = path.join(dirPath, file);
        const outputPath = inputPath.replace(/\.(png|jpg|jpeg)$/i, ".webp");

        // Skip if webp already exists and is newer
        if (fs.existsSync(outputPath)) {
          // console.log(`Skipping ${file} (WebP already exists)`);
          continue;
        }

        try {
          const statsBefore = fs.statSync(inputPath);

          await sharp(inputPath)
            .webp({ quality: 80 }) // 80 is a good balance for web
            .toFile(outputPath);

          const statsAfter = fs.statSync(outputPath);
          const saved = statsBefore.size - statsAfter.size;
          totalSavedBytes += saved;
          totalConverted++;

          console.log(
            `✅ Converted: ${folder}/${file} ` +
              `(${(statsBefore.size / 1024).toFixed(1)}KB -> ${(
                statsAfter.size / 1024
              ).toFixed(1)}KB) ` +
              `Saved: ${((saved / statsBefore.size) * 100).toFixed(1)}%`
          );
        } catch (err) {
          console.error(`❌ Failed to convert ${file}:`, err.message);
        }
      }
    }
  }

  console.log("\n\x1b[32m%s\x1b[0m", "🎉 Conversion Complete!");
  console.log(`Total images: ${totalConverted}`);
  console.log(
    `Total space saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB`
  );
};

convertImages();
