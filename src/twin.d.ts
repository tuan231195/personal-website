import 'twin.macro';
import styledComponent from '@emotion/styled';
import { css as cssProperty } from '@emotion/core';

declare module 'twin.macro' {
	export const css: typeof cssProperty;
	export const styled: typeof styledComponent;
}
