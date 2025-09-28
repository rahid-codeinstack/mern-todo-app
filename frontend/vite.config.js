import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { HttpProxy } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment:'jsdom',
    setupFiles:'./src/setuptests.js',
    include: ['src/**/*.test.{js,jsx}'],
  }
  ,
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        changeOrigin:true,
        secure:false,
        method:['POST','GET','DELETE','PATCH','PUT']
      }
    }
  }
})
