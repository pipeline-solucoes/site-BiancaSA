'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { ButtonFormStyled, TextFieldFixedSizeStyled, TextFieldStyled } from 'pipesolcomponents';
import { Typography, useTheme } from '@mui/material';

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (widgetId: number) => void;
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
  message_erro,
}) => {
  const tokenBearer = 'token-render-prod';
  const siteKeyRecaptcha = '6LfNNjQrAAAAAJdYsNsPL8RFXM6krfURGLX9Ze98';
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
  const widgetIdRef = useRef<number | null>(null);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validateTelefone = (telefone: string) => /^\d{2}\d{9}$/.test(telefone);

  const handleBlur = (field: string) => {
    switch (field) {
      case 'email':
        setErrors((prev) => ({ ...prev, email: !validateEmail(email) }));
        break;
      case 'telefone':
        setErrors((prev) => ({ ...prev, telefone: !validateTelefone(telefone) }));
        break;
      default:
        setErrors((prev) => ({ ...prev, [field]: !Boolean(eval(field)) }));
        break;
    }
  };

  const handleToken = useCallback(
    async (token: string) => {
      try {
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('mensagem', mensagem);
        formData.append('captcha_token', token);

        const response = await fetch('https://backend-sites-pipelinesolucoes.onrender.com/send-email', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${tokenBearer}`,
          },
          body: formData,
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
          setMensagemApi(message_erro ?? 'Erro ao enviar. Tente novamente mais tarde.');
        }
      } catch (error) {
        setCorMensagemApi(color_message_erro);
        setMensagemApi(message_erro ?? 'Erro inesperado ao enviar. Tente novamente.');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [nome, email, telefone, mensagem, tokenBearer, message_sucess, message_erro, theme.palette.success.main, color_message_erro]
  );

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          widgetIdRef.current = window.grecaptcha.render('recaptcha-container', {
            sitekey: siteKeyRecaptcha,
            size: 'invisible',
            callback: handleToken,
          });
        });
      }
    };
  }, [handleToken]);

  useEffect(() => {
    if (telefoneRef.current) {
      telefoneRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.keys(errors).some((key) => errors[key]);
    if (hasErrors || !window.grecaptcha || widgetIdRef.current === null) {
      setCorMensagemApi(color_message_erro);
      setMensagemApi('Alguns dados estão inválidos. Corrija os campos antes de enviar.');
      return;
    }

    setIsLoading(true);
    window.grecaptcha.execute(widgetIdRef.current);
  };

  return (
    <FormContainer>
      <TextFieldStyled
        id='nome'
        label='Nome'
        placeholder='Nome'
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        onBlur={() => handleBlur('nome')}
        error={errors.nome}
        required
        background_color={background_color}
        text_color={color}
        text_color_error={color_message_erro}
        border_radius={border_radius}
      />
      <TextFieldStyled
        id='email'
        label='Email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        required
        background_color={background_color}
        text_color={color}
        text_color_error={color_message_erro}
        border_radius={border_radius}
      />
      <TextFieldStyled
        id='telefone'
        label='Telefone'
        placeholder='21999999999'
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        onBlur={() => handleBlur('telefone')}
        error={errors.telefone}
        required
        background_color={background_color}
        text_color={color}
        text_color_error={color_message_erro}
        border_radius={border_radius}
        inputRef={telefoneRef}
      />
      <TextFieldFixedSizeStyled
        id='mensagem'
        label='Mensagem'
        placeholder='Mensagem'
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        onBlur={() => handleBlur('mensagem')}
        error={errors.mensagem}
        required
        multiline
        background_color={background_color}
        text_color={color}
        text_color_error={color_message_erro}
        border_radius={border_radius}
      />
      <ButtonFormStyled
        width='100%'
        height='100%'
        onClick={handleSubmit}
        background_color={background_color_button}
        text_color={color_button}
        border_radius={border_radius_button}
        disabled={isLoading}
      >
        {text_button}
      </ButtonFormStyled>

      {mensagemApi && (
        <Typography variant='body1' component='span' color={corMensagemApi}>
          {isLoading ? 'Enviando...' : mensagemApi}
        </Typography>
      )}

      <div id='recaptcha-container' style={{ display: 'none' }}></div>
    </FormContainer>
  );
};

export default FormWithRecaptcha;
