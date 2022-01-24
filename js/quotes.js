const quotes = [
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "The world is a university and everyone in it is a teacher. Make sure when you wake up in the morning you go to school.",
        author: "Bishop T.D. Jakes",
    },
    {
        quote: "By seeking and blundering we learn.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote: "The capacity to learn is a gift; The ability to learn is a skill; The willingness to learn is a choice.",
        author: "Brian Herbert",
    },
    {
        quote: "What we learn with pleasure we never forget.",
        author: "Alfred Mercier",
    },
    {
        quote: "The greatest enemy of learning is knowing.",
        author: "John Maxwell",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;