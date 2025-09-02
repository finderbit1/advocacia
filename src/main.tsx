import { createRoot } from 'react-dom/client'
import { StrictMode, lazy, Suspense } from 'react'
import App from './App.tsx'
import './index.css'

// Lazy loading para componentes pesados
const LazyApp = lazy(() => import('./App.tsx'))

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/90">
        <div className="text-center text-primary-foreground">
          <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Carregando...</h2>
          <p className="text-primary-foreground/80">Preparando sua experiência jurídica</p>
        </div>
      </div>
    }>
      <App />
    </Suspense>
  </StrictMode>
);
