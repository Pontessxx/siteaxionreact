import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';

function ContactForm() {
  const { handleSubmit, control, setValue, getValues } = useForm();

  const onSubmit = (data) => {
    // Lógica de envio do formulário aqui
    console.log(data);

    // Salvar os dados no localStorage
    localStorage.setItem('formData', JSON.stringify(data));
  };

  useEffect(() => {
    // Carregar os dados do localStorage quando o componente for montado
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      const parsedData = JSON.parse(savedFormData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  return (
    <div className="column right">
      <div className="text">Mensagem</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fields">
          <div className="field name">
            <Controller
              name="nome"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Nome"
                  {...field}
                />
              )}
            />
          </div>
          <div className="field email">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type="email"
                  placeholder="Email"
                  {...field}
                />
              )}
            />
          </div>
        </div>
        <div className="field">
          <div className="field textarea">
            <Controller
              name="mensagem"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Escrever...."
                  {...field}
                />
              )}
            />
          </div>
          <div className="button">
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
