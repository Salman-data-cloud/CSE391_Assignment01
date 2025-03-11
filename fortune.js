const fortune_messages =[
    "So remember Me; I will remember you. And be grateful to Me and do not deny Me. (Quran 2:152)",
    "And He found you lost and guided [you], (Quran 93:7)",
    "Indeed, with hardship [will be] ease. (Quran 94:6)",
    "And do good; indeed, Allāh loves the doers of good.(Quran 2:195)",
    "And He is the Forgiving, the Loving, (Quran 85:14)",
    "Do not despair of the mercy of Allāh. Indeed, Allāh forgives all sins. Indeed, it is He who is the Forgiving, the Merciful. (Quran 39:53)",
    "And Allāh is the best of planners. (Quran 8:30)",
    "And He is with you wherever you are. (Quran 57:4)",
    "Allāh does not charge a soul except [with that within] its capacity. (Quran 2:286)",
    "Except for those who believe and do righteous deeds. For them is a reward uninterrupted. (Quran 84:25)",
    "And seek help through patience and prayer, and indeed, it is difficult except for the humbly submissive [to Allah ]. (Quran 2:45)",
    "The patient, the true, the obedient, those who spend [in the way of Allah ], and those who seek forgiveness before dawn. (Quran 3:17)"
];

window.onload = function(){
    const fortuneBox = document.getElementById("fortune-box");
    const randomIndex = Math.floor(Math.random() * fortune_messages.length);
    fortuneBox.textContent = fortune_messages[randomIndex];
};

function changeFontColor(){
    const colors = ["red", "blue", "green", "purple", "orange"];
    document.getElementById("fortune-box").style.color = colors[Math.floor(Math.random()*colors.length)];

}

function changeBagColor(){
    const colors = ["lightblue", "lightgreen", "lightpink", "lightgray", "lightyellow"];
    document.getElementById("fortune-box").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

}

function changeBorderColor(){
    const colors = ["black", "red", "blue", "green", "purple"];
    document.getElementById("fortune-box").style.borderColor = colors[Math.floor(Math.random() * colors.length)];
}

function changeFontStyle(){
    const fonts =["Arial", "Verdana", "Times New Roman", "Georgia", "Courier New"];
    const sizes = ["16px", "18px", "20px", "22px", "24px"];
    let fortuneBox = document.getElementById("fortune-box");
    fortuneBox.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    fortuneBox.style.fontSize = sizes[Math.floor(Math.random() * sizes.length)];
}