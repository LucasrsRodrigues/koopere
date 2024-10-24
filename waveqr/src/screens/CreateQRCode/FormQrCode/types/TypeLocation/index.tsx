import React, { useEffect, useRef, useState } from "react";
import { Input } from "@components/forms/Input";
import MapView, { Marker } from "react-native-maps";
import * as S from "./styles";

import * as Location from "expo-location";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import type { IGeralSubmitDTO } from "../..";
import { ControlledInput } from "@components/controlled/ControlledInput";
import { Button } from "@components/forms/Button";

type ITypeLocationProps = {
	onGlobalSubmit: (data: IGeralSubmitDTO) => void;
};

const schema = Yup.object().shape({
	latitude: Yup.string().required(),
	longitude: Yup.string().required(),
});

type FormData = Yup.InferType<typeof schema>;

export function TypeLocation({ onGlobalSubmit }: ITypeLocationProps) {
  const mapRef = useRef<MapView>(null);

	const [location, setLocation] = useState({} as Location.LocationObject);
	const [errorMsg, setErrorMsg] = useState("");

	const { control, handleSubmit, setValue } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		onGlobalSubmit({
			emv: `geo:${data.latitude},${data.longitude}`,
		});
	};

  async function requestLocationPermissions() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    		
    if (status !== "granted") {
    			setErrorMsg("Permission to access location was denied");
    			return;
    		}

    		const location = await Location.getCurrentPositionAsync({});
    		setValue("latitude", String(location?.coords?.latitude));
    		setValue("longitude", String(location?.coords?.longitude));
    		setLocation(location);

  }

  useEffect(() => {
    requestLocationPermissions();
  } ,[]);

  useEffect(() => {
    Location.watchPositionAsync({
      accuracy: Location.LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {
      setLocation(response);
    });
  }, []);

	return (
		<S.Container>
			<S.Title>Localização</S.Title>

			<S.Line>
				<ControlledInput
					control={control}
					name="latitude"
					placeholder="Digite latitude *"
				/>
			</S.Line>

			<S.Line>
				<ControlledInput
					control={control}
					name="longitude"
					placeholder="Digite longitude *"
				/>
			</S.Line>

			<S.WrapperMap>
				<MapView
          ref={mapRef}
					initialRegion={{
						latitude: -23.5504533,
						longitude: -46.6339112,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
          region={{
            latitude: location?.coords?.latitude,
						longitude: location?.coords?.longitude,
						latitudeDelta: 0.005,
						longitudeDelta: 0.005,
          }}
					style={{
						width: "100%",
						height: "100%",
					}}
				>
          <Marker 
            coordinate={{
              latitude: location?.coords?.latitude,
              longitude: location?.coords?.longitude,
            }}
          />
        </MapView>
			</S.WrapperMap>

      <Button label="Gerar" onPress={handleSubmit(onSubmit)} />
		</S.Container>
	);
}
