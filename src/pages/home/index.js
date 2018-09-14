import React,{ PureComponent} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {connect} from 'react-redux'
import { HomeWrapper ,HomeLeft,HomeRight,BackTop} from './style';
import { actionCreator } from './store';
class Home extends PureComponent{
    render(){
        return (
            <HomeWrapper>
            <HomeLeft>
                <img alt="ddd"  src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="banner-img"></img>
                <Topic></Topic>
                <List></List>
            </HomeLeft>
            <HomeRight>
                <Recommend></Recommend>
                <Writer></Writer>
            </HomeRight>
            {
                this.props.showScroll?<BackTop onClick={this.handelScrollTop}>返回顶部</BackTop>:null
            }
            
            </HomeWrapper>
        )
    }
    handelScrollTop(){
        window.scrollTo(0,0)
    }
    componentDidMount(){
        this.props.changeHomeData()
        this.bindEvents()
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changScrollTopShow)
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changScrollTopShow)
    }
}
const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDisPatch = (dispathch) =>({
    changeHomeData(){
        dispathch(actionCreator.getHomeInfo())
    },
    changScrollTopShow(){
        if( document.documentElement.scrollTop>100 ){
            dispathch(actionCreator.toggleTopShow(true))
        }else{
            dispathch(actionCreator.toggleTopShow(false))
        }
       
    }
})
export default connect (mapState,mapDisPatch)(Home)