import React, { useState } from "react";

import * as S from "./styles";
import * as Yup from "yup";

import { Input } from "@components/forms/Input";
import { TextArea } from "@components/forms/TextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { IGeralSubmitDTO } from "../..";
import { ControlledInput } from "@components/controlled/ControlledInput";
import { ControlledTextArea } from "@components/controlled/ControlledTextArea";
import { ControlledSelect } from "@components/controlled/ControlledSelect";
import { Keyboard } from "@components/Keyboard";
import { addHours, format, formatISO, parse } from "date-fns";
import MaskInput, { Masks } from "react-native-mask-input";
import { ControlledInputMask } from "@components/controlled/ControlledInputMask";
import { Button } from "@components/forms/Button";

type ITypeEventProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const schema = Yup.object().shape({
	title: Yup.string().required(),
	init_date: Yup.string().required(),
	end_date: Yup.string().required(),
	init_hour: Yup.string().required(),
	end_hour: Yup.string().required(),
	location: Yup.string().required(),
	description: Yup.string().required(),
});


type FormData = Yup.InferType<typeof schema>;

export function TypeEvent({ onGlobalSubmit }: ITypeEventProps) {
	const [showButtonSubmit, setShowButtonSubmit] = useState(false);

	const { control, handleSubmit } = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			init_date: format(new Date(), "dd/MM/yyyy"),
			end_date: format(new Date(), "dd/MM/yyyy"),
			init_hour: format(new Date(), "HH:mm"),
			end_hour: format(new Date(), "HH:mm"),
		},
	});

  function convertToUTC(initDate: string, initHour: string) {
    const dateTimeString = `${initDate} ${initHour}`;

    const eventDate = parse(dateTimeString, "dd/MM/yyyy HH:mm", new Date());

    const eventDateUTC = addHours(eventDate, 3);

    const utcDateString = format(eventDateUTC, "yyyyMMdd'T'HHmmss'Z'");

    return utcDateString;
  }

  function generateVCard({
    title,
    end_date,
    end_hour,
    init_date,
    init_hour,
    location,
    description,
	}: FormData) {
    let vCard = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:waveqr\n";

    if(title) {
      vCard += `SUMMARY:${title}\n`;
    }

    if(init_date) {
      vCard += `DTSTART:${convertToUTC(init_date, init_hour)}\n`;
    }

    if(end_date) {
      vCard += `DTEND:${convertToUTC(end_date, end_hour)}\n`;
    }

    if(location) {
      vCard += `LOCATION:${location}\n`;
    }
    
    if(description) {
      vCard += `DESCRIPTION:${description}\n`;
    }

	  // Finalizar o vCard
    vCard += "END:VEVENT";
		return vCard;
	}

  const onSubmit = (data: FormData) => {
    const emv = generateVCard(data);
    
		onGlobalSubmit({
			emv: emv,
		});
	};

	return (
		<S.Container>
			<Keyboard>
				<S.Title>Evento</S.Title>

				<S.Line>
					<ControlledInput
						control={control}
						name="title"
						placeholder="Digite o título *"
					/>
				</S.Line>

				<S.Line>
					<ControlledInputMask
						control={control}
						name="init_date"
						mask={Masks.DATE_DDMMYYYY}
						keyboardType="decimal-pad"
					/>

					<ControlledInputMask
						control={control}
						name="end_date"
						mask={Masks.DATE_DDMMYYYY}
						keyboardType="decimal-pad"
					/>
				</S.Line>

				<S.Line>
					<ControlledInputMask
						control={control}
						name="init_hour"
						mask={[/\d/, /\d/, ":", /\d/, /\d/]}
						keyboardType="decimal-pad"
					/>

					<ControlledInputMask
						control={control}
						name="end_hour"
						mask={[/\d/, /\d/, ":", /\d/, /\d/]}
						keyboardType="decimal-pad"
					/>
				</S.Line>

				<S.Line>
					<ControlledInput
						control={control}
						name="location"
						placeholder="Digite localização"
					/>
				</S.Line>

				<S.Line>
					<ControlledTextArea
						control={control}
						name="description"
						placeholder="Digite a descrição"
					/>
				</S.Line>

        <Button label="Gerar" onPress={handleSubmit(onSubmit)} />
			</Keyboard>
		</S.Container>
	);
} 
