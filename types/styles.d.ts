declare module '*.module.css' {
    interface Styles {
        [name: string]: string;
    }
    const styles: Styles;
    export = styles;
}
