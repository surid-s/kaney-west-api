const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => liveQuotes(data))
}

const liveQuotes = (speaks) =>{
    const div = document.getElementById('quotes-div');
    
    // for (const speak of speaks){
        div.className += "quotes"
        div.innerText =speaks.quote;
    }
    
