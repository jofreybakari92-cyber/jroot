import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Form, Result, Button, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import useOnFetch from '@/hooks/useOnFetch';
import { request } from '@/request';

import ForgetPasswordForm from '@/forms/ForgetPasswordForm';

import useLanguage from '@/locale/useLanguage';

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

const ForgetPassword = () => {
  const translate = useLanguage();

  const navigate = useNavigate();
  const [formVisible, setFormVisible] = useState(false);

  const { onFetch, isSuccess, isLoading } = useOnFetch();

  async function postData(data) {
    return await request.post({ entity: 'forgetpassword', jsonData: data });
  }

  const onFinish = (values) => {
    const callback = postData(values);
    onFetch(callback);
  };

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
              <span className="title-gradient">Reset Password</span>
            </Title>
            <Text className="login-subtitle">Enter your email to reset your password</Text>
          </div>
          <Form
            name="signup"
            className="login-form animated-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <ForgetPasswordForm />
            <Form.Item className="login-button-wrapper">
              <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button animated-button" 
                size="large"
                loading={isLoading}
              >
                {translate('Request new Password')}
              </Button>
            </Form.Item>
            <div className="login-links">
              <Text className="link-text">
                {translate('Or')} <Link to="/login" className="animated-link"> {translate('Back to Login')} </Link>
              </Text>
            </div>
          </Form>
        </div>
      </Loading>
    );
  };
  
  const SuccessContent = () => (
    <div className={`login-form-wrapper ${formVisible ? 'visible' : ''}`}>
      <Link to="/" className="back-button">
        <ArrowLeftOutlined /> Back to Home
      </Link>
      <div className="login-header">
        <Title level={2} className="login-title">
          <span className="title-gradient">Check Your Email</span>
        </Title>
      </div>
      <Result
        status="success"
        title={translate('Check your email address to reset your password')}
        subTitle={translate('Password Reset in progress')}
        className="success-result"
        extra={
          <Button
            type="primary"
            className="animated-button"
            onClick={() => {
              navigate(`/login`);
            }}
          >
            {translate('Login')}
          </Button>
        }
      />
    </div>
  );

  return (
    <div className="login-page-container">
      <AnimatedBackground />
      {!isSuccess ? (
        <AuthModule authContent={<FormContainer />} AUTH_TITLE="Forget Password" />
      ) : (
        <AuthModule authContent={<SuccessContent />} AUTH_TITLE="Success" />
      )}
    </div>
  );
};

export default ForgetPassword;
