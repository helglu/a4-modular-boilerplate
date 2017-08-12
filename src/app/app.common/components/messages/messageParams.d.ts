interface MessageParams {
    id?: number;
    type: string;
    timeout?: number;
    message: string;
    variables?: any;
    dismissible?: boolean;
    dismissOnTimeout?: number | string;
}
