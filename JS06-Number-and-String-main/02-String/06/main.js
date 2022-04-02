let extractCurrencyValue = (string, rate) => {
    let cutDollar = string.substring(1);
    return "THB " + +cutDollar * rate;
};

extractCurrencyValue("$120", 30);

// let findWord = (letter, sentence) => {
//     let lower = sentence.toLowerCase();
//     let count = 0;
//     let index = 0;
//     for (let l of lower) {
//         if (l === letter) {
//             count++;
//             console.log(index);
//         }
//         index++;
//     }
//     return count;
// };

let findWord = (letter, sentence) => {
    let lowerSentence = sentence.toLowerCase();
    let count = 0;
    let index = 0;
    while (true) {
        if (lowerSentence.includes(letter, index)) {
            let tmpPosition = lowerSentence.indexOf(letter, index);
            count++;
            index = tmpPosition + letter.length;
        } else {
            return count;
        }
    }
};

const reverseText = (text) => {
    let tmp = "";
    for (let i = text.length - 1; i >= 0; i--) {
        tmp += text[i];
    }
    return tmp;
};


let obj = {
    title: "Codecamp",
    classOf: 11,
    showInfo: function () {
      function getInfo() { return `${this.title} #${this.classOf}` }
    //   const getInfo = () => {
    //     return `${this.title} #${this.classOf}`;
    //   };
      return getInfo();
    }
  };
  
  console.log(obj.showInfo());

  const checkPalindrome = (text) => {
    let tmp = "";
    for (let i = text.length - 1; i >= 0; i--) {
        tmp += text[i];
    }
    return tmp === text ? true : false;
};
