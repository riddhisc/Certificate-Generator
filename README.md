# Certificate Generator

This project is a **Certificate Generator** built using **React.js**. It allows users to create and customize certificates by entering details such as the recipient's name, course name, completion date, and certificate ID. Users can also upload a logo and download the generated certificate as a PNG file.

## Features

- 🎨 **User-Friendly Interface:** Intuitive UI for easy certificate creation.
- 📤 **Logo Upload:** Upload a custom logo to personalize the certificate.
- 📝 **Customizable Fields:** Enter recipient name, course name, completion date, and certificate ID.
- 📥 **Download Certificate:** Export the certificate as a PNG image.

## Technologies Used

- **React.js**: For the frontend framework.
- **Tailwind CSS**: For styling and layout.
- **html2canvas**: For converting the certificate to a downloadable PNG.
- **Lucide React**: For icons used in buttons and file upload sections.

## Project Structure

```
📦 Certificate Generator
├── 📂 src
│   ├── 📂 components
│   │   ├── 📂 ui
│   │   │   ├── card.js
│   │   │   ├── input.js
│   │   │   └── button.js
│   │   └── CertificateEditor.js
│   └── App.js
├── 📄 package.json
├── 📄 README.md
└── 📄 index.html
```

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/certificate-generator.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd certificate-generator
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the application:**
   ```bash
   npm start
   ```

5. **Open the app in your browser:**
   ```
http://localhost:3000
```

## How to Use

1. Upload a logo using the **Upload Logo** section.
2. Fill in the certificate details (Recipient Name, Course Name, Completion Date, Certificate ID).
3. Preview the certificate on the right side.
4. Click the **Download Certificate** button to export the certificate as a PNG file.

## Customization

- **Colors:** Modify the colors and gradients in the `Tailwind CSS` classes.
- **Styling:** Customize the `Card`, `Button`, and `Input` components in the `components/ui` directory.

## Dependencies

- `react`
- `html2canvas`
- `lucide-react`
- `tailwindcss`

## Contributing

Contributions are welcome! Feel free to submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

