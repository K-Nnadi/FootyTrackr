import {applyDecorators, Controller, Injectable} from '@nestjs/common';
import {ApiBearerAuth, ApiTags, ApiUnauthorizedResponse} from "@nestjs/swagger";

export function AuthedController(tagAndPrefix: string) {
	return applyDecorators(
		Injectable(),
		ApiBearerAuth(),
		ApiUnauthorizedResponse({ description: 'Unauthorized' }),
		ApiTags(tagAndPrefix?.replace('/', '-')),
		Controller(tagAndPrefix)
	);
}

export function NoAuthController(tagAndPrefix: string) {
	return applyDecorators(
		Injectable(),
		ApiTags(tagAndPrefix?.replace('/', '-')),
		Controller(tagAndPrefix),
	);
}
