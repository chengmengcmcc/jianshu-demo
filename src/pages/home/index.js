import React, { Component } from 'react';
import {
    HomeWrapper,
    HomeMain,
    HomeAside
} from './style';
import Banner from './components/Banner';
import Download from './components/Download';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actions } from './store'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HomeWrapper>
                <div className="row">
                    <HomeMain>
                        <Banner />
                        <List />
                    </HomeMain>
                    <HomeAside>
                        <Recommend></Recommend>
                        <Download></Download>
                        <Writer />
                    </HomeAside>
                </div>
            </HomeWrapper>
        );
    }
    componentDidMount() {
        this.props.getHomeData()
    }
    
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        curBanner: state.home.curBanner
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getHomeData: () => {
            dispatch(actions.getListData())
        },
        handleBannerChange: (index) => {
            dispatch(actions.changeBanner(index))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);