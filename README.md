# useStringFormatter
useStringFormatter is custom hook helps in converting string to lowercase, uppercase, camelCase,
pascalCase, snakeCase, kebabCase and trims the extra spaces.

# Usage
- Import the useStringFormatter in your project.
- pass the string as an argument to the useStringFormatter('string')
- useStringFormatter returns the object of functions.
- each functions can be invoked as
  ```
        const stringHandler = useStringFormatter('string');
        stringHandler.lowerCase();
        stringHandler.upperCase();
        stringHandler.camelCase();
        stringHandler.pascalCase();
        stringHandler.snakeCase();
        stringHandler.trim();
  ```

# installation
To use the custom hook install the hook by using 
`npm install useStringFormatter`

# contribute
- Open the pull request
- Provide a clear description about PR
- Test the code base with your changes


