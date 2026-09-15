const fs = require('fs');
['src/data/rods.ts', 'src/data/baits.ts', 'src/data/pets.ts', 'src/data/fish.ts'].forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('}, ,')) {
        console.log(`ERROR: Double comma found in ${file}`);
    } else if (content.match(/\},\s*,\s*\{/)) {
        console.log(`ERROR: Double comma (regex match) found in ${file}`);
    } else {
        console.log(`${file} looks clean for double commas.`);
    }

    if (content.includes(', \n]') || content.includes(',\n]')) {
        console.log(`WARNING: trailing comma before end bracket in ${file}`);
    }
});
