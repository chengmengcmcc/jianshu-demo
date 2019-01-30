import React from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchTrending,
    SearchTrendingHeader,
    SearchTrendingHeaderTitle,
    SearchTrendingHeaderSwitch,
    SearchTrendingTagWrap,
    SearchTrendingTagWrapLi,
    SearchTrendingTagWrapLia,
    SearchInfo,
    NavSearch,
    Addition,
    Button
} from './style';
import { actions } from './store'
import { connect } from 'react-redux'

const GetSearchInfo = (props) => {
    const { show, list, handleMouseEnter, handleMouseLeave, mouseIn, page, handleHotChange } = props
    const curList = []
    if (list.length > 0) {
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            list[i] && curList.push(
                <SearchTrendingTagWrapLi key={list[i]}>
                    <SearchTrendingTagWrapLia>{list[i]}</SearchTrendingTagWrapLia>
                </SearchTrendingTagWrapLi>
            )
        }
    }

    if (show || mouseIn) {
        return (
            <SearchInfo
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <SearchTrending>
                    <SearchTrendingHeader>
                        <SearchTrendingHeaderTitle>热门搜索</SearchTrendingHeaderTitle>
                        <SearchTrendingHeaderSwitch
                            onClick={handleHotChange}
                        >
                            换一批
                        </SearchTrendingHeaderSwitch>
                    </SearchTrendingHeader>
                    <SearchTrendingTagWrap>
                        {curList}
                    </SearchTrendingTagWrap>
                </SearchTrending>
            </SearchInfo>
        )
    } else {
        return null;
    }
}

const Header = (props) => {
    const { inputFocused, list, mouseIn, handleInputFocus, handleInputBlur, handleMouseEnter, handleMouseLeave, page, handleHotChange } = props
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active"><i className="iconfont icon-home"></i>首页</NavItem>
                <NavItem className="left download">
                    <i className="iconfont icon-download"></i>下载App
                    </NavItem>
                <SearchWrapper >
                    <NavSearch
                        className={inputFocused ? 'focused' : ''}
                        onFocus={handleInputFocus.bind(this, list)}
                        onBlur={handleInputBlur}
                    />
                    <i className={inputFocused ? 'focused iconfont icon-sousuo' : 'iconfont icon-sousuo'}></i>
                    <GetSearchInfo
                        show={inputFocused}
                        list={list}
                        page={page}
                        mouseIn={mouseIn}
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                        handleHotChange={handleHotChange}
                    />
                </SearchWrapper>
                <NavItem className="right login">登录</NavItem>
                <NavItem className="right mode">Aa</NavItem>
            </Nav>
            <Addition>
                <Button className="reg">注册</Button>
                <Button className="write">
                    <i className="iconfont icon-write"></i>
                    写文章</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        inputFocused: state.header.inputFocused,
        list: state.header.list,
        mouseIn: state.header.mouseIn,
        page: state.header.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus: (list) => {
            (list.length === 0) && dispatch(actions.getListData())
            dispatch(actions.searchFocus())
        },
        handleInputBlur: () => {
            dispatch(actions.searchBlur())
        },
        handleMouseEnter: () => {
            dispatch(actions.mouseEnter())
        },
        handleMouseLeave: () => {
            dispatch(actions.mouseLeave())
        },
        handleHotChange: () => {
            dispatch(actions.hotChange())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)