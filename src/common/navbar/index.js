import React,{Component,Fragment} from 'react';
import store from '../../store';
import { NavLink as Link} from 'react-router-dom';
import {
    Nav
} from './style'
import { 
    Button,
    Badge 
} from 'antd';


class  NavBar extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            data:store.getState()
        }
        this.handleBadgeCount=this.handleBadgeCount.bind(this);
        store.subscribe(this.handleBadgeCount);
    }

    render(){
        return (
            <Fragment>
                <Nav>
                    <Link to='/list'><Button type="primary" size='large'>Product List</Button></Link>
                    <Link to='/cart'><Badge count={this.state.count} showZero={false}><Button type="primary" size='large'>Cart</Button></Badge></Link>
                </Nav>
            </Fragment>
        );
    }

    handleBadgeCount(){
        const data=store.getState();
        let badgeCount=0;
        data.map((item)=>{
            badgeCount=badgeCount+item.num;
        });
        this.setState({
            count:badgeCount
        })
    }

}

export default NavBar;