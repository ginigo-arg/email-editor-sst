import { RecursivePartial } from '../typings';
import React from 'react';
import { IAccordionElement } from '../blocks';
import { MjmlBlockProps } from '../components/MjmlBlock';
export type AccordionElementProps = RecursivePartial<IAccordionElement['data']> & RecursivePartial<IAccordionElement['attributes']> & {
    children?: MjmlBlockProps<IAccordionElement>['children'];
};
export declare function AccordionElement(props: AccordionElementProps): React.JSX.Element;
