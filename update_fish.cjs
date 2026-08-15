const fs = require('fs');

const botFishPath = 'c:/Users/User/Desktop/Projects/Bubble/Bubblebot/src/data/fish.js';
let botFishContent = fs.readFileSync(botFishPath, 'utf8');

// The fish array starts at `const FISH = [` and goes to `];\n\nmodule.exports = FISH;`
const arrayMatch = botFishContent.match(/const FISH = (\[[\s\S]*?\]);\s*module\.exports/);
if (!arrayMatch) {
    console.log('Failed to extract and patch FISH array.');
    process.exit(1);
}

let fishArrayString = arrayMatch[1];

// Fix lexical errors in names
fishArrayString = fishArrayString.replace(/name: 'Jurassic Megaladon Pup'/g, "name: 'Jurassic Megalodon Pup'");
fishArrayString = fishArrayString.replace(/name: 'Silver Beam'/g, "name: 'Silver Bream'");
fishArrayString = fishArrayString.replace(/name: 'Theradfin Ranbowfish'/g, "name: 'Threadfin Rainbowfish'");
fishArrayString = fishArrayString.replace(/name: 'Phanton Ribbon Eel'/g, "name: 'Phantom Ribbon Eel'");
fishArrayString = fishArrayString.replace(/name: 'Frist Wyrm Fish'/g, "name: 'Frost Wyrm Fish'");

// Update the Bot's fish.js
botFishContent = botFishContent.replace(arrayMatch[1], fishArrayString);
fs.writeFileSync(botFishPath, botFishContent);

// Now update the website's fish.ts
const websiteFishPath = 'c:/Users/User/Desktop/Projects/Bubble/website/src/data/fish.ts';
const websiteFishContent = fs.readFileSync(websiteFishPath, 'utf8');

const websiteMatch = websiteFishContent.match(/const FISH_DATA: Record<string, any> = Object\.fromEntries\([\s\S]*?\.map\(\(f\) => \[f\.id, f\]\),\n\);/);

if (!websiteMatch) {
    console.log('Failed to find FISH_DATA block in website.');
    process.exit(1);
}

let newBlock = 'const FISH_DATA: Record<string, any> = Object.fromEntries(\n  ' + fishArrayString + '.map((f) => [f.id, f]),\n);';
fs.writeFileSync(websiteFishPath, websiteFishContent.replace(websiteMatch[0], newBlock));

console.log('Successfully ported FISH_DATA and updated both files!');
