import React,{Fragment} from 'react';
import { NavLink as Link} from 'react-router-dom';
import {
    BannerWrapper,
    Nav
} from './style'
import { 
    Button,
    Badge 
} from 'antd';


function Banner(){
    return (
        <Fragment>
            <BannerWrapper>
                <img src='/static/images/banner.png' />
            </BannerWrapper>
        </Fragment>
    );
}

export default Banner;