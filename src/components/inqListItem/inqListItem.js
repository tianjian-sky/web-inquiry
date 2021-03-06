import React from 'react'
import { connect } from 'react-redux'
import './inqListItem.css'
import PropTypes from 'prop-types'
import { prototype } from 'stream';

const mapStateToProps = (state, ownProps) => { // connect方法在执行时自动将此方法返回的状态注入到组件的props中
    return {
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
    }
}

class InqListItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            styleObj: {
                marginLeft: 8,
                marginRight: 8
            }
        }
    }


    componentDidMount = () => {
        console.log('get context From parent without writting', this.context)
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        return true
    }

    componentWillUpdate = (nextProps, nextState) => {
    }

    componentDidUpdate = () => {
    }

    setMargin(l, r) {
        this.refs.style.marginLeft = l
        this.refs.style.marginRight = r
    }

    formatTime(timestamp){
        let date = new Date(timestamp)
        let y = date.getFullYear()
        let m = date.getMonth() + 1
        let d = date.getDate()
        d = d < 10 ? '0' + d : d
        m = m < 10 ? '0' + m : m
        return y + '-' + m + 'd'
    }
    render = () => {
        let v = this.props.data
        
        return (
            <li className="inqListItem" style={this.props.styleObj} id="inqListItem-{v.id}">
                <div className="itemMain">
                    <p className="title">{v.name}</p>
                    <p className="time">创建: {this.formatTime(v.createTime)}</p>
                </div>
                <div className="clickMask" id="btnEdit-cjlhn3yhx3s4o"></div>
                <div className="btnListWrap">
                    <div className="btnList">
                        <a className="btnEdit btn" id="btnEdit-{v.id}">编辑</a>
                        <a className="btnCopy btn" id="btnCopy-{v.id}">复制</a>
                    </div>
                </div>
            </li>
        )
    }
}

InqListItem.contextTypes = {
    contextProp1: PropTypes.string
}

/**
 * 使用prop-types 库对组件props进行类型校验
 */
InqListItem.propTypes = {
    data: PropTypes.object,
    // data: PropTypes.string,  类型不匹配，报错！
    styleObj: PropTypes.object  // 相当于一些列的类型判断方法
}
export const InqListItemRR = connect(mapStateToProps,mapDispatchToProps)(InqListItem)
