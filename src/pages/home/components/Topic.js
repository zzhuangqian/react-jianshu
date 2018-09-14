import React ,{Component} from 'react';
import {TopicWrapper,TopicItem }from '../style'
import { connect } from 'react-redux'

class Topic extends Component{
    render(){
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                            <img alt="ddd"  src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" className="topic-pic"></img>
                        社会热点
                        </TopicItem>
                        )
                    })
                }   
            </TopicWrapper>
        )
    }
}
const mapState = (state) => ({
    list:state.getIn(['home','topicList'])
})

export default connect(mapState,null)(Topic) 