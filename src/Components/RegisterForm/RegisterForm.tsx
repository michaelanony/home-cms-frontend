import React, { Dispatch, useState } from "react";
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import "./RegisterForm.scss"
const FormItem = Form.Item
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


type IProps = {
    form: any
    setIsShowRegisterPage: Dispatch<boolean>
}

const RegistrationForm = (props: IProps) => {
    const [confirmDirty, setConfirmDirty] = useState(false)
    const showLoginPage = () => {
        props.setIsShowRegisterPage(false)
    }
    const {
        form: { getFieldDecorator }
    } = props


    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err: boolean, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const handleConfirmBlur = (e: any) => {
        const { value } = e.target;
        console.log(value)
        // this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    const compareToFirstPassword = (rule: any, value: any, callback: any) => {
        const { form } = props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule: any, value: any, callback: any) => {
        if (value && confirmDirty) {
            props.form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
    })(
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
        </Select>,
    );

    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item label="用户名">
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="密码" hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        // {
                        //     validator: validateToNextPassword(rules,value,callback),
                        // },
                    ],
                })(<Input.Password />)}
            </Form.Item>
            {/* <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('confirm', {
                    rules: [
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        // {
                        //     validator: compareToFirstPassword(),
                        // },
                    ],
                })(<Input.Password onBlur={handleConfirmBlur} />)}
            </Form.Item> */}
            <Form.Item
                label={
                    <span>
                        昵称&nbsp;
                <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                }
            >
                {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                })(<Input />)}
            </Form.Item>
            {/* <Form.Item label="Phone Number">
                {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
            </Form.Item> */}
            <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {
                    valuePropName: 'checked',
                })(
                    <Checkbox>
                        我已经阅读了<a href="">协议</a>
                    </Checkbox>
                )}

            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <div className="bottom_button">
                    <div><a onClick={() => showLoginPage()}>返回登陆页</a> </div>
                    <Button type="primary" htmlType="submit">
                        注册
            </Button></div>
            </Form.Item>
        </Form>
    );

}

const WrappedRegistrationForm = Form.create<IProps>()(RegistrationForm);

export default WrappedRegistrationForm;