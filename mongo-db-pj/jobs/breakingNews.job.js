const axios = require("axios").default
const cheerio = require("cheerio")
const cron = require("node-cron")

const { BreakingNew } = require("../models")

const getBreakingNew = () => {
    cron.schedule("* * * * *", async () => {
        try {
            console.log('CronJob Executed !!');
            const htmlNew = await axios.get("https://cnnespanol.cnn.com/")
            const $ = cheerio.load(htmlNew.data)
            const titles = $(".news__title")
            const news = []
            titles.each((index, element) => {
                const breakingNew = { 
                    title: $(element).text().trim(),
                    link: $(element).children().attr("href"),
                }
                news.push(breakingNew);
            })

            await BreakingNew.create(news)
             
        } catch (error) {
            console.error(error)
        }

    })
}

module.exports = {
    getBreakingNew
}