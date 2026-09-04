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

    const typeDefEnd = webContent.indexOf(' = Object.fromEntries(', webContent.indexOf('const ' + constName + ':'));
    if (typeDefEnd === -1) {
        console.error('Failed to match signature for ' + constName + ' in ' + webFilename);
    } else {
        const blockStart = webContent.lastIndexOf('const ' + constName + ':', typeDefEnd);
        const signature = webContent.slice(blockStart, typeDefEnd + ' = Object.fromEntries('.length);
        const newBlock = signature + '\n  (\n    ' + fixedArrStr + ' as any[]\n  ).map((x: any) => [x.id, x]),\n);';

        const blockEnd = webContent.indexOf('\n);\n', blockStart);
        if (blockEnd !== -1) {
            webContent = webContent.slice(0, blockStart) + newBlock + webContent.slice(blockEnd + 4);
            fs.writeFileSync(webFile, webContent);
            console.log('✓ Synced ' + webFilename);
        } else {
            console.error('Failed to find end of block for ' + constName);
        }
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
