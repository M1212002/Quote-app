const quotes = [
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein" },
    { text: "So many books, so little time.", author: "Frank Zappa" },
    { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch" },
    { text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
    { text: "Be yourself; everyone else is already taken.", author: " Oscar Wilde" },
  
];

document.getElementById('new-quote').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    
    document.querySelector('.quote-text').textContent =  `"${quote.text}"`;
    document.querySelector('.quote-author').textContent = `-- ${quote.author}`;
    
    document.getElementById('quote').style.display = 'block';
});