import React ,{Component} from 'react';
import {ListItem,ListInfo,LoadMore } from '../style'
import { connect } from 'react-redux'
import { actionCreator } from '../store'
import {Link} from 'react-router-dom'
class List extends Component{
    render(){
     const   {getMoreList,page} = this.props
        return (
        <div>
          
            {
                this.props.list.map(item =>{
                    return (
                        <Link key={item.get['id']} to='/detail'>
                           <ListItem >
                        <img className="pic" alt="" src={item.get('imgUrl')}></img>
                        <ListInfo>
                            <div className="title">{item.get('title')}</div>
                            <p className="desc">{item.get('desc')}</p>
                        </ListInfo>
                    </ListItem>
                        </Link>
                     
                    )
                })
            }
            <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
        </div>
       )
    }
}
const mapState = (state) => ({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})
const mapDispatch= (dispatch) =>({
    getMoreList(page){
        dispatch(actionCreator.getMoreList(page))
    }
})
export default connect (mapState,mapDispatch)(List)