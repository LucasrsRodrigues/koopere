import React, { useEffect, useState } from "react";

import * as S from "./styles";
import { TextArea } from "@components/forms/TextArea";
import type { IGeralSubmitDTO } from "../..";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@components/forms/Button";
import * as Clipboard from 'expo-clipboard';
import { ControlledTextArea } from "@components/controlled/ControlledTextArea";
import { Keyboard } from "@components/Keyboard";


type ITypeCopyProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const schema = Yup.object().shape({
	text: Yup.string().required(),
});

type FormData = Yup.InferType<typeof schema>;


export function TypeCopy({ onGlobalSubmit }: ITypeCopyProps) {
  const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { 
    control, 
    handleSubmit,
    setValue
  } = useForm({
		resolver: yupResolver(schema),
	});

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();

    setValue("text",text)
  };

	const onSubmit = (data: FormData) => {
		onGlobalSubmit({
			emv: data.text,
		});
	};

  useEffect(() => {
    fetchCopiedText();
  }, []);

	return (
		<S.Container>
      <Keyboard>

			<S.Title>Cópia da área de transferência</S.Title>

			<S.Line>
        <ControlledTextArea 
          control={control}
          name="text"
          placeholder="O texto será auto colado aqui"
          onBlur={() => setShowButtonSubmit(true)}
        />
			</S.Line>

      {showButtonSubmit && (
        <Button label="Gerar" onPress={handleSubmit(onSubmit)} />
      )}
      </Keyboard>
		</S.Container>
	);
}
