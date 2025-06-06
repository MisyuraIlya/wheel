interface IFetchDataProps {
    entrypoint: string;
    path: string;
    query?: object;
    options?: RequestInit;
    disableClient?: boolean;

}

interface IHost {
    protocol: Protocol;
    domain: string;
}