import React,{Component} from 'react';
import store from '../../store';
import { Breadcrumb, Table, Button,InputNumber} from 'antd';
import {
    CartWrapper,
    OrderList
} from './style';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state={
            totalPrice:0,
            columns : [
                {
                    title: '名称',
                    dataIndex:'goods_name',
                    key: 'goods_name',
                    align:'center',
                    width:'200px'
                },
                {
                    title: '图片',
                    dataIndex: 'url',
                    key: 'url',
                    align:'center',
                    render:(text,record)=>{
                        return (
                            <img src={record.url} style={{width:'100px',height:'120px'}} alt='' />
                        );
                    }
                },
                {
                    title: '数量',
                    dataIndex: 'num',
                    key: 'num',
                    align:'center',
                    render:(text,record)=>{
                        return <InputNumber min={1} defaultValue={1} value={record.num} onChange={(value)=>{this.handleNumChange(value,record.id)}}/>
                    }
                },
                {
                    title: '单价',
                    dataIndex: 'price',
                    key: 'price',
                    align:'center'
                  },
                  {
                    title: '总价',
                    dataIndex: 'totalPrice',
                    key: 'totalPrice',
                    align:'center',
                    render:(text,record)=><p>{record.num*record.price}</p>
                  },
                  {
                    title: '操作',
                    dataIndex: 'action',
                    key: 'action',
                    align:'center',
                    render:(text,record)=><Button type='danger' onClick={()=>{this.handleItemDelete(record.id)}}>删除</Button>
                  },
              ],
              data:store.getState()
        }
        this.handleStoreChange=this.handleStoreChange.bind(this);
        this.handleNumChange=this.handleNumChange.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
        this.handleTotalPrice=this.handleTotalPrice.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    componentWillMount(){
        this.handleTotalPrice();
    }

    render(){
        return (
            <CartWrapper>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Cart</Breadcrumb.Item>
                </Breadcrumb>
                <OrderList>
                    <Table 
                        dataSource={this.state.data} 
                        columns={this.state.columns} 
                        pagination={false} 
                    />
                    <div className='total_price'>
                        <p><i>Price：</i>￥{this.state.totalPrice}</p>
                    </div>
                </OrderList>
            </CartWrapper>
        );
    }

    //store订阅的方法
    handleStoreChange(){
        this.setState((prevState)=>{
            this.setState({
            data:store.getState()
        });
        },()=>{
            this.handleTotalPrice();
        })
    }

    //InputNum改变
    handleNumChange(value,id){
        const action={
            type:'input_num_change',
            value,
            id
        }
        store.dispatch(action);
    }

    //删除购物车商品
    handleItemDelete(id){
        const action={
            type:'delete_cart_item',
            id
        }
        store.dispatch(action);
    }

    //计算总金额
    handleTotalPrice(){
        let totalPrice=0;
        this.state.data.map((item)=>{
            totalPrice=totalPrice+item.num*item.price;
        });
        this.setState({
            totalPrice
        })
    }
}

export default Cart;