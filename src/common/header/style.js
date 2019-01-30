import styled from 'styled-components';
import logo from '../../static/images/logo.png';
export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom : 1px solid #f0f0f0;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    display:block;
    float: left;
    height: 56px;
    padding: 0;
    width: 100px;
    background: url(${logo});
    background-size: contain
`

export const Nav = styled.div`
    width: 960px;
    height:56px;
    margin: 0 auto;
   
`

export const NavItem = styled.div`
    padding: 15px;
    line-height:26px;
    &.active {
        color:#ea6f5a;
    }
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
        font-size:15px;
    }
    &.download {
        color: #333
    }
    &.login,
    &.mode{
        cursor: pointer;
    }
  
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .iconfont {
        position:absolute;
        right: 0px;
        top: 13px;
        width: 30px;
        line-height:30px;
        border-radius:50%;
        background-color:transparent;
        cursor: pointer;
        text-align:center;
        &.focused{
            background-color:#999;
            color:#fff
        }
    }
    
`
export const SearchInfo = styled.div`
    position: absolute;
    left:0;
    top:100%;
    width:240px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    border-radius: 4px;
    margin-top:15px;
    background:#fff;
    z-index:100;
`
export const SearchTrending = styled.div`
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
`
export const SearchTrendingHeader = styled.div`
    height: 20px;
    margin-bottom: 10px;
` 
export const SearchTrendingHeaderTitle = styled.span`
    float: left;
    font-size: 14px;
    color: #969696;
` 
export const SearchTrendingHeaderSwitch = styled.a`
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    cursor:pointer;
` 

export const SearchTrendingTagWrap = styled.ul`
    font-size: 0;
`
export const SearchTrendingTagWrapLi = styled.li`
    margin-right: 10px;
    display: inline-block;
    line-height: 28px;
`
export const SearchTrendingTagWrapLia = styled.a`
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-sizing:border-box;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width:240px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    position: relative;
    top: 9px;
    float:left;
    color:#777;
    transition: width .3s;
    &:focus{
        width:300px;
        outline:none;
    }
    &::placeholder{
        color:#999;
    }
`
export const Addition = styled.div`
    position: absolute;
    top:0;
    right:0;
    text-align:center;
`
export const Button = styled.button`
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    user-select: none;
    box-sizing: border-box;
    border-radius: 20px;
    margin: 9px 5px 0 15px;
    line-height: 24px;
    &.reg {
        width:80px;
        color: #ea6f5a;
        background-color: transparent;
        border: 1px solid rgba(236,97,73,.7);
    }
    &.write{
        width: 100px;
        color: #fff;
        background-color: #ea6f5a;
    }
    &:focus{
        outline:none;
    }
`
