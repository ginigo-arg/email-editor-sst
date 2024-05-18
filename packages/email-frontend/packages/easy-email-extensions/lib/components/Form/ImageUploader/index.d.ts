import React from 'react';
import { UploaderServer } from '../../../AttributePanel/utils/Uploader';
export type MediaBrowserRef = {
    value: string | undefined;
    target: string | undefined;
    showModal: () => void;
    setValue: (val: string | undefined) => void;
    setTarget: (target: string) => void;
};
export interface ImageUploaderProps {
    onChange: (val: string) => void;
    value: string;
    label: string;
    uploadHandler?: UploaderServer;
    autoCompleteOptions?: Array<{
        value: string;
        label: React.ReactNode;
    }>;
    mediaLibraryRef?: MediaBrowserRef;
    name: string;
}
export declare function ImageUploader(props: ImageUploaderProps): React.JSX.Element;
