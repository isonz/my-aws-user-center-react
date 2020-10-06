import React from 'react';
import './my.page.css';
import {getLocalUser} from "../../../helpers/local";
import {MyActions} from "../my.action";
import {connect} from "react-redux";
import { authHeader } from '../../../helpers/auth-header';


import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}


class MyPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: getLocalUser(),
            email : '',
            avatar: '',
            loading: false,
        };
        this.onBlurHandle = this.onBlurHandle.bind(this);
        this.onChangeHandle = this.onChangeHandle.bind(this);
    }

    componentDidMount() {
        this.props.myInfo();
    }

    handleUploadChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            const response = info.file.response;
            this.props.item.avatar = response.url;
            this.setState({
                avatar: response.url,
            });
            //console.log(this.props.item);
            this.props.myUpdate(this.props.item);

            // getBase64(info.file.originFileObj, imageUrl =>
            //     //console.log(imageUrl),
            //     this.setState({
            //         loading: false,
            //     }),
            // );
        }
    };

    onChangeHandle(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        if('email' === name){
            this.props.item.email = value;
        }
        if('avatar' === name){
            this.setState({ loading: true });
        }
        // console.log(this.props.item);
    }

    onBlurHandle(e) {
        const { name, value } = e.target;
        // console.log(name, value);
        this.setState({ [name]: value });
        this.props.myUpdate(this.props.item);
    }

    render() {
        const { alertMsg, alertType, loading, item, updating } = this.props;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );

        return (
            <div className='my-page'>
                <div id='netMsg'>
                    { alertMsg && <span className={`alert ${alertType}`}>{alertMsg}</span> }
                    { (updating || loading) && <img src='/images/loading.gif' alt='loading' /> }
                </div>

                <h1>{this.state.user.user.username}</h1>
                <p>ID: {this.state.user.user.id}</p>


                <div className="form-group ant-avatar-group">
                    {/*<input type="file" id="avatar" name='avatar' onChange={this.onChangeHandle} ref={this.fileInput} />*/}
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        action={process.env.REACT_APP_API_HOST + process.env.REACT_APP_API_UPLOAD_ACTION}
                        headers={authHeader()}
                        showUploadList={false}
                        beforeUpload={beforeUpload}
                        onChange={this.handleUploadChange}
                    >
                        {/*{item?.avatar ? <img src={item?.avatar || '/images/avatar_default.jpg'} alt="avatar" id='avatar_show' /> : uploadButton}*/}
                        <img src={this.state.avatar || item?.avatar || '/images/avatar_default.jpg'} alt="avatar" id='avatar_show' />
                    </Upload>
                    <p>Click me to modify</p>
                </div>


                <div className="form-group">
                    <label htmlFor="name">E-mail</label>
                    <input type="text" className="form-control" id="email" name='email' placeholder="E-mail" value={item?.email || ''} onBlur={this.onBlurHandle} onChange={this.onChangeHandle} />
                </div>

            </div>
        );
    }
}

function mapState(state) {
    const { alertMsg, alertType } = state.alertReducer;
    const { loading, item, updating} = state.myReducer;
    return { alertMsg, alertType, loading, item, updating };
}

const actionCreators = {
    myInfo: MyActions.myInfo,
    myUpdate: MyActions.myUpdate,
};

const connected = connect(mapState, actionCreators)(MyPage);
export { connected as MyPage };
