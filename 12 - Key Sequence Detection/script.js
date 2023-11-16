const pressed = [];
const secretCode = "zubair";

window.addEventListener("keyup", (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(- secretCode.length, pressed.length - secretCode.length);
    if (pressed.join("").includes(secretCode)) {
        console.log("BOOM!");
        cornify_add();
    };
    console.log(pressed);
})
