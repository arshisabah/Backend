import express from "express";


const app = express();
const port = 3000;

app.get('/', (req,res) => {

    const today = new Date();
    let day = today.getDay();

    let type = "a weekday";
    let adv = "it's time to work hard";
    
    if(day === 0 || day === 6) {
        type = "the weekend",
        adv = "There is no need to work"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Server is Running on port ${port}.`);
});