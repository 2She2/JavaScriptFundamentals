function Solve(input) {
    var N = parseInt(input[0]);
    var W = parseInt(input[1]);
    var text = '';

    for (var i = 2; i < input.length; i++) {
        text += (' ' + input[i]);
    }

    text = text.split(' ');
    text = removeEmptyElements(text);
    var i = 0;

    var currentLineLength = 0;
    var lines = [];
    var linesIndex = 0;
    var curLine = '';
    var neededSpaces = 0;
    var curWords = [];
    var isEndReached = false;

    for (var i = 0; i < text.length; i++) {
        var curWord = text[i];
        currentLineLength += curWord.length;

        if ((currentLineLength + curWords.length - 1) < W) {
            curLine += curWord;
            curWords.push(curWord);

            if (i != text.length - 1) {
                continue;
            } else {
                isEndReached = true;
            }

            
        }

            i--;

        neededSpaces = W - curLine.length;

        var curSpaces = 0;

        lines[linesIndex] = '';
        for (var j = 0; j < curWords.length - 1; j++) {
            lines[linesIndex] += curWords[j];

            var wholeNumber = Math.ceil(neededSpaces / (curWords.length - 1));
            curSpaces = wholeNumber;

            neededSpaces--;

            var spcsCount = curSpaces + 1;
            var spcs = new Array(spcsCount);
            lines[linesIndex] += spcs.join(' ');

        }
        lines[linesIndex] += curWords[curWords.length - 1];

        linesIndex++;

        // set to 0
        curLine = '';
        curWords = [];
        currentLineLength = 0;
        neededSpaces = 0;

        if (isEndReached == true) {
            break;
        }
    }

    var result = '';

    for (var i = 0; i < lines.length; i++) {
        result += (lines[i] + '\n');
    }

    return result;


    function removeEmptyElements(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == '') {
                array.splice(i, 1);
                i--;
            }
        }

        return array;
    };
}

var input1 = [
    '5',
    '20',
    'We happy few        we band',
    'of brothers for he who sheds',
    'his blood',
    'with',
    'me shall be my brother'
];

var input2 = [
    '10',
    '18',
    'Beer beer beer Im going for',
    '   a',
    'beer',
    'Beer beer beer Im gonna',
    'drink some beer',
    'I love drinkiiiiiiiiing ',
    'beer',
    'lovely ',
    'lovely',
    'beer'
];

var input3 = [
    '12',
    '34',
    'Dovahkiin Dovahkiin naal ok zin los vahriin    Wah dein vokul mahfaeraak ahst vaal    Ahrk fin norok paal graan fod nust hon',
    'zindro zaan    Dovahkiin fah hin kogaan mu draal      Huzrah nu kul do od wah aan bok lingrah vod    Ahrk fin tey boziik fun do fin gein    Wo lostfron wah ney dov',
    'ahrk fin reyliik do jul    Voth',
    'aan suleyk wah ronit faal krein      Ahrk fin zul rok drey kod nau tol morokei frod    Rul lot Taazokaan motaad voth kein    Sahrot Thuum med aan tuz vey zeim hokoron pah    Ol fin Dovakiin komeyt ok rein      Chorus    Dovahkiin Dovahkiin naal ok zin los vahriin    Wah dein vokul mahfaeraak ahst vaal    Ahrk fin norok paal graan fod nust hon zindro zaan    Dovahkiin fah hin kogaan mu draal      Ahrk fin Kel lost prodah do ved viing ko fin krah    Tol',
    'fod zeymah win kein meyz fuundein    Alduin feyn do jun kruziik vokun staadnav    Voth aan bahlok wah diivon fin lein      Nuz aan sul fent alok fod fin vul dovah nok    Fen kos nahlot mahfaeraak ahrk ruz    Paaz Keizaal fen kos stin nol bein Alduin jot    Dovahkiin kos fin saviik do muz   ',
    '  Chorus    Dovahkiin Dovahkiin naal ok zin los vahriin    Wah dein vokul mahfaeraak ahst vaal    Ahrk fin norok paal graan fod nust hon zindro zaan    Dovahkiin fah hin kogaan mu draa    Lyrics in English   From httpwwwelyricsnet   Dragonborn Dragonborn by his honor is sworn    To keep evil forever at bay    And the fiercest foes rout when they hear triumphs shout    Dragonborn for your blessing we pray      Hearken now sons of snow to an age long ago    And the tale boldly told of the one    Who was kin to both wyrm and the races of man    With a power to rival the sun      And the voice he',
    'did wield on that glorious field    When great Tamriel shuddered with war    Mighty Thuum like a blade cut through enemies all    As the Dragonborn issued his roar      Dragonborn Dragonborn by his honor is sworn    To keep',
    'evil forever at bay    And the fiercest foes rout when they hear triumphs shout    Dragonborn for your blessing we pray    ',
    ' And the Scrolls have foretold of black wings in the cold    That when brothers wage war come unfurled    Alduin Bane of Kings ancient shadow unbound    With a hunger to swallow the world      But a day shall arise when the dark dragons lies    Will be silenced forever and then    Fair Skyrim will be free from foul Alduins maw    Dragonborn be the savior of men      Dragonborn Dragonborn by his honor is sworn    To',
    'keep evil forever at bay    And',
    'the fiercest foes rout when they hear triumphs',
    'shout    Dragonborn for your blessing we pray'
];

var input4 = [
'82',
'15',
'The history',
'of bullets',
'far predates the history',
'of',
'firearms Originally bullets',
'were metallic stone or',
'purposemade clay balls used as',
'sling ammunition as weapons and for',
'hunting',
'Eventually as firearms were developed these same items were placed in front',
'of a',
'propellant charge of gunpowder at the end of a',
'closed tube As firearms became more technologically',
'advanced from  to',
' bullets changed very',
'little They',
'remained',
'simple round',
'spherical',
'lead',
'balls called',
'rounds',
'differing only in their diameter  ',
'     Matchlock',
'musket balls',
'alleged to have been discovered at Naseby battlefield From the collection of',
'Night of the Museum and Art',
'Gallery ',
'The',
'development of',
'the hand culverin and',
'matchlock arquebus brought about the use of cast lead balls',
'as projectiles Bullet is derived',
'from the',
'French word',
 'boulette',
'which',
'roughly',
'means little',
'ball The original musket bullet was a spherical lead ball smaller than the bore',
'wrapped in a loosely fitted paper patch',
'which served to hold the bullet',
'in the',
'barrel firmly upon the',
'powder Bullets that were not firmly upon the powder upon firing',
'risked causing the barrel',
'to explode',
'with the condition',
'known',
'as a short',
'start The loading of muskets was therefore easy with',
'the old',
'smoothbore Brown Bess',
'and similar military muskets The',
'original muzzleloading',
'rifle on the other hand with a more',
'closely',
'fitting ball to take the',
'rifling grooves was more difficult to load particularly when the',
'bore of',
'the barrel was',
'fouled from previous firings',
'For',
'this reason early rifles were not',
'generally',
'used for military purposes ',
'The first',
'half of',
'the nineteenth century saw a',
'distinct change',
'in the shape and function of the bullet',
'In ',
'Delvigne a French infantry',
'officer',
'invented a breech with',
'abrupt shoulders',
'on which',
'a spherical bullet was rammed',
'down until it',
'caught the rifling grooves Delvignes method however',
'deformed the bullet',
'and was inaccurate'
];

console.log(Solve(input4));