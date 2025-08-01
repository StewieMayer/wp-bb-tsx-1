const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // Import the path module to handle file paths

module.exports = {
    mode: 'development', // Set the mode to development for easier debugging
    entry: './src/index.tsx', // Entry point for the application
    output: {
        filename: 'bundle.js', // Output filename for the bundled code
        path: path.resolve(__dirname, 'dist'), // Output directory for the bundled code
        clean: true, // Clean the output directory before each build
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // Resolve these file extensions
    },
    module:{
        rules:[
            {
                test: /\.(ts|tsx)$/, // Test for TypeScript and TSX files
                use: 'ts-loader', // Use ts-loader to transpile TypeScript files
                exclude: /node_modules/, // Exclude node_modules directory 
            },
        ], // Array to hold module rules, a rule is an object with properties for test, use, and exclude a module
    },
    devtool: 'source-map', // Generate source maps for easier debugging ts and tsx files on navigator
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Template HTML file to use
        })
    ],
    devServer: {
        static: './dist', // Serve static files from the dist directory
        port: 3000, // Set the port for the development server
        open: true, // Automatically open the browser when the server starts
        hot: true, // Enable Hot Module Replacement for live updates
    }
}

