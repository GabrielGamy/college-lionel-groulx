const buttonLast = {
  backgroundColor: "orange"
};

const buttonTextLast = {
  fontSize: 26
};

const flex2 = { 
  flex: 2
};

const paddingComma = {
  paddingHorizontal: 24
};

const buttons = [
  [
    { text: "AC", disabled: true },
    { text: "+/-", disabled: true },
    { text: "%", disabled: true },
    {
      text: "/",
      style: buttonLast,
      styleText: buttonTextLast,
    },
  ],
  [
    { text: "7" },
    { text: "8" },
    { text: "9" },
    { 
      text: "*", 
      style: buttonLast,
      styleText: buttonTextLast
    },
  ],
  [
    { text: "4" },
    { text: "5" },
    { text: "6" },
    { 
      text: "-", 
      style: buttonLast, 
      styleText: buttonTextLast 
    },
  ],
  [
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { 
      text: "+", 
      style: buttonLast, 
      styleText: buttonTextLast, 
    },
  ],
  [
    { text: "0", style: flex2 },
    { text: ",", disabled: true, style: paddingComma },
    { 
      text: "=", 
      style: buttonLast, 
      styleText: buttonTextLast, 
    },
  ],
];

export default buttons;
