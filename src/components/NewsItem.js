import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title, description, url, nwesUrl, author, date,name} = this.props;
        return (
            <div className='my-3 position-relative'>
                <div className="card">
                    <img src={url} height="170px" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small>{name}</p>

                            <a href={nwesUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read</a>
                        </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
