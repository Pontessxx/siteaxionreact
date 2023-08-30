import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSignup = async () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    try {
      if (selectedImage) {
        const base64Image = await convertImageToBase64(selectedImage);

        localStorage.setItem('userImage', base64Image);
      }

      const res = signup(email, senha);

      if (res) {
        setError(res);
        return;
      }

      const generateUserId = () => {
        return Math.random().toString(36).substring(2, 10);
      };

      const userId = generateUserId();

      sessionStorage.setItem(userId, JSON.stringify({ email, senha }));
      localStorage.setItem("currentUserId", userId);
      alert("Usuário cadastrado com sucesso!");
      navigate(`/userpage`);
    } catch (error) {
      console.error('Erro ao salvar a imagem:', error);
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]); // Remova o prefixo "data:image/jpeg;base64,"
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
       {/*  {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            style={{ maxWidth: '200px' }}
          />
        )}
        <Input type='file' accept='image/*' onChange={handleFileUpload} /> */}
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/signin">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;
