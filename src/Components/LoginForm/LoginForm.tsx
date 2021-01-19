import React from 'react'
import './LoginForm.scss'
import { apiUserLogin } from "../../Api/services";
import { Form, Input, Button, Checkbox } from 'antd';
import { createUserLogin } from "../../Store/actions/userAcitonCreators";
import { useDispatch } from 'react-redux';
interface userFrom {
    username: string,
    password: string,
    remember: boolean
}
const LoginForm = () => {
    const dispatch = useDispatch()
    const onFinish = (v: userFrom) => {
        apiUserLogin(v.username, v.password).then(res => {
            if (res.code === 200 && res.data) {
                localStorage.setItem("ac-token", res.data.token)
                dispatch(createUserLogin(res.data.user))
            } else {
                alert(res.msg)
            }
        })
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form

                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default LoginForm;