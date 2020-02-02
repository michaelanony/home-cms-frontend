import React, { Dispatch } from "react";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./LoginForm.scss"
import { apiUserLogin } from "../../Api/services"
const FormItem = Form.Item
type IProps = {
    form: any
    setIsShowRegisterPage: Dispatch<boolean>
    setLogin: Dispatch<boolean>,
    setCurrentUser: Dispatch<string>
}


const LoginForm = (props: IProps) => {
    const showRegisterPage = () => {
        props.setIsShowRegisterPage(true)
    }
    const {
        form: { getFieldDecorator }
    } = props
    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.form.validateFields((err: boolean, values: any) => {
            if (!err) {
                console.log(values.password)
                apiUserLogin(values.username, values.password).then(res => {
                    if (res.code === 200) {
                        props.setLogin(true)
                        console.log("ret", res.data)
                        props.setCurrentUser(res.data.u_name)
                    } else {
                        alert("账号密码错误")
                    }
                })
            }
        })
    }
    return (
        <div className="login-content">
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        忘记密码
          </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
          </Button>
                    或 <a onClick={() => showRegisterPage()}>现在注册!</a>

                </Form.Item>
            </Form>
        </div >
    )
}



const UserLoginForms = Form.create<IProps>()(LoginForm)

export default UserLoginForms;