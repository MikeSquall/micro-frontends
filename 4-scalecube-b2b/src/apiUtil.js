const classes = {};

export const createApi = (cls) => {
    let methods = {};
    Object.getOwnPropertyNames(cls.prototype).map((method) => {
        if( method !== 'constructor' ) {
            const $type = cls.prototype[method]();
            if( $type !== 'Promise' &&
                $type !== 'Observable' ) {
                return console.error(
                    Error(`Service method type must be Promise or Observable, given: ${$type}`));
            }
            methods[method] = {
                type: $type
            }
        }
    })
    Object.defineProperty(cls, 'meta', {
        value: {
            type: 'class',
            methods: methods
        }
    });
    classes[cls.name] = cls;
}

export const decorateClass = (cls) => {
    if( typeof cls !== 'function' ||
        cls.name === undefined ){
        return console.error(Error('Not a class, only class can be decorated'));
    }
    if( classes[cls.name] === undefined ) {
        return console.error(Error('API not found, please define your API first'));
    }
    Object.defineProperty(cls, 'meta', {
        value: classes[cls.name].meta
    });
}