import React from 'react';
import { Author } from '../style'
import { connect } from 'react-redux';
const Writer = (props) => {
    const { authors } = props

    return (
        <Author>
            <div className="title">
                <span>推荐作者</span>
                <a className="page-change">
                    <i className="iconfont ic-search-change"></i>
                    换一批
                </a>
            </div>
            <ul className="list">
                {
                    authors.map(item => {
                        return (
                            <li key={item.id}>
                                <a href="javascript:;" target="_blank" className="avatar">
                                    <img src={item.avatar_source} />
                                </a>
                                <a className="follow" state="0">
                                    <i className="iconfont ic-follow"></i>关注
                            </a>
                                <a href="javascript:;" target="_blank" className="name">{item.nickname}</a>
                                <p>写了{item.total_wordage}字 · {item.total_likes_count}喜欢</p>
                            </li>
                        )
                    })
                }

            </ul>
        </Author>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        authors: state.home.authors,
    }
}

export default connect(mapStateToProps, null)(Writer);