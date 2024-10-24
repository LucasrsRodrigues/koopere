import type { FC } from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type IShowQrCodeParams = {
	id: string;
	emv: string;
	type: string;
};

export type IWebViewParams = {
	url: string;
};

export type IFormQrCodeParams = {
	type: string;
};

export type RouteParams = {
	Dashboard: undefined;
	ListQRCode: undefined;
	CreateQRCode: undefined;
	FormQrCode: IFormQrCodeParams;
	ShowQrCode: IShowQrCodeParams;
	WebView: IWebViewParams;
};

export type RouteComponent = FC<NativeStackScreenProps<RouteParams>>;
