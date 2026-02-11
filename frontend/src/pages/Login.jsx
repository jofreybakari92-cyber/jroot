import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import useLanguage from '@/locale/useLanguage';


import { Form, Button, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { login } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import LoginForm from '@/forms/LoginForm';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const { Title, Text } = Typography;

const AnimatedBackground = () => (
  <div className="animated-background">
    <div className="gradient-orb orb-1"></div>
    <div className="gradient-orb orb-2"></div>
    <div className="gradient-orb orb-3"></div>
    <div className="particles">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="particle" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`
        }}></div>
      ))}
    </div>
  </div>
);

const LoginPage = () => {
  const translate = useLanguage();
  const { isLoading, isSuccess } = useSelector(selectAuth);
  const navigate = useNavigate();
  const [formVisible, setFormVisible] = useState(false);

  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login({ loginData: values }));
  };

  useEffect(() => {
    if (isSuccess) navigate('/dashboard');
  }, [isSuccess, navigate]);

  useEffect(() => {
    const timer = setTimeout(() => setFormVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const FormContainer = () => {
    return (
      <Loading isLoading={isLoading}>
        <div className={`login-form-wrapper ${formVisible ? 'visible' : ''}`}>
          <Link to="/" className="back-button">
            <ArrowLeftOutlined /> Back to Home
          </Link>
          <div className="login-header">
            <Title level={2} className="login-title">
              <span className="title-gradient">Welcome Back</span>
            </Title>
            <Text className="login-subtitle">Sign in to your account</Text>
          </div>
          <Form
            layout="vertical"
            name="normal_login"
            className="login-form animated-form"
            initialValues={{
              remember: true,
              email: 'admin@admin.com',
              password: 'admin123',
            }}
            onFinish={onFinish}
          >
            <LoginForm />
            <Form.Item className="login-button-wrapper">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button animated-button"
                loading={isLoading}
                size="large"
              >
                {translate('Log in')}
              </Button>
            </Form.Item>
          </Form>
          <div className="login-footer">
        
          </div>
        </div>
      </Loading>
    );
  };

  return (
    <div className="login-page-container">
      <AnimatedBackground />
      <AuthModule authContent={<FormContainer />} AUTH_TITLE="Sign in" />
    </div>
  );
};

export default LoginPage;
