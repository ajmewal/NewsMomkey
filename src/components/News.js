import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import './News.css'
import PropTypes from 'prop-types'

export class News extends Component {
    articles = [
        {},

    ]


    static defaultProps = {
        category: "general"
    }
    static propTypes = {
        category: PropTypes.string
    }



    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            disabled: false,
            value: '10',
            country: 'in',
            language: 'en'
        }
    }

    async updateNews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=918bc53e30de4abfa81db1ad14e69310&page=${this.state.page - 1}&pageSize=${this.state.value}`;
        this.setState({ loading: true })
        // let url="http://localhost:3000/data.json"
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles })

    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=918bc53e30de4abfa81db1ad14e69310&page=${this.state.page}&pageSize=${this.state.value}`;
        let url = `https://newsapi.org/v2/top-headlines?language=${this.state.language}&apiKey=918bc53e30de4abfa81db1ad14e69310&category=${this.props.category}&country=${this.state.country}&page=${this.state.page}&pageSize=${this.state.value}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

    }

    handlePrivClick = async () => {
        this.updateNews()
        this.setState({
            page: this.state.page - 1,
            loading: false
        })
        if ((this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.value))) {
            this.setState({
                disabled: true
            })
        }


    }


    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        } else {
            this.updateNews()
            this.setState({
                page: this.state.page + 1,
                disabled: true,
                loading: false
            })
        }
    }


    render() {
        return (
            <div className='container my-3'>
                <div className='d-flex justify-content-between align-item-center'>
                    <h2>Newsapp | Top Headline</h2>
                    <div className="d-flex gap-3">

                        <select className="form-select" aria-label="Default" defaultValue="Language" onChange={(e) => {
                            this.setState({ language: e.target.value }, () => {
                                console.log(this.state.language); this.componentDidMount()

                            })
                        }}>
                            <option value="en">en</option>
                            <option value="ar">ar</option>
                            <option value="de">de</option>
                            <option value="es">es</option>
                            <option value="fr">fr</option>
                            <option value="he">he</option>
                            <option value="it">it</option>
                            <option value="nl">nl</option>
                            <option value="no">no</option>
                            <option value="pt">pt</option>
                            <option value="ru">ru</option>
                            <option value="sv">sv</option>
                            <option value="ud">ud</option>
                            <option value="zh">zh</option>
                        </select>

                        <select className="form-select" aria-label="Default" defaultValue="in" onChange={(e) => {
                            this.setState({ country: e.target.value }, () => {
                                console.log(this.state.country); this.componentDidMount()

                            })
                        }}>
                            <option value="in">in</option>
                            <option value="us">us</option>
                            <option value="ca">ca</option>
                            <option value="ch">ch</option>
                            <option value="fr">fr</option>
                            <option value="nl">nl</option>
                        </select>

                        <select className="form-select" aria-label="Default" onChange={(e) => {
                            this.setState({ value: e.target.value }, () => {
                                console.log(this.state.value); this.componentDidMount()

                            })
                        }}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="80">80</option>
                            <option value="100">100</option>
                        </select>

                    </div>
                </div>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 position-relative" key={!element.url?"":element.url}>
                            <div className='position-absolute bg-danger text-light rounded-pill px-2 end-0' style={{ "zIndex": "5" }}>{!element.source?'hello':element.source.name }</div>
                            <NewsItem title={element.title ? element.title.split(" ").slice(0, 10).join(" ") : "Unknown"} description={element.description ? element.description.split(" ").slice(0, 10).join(" ") : "Unknown"} url={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2024/05/20240519062637_garena2.jpg"} nwesUrl={element.url} author={element.author} date={element.publishedAt} source={!element.source?'hello':element.source.name} />

                        </div>
                    })}
                </div>
                <div className="container align-items-center justify-content-between d-flex gap-3">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrivClick} className="btn btn-dark">&larr; Previous</button>
                    {!this.state.loading && <p className='text-center'>{this.state.page}</p>}
                    <button type="button" disabled={this.state.disabled} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>

                </div>
            </div>
        )
    }
}

export default News
