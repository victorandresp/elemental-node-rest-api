const mongoose = require("mongoose");
const axios = require("axios").default
const cheerio = require("cheerio")
const cron = require("node-cron")

const getBreakingNew = async () => {
    try {
        const htmlNew = await axios.get("https://cnnespanol.cnn.com/")
        const $ = cheerio.load(htmlNew.data)
        const titles = $(".news__title")
        titles.each((index, element) => {
            const breakingNew = { 
                title: $(element).text().trim(),
                link: $(element).children().attr("href"),

            }
            console.log('breakingNew', breakingNew);
        })
        
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getBreakingNew
}