import styled from 'styled-components';

export const CartWrapper = styled.div`
    padding-top:10px;
    padding-bottom:30px;
`;

export const OrderList = styled.div`
    margin-top:10px;
    .total_price{
        width:900px;
        height:50px;
        p{
            height:100%;
            line-height:50px;
            font-size:24px;
            font-weight:bold;
            color:red;
            float:right;
            margin-right:50px;
            i{
                font-size:12px;
                font-weight:normal;
                color:black;
            }
        }
    }
`;

