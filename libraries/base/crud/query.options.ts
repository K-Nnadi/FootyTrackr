import {IParseOptions} from "qs";

export const QS_OPTIONS: IParseOptions = {
	ignoreQueryPrefix: true,
	parseArrays: true,
	decoder(str: string, decoder: any, charset: string) {
		const strWithoutPlus = str.replace(/\+/g, ' ');
		if (charset === 'iso-8859-1') {
			// unescape never throws, no try...catch needed:
			return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
		}

		if (/^(\d+|\d*\.\d+)$/.test(str)) {
			return parseFloat(str)
		}

		const keywords = {
			true: true,
			false: false,
			null: null,
			undefined,
		};
		if (str in keywords) {
			// @ts-ignore
			return keywords[str]
		}

		// utf-8
		try {
			return decodeURIComponent(strWithoutPlus);
		} catch (e) {
			return strWithoutPlus;
		}
	}
}
