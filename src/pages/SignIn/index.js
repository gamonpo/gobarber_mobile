import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-adress"
            autoCorrect={false}
            autoCapitaliza="none"
            placeholder="Email"
          />

          <FormInput icon="lock-outline" secureTextEntry placeholder="Senha" />

          <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}