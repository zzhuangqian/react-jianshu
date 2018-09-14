import styled from 'styled-components'
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div `
    height:58px;
    border-bottom:1px solid yellow;
`;
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    margin: 0 auto;
    height:100%;
    box-sizing: border-box;
    padding-rigth: 50px;
    background:green;
`;
export const NavItem = styled.div`
    line-heigth: 56px;
    padding:0 15px;
    font-size: 17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea653a
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    margin-top: 9px;
    border: none;
    border-radius:19px;
    background: #eee;
    outline:none;
    font-size:14px;
    color:#666;
    padding: 0 30px 0 20px;
    margin-left:20px;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:200px;
    }
`;
export const Addition = styled.div`
    position:absolute;
    right: 0;
    top:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding: 0 20px;
    line-height:38px;
    border-radius: 19px;
    border:1px solid #ec6149;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        color:white;
        background:red;
    }
`;
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .slide-enter{
        transition:all .2s ease-out;
    }
    .slide-enter-active{
        width:240px
    }
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-heigth:30px;
        border-radius:15px;
        background:green;
        text-align : center;
        &.focused{
            background:#777;
        }
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    left: 0;
    top:56px;
    width:240px;
    padding: 16px 16px;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
`;
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchInfoSwitch = styled.span`
    float :right;
    font-size:13px;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-orgin:center center;

    }
`;
export const SearchInfoItem = styled.a`
    float:left;
    display:block;
    font-size:12px;
    line-height:20px;
    padding:0 5px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:2px;
    margin-right:10px;
    margin-bottom:10px;
`