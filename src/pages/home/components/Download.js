import React from 'react';
import { DownloadWrapper } from '../style'
import qrcode from '../../../static/images/qrcode.png'

const Download = (props) => {
    return (
        <DownloadWrapper>
            <img className="qrcode" src={qrcode} alt="Download index side qrcode"></img>
            <div className="info">
                <div className="title">下载简书手机App<i className="iconfont ic-link"></i></div>
                <div className="description">随时随地发现和创作内容</div>
            </div>
        </DownloadWrapper>
    )
}

export default Download;