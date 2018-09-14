import styled from 'styled-components'


export const HomeWrapper = styled.div `
    width:960px;
    margin : 0 auto ;
    heigth: 300px;
    overflow:hidden;
`;
export const HomeLeft = styled.div `
    float: left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    widht:280px;
    float:right;
`;
export const TopicWrapper = styled.div`
    padding : 20px 0px 10px 0px 
    border-bottom: 1px solid #ececec;
`;
export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    background:#f7f7f7;
    font-size:14px;
    color:#000;
    margin-bottom: 18px
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right: 10px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`;
export const ListItem = styled.div`
    overflow:hidden;
    padding: 20px 0px ;
    border-bottom:1px solid #dcdcdc;
    .pic{
      display:block;
      width:125px;
      height:100px;
      float:left;
      border-radius:10px;  
    }
`
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weigth:500
        color:#333;
    }
    .desc{
        line-heigth:24px;
        color:#969696;
    }
`;
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width:280px;
`;
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background : url(${(props) =>props.imgUrl});
    background-size:contain;
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;
export const BackTop = styled.div`
    position:fixed;
    width:60px;
    right:100px;
    bottom:100px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
    background:yellow;
    border-radius:50%;
`