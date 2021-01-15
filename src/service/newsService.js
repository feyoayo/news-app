export default class Service {
    constructor() {
        this.apiKey = `e599ef0638f5440e915f8b14890966c3`
        this.apiUrl = `https://news-api-v2.herokuapp.com`
    }

    // getResourse = async (country = 'ua',) => {
    //     const res = await fetch(`https://news-api-v2.herokuapp.com/top-headlines?country=${country}&category=general&apiKey=${this.apiKey}`)
    //     if (!res.ok) {
    //         return new Error(`status: ${res.status}`)
    //     }
    //
    //     const result = await res.json()
    //     const {articles} = result
    //     return await articles.map(this.resFetch);
    // }

    topHeadLines = async (country = 'ua', category = 'general',) => {
        const res = await fetch(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`)

        if (!res.ok) {
            return new Error(`status: ${res.status}`)
        }
        const result = await res.json()
        const {articles} = result
        return await articles.map(this.resFetch)
    }

    everything = async (query, language='ru') => {
        const res = await fetch(`${this.apiUrl}/everything?q=${query}&language=${language}&apiKey=${this.apiKey}`)
        if (!res.ok) {
            return new Error(`status: ${res.status}`)
        }
        const result = await res.json()
        const {articles} = result
        return await articles.map(this.resFetch)
    }


    resFetch = (news) => {
        let img = new Image()
        img.src = 'https://dummyimage.com/340x220/242124/3d3d4d&text=+'
        return {
            id: news.url,
            author: news.author,
            description: news.description,
            title: news.title,
            url: news.url,
            urlToImage: news.urlToImage,
        }


    }
}
