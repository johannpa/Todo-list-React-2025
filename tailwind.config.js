

export default {
    // tailwind.config.js
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
         './index.html',
    ],
    theme: {
      // ...
    },
    plugins: [
      require('@tailwindcss/forms'),
      // ...
    ],
}