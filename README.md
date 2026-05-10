# 🏥 Telecare AI - Sign In UI

> A beautiful, responsive mobile authentication interface built with React Native and Expo following modern design principles.

<div align="center">

![Expo SDK 55](https://img.shields.io/badge/Expo-SDK%2055-black?style=flat-square&logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.83.6-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-3178c6?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>

---

## 📱 Preview

<div align="center">
   <img src="./assets/images/sign-in-preview.png" alt="Sign In Screen" width="280" />
</div>

### ✨ MacBook Desktop View

```
┌─────────────────────────────────────────────────────────┐
│ 🔴 🟡 🟢   Sign In - Telecare AI                    ⚙️  │
├─────────────────────────────────────────────────────────┤
│                                                           │
│                       🏥 Logo                            │
│                                                           │
│                     Sign In                              │
│            Let's experience the joy of                   │
│              telecare AI.                                │
│                                                           │
│     Email Address                                        │
│     ┌─────────────────────────────────────────┐          │
│     │ ✉️ elementary221b@gmail.com              │          │
│     └─────────────────────────────────────────┘          │
│                                                           │
│     Password                                             │
│     ┌─────────────────────────────────────────┐          │
│     │ 🔒 Enter your password...            👁️ │          │
│     └─────────────────────────────────────────┘          │
│                                                           │
│     ┌─────────────────────────────────────────┐          │
│     │   Sign In  →                            │          │
│     └─────────────────────────────────────────┘          │
│                                                           │
│              or                                          │
│                                                           │
│        👍  🔍  📷                                        │
│                                                           │
│    Don't have an account? Sign Up                        │
│    Forgot your password?                                 │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Features

✅ **Responsive Mobile Design** - Optimized for all mobile screen sizes  
✅ **Email Input** - Pre-filled with validation icon  
✅ **Password Input** - Secure input with show/hide toggle  
✅ **Sign In Button** - Green accent with arrow indicator and shadow effect  
✅ **Social Login** - Facebook, Google, and Instagram integration buttons  
✅ **Footer Actions** - Sign Up and Forgot Password links  
✅ **Focus States** - Visual feedback on input field interactions  
✅ **TypeScript Support** - Fully typed codebase  
✅ **Clean Code** - Using only core React Native components  
✅ **Accessibility** - Proper touch targets and semantic structure

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Expo** | 55.0.0 | Development platform & tooling |
| **React Native** | 0.83.6 | Core mobile framework |
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5.9.2 | Type safety |
| **Expo Icons** | 15.0.3 | Material Community Icons |

### Additional Libraries

```json
{
   "@expo/vector-icons": "^15.0.3",
   "@react-navigation/bottom-tabs": "^7.4.0",
   "@react-navigation/native": "^7.1.8",
   "expo-router": "~55.0.14",
   "expo-status-bar": "~55.0.6",
   "react-native-safe-area-context": "~5.6.0"
}
```

---

## 📋 Project Structure

```
my-app/
├── app/
│   ├── _layout.tsx          # App layout configuration
│   └── index.tsx            # Sign In screen (main)
├── assets/
│   ├── images/              # App icons and images
│   └── fonts/               # Custom fonts (if any)
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
├── app.json                 # Expo configuration
├── eslint.config.js         # ESLint rules
└── README.md                # This file
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI (optional)

### Installation

1. **Clone/Navigate to project**
```bash
cd my-app
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start the development server**
```bash
npm start
```

### Run on Device

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

---

## 🎨 UI Components

### Logo Section
- Green badge (`#7FCA3F`) with rounded corners
- Plus symbol icon center-aligned
- Responsive sizing

### Input Fields
- Email input with email icon
- Password input with lock icon & toggle visibility
- Focus states with green border highlight
- Proper spacing and padding

### Buttons
- **Sign In**: Green background with arrow, shadow effect
- **Social Buttons**: Circular, bordered with brand colors
   - Facebook: #1877F2
   - Google: #EA4335
   - Instagram: #E1306C

### Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Heading | 32px | 700 | #1A1A1A |
| Subheading | 14px | 400 | #888888 |
| Labels | 13px | 600 | #1A1A1A |
| Body Text | 14px | 400 | #666666 |

### Color Palette

```
Primary Green: #7FCA3F
Dark Text: #1A1A1A
Light Gray: #888888
Border: #E5E5E5
Background: #FFFFFF
Input BG: #FAFAFA
Focus BG: #F9FFEF
```

---

## 📝 Key Features Implementation

### Email Input with Focus State
```tsx
const [emailFocused, setEmailFocused] = useState(false);

<View style={[
   styles.inputContainer,
   emailFocused && styles.inputContainerFocused
]}>
   {/* Input field */}
</View>
```

### Password Toggle Visibility
```tsx
const [showPassword, setShowPassword] = useState(false);

<TextInput
   secureTextEntry={!showPassword}
   // ...
/>
```

### Social Login Buttons
```tsx
<TouchableOpacity
   style={styles.socialButton}
   onPress={() => console.log("Facebook sign in")}
>
   <MaterialCommunityIcons name="facebook" size={24} />
</TouchableOpacity>
```

---

## 🔧 Configuration

### app.json (Expo Configuration)
```json
{
   "expo": {
      "name": "my-app",
      "slug": "my-app",
      "version": "1.0.0",
      "orientation": "portrait",
      "newArchEnabled": true,
      "experiments": {
         "typedRoutes": true,
         "reactCompiler": true
      }
   }
}
```

### TypeScript (tsconfig.json)
- Target: ES2020
- Module: ESNext
- JSX: React-JSX
- Strict mode enabled

### ESLint Rules
- expo config active
- TypeScript support
- React best practices
- No unused variables/imports

---

## 🧪 Testing

### Lint Check
```bash
npm run lint
```

### Build for Production
```bash
expo build
```

---

## 📦 APK/IPA Generation

### Build Android APK
```bash
eas build --platform android
```

### Build iOS IPA
```bash
eas build --platform ios
```

---

## 🎯 Design Specifications

**Framework**: React Native  
**UI Approach**: Core components only (No external UI libraries)  
**Screen Orientation**: Portrait  
**Min SDK**: Android API 24  
**Target SDK**: Android API 34  
**iOS Deployment Target**: 13.0+

---

## ✅ Code Quality

- **Zero TypeScript Errors** ✓
- **ESLint Compliant** ✓
- **No Unused Imports** ✓
- **Proper Code Formatting** ✓
- **Escaped HTML Entities** ✓

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Mobile Authentication UI** - Sign In Screen Implementation  
Built with ❤️ using React Native & Expo

---

## 🔗 Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Dribbble Design Reference](https://dribbble.com/shots/24783022-osler-AI-Telehealth-Telemedicine-App-Sign-In-Sign-Up-UI)
- [Material Community Icons](https://pictogrammers.com/library/mdi/)

---

## 📊 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | May 10, 2026 | Initial Sign In UI implementation |

---

## 🐛 Known Issues & Roadmap

### Current Version ✅
- [x] Sign In screen UI
- [x] Email/Password inputs
- [x] Social login buttons
- [x] TypeScript support
- [x] Responsive design

### Future Enhancements 🚀
- [ ] Sign Up screen
- [ ] Forgot Password flow
- [ ] Email verification
- [ ] Password reset
- [ ] Two-factor authentication
- [ ] Social login integration
- [ ] App navigation/routing
- [ ] Dark mode support

---

## 💡 Tips & Best Practices

1. **Always test on physical devices** - Emulator behavior may differ
2. **Use SafeAreaView** - Handle notches and safe areas properly
3. **Optimize images** - Use responsive images for different screen sizes
4. **Handle keyboard** - Test with keyboard open/closed
5. **Test on multiple SDK versions** - Ensure compatibility

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review TypeScript types for API details

---

<div align="center">

### Made with 💚 using React Native & Expo SDK 55

![React Native](https://img.shields.io/badge/-React%20Native-61dafb?style=flat&logo=react&logoColor=white)
![Expo](https://img.shields.io/badge/-Expo-000?style=flat&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178c6?style=flat&logo=typescript&logoColor=white)

**Build beautiful mobile apps with clean code!** 🚀

</div>
