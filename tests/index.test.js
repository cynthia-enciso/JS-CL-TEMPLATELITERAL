
/**
 * @jest-environment jsdom
 */

const {exercise1, exercise2, exercise3} = require('../src/index.js')
const fs = require('fs')

beforeEach(() => {
    document.body.innerHTML = `
    <div>
        <h3> Note to a Friend</h3>
        <p id="e1">Hey [FRIEND'S NAME],</p>
        <p id="e2">
            I just wanted to take a moment to tell you how [ADJECTIVE 1] you are!
            <br>Remember that time we [PAST TENSE VERB] together?
            <br>That was [ADJECTIVE 2]! We need to do it again soon.
        </p>
        <p id="e3">I hope you're having a [ADJECTIVE 3] day!</p>
        <p>Sincerely, <br> Your very best friend</p>
    </div>
    `;

});


test('should change e1 dom node text to be correct name', () => {
    exercise1("Bobby");
    expect(document.getElementById("e1").innerText).toBe("Hey Bobby,");
});

test('should change e2 dom node text to include correct values', () => {
    exercise2("grand", "read books", "fabulous");
    expect(document.getElementById("e2").innerText)
    .toContain("I just wanted to take a moment to tell you how grand you are!\n");
    expect(document.getElementById("e2").innerText)
    .toContain("Remember that time we read books together?\n");
    expect(document.getElementById("e2").innerText)
    .toContain("That was fabulous! We need to do it again soon.");
});

test('should change e3 dom node text to be correct', () => {
    exercise3("fantastic");
    expect(document.getElementById("e3").innerText).toBe("I hope you're having a FaNtAsTiC day!");
});

// template literal checks
test('source code should contain exercise 1 template literals',() => {
    // Read the content of the source file
    const sourceCode = fs.readFileSync('./src/index.js', 'utf8');

    expect(sourceCode).toContain("`Hey ${");
    expect(sourceCode).toContain("},`");   
    
});

test('source code should contain exercise 2 template literals',() => {
    // Read the content of the source file
    const sourceCode = fs.readFileSync('./src/index.js', 'utf8');

    expect(sourceCode).toContain("`I just wanted to take");
    expect(sourceCode).toContain("do it again soon.`");   
    
});

test('source code should contain exercise 3 template literals',() => {
    // Read the content of the source file
    const sourceCode = fs.readFileSync('./src/index.js', 'utf8');

    expect(sourceCode).toContain("`I hope you're having a ${");
    expect(sourceCode).toContain("} day!`");   
    
});