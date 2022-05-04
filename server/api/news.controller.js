import NewsDAO from '../dao/newsDAO.js';

export default class NewsController {
    static async apiGetNews(req, res) {
        try {
            const {newsList, totalNumNews} = await NewsDAO.getNews();
            let response = {
                news_list: newsList,
                total_results: totalNumNews,
            };
            res.json(response);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetNewsById(req, res) {
        try {
            let id = req.params.id || {};
            let news = await NewsDAO.getNewsById(id);
            if (!news) {
                res.status(404).json({error: "news not found."})
                return;
            }
            res.json(news);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiPostNews(req, res) {
        try {
            const newsResponse = await NewsDAO.addNews(
                req.body.user_id,
                req.body.title,
                req.body.sub_header,
                req.body.content,
                new Date(),
            );
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiPutNews(req, res) {
        try {
            const newsResponse = await NewsDAO.updateNews(
                req.body.news_id,
                req.body.title,
                req.body.sub_header,
                req.body.content,
                new Date(),
            );
            if (newsResponse.modifiedCount === 0) {
                throw new Error("No document has been modified.");
            }
            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiDeleteNews(req, res) {
        try {
            const newsResponse = await NewsDAO.deleteNews(req.body.news_id);
            res.json({ status: "success " });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }
}