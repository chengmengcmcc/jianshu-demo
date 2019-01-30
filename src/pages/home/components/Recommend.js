import React from 'react';
import { Board } from '../style'
import rec1 from '../../../static/images/recommend/rec1.png'
import rec2 from '../../../static/images/recommend/rec2.png'
import rec3 from '../../../static/images/recommend/rec3.png'
import rec4 from '../../../static/images/recommend/rec4.png'
import rec5 from '../../../static/images/recommend/rec5.png'

const Recommend = (props) => {
    return (
        <Board>
            <a target="_blank" href="javascript:;">
                <img src={rec1} alt="Banner s 3" />
            </a>
            <a target="_blank" href="javascript:;" >
                <img src={rec2} alt="Banner s 4" />
            </a>
            <a target="_blank" href="javascript:;">
                <img src={rec3} alt="Banner s 7" />
            </a>
            <a target="_blank" href="javascript:;">
                <img src={rec4} alt="Banner s 5" />
            </a>
            <a target="_blank" href="javascript:;">
                <img src={rec5} alt="Banner s 6" />
            </a>
        </Board>
    )
}
export default Recommend;