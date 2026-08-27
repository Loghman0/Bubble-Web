const fs = require('fs');
const path = require('path');

const BOT_DATA_DIR = 'C:/Users/User/Desktop/Projects/Bubble/Bubblebot/src/data';
const WEB_DATA_DIR = 'C:/Users/User/Desktop/Projects/Bubble/website/src/data';
const PUBLIC_ASSETS_DIR = 'C:/Users/User/Desktop/Projects/Bubble/website/public/assets';

function processList(botFilename, webFilename, constName) {
    const data = require(path.join(BOT_DATA_DIR, botFilename));
    const arr = Array.isArray(data) ? data : (data.FISH || data.RODS || data.BAITS || data.PETS || data);

    const webFile = path.join(WEB_DATA_DIR, webFilename);
    let webContent = fs.readFileSync(webFile, 'utf8');
    const regex = new RegExp('const ' + constName + ': Record<string, any> = Object\\.fromEntries\\([\\s\\S]*?\\.map\\(\\([\\s\\S]*?\\)\\s*=>\\s*\\[[\\s\\S]*?\\],\\n\\);');

    // Convert array to a JS string literal format
    const arrStr = JSON.stringify(arr, null, 2);

    // Correct lexical errors for fish exactly like before
    let fixedArrStr = arrStr;
    if (botFilename === 'fish.js') {
        fixedArrStr = fixedArrStr.replace(/Jurassic Megaladon Pup/g, 'Jurassic Megalodon Pup');
        fixedArrStr = fixedArrStr.replace(/Silver Beam/g, 'Silver Bream');
        fixedArrStr = fixedArrStr.replace(/Theradfin Ranbowfish/g, 'Threadfin Rainbowfish');
        fixedArrStr = fixedArrStr.replace(/Phanton Ribbon Eel/g, 'Phantom Ribbon Eel');
        fixedArrStr = fixedArrStr.replace(/Frist Wyrm Fish/g, 'Frost Wyrm Fish');
    }

    const newBlock = 'const ' + constName + ': Record<string, any> = Object.fromEntries(\n  ' + fixedArrStr + '.map((x: any) => [x.id, x]),\n);';
    if (!regex.test(webContent)) {
        console.error('Failed to match regex for ' + constName + ' in ' + webFilename);
    } else {
        webContent = webContent.replace(regex, newBlock);
        fs.writeFileSync(webFile, webContent);
        console.log('✓ Synced ' + webFilename);
    }
}

try {
    processList('fish.js', 'fish.ts', 'FISH_DATA');
    processList('rods.js', 'rods.ts', 'ROD_DATA');
    processList('baits.js', 'baits.ts', 'BAIT_DATA');
    processList('pets.js', 'pets.ts', 'PET_DATA');

    for (let i = 0; i <= 10; i++) {
        const folder = path.join(PUBLIC_ASSETS_DIR, 'World' + i);
        if (!fs.existsSync(folder)) {
            fs.mkdirSync(folder, { recursive: true });
        }
    }
    console.log('✓ Created World[0-10] folders');
    console.log('All data synced successfully!');
} catch (e) {
    console.error(e);
}
