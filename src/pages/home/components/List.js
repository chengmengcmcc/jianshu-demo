import React from 'react';
import { ListWrapper, LoadMore } from '../style'
import { connect } from 'react-redux';
import { actions } from '../store'
import { Link } from "react-router-dom";

const List = (props) => {
    const { articles, getMoreArticles, curPage, totalPage } = props
    return (
        <>
            <ListWrapper>
                {
                    articles.map(item => {
                        return (
                            <li className="have-img item" key={item.id}>
                                <Link className="wrap-img" to={`/detail/${item.id}`}>
                                    <img className="img-blur-done" src={item.img_url} alt="120" />
                                </Link>
                                <div className="content">
                                    <Link className="title" to={`/detail/${item.id}`}>{item.title}</Link>
                                    <p className="abstract">
                                        {item.content}
                                    </p>
                                    <div className="meta">
                                        <Link className="nickname" to={`/detail/${item.id}`}>{item.author}</Link>
                                        <Link to={`/detail/${item.id}`}>
                                            <i className="iconfont ic-list-comments"></i> {item.comment_length}
                                        </Link>
                                        <span><i className="iconfont ic-list-like"></i> {item.like}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ListWrapper>
            <LoadMore onClick={getMoreArticles.bind(this,curPage,totalPage)}>
                {curPage >= totalPage ? '没有了' : '阅读更多'}
            </LoadMore>
        </>
    )

}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        articles: state.home.articleList,
        curPage: state.home.curPage,
        totalPage: state.home.totalPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreArticles: (curPage, totalPage) => {
            let nextPage = curPage + 1;
            (nextPage <= totalPage) && dispatch(actions.getMoreList(nextPage))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);