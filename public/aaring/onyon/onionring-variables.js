// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
// NOW , YOU MUST CREATE A VESSEL.

// NAME THE CREATOR.
var wname = [
    'Roxy',
    'Kitsune',
    'Hal',
    'AY',
    'nagisa',
    'WencesByte',
    'sidney citrus'
];

// AND THEIR VESSEL?
var sname = [
    'Action97',
    'Ichinisanhai',
    'HAL',
    `AY's site`,
    'nagisako',
    'wencesbyte.net',
    'SIDNEYSCAPE'
];

// SELECT THE LINK THAT YOU PREFER.
var sites = [
    'https://bloxy97.nekoweb.org/',
    'https://ichinisanhai.nekoweb.org/',
    'https://hal.nekoweb.org/',
    'https://ay-3-8910-online.w10.site/',
    'https://nagisako.neocities.org',
    'https://wencesbyte.net',
    'https://sidneyscape.space/'
];

// SELECT THE IMAGE THAT YOU PREFER.
var sbutton = [
    'https://bloxy97.nekoweb.org/images/button.gif',
    'https://ichinisanhai.nekoweb.org/MyLilAreaButton.jpeg',
    'https://hal.nekoweb.org/sitebutton.png',
    'https://files.catbox.moe/l3g0r4.png',
    'https://nagisako.neocities.org/images/buttons/taskbar/blonde%20moment.jpg',
    'https://wencesbyte.net/img/webbutton.gif',
    'https://sidneyscape.space/sidneyscape-button.gif'
];

// HOW WOULD YOU DESCRIBE YOUR VESSEL? (IT WILL NOT HEAR.)
var desc = [
'this is where i put all of my slop and sludge and endeavors. you might be here.',
'aero :)',
`A comprehensive personal blog (that's more like a wiki in reality)`,
'A random site where I put my stuff I guess',
'peach-scented princess castle',
'My personal site with programs, games, art and more stuff!',
'my personal cityscape, home to my art, characters, and anything that interests me!'
];

// NOW, GIVE IT A GIFT.
var tags = [
    `（　´∀｀）`,
    `（　´∀｀）`,
    `（　´∀｀）`,
    ``,
    `<丶｀∀´>`,
    '',
    `（　´∀｀） (14+)`
];

//the name of the ring
var ringName = 'AAring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'AAring';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://bloxy97.nekoweb.org/aaring/';

//should the widget include a random button?
var useRandom = true;
