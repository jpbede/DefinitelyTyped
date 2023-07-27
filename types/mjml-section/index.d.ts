// Type definitions for mjml-section 4.14
// Project: https://mjml.io
// Definitions by: Jan-Philipp Benecke <https://github.com/jpbede>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BodyComponent } from 'mjml-core';

/**
 * Options passed as an object to the mjml2html function
 *
 * https://documentation.mjml.io/#inside-node-js
 */
declare abstract class MjSection extends BodyComponent {
    getBackground(): any;

    getBackgroundString(): string;

    getBackgroundPosition(): any;

    parseBackgroundPosition(): any;

    hasBackground(): boolean;

    isFullWidth(): boolean;

    renderBefore(): string;

    renderAfter(): string;

    renderWrappedChildren(): string;

    renderWithBackground(content: any): string;

    renderSection(): string;

    renderFullWidth(): string;

    renderSimple(): string;
}

export = MjSection;
