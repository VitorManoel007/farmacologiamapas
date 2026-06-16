import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, extname, basename } from 'path';

const dir = 'client/public/figmaAssets';

const files = readdirSync(dir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const input = join(dir, file);
  const outName = basename(file, extname(file)) + '.webp';
  const output = join(dir, outName);

  const beforeSize = statSync(input).size;
  totalBefore += beforeSize;

  await sharp(input)
    .webp({ quality: 82, effort: 4 })
    .toFile(output);

  const afterSize = statSync(output).size;
  totalAfter += afterSize;

  const saved = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(1);
  console.log(`${file} → ${outName}  ${(beforeSize/1024).toFixed(0)}KB → ${(afterSize/1024).toFixed(0)}KB  (-${saved}%)`);

  unlinkSync(input);
}

console.log(`\nTotal: ${(totalBefore/1024/1024).toFixed(2)}MB → ${(totalAfter/1024/1024).toFixed(2)}MB  (-${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(1)}%)`);
