'use client';

import React, { useRef, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { ButtonFormStyled, TextFieldFixedSizeStyled, TextFieldStyled } from 'pipesolcomponents';
import { Typography, useTheme } from '@mui/material';

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          size?: 'invisible' | 'normal' | 'compact';
          callback?: (token: string) => void;
        }
      ) => number;
    };
  }
}

const FormContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  margin: 'auto',
  padding: '0px',
}));

interface FormWithRecaptchaProps {
  color: string;
  background_color?: string;
  border_radius?: string;
  color_button: string;
  background_color_button?: string;
  border_radius_button?: string;
  text_button: string;
  message_sucess: string;
  message_erro?: string;
}

const FormWithRecaptcha: React.FC<FormWithRecaptchaProps> = ({
  color,
  background_color = 'transparent',
  border_radius = '0px',
  color_button,
  background_color_button = 'transparent',
  border_radius_button = '0px',
  text_button,
  message_sucess,
  message_erro
}) => {
  const tokenBearer = "token-render-prod";
  const siteKeyRecaptcha = "6LfNNjQrAAAAAJdYsNsPL8RFXM6krfURGLX9Ze98";
  const theme = useTheme();
  const color_message_erro = theme.palette.error.main;

  const [mensagemApi, setMensagemApi] = useState('');
  const [corMensagemApi, setCorMensagemApi] = useState(color_message_erro);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);
  const telefoneRef = useRef<HTMLInputElement>(null);

  // Carrega o script do reCAPTCHA e renderiza invisível
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render('recaptcha-container', {
            sitekey: siteKeyRecaptcha,
            size: 'invisible',
            callback: () => {}
          });
        });
      }
    };
  }, []);

  useEffect(() => {
    if (telefoneRef.current) {
      telefoneRef.current.focus();
    }
  }, []);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validateTelefone = (telefone: string) => /^\d{2}\d{9}$/.test(telefone);

  const handleBlur = (field: string) => {
    switch (field) {
      case 'email':
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: !validateEmail(email),
        }));
        break;
      case 'telefone':
        setErrors((prevErrors) => ({
          ...prevErrors,
          telefone: !validateTelefone(telefone),
        }));
        break;
      default:
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: !Boolean(eval(field)),
        }));
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.keys(errors).some((key) => errors[key]);
    const messageError = message_erro ?? 'Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.';

    if (!hasErrors && window.grecaptcha) {
      setIsLoading(true);
      try {
        const token = await window.grecaptcha.execute(siteKeyRecaptcha, { action: 'submit' });

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('mensagem', mensagem);
        formData.append('captcha_token', token);

        const response = await fetch('https://backend-sites-pipelinesolucoes.onrender.com/send-email', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${tokenBearer}`
          },
          body: formData
        });

        if (response.status === 200) {
          setCorMensagemApi(theme.palette.success.main);
          setMensagemApi(message_sucess);
          setNome('');
          setEmail('');
          setTelefone('');
          setMensagem('');
        } else {
          setCorMensagemApi(color_message_erro);
          setMensagemApi(messageError);
          console.log('Erro ao enviar dados:', response.statusText);
        }
      } catch (error) {
        setCorMensagemApi(color_message_erro);
        setMensagemApi(messageError);
        console.log('Erro na solicitação:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setCorMensagemApi(color_message_erro);
      setMensagemApi('Alguns dados estão inválidos. Corrija os campos antes de enviar.');
    }
  };

  return (
    <>
      <FormContainer>
        {/* Seus inputs aqui... */}
        <TextFieldStyled id='nome' label="Nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} onBlur={() => handleBlur('nome')} error={errors.nome} required={true} background_color={background_color} text_color={color} text_color_error={color_message_erro} border_radius={border_radius} />
        <TextFieldStyled id='email' label="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleBlur('email')} error={errors.email} required={true} background_color={background_color} text_color={color} text_color_error={color_message_erro} border_radius={border_radius} />
        <TextFieldStyled id='telefone' label="Telefone" placeholder="21999999999" value={telefone} onChange={(e) => setTelefone(e.target.value)} onBlur={() => handleBlur('telefone')} error={errors.telefone} required={true} background_color={background_color} text_color={color} text_color_error={color_message_erro} border_radius={border_radius} />
        <TextFieldFixedSizeStyled id='mensagem' label="Mensagem" placeholder="Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} onBlur={() => handleBlur('mensagem')} error={errors.mensagem} required={true} multiline background_color={background_color} text_color={color} text_color_error={color_message_erro} border_radius={border_radius} />
        
        <ButtonFormStyled width='100%' height='100%' onClick={handleSubmit} background_color={background_color_button} text_color={color_button} border_radius={border_radius_button} disabled={isLoading}>
          {text_button}
        </ButtonFormStyled>

        {mensagemApi && <Typography variant='body1' component='span' color={corMensagemApi}>{isLoading ? 'Enviando...' : mensagemApi}</Typography>}
        
        {/* Container invisível para o reCAPTCHA */}
        <div id="recaptcha-container" style={{ display: 'none' }}></div>
      </FormContainer>
    </>
  );
};

export default FormWithRecaptcha;
