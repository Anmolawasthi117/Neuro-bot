import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native-web/dist/apis/StyleSheet/registry': 'react-native-web',
    },
  },
});