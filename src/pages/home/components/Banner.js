import React, { Component } from 'react';
import {
    BannerWrapper,
    BannerDiv,
    Indicators,
    Control
} from '../style'
import { connect } from 'react-redux';
import { actions } from '../store'
let t = null;
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controlShow: false
        };
        this.handleControlShow = this.handleControlShow.bind(this)
        this.handleControlHide = this.handleControlHide.bind(this)
    }
    handleControlShow() {
        this.setState({
            controlShow: true
        })
    }
    handleControlHide() {
        this.setState({
            controlShow: false
        })
    }
    componentDidMount() {
        t = setInterval(() => {
            let index = (this.props.curBanner + 1) > 4 ? 0 : (this.props.curBanner + 1)
            this.props.handleBannerChange(index)
        }, 2000)
    }
    componentWillUnmount(){
        clearInterval(t)
     }

    render() {
        const { bannerImg, handleBannerChange, prevBanner, nextBanner, curBanner } = this.props
        return (
            <BannerWrapper
                onMouseEnter={this.handleControlShow}
                onMouseLeave={this.handleControlHide}
            >
                <BannerDiv>
                    <div className="carousel-inner">
                        {
                            bannerImg.map((item, index) => {
                                return (
                                    <div className={curBanner === index ? 'item active' : 'item'} key={index}>
                                        <div className="banner " data-banner-name="小管家日报">
                                            <img src={item} alt="540" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </BannerDiv>
                <Indicators>
                    {
                        bannerImg.map((item, index) => {
                            return (
                                <li data-slide-to="0" className={curBanner === index ? 'active' : ''} onClick={handleBannerChange.bind(this, index)} key={index}></li>
                            )
                        })
                    }
                </Indicators>
                <Control className={this.state.controlShow ? 'active left' : 'left'} onClick={prevBanner.bind(this, curBanner)}>
                    ←
                </Control>
                <Control className={this.state.controlShow ? 'active right' : 'right'}
                    onClick={nextBanner.bind(this, curBanner)}>
                    →
                </Control>
            </BannerWrapper>

        );
    }
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        bannerImg: state.home.bannerImg,
        curBanner: state.home.curBanner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleBannerChange: (index) => {
            dispatch(actions.changeBanner(index))
        },
        prevBanner: (index) => {
            // 这里应该获取轮播图的总数量
            let prevIndex = index - 1 < 0 ? 4 : index - 1
            dispatch(actions.changeBanner(prevIndex))
        },
        nextBanner: (index) => {
            // 这里应该获取轮播图的总数量
            let nextIndex = index + 1 > 4 ? 0 : index + 1
            dispatch(actions.changeBanner(nextIndex))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);