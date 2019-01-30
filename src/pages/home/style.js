import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    .row {
        margin-left: -15px;
        margin-right: -15px;
        box-sizing: border-box;
    }
`

export const HomeMain = styled.div`
    width: 66.66667%;
    float: left;
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-top: 30px;
    padding-right: 0;
`

export const HomeAside = styled.div`
   padding: 30px 0 0;
   margin-left: 4.16667%;
   width: 29.16667%;
   float: left;
`
export const BannerWrapper = styled.div`
    position:relative;
    margin-bottom: 35px;
    border-radius: 6px;
    overflow: hidden;
    z-index: 1;
`
export const BannerDiv = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    .item {
        display: none;
        position: relative;
        transition: left .6s ease-in-out;
        &.active {
            display: block;
            transform: translateZ(0);
            left: 0;
            &.left{
                transform: translate3d(-100%,0,0);
                left: 0;
            }
        }
        &.left {
            left: -100%;
        }
        .banner {
            img {
                vertical-align: middle;
                border: 0;
                width: 100%;
                height: 270px;
                background-color: hsla(0,0%,71%,.2);
            }
        }
    }
`
export const Indicators = styled.ol`
    position: absolute;
    bottom: 0px;
    z-index: 15;
    margin-left: -30%;
    padding-left: 0;
    list-style: none;
    text-align: center;
    margin-bottom: 8px;
    width: 80%;
    left: 40%;
    li {
        width: 25px;
        height: 4px;
        background-color: hsla(0,0%,47%,.4);
        transition: .3s ease-in;
        border: none;
        margin: 1px;
        border-radius: 10px;
        cursor: pointer;
        display: inline-block;
        margin-right: 5px;
        &.active {
            height:5px;
            background-color: #fff;
        }
    }
`
export const Control = styled.button`
    position: absolute;
    left: 0;
    bottom: 0;
    filter: alpha(opacity=50);
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,.6);
    background-color: transparent;
    background-image: none;
    background-color: rgba(0,0,0,.4);
    height: 50px;
    width: 40px;
    top: 40%;
    opacity: 0;
    transition: .1s ease-in;
    border: none;
    &.left {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
    &.right {
        left: auto;
        right: 0;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
    &.active {
        opacity:0.5
    }
    &:focus {
        outline: none;
    }
    &:hover {
        cursor: pointer;
    }
`

export const ListWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    .item {
        position: relative;
        width: 100%;
        margin: 0 0 15px;
        padding: 15px 2px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        &.have-img {
            min-height: 140px;
            .content {
                padding-right: 165px;
            }
        }
        .wrap-img {
            position: absolute;
            top: 50%;
            margin-top: -60px;
            right: 0;
            width: 150px;
            height: 100px;
            img {
                width: 100%;
                height: 100%;
                border-radius: 4px;
                border: 1px solid #f0f0f0;
            }
        }
        .content {
            padding-right: 140px;
            .title {
                margin: -7px 0 4px;
                display: inherit;
                font-size: 18px;
                font-weight: 700;
                line-height: 1.5;
                font-family: '-apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif';
            }
            .abstract{
                margin: 0 0 8px;
                font-size: 13px;
                line-height: 24px;
                color: #999;
            }
            .meta {
                padding-right: 0!important;
                font-size: 12px;
                font-weight: 400;
                line-height: 20px;
                a {
                    margin-right: 10px;
                    color: #b4b4b4;
                    transition: .1s ease-in;
                    &:hover {
                        color: #787878;
                    }
                }
                span{
                    margin-right: 10px;
                    color: #b4b4b4;
                }
            }
        }
    }
`
export const LoadMore = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    color: #fff;
    line-height:20px;
    user-select: none;
`

export const Board = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`

export const DownloadWrapper = styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .qrcode {
        width: 60px;
        height: 60px;
        opacity: .85;
    }
    .info {
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        .title {
            font-size: 15px;
            color: #333;
        }
        .description {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }
`

export const Author = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
    text-align: center;
    .title {
        text-align: left;
        span {
            font-size: 14px;
            color: #969696;
        }
        .page-change {
            float: right;
            font-size: 14px;
            color: #969696;
        }
    }
    .list {
        margin: 0 0 20px;
        text-align: left;
        list-style: none;
        li {
            margin-top: 15px;
            .avatar {
                display: block;
                cursor: pointer;
                float: left;
                width: 48px;
                height: 48px;
                margin-right: 10px;
                img {
                    width: 100%;
                    height: 100%;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                }
            }
            .follow {
                border-color: #42c02e;
                font-weight: 400;
                line-height: normal;
                float: right;
                margin-top: 5px;
                padding: 0;
                font-size: 13px;
                color: #42c02e;
            }
            .name {
                padding-top: 5px;
                margin-right: 60px;
                font-size: 14px;
                display: block;
            }
            p {
                margin-top: 2px;
                font-size: 12px;
                color: #969696;
            }
        }
    }
`