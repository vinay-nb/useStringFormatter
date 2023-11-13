# useStringFormatter
useStringFormatter is custom hook helps in converting string to lowercase, uppercase, camelCase,
pascalCase, snakeCase, kebabCase and trim.

# Usage
- Import the useStringFormatter in your project.
- pass the string as an argument to the useStringFormatter('string')
- useStringFormatter returns the object of functions.
- each functions can be invoked as 
    `
        const stringHandler = useStringFormatter('string');
        stringHandler.lowerCase();
        stringHandler.upperCase();
        stringHandler.camelCase();
        stringHandler.pascalCase();
        stringHandler.snakeCase();
        stringHandler.trim();
    `

# installation
To use the custom hook install the hook by using 
~npm install useStringFormatter~


