import React,{Component} from 'react';
import store from '../../store';
import { Breadcrumb, Row, Col,Card, Button } from 'antd';
import{
    ListWrapper,
    ListInfo
} from './style';

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            goodsInfo:[
                {
                    "id":1001,
                    "goods_name":"男式黑白格子衬衫",
                    "url":"./static/images/clothes01.jpg",
                    "price":169,
                    "num":1
                },
                {
                    "id":1002,
                    "goods_name":"纯棉印花宽松长袖T恤",
                    "url":"./static/images/clothes02.jpg",
                    "price":69,
                    "num":1
                },
                {
                    "id":1003,
                    "goods_name":"男士连帽夹克2019春季新款",
                    "url":"./static/images/clothes03.jpg",
                    "price":249,
                    "num":1
                },
                {
                    "id":1004,
                    "goods_name":"2019夏装新品时尚百搭",
                    "url":"./static/images/clothes04.jpg",
                    "price":49,
                    "num":1
                }
            ]
        }
        this.handleAddGoods=this.handleAddGoods.bind(this);
    }

    render(){
        return (
           <ListWrapper>
                <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                </Breadcrumb>
                <ListInfo>
                    <Row>
                        {
                            this.state.goodsInfo.map((item,index)=>{
                                return (
                                    <Col span={6} key={index}>
                                        <Card
                                            style={{height:'386px'}}
                                            >
                                            <img  src={item.url} alt='' />
                                            <h1 className='goods_title'>{item.goods_name}</h1>
                                            <p className='goods_price'>￥{item.price}</p>
                                            <Button type="danger" onClick={()=>{this.handleAddGoods(item)}}>Add To Cart</Button>
                                        </Card>,
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </ListInfo>
           </ListWrapper>
        );
    }

    handleAddGoods(item){
        const action={
            type:'add_to_cart',
            item
        }
        store.dispatch(action);
    }
}

export default List;