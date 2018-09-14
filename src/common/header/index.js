import React ,{Component} from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoItem,SearchInfoSwitch} from './style';
import { CSSTransition } from 'react-transition-group'
import {connect } from 'react-redux'
import {actionCreators}  from './store'
import { Link } from 'react-router-dom'

class Header extends Component{

    render(){
        return (
            <HeaderWrapper>
                <Link to ='/'>
                <Logo></Logo>    
                </Link>
               
              <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载app</NavItem>
                <NavItem className="right">
                <i className="iconfont">&#xe636;</i>
                </NavItem>
                <NavItem className="right">登录</NavItem>
                <SearchWrapper>
                <CSSTransition 
                in={this.props.focused}
                timeout={200}
                classNames="slide"
                >
                <NavSearch onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur} className={this.props.focused?'focused':''}></NavSearch>
                
                </CSSTransition>
                <i className="iconfont zoom">&#xe614;</i>
                    {this.getListArea(this.props.focused)}
                </SearchWrapper>
              </Nav>
              <Addition>
                    <Button className="writting"> <i className="iconfont">&#xe615;</i>写文章</Button>
                  <Button className="reg">注册</Button>   
              </Addition>
            </HeaderWrapper>
        )
    }
    getListArea (show) {
        const {list,page,totalPage,mouseIn,handleMouseLeave,handleMouseEnter,handleChangePage} = this.props
        const pageList = []
        const jsList = list.toJS();
        if(jsList.length){
            for(let i = (page-1) *10;i< page*10;i++){
                pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
            }
        }
        if(show || mouseIn){
            return (    <SearchInfo onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>热门搜索 <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}><i ref={(icon) => {this.spinIcon = icon} } className="iconfont spin">&#xe851;</i>换一批</SearchInfoSwitch> </SearchInfoTitle>
                <div>
                    {
                    pageList
                    }
                </div>
            </SearchInfo>)
        }else {
            return null;
        }
    }
}

const mapStateToProps = (state) =>{
    return {
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn'])
    }
}
const mapDispathToProps = (dispatch) =>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFoucus())
        },
        handleInputBlur(){
            dispatch( actionCreators.searchBlur())
        },
        handleMouseEnter(){
           
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
          
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            console.log(spin)
            let originAngle = spin.style.transform.replace(/[^0-9]/,'')
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
            if(page < totalPage){
                console.log(page)
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
          
        }
        
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header)