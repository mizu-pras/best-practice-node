const { fetchArticle, createArticle } = require('../../controllers/articles')
const route = require('express').Router()

route.get('/', async (req, res) => {
    // get all articles
    const articles = await fetchArticle()
    res.status(200).json(articles)
})

route.post('/', async (req, res) => {
    // add new articles
    const article = await createArticle(
        req.body.title,
        req.body.content,
        1 // TODO : use actually user id req.body.userid
    )
    res.send(article)
})

route.get('/:id', (req, res) => {
    // get particulur article
})

route.get('/:id/comments', (req, res) => {
    // get comments of particulur article
})

module.exports = route